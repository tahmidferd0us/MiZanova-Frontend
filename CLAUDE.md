# MiZanova Frontend — Working Guidelines

JavaScript · React 18 · Vite 6 · Tailwind CSS v4 · Redux Toolkit + RTK Query · React Router 7

The backend lives in a **separate repository** (`MiZanova-Backend`). Never assume it is in this working tree — if you need to know an endpoint's shape, read `src/modules/<module>/api/*.js` or ask.

---

## Non-negotiable rules

1. **Functional components only.** Arrow function, `const Foo = (props) => (...)`, `export default Foo` at the bottom. No classes anywhere — error boundaries use `react-error-boundary`, not a class.
2. **No comments.** The code must read on its own. If a line needs explaining, rename things until it doesn't. The only exception is a short `/* ... */` inside an empty `catch` explaining why the error is swallowed.
3. **One line when one line is enough.** `export const cn = (...inputs) => twMerge(clsx(inputs));` — do not expand it into a block body with a `return`.
4. **Everything is a module.** New feature ⇒ new folder under `src/modules/`. Never add feature logic to `src/app/` or `src/shared/`.
5. **Mobile first.** Base styles target 375px; add `sm:`, `md:`, `lg:` upward. Interactive targets are at least 44px tall (`h-11`, `min-h-11`). Never introduce horizontal page scroll.

---

## Architecture — modular monolith

```
src/
  app/                     Composition root. Owns nothing domain-specific.
    api/                   axiosClient (auth + refresh interceptors), axiosBaseQuery, baseApi, authEvents
    config/env.js          Reads import.meta.env, exposes typed-ish defaults
    providers/             AppProviders — Redux, Router, AuthProvider, ToastContainer
    router/                AppRouter, routes.js, ProtectedRoute, GuestRoute
    store/                 configureStore, rootReducer, hooks
  shared/                  Cross-module, domain-agnostic building blocks
    components/ui/         The reusable component library (see below)
    components/layout/     Navbar, Footer, MainLayout, AuthLayout, Logo
    components/feedback/   ErrorBoundary, NotFoundPage, EmptyState
    hooks/                 useToast, useDisclosure, usePagination
    store/uiSlice.js       Toasts and global UI state
    utils/                 cn, storage, formatters, file, apiError
  modules/                 One folder per business domain
    auth/                  api/ components/ hooks/ pages/ providers/ store/ validation/ index.js
    home/                  components/ pages/ index.js
    dashboard/             pages/ index.js
```

### Dependency direction — enforce this

```
modules/  →  shared/  →  app/config
modules/  →  app/     (router, store hooks, baseApi)
shared/   →  app/     (store hooks, axiosClient, config)
app/      →  modules/ (ONLY rootReducer + AppRouter + AppProviders)
```

- A module may import from `shared/` and `app/`.
- A module **must never import from another module**. If `orders` needs something from `auth`, either it belongs in `shared/`, or `auth` exports it from its `index.js` and you accept that as a deliberate, reviewed coupling.
- `shared/` must never import from `modules/`.

### Path aliases

`@/` → `src/`, `@app/` → `src/app/`, `@shared/` → `src/shared/`, `@modules/` → `src/modules/`.
Defined in **both** `vite.config.js` and `jsconfig.json` — update both together or editor resolution breaks.

---

## Adding a new module

Copy the shape of `src/modules/auth/`:

```
src/modules/<name>/
  api/<name>Api.js         baseApi.injectEndpoints — never call createApi again
  components/              Presentational + container components for this domain
  hooks/                   Domain hooks that wrap the api + slice
  pages/                   Route-level components (default export, lazy-loaded)
  store/<name>Slice.js     Only for client state; server data lives in RTK Query
  validation/              zod schemas mirroring the backend's validation
  index.js                 The module's public surface
```

Then wire it in exactly two places:

1. `src/app/store/rootReducer.js` — add the slice reducer (skip if the module has no slice).
2. `src/app/router/AppRouter.jsx` — add the lazy route, plus the path in `src/app/router/routes.js`.

That is the whole checklist. If a change requires touching more than these two files outside the module, the module boundary is wrong.

---

## Redux Toolkit conventions

**Server state → RTK Query. Client state → a slice.** Never store fetched entities in a slice manually.

```js
export const ordersApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    orders: builder.query({ query: (params) => ({ url: '/orders', params }), providesTags: [TAG_TYPES.ORDER] }),
    createOrder: builder.mutation({ query: (body) => ({ url: '/orders', method: 'POST', data: body }), invalidatesTags: [TAG_TYPES.ORDER] }),
  }),
});
```

