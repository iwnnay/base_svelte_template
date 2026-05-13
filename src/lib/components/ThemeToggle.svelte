<script lang="ts">
  import { theme } from '$lib/theme.svelte';
</script>

<button
  class="theme-toggle"
  aria-label={theme.resolved === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
  title={theme.resolved === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
  onclick={() => theme.toggle()}
>
  {#if theme.resolved === 'dark'}
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
    </svg>
  {:else}
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  {/if}
</button>

<style>
  .theme-toggle {
    appearance: none;
    background: transparent;
    border: 1px solid var(--color-border);
    border-radius: var(--radius-md);
    width: 36px;
    height: 36px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: var(--color-text);
    transition:
      background-color var(--transition-fast),
      border-color var(--transition-fast);
  }

  .theme-toggle:hover {
    background: var(--color-surface-hover);
    border-color: var(--color-border-strong);
  }
</style>
