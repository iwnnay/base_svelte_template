<script lang="ts">
  import type { Snippet } from 'svelte';

  type Variant = 'info' | 'success' | 'warning' | 'danger';

  type Props = {
    variant?: Variant;
    title?: string;
    dismissible?: boolean;
    onDismiss?: () => void;
    children: Snippet;
  };

  let {
    variant = 'info',
    title,
    dismissible = false,
    onDismiss,
    children
  }: Props = $props();
</script>

<div class="alert alert-{variant}" role="alert">
  <div class="alert-content">
    {#if title}
      <p class="alert-title">{title}</p>
    {/if}
    <div class="alert-body">{@render children()}</div>
  </div>
  {#if dismissible}
    <button
      class="alert-close"
      aria-label="Dismiss"
      onclick={() => onDismiss?.()}
    >
      ×
    </button>
  {/if}
</div>

<style>
  .alert {
    display: flex;
    align-items: flex-start;
    gap: var(--space-3);
    padding: var(--space-3) var(--space-4);
    border-radius: var(--radius-md);
    border: 1px solid transparent;
    font-size: var(--font-size-sm);
  }
  .alert-content {
    flex: 1;
    min-width: 0;
  }
  .alert-title {
    margin: 0 0 var(--space-1);
    font-weight: 600;
    font-size: var(--font-size-md);
  }
  .alert-body {
    color: inherit;
  }
  .alert-body :global(p:last-child) {
    margin-bottom: 0;
  }
  .alert-close {
    appearance: none;
    background: transparent;
    border: 0;
    color: inherit;
    font-size: 1.4rem;
    line-height: 1;
    cursor: pointer;
    padding: 0 var(--space-1);
    opacity: 0.7;
  }
  .alert-close:hover {
    opacity: 1;
  }

  .alert-info {
    background: var(--color-info-soft);
    color: var(--color-info);
    border-color: var(--color-info);
  }
  .alert-success {
    background: var(--color-success-soft);
    color: var(--color-success);
    border-color: var(--color-success);
  }
  .alert-warning {
    background: var(--color-warning-soft);
    color: var(--color-warning);
    border-color: var(--color-warning);
  }
  .alert-danger {
    background: var(--color-danger-soft);
    color: var(--color-danger);
    border-color: var(--color-danger);
  }
</style>
