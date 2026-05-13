<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { HTMLInputAttributes } from 'svelte/elements';

  type Props = Omit<HTMLInputAttributes, 'type' | 'children'> & {
    checked?: boolean;
    children?: Snippet;
  };

  let { checked = $bindable(false), children, ...rest }: Props = $props();
</script>

<label class="switch">
  <input type="checkbox" role="switch" bind:checked {...rest} />
  <span class="track" aria-hidden="true">
    <span class="thumb"></span>
  </span>
  {#if children}
    <span class="label-text">{@render children()}</span>
  {/if}
</label>

<style>
  .switch {
    display: inline-flex;
    align-items: center;
    gap: var(--space-3);
    cursor: pointer;
    user-select: none;
    color: var(--color-text);
    font-size: var(--font-size-md);
  }
  .switch input {
    position: absolute;
    opacity: 0;
    pointer-events: none;
  }
  .track {
    position: relative;
    width: 36px;
    height: 20px;
    background: var(--color-surface-2);
    border: 1px solid var(--color-border-strong);
    border-radius: var(--radius-full);
    transition:
      background-color var(--transition-fast),
      border-color var(--transition-fast);
  }
  .thumb {
    position: absolute;
    top: 1px;
    left: 1px;
    width: 16px;
    height: 16px;
    background: var(--color-bg);
    border-radius: 50%;
    box-shadow: var(--shadow-sm);
    transition: transform var(--transition-base);
  }
  .switch input:checked ~ .track {
    background: var(--color-primary);
    border-color: var(--color-primary);
  }
  .switch input:checked ~ .track .thumb {
    transform: translateX(16px);
  }
  .switch input:focus-visible ~ .track {
    outline: 2px solid var(--color-focus-ring);
    outline-offset: 2px;
  }
  .switch input:disabled ~ .track {
    opacity: 0.55;
    cursor: not-allowed;
  }
</style>
