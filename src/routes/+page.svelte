<script lang="ts">
  import Card from '$lib/components/Card.svelte';
  import Button from '$lib/components/Button.svelte';
  import Badge from '$lib/components/Badge.svelte';
</script>

<svelte:head>
  <title>Home · Base Svelte Template</title>
</svelte:head>

<div class="container">
  <header class="hero">
    <Badge variant="primary">Template</Badge>
    <h1>Welcome to your base Svelte template</h1>
    <p class="lede">
      A themable, responsive starter with a sliding mobile drawer, a collapsible
      desktop sidebar, and a set of accessible base components. Resize the window
      to see the navigation adapt.
    </p>
    <div class="actions">
      <Button href="/theme">View component gallery</Button>
      <Button variant="secondary" href="https://kit.svelte.dev" target="_blank" rel="noreferrer">
        SvelteKit docs
      </Button>
    </div>
  </header>

  <div class="grid">
    <Card title="Themable">
      Every visual style references a CSS custom property scoped under
      <code>:root</code> and <code>[data-theme="dark"]</code>. Add a new theme
      by overriding those tokens.
    </Card>
    <Card title="Responsive">
      The nav slides in as a drawer on screens narrower than 768px and becomes a
      collapsible sidebar on wider viewports — using the same component.
    </Card>
    <Card title="Reusable">
      Components are exported from <code>$lib</code>, so you can keep this as a
      GitHub template or publish <code>src/lib</code> as a package later.
    </Card>
  </div>
</div>

<style>
  .container {
    max-width: var(--content-max-width);
    margin: 0 auto;
  }
  .hero {
    display: flex;
    flex-direction: column;
    gap: var(--space-3);
    margin-bottom: var(--space-7);
  }
  .hero h1 {
    margin: 0;
  }
  .lede {
    color: var(--color-text-muted);
    font-size: var(--font-size-lg);
    max-width: 60ch;
  }
  .actions {
    display: flex;
    gap: var(--space-2);
    flex-wrap: wrap;
    margin-top: var(--space-2);
  }
  .grid {
    display: grid;
    gap: var(--space-4);
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  }
</style>
