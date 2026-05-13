<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { HTMLInputAttributes } from 'svelte/elements';

  type Props = Omit<HTMLInputAttributes, 'type' | 'children'> & {
    checked?: boolean;
    children?: Snippet;
  };

  let { checked = $bindable(false), children, ...rest }: Props = $props();
</script>

<label class="checkbox">
  <input type="checkbox" bind:checked {...rest} />
  <span class="box" aria-hidden="true">
    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="3 8 7 12 13 4" />
    </svg>
  </span>
  {#if children}
    <span class="label-text">{@render children()}</span>
  {/if}
</label>

<style>
  .checkbox {
    display: inline-flex;
    align-items: center;
    gap: var(--space-2);
    cursor: pointer;
    user-select: none;
    color: var(--color-text);
    font-size: var(--font-size-md);
  }
  .checkbox input {
    position: absolute;
    opacity: 0;
    pointer-events: none;
  }
  .box {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 18px;
    height: 18px;
    border: 1px solid var(--color-border-strong);
    border-radius: var(--radius-sm);
    background: var(--color-bg);
    color: transparent;
    flex-shrink: 0;
    transition:
      background-color var(--transition-fast),
      border-color var(--transition-fast),
      color var(--transition-fast);
  }
  .checkbox:hover input:not(:disabled) ~ .box {
    border-color: var(--color-primary);
  }
  .checkbox input:checked ~ .box {
    background: var(--color-primary);
    border-color: var(--color-primary);
    color: var(--color-primary-fg);
  }
  .checkbox input:focus-visible ~ .box {
    outline: 2px solid var(--color-focus-ring);
    outline-offset: 2px;
  }
  .checkbox input:disabled ~ .box {
    opacity: 0.55;
  }
  .checkbox input:disabled ~ .label-text {
    color: var(--color-text-muted);
  }
</style>
