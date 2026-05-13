import { browser } from '$app/environment';

export type ThemePreference = 'light' | 'dark' | 'system';
export type ResolvedTheme = 'light' | 'dark';

const STORAGE_KEY = 'theme';

function readStored(): ThemePreference {
  if (!browser) return 'system';
  const v = localStorage.getItem(STORAGE_KEY);
  return v === 'light' || v === 'dark' || v === 'system' ? v : 'system';
}

function systemPrefersDark(): boolean {
  return browser && window.matchMedia('(prefers-color-scheme: dark)').matches;
}

function resolve(pref: ThemePreference): ResolvedTheme {
  if (pref === 'system') return systemPrefersDark() ? 'dark' : 'light';
  return pref;
}

function apply(resolved: ResolvedTheme) {
  if (!browser) return;
  document.documentElement.setAttribute('data-theme', resolved);
}

function createTheme() {
  let preference = $state<ThemePreference>(readStored());
  let resolved = $state<ResolvedTheme>(resolve(preference));

  if (browser) {
    apply(resolved);
    // Re-resolve when system preference changes (only if user is on 'system').
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    mq.addEventListener('change', () => {
      if (preference === 'system') {
        resolved = resolve(preference);
        apply(resolved);
      }
    });
  }

  return {
    get preference() {
      return preference;
    },
    get resolved() {
      return resolved;
    },
    set(p: ThemePreference) {
      preference = p;
      resolved = resolve(p);
      if (browser) localStorage.setItem(STORAGE_KEY, p);
      apply(resolved);
    },
    toggle() {
      this.set(resolved === 'dark' ? 'light' : 'dark');
    }
  };
}

export const theme = createTheme();
