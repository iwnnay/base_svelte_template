<script lang="ts">
  import '../app.css';
  import type { Snippet } from 'svelte';
  import AppShell from '$lib/components/AppShell.svelte';
  import NavLink from '$lib/components/NavLink.svelte';
  import ThemeToggle from '$lib/components/ThemeToggle.svelte';

  let { children }: { children: Snippet } = $props();
</script>

<AppShell>
  {#snippet nav()}
    <nav class="nav-section" aria-label="Primary">
      <NavLink href="/" exact>
        {#snippet icon()}
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12 12 3l9 9"/><path d="M5 10v10h14V10"/></svg>
        {/snippet}
        Home
      </NavLink>
      <NavLink href="/about">
        {#snippet icon()}
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
        {/snippet}
        About
      </NavLink>
    </nav>
  {/snippet}

  {#snippet header()}
    <strong class="app-title">Base Svelte Template</strong>
  {/snippet}

  {#snippet headerActions()}
    <ThemeToggle />
  {/snippet}

  {#snippet footer()}
    Built with SvelteKit · Port 6300
  {/snippet}

  {@render children()}
</AppShell>

<style>
  .nav-section {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
  .app-title {
    font-size: var(--font-size-md);
    color: var(--color-text-muted);
    font-weight: 500;
  }
</style>
