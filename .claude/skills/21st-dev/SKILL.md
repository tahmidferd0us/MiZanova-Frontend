---
name: 21st-dev
description: Source React + Tailwind UI components from the 21st.dev community registry and adapt them into this codebase. Use when asked to add a new UI component, block, or section (hero, pricing table, navbar, testimonial, bento grid, card, dropdown, animated button, etc.), when asked to "find a component for X", or when a design needs a pattern that does not yet exist in src/shared/components/ui.
---

# 21st.dev Component Sourcing

[21st.dev](https://21st.dev/) is a community registry of React + Tailwind components published in shadcn registry format. Code is **copied into the repo**, not imported as a dependency — you own and modify it.

## Stack Mismatch — Read First

This project is **JavaScript + Vite + Tailwind v4**. It is **not** a shadcn/ui project: there is no `components.json`, no `TypeScript`, no Radix dependency, and no `cn()` from `@/lib/utils` (ours lives at `@shared/utils/cn`).

Therefore **`npx shadcn@latest add` will not work here** and must not be run. It expects `components.json` and would scaffold TypeScript files into the wrong paths. Use the manual adaptation flow below instead.

## Workflow

### Step 1 — Check the local library first

Never source externally before checking what already exists:

```bash
ls src/shared/components/ui
```

If `Button`, `Input`, `NumberInput`, `Select`, `Modal`, `ConfirmModal`, `Table`, `Pagination`, `FileUploader`, `FileDownloader`, `Toast`, `Badge`, `Card` or `Spinner` covers the need, extend it with a new variant rather than adding a second component that does the same job.

### Step 2 — Find the component

Browse `https://21st.dev/` and search by the pattern name (`hero`, `pricing`, `bento`, `navbar`, `testimonial`, `sidebar`). Each component page shows a live preview plus its source. Prefer components whose preview matches the visual language already set in `src/index.css` (`--color-brand-*`, `--radius-card`, `--shadow-soft`).

If the user supplied a specific 21st.dev URL, fetch that page and read the source directly.

### Step 3 — Adapt before writing

Convert the registry source to this codebase's conventions. Every one of these applies:

| 21st.dev source | This codebase |
|---|---|
| `.tsx`, typed props, `interface Props` | `.jsx`, plain destructured props, no type annotations |
| `import { cn } from "@/lib/utils"` | `import { cn } from '@shared/utils/cn'` |
| `@/components/ui/button` | `@shared/components/ui/Button` (use ours, don't copy theirs) |
| Radix primitives (`@radix-ui/*`) | Rewrite with native elements + `motion/react`, or ask before adding the dependency |
| `class-variance-authority` variants | Plain `variants` object keyed by name, as in `Button.jsx` |
| `framer-motion` | `motion/react` (already installed) |
| shadcn theme tokens (`bg-background`, `text-muted-foreground`, `border-input`) | Our tokens: `bg-surface`, `text-content-muted`, `border-border-subtle`, `bg-brand-600` |
| `export default function Foo()` | `const Foo = (props) => (...)` then `export default Foo` |
| Inline `lucide-react` icons | Inline SVG, or ask before adding `lucide-react` |

Also enforce the repo rules: **no comments**, one-line bodies where they fit, arrow function components only.

### Step 4 — Place it correctly

- **Generic and reusable across modules** → `src/shared/components/ui/<Name>.jsx`, then add the export to `src/shared/components/ui/index.js`.
- **Belongs to one feature** → `src/modules/<module>/components/<Name>.jsx`.

Never place a sourced component at the repo root or inside `src/app`.

### Step 5 — Verify

```bash
npm run build && npx eslint .
```

Then check the component at 375px, 768px and 1280px. Confirm interactive targets are at least 44×44px and that `prefers-reduced-motion` is respected (the global rule in `src/index.css` handles CSS transitions; `motion/react` animations need `useReducedMotion` if they are large).

## New Dependencies

If a component genuinely needs `@radix-ui/*`, `lucide-react`, `embla-carousel-react`, or similar, **ask the user before installing**. Prefer a hand-rolled version using what is already in `package.json`.

## Attribution

21st.dev components carry their authors' licenses. When copying a non-trivial component, note its source URL in the PR description — not as a code comment, since this codebase does not use comments.

## Related Skills

Pair this with `ui-ux-pro-max` for choosing the visual system before sourcing, and `motion` for the animation layer once the markup is in place.
