<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { HTMLAnchorAttributes, HTMLButtonAttributes } from 'svelte/elements';

  type Variant = 'primary' | 'secondary' | 'ghost' | 'danger';
  type Size = 'sm' | 'md' | 'lg';

  type Props = {
    variant?: Variant;
    size?: Size;
    fullWidth?: boolean;
    loading?: boolean;
    icon?: Snippet;
    iconRight?: Snippet;
    children?: Snippet;
    href?: string;
    disabled?: boolean;
  } & Omit<HTMLAnchorAttributes & HTMLButtonAttributes, 'children' | 'disabled' | 'href'>;

  let {
    variant = 'primary',
    size = 'md',
    fullWidth = false,
    loading = false,
    icon,
    iconRight,
    children,
    href,
    disabled,
    ...rest
  }: Props = $props();
</script>

{#if href}
  <a
    {href}
    class="btn btn-{variant} btn-{size}"
    class:full-width={fullWidth}
    class:loading
    {...rest as HTMLAnchorAttributes}
  >
    {#if icon}<span class="btn-icon">{@render icon()}</span>{/if}
    {#if children}<span class="btn-label">{@render children()}</span>{/if}
    {#if iconRight}<span class="btn-icon">{@render iconRight()}</span>{/if}
  </a>
{:else}
  <button
    class="btn btn-{variant} btn-{size}"
    class:full-width={fullWidth}
    class:loading
    disabled={loading || disabled}
    {...rest as HTMLButtonAttributes}
  >
    {#if loading}
      <span class="spinner" aria-hidden="true"></span>
    {:else if icon}
      <span class="btn-icon">{@render icon()}</span>
    {/if}
    {#if children}<span class="btn-label">{@render children()}</span>{/if}
    {#if iconRight && !loading}
      <span class="btn-icon">{@render iconRight()}</span>
    {/if}
  </button>
{/if}

<style>
  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--space-2);
    font-family: inherit;
    font-weight: 500;
    line-height: 1;
    border: 1px solid transparent;
    border-radius: var(--radius-md);
    cursor: pointer;
    text-decoration: none;
    user-select: none;
    transition:
      background-color var(--transition-fast),
      border-color var(--transition-fast),
      color var(--transition-fast),
      transform var(--transition-fast);
    white-space: nowrap;
  }
  .btn:hover {
    text-decoration: none;
  }
  .btn:active:not(:disabled) {
    transform: translateY(1px);
  }
  .btn:disabled {
    opacity: 0.55;
    cursor: not-allowed;
  }
  .btn.full-width {
    width: 100%;
  }

  .btn-sm {
    padding: 0.4rem 0.7rem;
    font-size: var(--font-size-sm);
  }
  .btn-md {
    padding: 0.55rem 1rem;
    font-size: var(--font-size-md);
  }
  .btn-lg {
    padding: 0.75rem 1.25rem;
    font-size: var(--font-size-lg);
  }

  .btn-primary {
    background: var(--color-primary);
    color: var(--color-primary-fg);
    border-color: var(--color-primary);
  }
  .btn-primary:hover:not(:disabled) {
    background: var(--color-primary-hover);
    border-color: var(--color-primary-hover);
  }

  .btn-secondary {
    background: var(--color-surface);
    color: var(--color-text);
    border-color: var(--color-border);
  }
  .btn-secondary:hover:not(:disabled) {
    background: var(--color-surface-hover);
    border-color: var(--color-border-strong);
  }

  .btn-ghost {
    background: transparent;
    color: var(--color-text);
  }
  .btn-ghost:hover:not(:disabled) {
    background: var(--color-surface-hover);
  }

  .btn-danger {
    background: var(--color-danger);
    color: #fff;
    border-color: var(--color-danger);
  }
  .btn-danger:hover:not(:disabled) {
    filter: brightness(1.1);
  }

  .btn-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .spinner {
    width: 14px;
    height: 14px;
    border: 2px solid currentColor;
    border-right-color: transparent;
    border-radius: 50%;
    animation: spin 0.6s linear infinite;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
</style>
