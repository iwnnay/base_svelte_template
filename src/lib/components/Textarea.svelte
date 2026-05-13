<script lang="ts">
  import type { HTMLTextareaAttributes } from 'svelte/elements';

  type Props = HTMLTextareaAttributes & {
    value?: string;
    invalid?: boolean;
  };

  let { value = $bindable(''), invalid = false, rows = 4, ...rest }: Props = $props();
</script>

<textarea class="textarea" class:invalid {rows} bind:value {...rest}></textarea>

<style>
  .textarea {
    width: 100%;
    padding: 0.55rem 0.75rem;
    font: inherit;
    font-size: var(--font-size-md);
    color: var(--color-text);
    background: var(--color-bg);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-md);
    resize: vertical;
    min-height: 80px;
    transition:
      border-color var(--transition-fast),
      box-shadow var(--transition-fast);
  }
  .textarea::placeholder {
    color: var(--color-text-muted);
  }
  .textarea:hover:not(:disabled) {
    border-color: var(--color-border-strong);
  }
  .textarea:focus {
    outline: none;
    border-color: var(--color-primary);
    box-shadow: 0 0 0 3px var(--color-focus-ring);
  }
  .textarea:disabled {
    background: var(--color-surface);
    color: var(--color-text-muted);
    cursor: not-allowed;
  }
  .textarea.invalid {
    border-color: var(--color-danger);
  }
</style>