- `baseApi` (`src/app/api/baseApi.js`) is the single `createApi` instance. Every module calls `injectEndpoints` on it.
- Register new tag names in `TAG_TYPES` and use `providesTags` / `invalidatesTags` for cache invalidation. Do not refetch manually.
- The base query is **axios**, so the payload key is `data`, not `body`, and query strings go in `params`.
- Slice naming: past-tense event actions (`sessionCleared`, `toastPushed`), not commands (`setSession`).
- Selectors live next to the slice and are named `selectX`. Components use `useAppSelector(selectX)`, never `state.foo.bar` inline.
- Cross-slice reaction goes in `extraReducers` with `addMatcher(someApi.endpoints.x.matchFulfilled, ...)` — see `authSlice.js`.

---

## API layer & authentication

`axiosClient` (`src/app/api/axiosClient.js`) is the only place that talks to the network.

- Request interceptor attaches `Authorization: Bearer <accessToken>` from `tokenStorage`.
- On `401`, a single in-flight refresh call hits `POST /auth/refresh`, stores the new access token and replays the original request. Concurrent 401s share one refresh promise.
- If refresh fails, the token is cleared and `emitUnauthorized()` fires; `AuthProvider` listens and dispatches `sessionCleared()`.
- `withCredentials: true` everywhere — the refresh token is an http-only cookie set by the backend, and the frontend never reads or stores it.

**Session model:** access token in `localStorage` (short-lived), refresh token in an http-only cookie. On boot, `AuthProvider` calls `GET /auth/me` if an access token exists; `isBootstrapping` gates the routes until that resolves.

**Response envelope** — the backend always returns:

```json
{ "success": true,  "message": "...", "data": { }, "meta": { "page": 1, "limit": 10, "total": 0, "totalPages": 1 } }
{ "success": false, "message": "...", "details": { "email": ["A valid email is required"] } }
```

So unwrap with `const { data } = await login(values).unwrap();` then read `data.user`. For errors, use `getErrorMessage(error)` and `applyFieldErrors(error, setError)` from `@shared/utils/apiError` — the latter maps backend field errors straight onto react-hook-form.

---

## The reusable component library

Import from the barrel: `import { Button, Input, Table } from '@shared/components/ui';`

| Component | Key props |
|---|---|
| `Button` | `variant` (`primary` `secondary` `danger` `outline` `ghost` `link`), `size` (`sm` `md` `lg` `icon`), `isLoading`, `fullWidth`, `leftIcon`, `rightIcon` |
| `Input` | `label`, `error`, `hint`, `required`, `type` (`password` gets a Show/Hide toggle), `leftIcon`, `rightSlot` — spread-compatible with `{...register('field')}` |
| `NumberInput` | `min`, `max`, `step`, `suffix` — strips the native spinner |
| `Select` | `options: [{ value, label, disabled }]`, `placeholder` |
| `Table` | `columns`, `data`, `rowKey`, `isLoading`, `emptyMessage`, `onRowClick`, `pagination` — **omit `pagination` for a plain table, pass the `usePagination` object for a paginated one**. Renders a real `<table>` at `md+` and a stacked card list below it. |
| `Pagination` | `page`, `limit`, `total`, `onPageChange`, `onLimitChange` |
| `Modal` | `isOpen`, `onClose`, `title`, `description`, `size`, `footer`, `closeOnBackdrop` — portalled, Esc-closable, locks body scroll |
| `ConfirmModal` | `onConfirm`, `confirmLabel`, `variant`, `isLoading` |
| `FileUploader` | `accept`, `multiple`, `maxSizeMb`, `maxFiles`, `value`, `onChange` — drag & drop with size/type validation |
| `FileDownloader` | `url`, `fileName`, `params` — blob download through `axiosClient`, honours `Content-Disposition` |
| `Badge`, `Card`, `Spinner`, `FormField` | presentational |

**Toasts** are dispatched, not rendered locally:

```js
const toast = useToast();
toast.success('Saved', { description: 'Your changes are live.' });
toast.error('Login failed', { description: getErrorMessage(error) });
```

`ToastContainer` is mounted once in `AppProviders` and portals to `document.body`.

**Before building a new component, check this table.** Extend an existing component with a new variant rather than creating a near-duplicate. `src/modules/dashboard/pages/DashboardPage.jsx` is the living usage example for all of them.

