export type HealthCheck = () => unknown | Promise<unknown>;

const checks = new Map<string, HealthCheck>();

export function registerHealthCheck(name: string, check: HealthCheck): void {
  checks.set(name, check);
}

export function unregisterHealthCheck(name: string): void {
  checks.delete(name);
}

export type HealthReport = {
  status: 'ok' | 'error';
  checks?: Record<string, unknown>;
};

export async function runHealthChecks(): Promise<HealthReport> {
  if (checks.size === 0) {
    return { status: 'ok' };
  }

  const entries = await Promise.all(
    Array.from(checks, async ([name, check]) => {
      try {
        return [name, await check(), false] as const;
      } catch (err) {
        const message = err instanceof Error ? err.message : String(err);
        return [name, { error: message }, true] as const;
      }
    })
  );

  const results: Record<string, unknown> = {};
  let failed = false;
  for (const [name, value, isError] of entries) {
    results[name] = value;
    if (isError) failed = true;
  }

  return { status: failed ? 'error' : 'ok', checks: results };
}
