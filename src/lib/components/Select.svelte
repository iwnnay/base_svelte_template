<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { HTMLSelectAttributes } from 'svelte/elements';

  type Props = HTMLSelectAttributes & {
    value?: string | number | null;
    invalid?: boolean;
    children: Snippet;
  };

  let { value = $bindable(''), invalid = false, children, ...rest }: Props = $props();
</script>

<div class="select-wrap" class:invalid>
  <select class="select" bind:value {...rest}>
    {@render children()}
  </select>
  <span class="chevron" aria-hidden="true">
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  </span>
</div>

<style>
  .select-wrap {
    position: relative;
    display: block;
  }
  .select {
    appearance: none;
    -webkit-appearance: none;
    width: 100%;
    padding: 0.55rem 2.25rem 0.55rem 0.75rem;
    font: inherit;
    font-size: var(--font-size-md);
    color: var(--color-text);
    background: var(--color-bg);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-md);
    cursor: pointer;
    transition:
      border-color var(--transition-fast),
      box-shadow var(--transition-fast);
  }
  .select:hover:not(:disabled) {
    border-color: var(--color-border-strong);
  }
  .select:focus {
    outline: none;
    border-color: var(--color-primary);
    box-shadow: 0 0 0 3px var(--color-focus-ring);
  }
  .select:disabled {
    background: var(--color-surface);
    color: var(--color-text-muted);
    cursor: not-allowed;
  }
  .select-wrap.invalid .select {
    border-color: var(--color-danger);
  }
  .chevron {
    position: absolute;
    right: 0.6rem;
    top: 50%;
    transform: translateY(-50%);
    color: var(--color-text-muted);
    pointer-events: none;
  }
</style>
