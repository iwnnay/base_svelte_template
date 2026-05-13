<script lang="ts">
  import type { Snippet } from 'svelte';

  type Props = {
    label?: string;
    for?: string;
    hint?: string;
    error?: string;
    required?: boolean;
    children: Snippet;
  };

  let { label, for: htmlFor, hint, error, required = false, children }: Props = $props();
</script>

<div class="field" class:has-error={!!error}>
  {#if label}
    <label class="field-label" for={htmlFor}>
      {label}
      {#if required}<span class="required" aria-hidden="true">*</span>{/if}
    </label>
  {/if}

  <div class="field-control">{@render children()}</div>

  {#if error}
    <p class="field-error" role="alert">{error}</p>
  {:else if hint}
    <p class="field-hint">{hint}</p>
  {/if}
</div>

<style>
  .field {
    display: flex;
    flex-direction: column;
    gap: var(--space-2);
    margin-bottom: var(--space-4);
  }
  .field-label {
    font-size: var(--font-size-sm);
    font-weight: 500;
    color: var(--color-text);
  }
  .required {
    color: var(--color-danger);
    margin-left: 2px;
  }
  .field-hint {
    margin: 0;
    font-size: var(--font-size-xs);
    color: var(--color-text-muted);
  }
  .field-error {
    margin: 0;
    font-size: var(--font-size-xs);
    color: var(--color-danger);
  }
</style>
