<script lang="ts">
  import Button from '$lib/components/Button.svelte';
  import Input from '$lib/components/Input.svelte';
  import Textarea from '$lib/components/Textarea.svelte';
  import Select from '$lib/components/Select.svelte';
  import Checkbox from '$lib/components/Checkbox.svelte';
  import Radio from '$lib/components/Radio.svelte';
  import Switch from '$lib/components/Switch.svelte';
  import Field from '$lib/components/Field.svelte';
  import Card from '$lib/components/Card.svelte';
  import Alert from '$lib/components/Alert.svelte';
  import Badge from '$lib/components/Badge.svelte';
  import { theme } from '$lib/theme.svelte';

  let text = $state('');
  let textInvalid = $state('not-an-email');
  let bio = $state('');
  let selectVal = $state('cat');
  let agree = $state(false);
  let pet = $state('cat');
  let notifications = $state(true);
  let alertOpen = $state(true);

  const tokens = [
    'color-bg',
    'color-surface',
    'color-surface-2',
    'color-text',
    'color-text-muted',
    'color-border',
    'color-primary',
    'color-primary-hover',
    'color-danger',
    'color-warning',
    'color-success',
    'color-info'
  ];
</script>

<svelte:head>
  <title>Theme Gallery · Base Svelte Template</title>
  <meta name="robots" content="noindex" />
</svelte:head>

<div class="container">
  <header class="page-header">
    <Badge>Hidden route</Badge>
    <h1>Theme &amp; Component Gallery</h1>
    <p class="lede">
      Every base component rendered against the live theme tokens. Toggle the
      theme from the header to verify dark-mode contrast.
    </p>
    <p class="muted">
      Active preference: <code>{theme.preference}</code> · resolved:
      <code>{theme.resolved}</code>
    </p>
  </header>

  <section class="section">
    <h2>Color tokens</h2>
    <div class="swatches">
      {#each tokens as token}
        <div class="swatch">
          <span class="chip" style:background="var(--{token})"></span>
          <code>--{token}</code>
        </div>
      {/each}
    </div>
  </section>

  <section class="section">
    <h2>Buttons</h2>
    <div class="row">
      <Button>Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="danger">Danger</Button>
      <Button disabled>Disabled</Button>
      <Button loading>Loading</Button>
    </div>
    <div class="row">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  </section>

  <section class="section">
    <h2>Form controls</h2>
    <div class="form-grid">
      <Field label="Email" for="email" hint="We'll never share your email.">
        <Input id="email" type="email" placeholder="you@example.com" bind:value={text} />
      </Field>

      <Field label="Email (invalid)" for="email-bad" error="Please enter a valid email address.">
        <Input id="email-bad" type="email" invalid bind:value={textInvalid} />
      </Field>

      <Field label="Bio" for="bio" hint="A short description.">
        <Textarea id="bio" placeholder="Tell us a bit about yourself…" bind:value={bio} />
      </Field>

      <Field label="Favorite pet" for="pet-select">
        <Select id="pet-select" bind:value={selectVal}>
          <option value="cat">Cat</option>
          <option value="dog">Dog</option>
          <option value="fish">Fish</option>
          <option value="bird">Bird</option>
        </Select>
      </Field>

      <Field label="Disabled input" for="disabled">
        <Input id="disabled" disabled value="Can't touch this" />
      </Field>
    </div>

    <div class="form-grid">
      <Field label="Agreement">
        <Checkbox bind:checked={agree}>I agree to the terms</Checkbox>
      </Field>

      <Field label="Choose one">
        <div class="stack">
          <Radio bind:group={pet} value="cat">Cat</Radio>
          <Radio bind:group={pet} value="dog">Dog</Radio>
          <Radio bind:group={pet} value="fish">Fish</Radio>
        </div>
      </Field>

      <Field label="Settings">
        <Switch bind:checked={notifications}>Enable notifications</Switch>
      </Field>
    </div>
  </section>

  <section class="section">
    <h2>Alerts</h2>
    <div class="stack">
      <Alert variant="info" title="Heads up">
        This is an informational message.
      </Alert>
      <Alert variant="success" title="Saved">
        Your settings have been saved.
      </Alert>
      <Alert variant="warning" title="Careful">
        This action cannot be undone.
      </Alert>
      <Alert variant="danger" title="Something went wrong">
        We couldn't complete your request. Please try again.
      </Alert>
      {#if alertOpen}
        <Alert variant="info" dismissible onDismiss={() => (alertOpen = false)}>
          Dismissible alert — click × to close.
        </Alert>
      {/if}
    </div>
  </section>

  <section class="section">
    <h2>Badges</h2>
    <div class="row">
      <Badge>Neutral</Badge>
      <Badge variant="primary">Primary</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="danger">Danger</Badge>
      <Badge variant="info">Info</Badge>
    </div>
  </section>

  <section class="section">
    <h2>Cards</h2>
    <div class="card-grid">
      <Card title="Default">
        Sits on the standard surface with a thin border.
      </Card>
      <Card title="Elevated" elevated>
        Floats above the page with a shadow instead of a border.
      </Card>
      <Card>
        {#snippet header()}
          <div class="card-header-row">
            <h3 style="margin:0">Custom header</h3>
            <Badge variant="success">New</Badge>
          </div>
        {/snippet}
        {#snippet footer()}
          <div class="card-footer-row">
            <Button size="sm" variant="ghost">Cancel</Button>
            <Button size="sm">Save</Button>
          </div>
        {/snippet}
        A card with a custom header snippet and a footer with actions.
      </Card>
    </div>
  </section>

  <section class="section">
    <h2>Typography</h2>
    <h1>Heading 1</h1>
    <h2>Heading 2</h2>
    <h3>Heading 3</h3>
    <h4>Heading 4</h4>
    <p>
      Paragraph text uses <code>--font-sans</code> at <code>--font-size-md</code>.
      Inline <code>code</code> is rendered with <code>--font-mono</code>. Links
      look like <a href="/">this</a>.
    </p>
    <p class="muted">Muted text uses <code>--color-text-muted</code>.</p>
  </section>
</div>

<style>
  .container {
    max-width: var(--content-max-width);
    margin: 0 auto;
    padding-bottom: var(--space-8);
  }
  .page-header {
    display: flex;
    flex-direction: column;
    gap: var(--space-2);
    margin-bottom: var(--space-6);
  }
  .lede {
    color: var(--color-text-muted);
    font-size: var(--font-size-lg);
  }
  .muted {
    color: var(--color-text-muted);
    font-size: var(--font-size-sm);
  }
  .section {
    padding: var(--space-5) 0;
    border-top: 1px solid var(--color-border);
  }
  .section h2 {
    margin-bottom: var(--space-4);
  }
  .row {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-3);
    align-items: center;
    margin-bottom: var(--space-3);
  }
  .stack {
    display: flex;
    flex-direction: column;
    gap: var(--space-2);
  }
  .form-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: var(--space-4);
  }
  .card-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: var(--space-4);
  }
  .swatches {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: var(--space-2);
  }
  .swatch {
    display: flex;
    align-items: center;
    gap: var(--space-2);
    padding: var(--space-2);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-md);
    background: var(--color-surface);
  }
  .chip {
    width: 24px;
    height: 24px;
    border-radius: var(--radius-sm);
    border: 1px solid var(--color-border);
    flex-shrink: 0;
  }
  .card-header-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--space-2);
  }
  .card-footer-row {
    display: flex;
    justify-content: flex-end;
    gap: var(--space-2);
  }
</style>
