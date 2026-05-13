<script lang="ts">
  import type { Snippet } from 'svelte';

  type Variant = 'neutral' | 'primary' | 'success' | 'warning' | 'danger' | 'info';

  type Props = {
    variant?: Variant;
    children: Snippet;
  };

  let { variant = 'neutral', children }: Props = $props();
</script>

<span class="badge badge-{variant}">{@render children()}</span>

<style>
  .badge {
    display: inline-flex;
    align-items: center;
    padding: 0.15rem 0.55rem;
    font-size: var(--font-size-xs);
    font-weight: 600;
    border-radius: var(--radius-full);
    border: 1px solid transparent;
    line-height: 1.4;
  }
  .badge-neutral {
    background: var(--color-surface-2);
    color: var(--color-text-muted);
    border-color: var(--color-border);
  }
  .badge-primary {
    background: var(--color-primary-soft);
    color: var(--color-primary);
  }
  .badge-success {
    background: var(--color-success-soft);
    color: var(--color-success);
  }
  .badge-warning {
    background: var(--color-warning-soft);
    color: var(--color-warning);
  }
  .badge-danger {
    background: var(--color-danger-soft);
    color: var(--color-danger);
  }
  .badge-info {
    background: var(--color-info-soft);
    color: var(--color-info);
  }
</style>