---

## Styling — Tailwind v4

There is **no `tailwind.config.js`**. v4 is configured in CSS: the theme lives in the `@theme` block in `src/index.css` and the plugin is wired through `@tailwindcss/vite`.

Use the semantic tokens, not raw palette values:

| Token | Use |
|---|---|
| `brand-50 … brand-900` | Primary blue ramp — buttons, links, focus rings |
| `accent-50 … accent-700` | Logo green, for secondary emphasis and success accents |
| `logo-navy`, `logo-teal`, `logo-green` | Exact logo hexes. **Only** for reproducing the logo — never for UI chrome |
| `surface`, `surface-muted` | Page and raised backgrounds |
| `border-subtle` | All borders |
| `content`, `content-muted` | Primary and secondary text |
| `rounded-card`, `shadow-soft` | Card geometry |
| `container-page` | Page gutter + max width (custom `@utility`) |
| `wordmark` | Navy→teal→green gradient clipped to text (custom `@utility`) |

### Brand assets

`public/logo-mark.png` (brain mark, transparent), `public/logo-full.png` (full lockup with tagline), `public/favicon.png`. They are extracted from the supplied logo PDF — regenerate them from the source artwork rather than editing the PNGs.

`Logo` renders the mark plus the wordmark. Pass `tone="light"` on dark backgrounds (the gradient wordmark is unreadable there) and `withWordmark={false}` where only the mark fits. The product tagline is **Balance. Discover. Thrive.**

Merge classes with `cn()` from `@shared/utils/cn` so conditional classes override correctly. Never build class strings with template literals.

Adding a new design token means adding a `--color-*` / `--radius-*` / `--shadow-*` entry to `@theme` — never a hard-coded hex in a component.

`prefers-reduced-motion` is handled globally in `src/index.css` for CSS transitions. Large `motion/react` animations still need `useReducedMotion`.

---

## Forms

react-hook-form + zod via `@hookform/resolvers/zod`. See `src/modules/auth/components/LoginForm.jsx`.

```js
const { register, handleSubmit, setError, formState: { errors } } = useForm({ resolver: zodResolver(loginSchema), defaultValues: { email: '', password: '' } });
```

- Schemas live in `src/modules/<name>/validation/` and must **mirror the backend zod schema** — client validation is UX, the backend is the authority.
- Always `noValidate` on the `<form>` so zod owns the messages.
- On submit failure: `if (!applyFieldErrors(error, setError)) toast.error(...)` — field errors land on the fields, everything else becomes a toast.

---

## Routing

`src/app/router/routes.js` holds every path as a constant. Never hard-code a path string in a component.

- `MainLayout` (navbar + footer) wraps public and app pages; `AuthLayout` wraps login/register.
- `ProtectedRoute` redirects unauthenticated users to `/login` and preserves `location.state.from` so login can return them. It accepts `roles={['ADMIN']}` for role gating.
- `GuestRoute` bounces authenticated users away from `/login` and `/register`.
- All pages are `lazy()`-loaded in `AppRouter.jsx` and must be **default exports**.

---

## Skills available in this repo

Installed under `.claude/skills/`:

- **`ui-ux-pro-max`** — searchable database of design rules (styles, palettes, font pairings, UX guidelines). Run its script before designing a new page:
  ```bash
  python ".claude/skills/ui-ux-pro-max/scripts/search.py" "<query>" --design-system
  ```
  The stack for this project is `react` / `tailwind` — pass it explicitly rather than letting the skill guess.
- **`motion`** — Motion (`motion/react`, formerly Framer Motion) patterns for gestures, scroll, layout and spring animation. Already a dependency; import from `motion/react`, not `framer-motion`.
- **`21st-dev`** — how to source components from the 21st.dev registry and adapt them to this codebase. **Read it before running any shadcn CLI command** — this is not a shadcn project and `npx shadcn add` will break it.

---

## Environment

`.env` (copy from `.env.example`):

```
VITE_API_BASE_URL=http://localhost:5000/api/v1
VITE_APP_NAME=MiZanova
```

Read them only through `@app/config/env` — never `import.meta.env` directly in a component.

---

## Commands

```bash
npm run dev
```

```bash
npm run build
```

```bash
npx eslint .
```

**Before reporting any change as done, run `npm run build` and `npx eslint .`.** Both must be clean. Then check the change at 375px and 1280px.
