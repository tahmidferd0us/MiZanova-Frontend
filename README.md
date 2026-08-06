# MiZanova Frontend

React + Vite + Tailwind CSS v4 + Redux Toolkit, organised as a modular monolith.

## Setup

```bash
npm install
```

Create `.env` from `.env.example`:

```
VITE_API_BASE_URL=http://localhost:5000/api/v1
VITE_APP_NAME=MiZanova
```

## Run

```bash
npm run dev
```

App at `http://localhost:5173`. The backend (`MiZanova-Backend`) must be running for login to work, and its `CORS_ORIGINS` must include this origin.

## Pages

| Route | Access | Contents |
|---|---|---|
| `/` | public | Navbar, hero, features, footer |
| `/login` | guests only | Email + password |
| `/register` | guests only | Name, email, password |
| `/dashboard` | authenticated | Usage examples of every shared component |

`/dashboard` is the living reference for the component library — tables with pagination, modals, file upload, toasts and every input type.

## Scripts

| Script | Purpose |
|---|---|
| `npm run dev` | Vite dev server |
| `npm run build` | production build |
| `npm run preview` | preview the build |
| `npm run lint` | ESLint |

## Skills

`.claude/skills/` contains `ui-ux-pro-max` (design intelligence), `motion` (animation) and `21st-dev` (component sourcing). Claude picks them up automatically when this folder is the working directory.

Architecture and conventions: see [CLAUDE.md](CLAUDE.md).
