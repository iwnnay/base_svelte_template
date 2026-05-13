<script lang="ts">
  import type { HTMLInputAttributes } from 'svelte/elements';

  type Props = HTMLInputAttributes & {
    value?: string | number | null;
    invalid?: boolean;
  };

  let { value = $bindable(''), invalid = false, type = 'text', ...rest }: Props = $props();
</script>

<input class="input" class:invalid {type} bind:value {...rest} />

<style>
  .input {
    width: 100%;
    padding: 0.55rem 0.75rem;
    font: inherit;
    font-size: var(--font-size-md);
    color: var(--color-text);
    background: var(--color-bg);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-md);
    transition:
      border-color var(--transition-fast),
      box-shadow var(--transition-fast);
  }
  .input::placeholder {
    color: var(--color-text-muted);
  }
  .input:hover:not(:disabled) {
    border-color: var(--color-border-strong);
  }
  .input:focus {
    outline: none;
    border-color: var(--color-primary);
    box-shadow: 0 0 0 3px var(--color-focus-ring);
  }
  .input:disabled {
    background: var(--color-surface);
    color: var(--color-text-muted);
    cursor: not-allowed;
  }
  .input.invalid {
    border-color: var(--color-danger);
  }
  .input.invalid:focus {
    box-shadow: 0 0 0 3px var(--color-danger-soft);
  }
</style>
