# Base Svelte Template

A themable, responsive SvelteKit starter. Drop in your features on top of:

- **Adaptive shell** — sliding drawer nav on mobile, collapsible aside on desktop.
- **CSS-variable theming** — light/dark out of the box, adding more themes is one CSS block.
- **Base components** — accessible Button, Input, Textarea, Select, Checkbox, Radio, Switch, Field, Card, Alert, Badge.
- **Hidden `/theme` route** — every component rendered live against the current theme tokens.
- **Svelte 5 runes** throughout, with TypeScript.
- **Port 6300** for both `dev` and `preview`.

## Getting started

```bash
npm install
npm run dev          # http://localhost:6300
```

Other scripts:

```bash
npm run build        # production build
npm run preview      # serve production build on :6300
npm run check        # svelte-check / TS check
npm run format       # prettier
```

## How it's structured

```
src/
├── app.css                       # CSS reset + theme tokens (:root, [data-theme="dark"])
├── app.html                       # Inline script applies stored/system theme pre-paint
├── lib/
│   ├── theme.svelte.ts            # Theme runtime (light/dark/system + localStorage)
│   ├── layout.svelte.ts           # Drawer/aside open/collapsed state
│   ├── components/                # All reusable UI components
│   └── index.ts                   # Library re-exports
└── routes/
    ├── +layout.svelte             # Mounts the AppShell + global nav
    ├── +page.svelte               # Dummy home page
    ├── about/+page.svelte         # Second linked page
    └── theme/+page.svelte         # Hidden component gallery (noindex)
```

## Theming

All visual styles reference semantic CSS custom properties defined in
[`src/app.css`](src/app.css). To add a new theme:

```css
[data-theme='midnight'] {
  --color-bg: #060611;
  --color-surface: #0e0e1c;
  --color-primary: #b67aff;
  /* …override only the tokens you want to change */
}
```

Then set it from anywhere (typically a settings page):

```ts
document.documentElement.setAttribute('data-theme', 'midnight');
```

The built-in `theme` store in `$lib/theme.svelte` handles `light`/`dark`/`system`
plus persistence — extend it if you want to expose more named themes in the UI.

## Layout behavior

The shell decides what the nav looks like based on viewport width:

| Width        | Nav style                                              |
| ------------ | ------------------------------------------------------ |
| `< 768px`    | Hidden by default; hamburger slides it in over content |
| `>= 768px`   | Always visible; hamburger collapses it to icon-rail    |

`MOBILE_BREAKPOINT` lives in `src/lib/layout.svelte.ts`. The widths themselves
(`--nav-width`, `--nav-width-collapsed`, `--header-height`) are theme tokens, so
you can tune them from CSS without touching the component.

## Using it elsewhere

Three ways to reuse this:

1. **GitHub template (recommended).** Push to a GitHub repo, click *Settings →
   Template repository*, then anyone can spin up a copy from "Use this template".
2. **Copy paste.** `src/lib/components` has no dependencies on `src/routes`;
   drop it into another SvelteKit project.
3. **As a library.** `src/lib/index.ts` re-exports every component. To publish,
   add `@sveltejs/package` (`npx svelte-add package`) and ship `dist/`.

## License

MIT
