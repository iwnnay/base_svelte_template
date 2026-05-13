<script lang="ts">
  import type { Snippet } from 'svelte';
  import { layout } from '$lib/layout.svelte';

  type Props = {
    brand?: Snippet;
    nav?: Snippet;
    header?: Snippet;
    headerActions?: Snippet;
    footer?: Snippet;
    children: Snippet;
  };

  let { brand, nav, header, headerActions, footer, children }: Props = $props();

  function onKeydown(e: KeyboardEvent) {
    if (e.key === 'Escape' && layout.mobileOpen) layout.closeMobile();
  }
</script>

<svelte:window onkeydown={onKeydown} />

<div
  class="shell"
  class:nav-collapsed={layout.desktopCollapsed}
  class:mobile-open={layout.mobileOpen}
>
  <aside class="nav" aria-label="Main navigation" id="app-nav">
    <div class="nav-brand">
      {#if brand}
        {@render brand()}
      {:else}
        <a class="nav-brand-default" href="/">
          <span class="nav-brand-mark" aria-hidden="true">◆</span>
          <span class="nav-brand-text">Base Template</span>
        </a>
      {/if}
    </div>

    <div class="nav-body">
      {#if nav}
        {@render nav()}
      {/if}
    </div>
  </aside>

  {#if layout.isMobile && layout.mobileOpen}
    <button
      class="overlay"
      aria-label="Close navigation"
      onclick={() => layout.closeMobile()}
    ></button>
  {/if}

  <div class="frame">
    <header class="header">
      <button
        class="nav-toggle"
        aria-label={layout.isMobile
          ? layout.mobileOpen
            ? 'Close menu'
            : 'Open menu'
          : layout.desktopCollapsed
            ? 'Expand sidebar'
            : 'Collapse sidebar'}
        aria-expanded={layout.isMobile ? layout.mobileOpen : !layout.desktopCollapsed}
        aria-controls="app-nav"
        onclick={() => layout.toggle()}
      >
        <span class="hamburger" aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </button>

      <div class="header-slot">
        {#if header}
          {@render header()}
        {/if}
      </div>

      <div class="header-actions">
        {#if headerActions}
          {@render headerActions()}
        {/if}
      </div>
    </header>

    <main class="main">
      {@render children()}
    </main>

    {#if footer}
      <footer class="footer">
        {@render footer()}
      </footer>
    {/if}
  </div>
</div>

<style>
  .shell {
    display: flex;
    min-height: 100dvh;
    background: var(--color-bg);
  }

  /* ---------- Navigation (aside / drawer) ---------- */

  .nav {
    width: var(--nav-width);
    flex-shrink: 0;
    background: var(--color-surface);
    border-right: 1px solid var(--color-border);
    display: flex;
    flex-direction: column;
    transition:
      width var(--transition-base),
      transform var(--transition-slow);
    z-index: var(--z-drawer);
    overflow: hidden;
  }

  .shell.nav-collapsed .nav {
    width: var(--nav-width-collapsed);
  }

  .nav-brand {
    height: var(--header-height);
    display: flex;
    align-items: center;
    padding: 0 var(--space-4);
    border-bottom: 1px solid var(--color-border);
    flex-shrink: 0;
  }

  .nav-brand-default {
    display: flex;
    align-items: center;
    gap: var(--space-3);
    color: var(--color-text);
    font-weight: 600;
    font-size: var(--font-size-md);
    white-space: nowrap;
    overflow: hidden;
    text-decoration: none;
  }

  .nav-brand-default:hover {
    text-decoration: none;
  }

  .nav-brand-mark {
    color: var(--color-primary);
    font-size: var(--font-size-lg);
    flex-shrink: 0;
  }

  .shell.nav-collapsed .nav-brand-text {
    opacity: 0;
    width: 0;
  }

  .nav-brand-text {
    transition:
      opacity var(--transition-fast),
      width var(--transition-base);
  }

  .nav-body {
    flex: 1;
    overflow-y: auto;
    padding: var(--space-3) var(--space-2);
  }

  /* ---------- Header ---------- */

  .frame {
    flex: 1;
    min-width: 0;
    display: flex;
    flex-direction: column;
  }

  .header {
    height: var(--header-height);
    border-bottom: 1px solid var(--color-border);
    background: var(--color-bg);
    display: flex;
    align-items: center;
    gap: var(--space-3);
    padding: 0 var(--space-4);
    position: sticky;
    top: 0;
    z-index: var(--z-sticky);
  }

  .header-slot {
    flex: 1;
    min-width: 0;
    display: flex;
    align-items: center;
    gap: var(--space-3);
  }

  .header-actions {
    display: flex;
    align-items: center;
    gap: var(--space-2);
  }

  .nav-toggle {
    appearance: none;
    background: transparent;
    border: 1px solid transparent;
    border-radius: var(--radius-md);
    width: 36px;
    height: 36px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: var(--color-text);
    transition: background-color var(--transition-fast);
  }

  .nav-toggle:hover {
    background: var(--color-surface-hover);
  }

  .hamburger {
    display: inline-flex;
    flex-direction: column;
    gap: 4px;
    width: 18px;
  }
  .hamburger span {
    display: block;
    height: 2px;
    background: currentColor;
    border-radius: 2px;
  }

  /* ---------- Main / footer ---------- */

  .main {
    flex: 1;
    padding: var(--space-5);
    max-width: 100%;
  }

  .footer {
    padding: var(--space-4);
    border-top: 1px solid var(--color-border);
    color: var(--color-text-muted);
    font-size: var(--font-size-sm);
  }

  /* ---------- Overlay (mobile) ---------- */

  .overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    border: 0;
    cursor: pointer;
    z-index: var(--z-overlay);
    animation: fade-in var(--transition-base);
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  /* ---------- Mobile ---------- */

  @media (max-width: 767px) {
    .nav {
      position: fixed;
      top: 0;
      left: 0;
      bottom: 0;
      width: var(--nav-width);
      transform: translateX(-100%);
      box-shadow: var(--shadow-lg);
    }

    .shell.mobile-open .nav {
      transform: translateX(0);
    }

    /* Collapsed-state width does not apply on mobile */
    .shell.nav-collapsed .nav {
      width: var(--nav-width);
    }
    .shell.nav-collapsed .nav-brand-text {
      opacity: 1;
      width: auto;
    }

    .main {
      padding: var(--space-4);
    }
  }
</style>
