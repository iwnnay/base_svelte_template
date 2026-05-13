<script lang="ts">
  import Card from '$lib/components/Card.svelte';
</script>

<svelte:head>
  <title>About · Base Svelte Template</title>
</svelte:head>

<div class="container">
  <h1>About</h1>
  <p class="lede">
    A second page exists only to demonstrate that the active state on
    <code>NavLink</code> updates when the route changes.
  </p>

  <Card title="What's here?">
    <ul>
      <li>An <code>AppShell</code> with adaptive drawer / aside navigation.</li>
      <li>Theme tokens with light and dark variants out of the box.</li>
      <li>Form components: Input, Textarea, Select, Checkbox, Radio, Switch, Button.</li>
      <li>Surface components: Card, Alert, Badge, Field.</li>
      <li>
        A hidden <a href="/theme">/theme</a> route that exercises every component
        — useful as a visual regression target when you change tokens.
      </li>
    </ul>
  </Card>
</div>

<style>
  .container {
    max-width: var(--content-max-width);
    margin: 0 auto;
  }
  .lede {
    color: var(--color-text-muted);
    font-size: var(--font-size-lg);
  }
  ul {
    line-height: 1.7;
  }
</style>
