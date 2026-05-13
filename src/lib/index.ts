// Re-exports so this template can be consumed as a library: `import { Button } from 'base-svelte-template'`.
export { default as AppShell } from './components/AppShell.svelte';
export { default as NavLink } from './components/NavLink.svelte';
export { default as ThemeToggle } from './components/ThemeToggle.svelte';
export { default as Button } from './components/Button.svelte';
export { default as Input } from './components/Input.svelte';
export { default as Textarea } from './components/Textarea.svelte';
export { default as Select } from './components/Select.svelte';
export { default as Checkbox } from './components/Checkbox.svelte';
export { default as Radio } from './components/Radio.svelte';
export { default as Switch } from './components/Switch.svelte';
export { default as Field } from './components/Field.svelte';
export { default as Card } from './components/Card.svelte';
export { default as Alert } from './components/Alert.svelte';
export { default as Badge } from './components/Badge.svelte';

export { theme } from './theme.svelte';
export { layout } from './layout.svelte';
export type { ThemePreference, ResolvedTheme } from './theme.svelte';
