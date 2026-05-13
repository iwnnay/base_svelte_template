<script lang="ts">
  import type { Snippet } from 'svelte';
  import { page } from '$app/state';
  import { layout } from '$lib/layout.svelte';

  type Props = {
    href: string;
    icon?: Snippet;
    exact?: boolean;
    children: Snippet;
  };

  let { href, icon, exact = false, children }: Props = $props();

  let active = $derived(
    exact ? page.url.pathname === href : page.url.pathname.startsWith(href)
  );

  function handleClick() {
    if (layout.isMobile) layout.closeMobile();
  }
</script>

<a
  {href}
  class="nav-link"
  class:active
  aria-current={active ? 'page' : undefined}
  onclick={handleClick}
>
  {#if icon}
    <span class="nav-link-icon" aria-hidden="true">{@render icon()}</span>
  {/if}
  <span class="nav-link-text">{@render children()}</span>
</a>

<style>
  .nav-link {
    display: flex;
    align-items: center;
    gap: var(--space-3);
    padding: var(--space-2) var(--space-3);
    border-radius: var(--radius-md);
    color: var(--color-text);
    text-decoration: none;
    font-size: var(--font-size-sm);
    white-space: nowrap;
    transition:
      background-color var(--transition-fast),
      color var(--transition-fast);
  }

  .nav-link:hover {
    background: var(--color-surface-hover);
    text-decoration: none;
  }

  .nav-link.active {
    background: var(--color-primary-soft);
    color: var(--color-primary);
    font-weight: 600;
  }

  .nav-link-icon {
    width: 20px;
    height: 20px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .nav-link-text {
    overflow: hidden;
    text-overflow: ellipsis;
  }

  /* Hide labels in collapsed desktop mode */
  :global(.shell.nav-collapsed) .nav-link-text {
    opacity: 0;
    width: 0;
    transition:
      opacity var(--transition-fast),
      width var(--transition-base);
  }

  @media (max-width: 767px) {
    :global(.shell.nav-collapsed) .nav-link-text {
      opacity: 1;
      width: auto;
    }
  }
</style>
