<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { HTMLInputAttributes } from 'svelte/elements';

  type Props = Omit<HTMLInputAttributes, 'type' | 'children'> & {
    group?: string;
    value?: string;
    children?: Snippet;
  };

  let { group = $bindable(''), value, children, ...rest }: Props = $props();
</script>

<label class="radio">
  <input type="radio" bind:group {value} {...rest} />
  <span class="dot" aria-hidden="true"></span>
  {#if children}
    <span class="label-text">{@render children()}</span>
  {/if}
</label>

<style>
  .radio {
    display: inline-flex;
    align-items: center;
    gap: var(--space-2);
    cursor: pointer;
    user-select: none;
    color: var(--color-text);
    font-size: var(--font-size-md);
  }
  .radio input {
    position: absolute;
    opacity: 0;
    pointer-events: none;
  }
  .dot {
    position: relative;
    width: 18px;
    height: 18px;
    border: 1px solid var(--color-border-strong);
    border-radius: 50%;
    background: var(--color-bg);
    flex-shrink: 0;
    transition: border-color var(--transition-fast);
  }
  .dot::after {
    content: '';
    position: absolute;
    inset: 4px;
    border-radius: 50%;
    background: var(--color-primary);
    transform: scale(0);
    transition: transform var(--transition-fast);
  }
  .radio:hover input:not(:disabled) ~ .dot {
    border-color: var(--color-primary);
  }
  .radio input:checked ~ .dot {
    border-color: var(--color-primary);
  }
  .radio input:checked ~ .dot::after {
    transform: scale(1);
  }
  .radio input:focus-visible ~ .dot {
    outline: 2px solid var(--color-focus-ring);
    outline-offset: 2px;
  }
  .radio input:disabled ~ .dot {
    opacity: 0.55;
  }
</style>
