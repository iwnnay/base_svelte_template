<script lang="ts">
  import type { Snippet } from 'svelte';

  type Props = {
    title?: string;
    elevated?: boolean;
    padding?: 'none' | 'sm' | 'md' | 'lg';
    header?: Snippet;
    footer?: Snippet;
    children: Snippet;
  };

  let {
    title,
    elevated = false,
    padding = 'md',
    header,
    footer,
    children
  }: Props = $props();
</script>

<section class="card" class:elevated>
  {#if header || title}
    <header class="card-header">
      {#if header}
        {@render header()}
      {:else if title}
        <h3 class="card-title">{title}</h3>
      {/if}
    </header>
  {/if}
  <div class="card-body padding-{padding}">
    {@render children()}
  </div>
  {#if footer}
    <footer class="card-footer">
      {@render footer()}
    </footer>
  {/if}
</section>

<style>
  .card {
    background: var(--color-surface);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-lg);
    overflow: hidden;
  }
  .card.elevated {
    box-shadow: var(--shadow-md);
    border-color: transparent;
  }
  .card-header,
  .card-footer {
    padding: var(--space-3) var(--space-4);
    border-bottom: 1px solid var(--color-border);
    background: var(--color-surface-2);
  }
  .card-footer {
    border-top: 1px solid var(--color-border);
    border-bottom: none;
  }
  .card-title {
    margin: 0;
    font-size: var(--font-size-lg);
  }
  .padding-none {
    padding: 0;
  }
  .padding-sm {
    padding: var(--space-3);
  }
  .padding-md {
    padding: var(--space-4);
  }
  .padding-lg {
    padding: var(--space-5);
  }
</style>
