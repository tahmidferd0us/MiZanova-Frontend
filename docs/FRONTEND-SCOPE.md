# MiZanova Frontend — Scope & Module Map

Repo-specific. Read `docs/PRODUCT.md` first for the rules that constrain all of this.

## Architecture scope (NFR7)

**This repo is the web app.** React SPA, mobile-first, served as a static build. It must eventually become an installable **PWA** with an encrypted offline store (NFR2, E03) — that is not configured yet and is the single biggest pending architectural decision here.

"Mobile app" in the requirements is currently **undecided**: it may mean this PWA installed on a phone, or a separate native app. Do not assume. If a task depends on the answer, ask.

## Planned module map

One folder per domain under `src/modules/`, following the existing `auth` shape (`api/ components/ hooks/ pages/ store/ validation/ index.js`). Nothing outside a module knows a domain exists.

| Module | Owns | Requirements |
|---|---|---|
| `auth` *(exists)* | Login, register, session, 2FA, role selection at login | 1.2.1, 1.2.2, E06 |
| `home` *(exists)* | Marketing landing page | — |
| `marketing` *(exists)* | For School / Parent / Specialist, Pricing, Resources, About | — |
| `behaviour` | Quick-log UI, 4 category buttons, Start/Stop timer, voice dictation, offline queue + sync indicator | FR1–FR3, NFR2, E01, E03, E04 |
| `strategies` | Strategy display, Evidence-DB fallback, safety-blocked states | FR4, E02, E05 |
| `students` | Student profiles, neurodevelopment profile, teacher↔student assignment views | FR23, S01 |
| `goals` | SMART goals, milestones, weekly progress, evidence attachment | FR24 |
| `consent` | Consent forms, approval, revoke, audit history | FR25 |
| `parent` | Daily reports, home observations, library/toolkits, specialist booking, Premium reports | FR5–FR9, P01–P06 |
| `specialist` | Review queue, private notes, behaviour history, strategy library | FR10–FR12, N01–N05 |
| `schoolAdmin` | Assignments, critical-incident approval, policy toggles, KPI dashboard, staff management | FR13–FR16, S01–S05 |
| `platformAdmin` | Jurisdiction, verification pipeline, subscription tiers, AI metrics, revenue | FR17–FR19, A01–A05 |
| `superAdmin` | AI thresholds, kill switches, environments, regional pricing, system health | FR20–FR22, T01–T05 |
| `messaging` | Secure in-app messaging, templates, notifications | FR26, N05 |
| `billing` | Stripe checkout, subscription state, feature gating, trial expiry | FR6, FR7, 1.5.x |

## Routing and role gating

`ProtectedRoute` already accepts `roles`. When the six real roles land, every app route must be role-gated — there is no shared authenticated surface. Add role constants next to `ROUTES` in `src/app/router/`, never inline strings.

Planned route roots: `/teacher/*`, `/parent/*`, `/specialist/*`, `/school-admin/*`, `/platform-admin/*`, `/super-admin/*`. Public marketing routes stay at the top level.

## Frontend rules that come from the product

These are UI-level consequences of `docs/PRODUCT.md`. They are testable — treat a violation as a bug.

1. **Never render a student's surname** on a parent-facing screen. First name only (FR5).
2. **Never put a name in a notification** — title, body or push payload. Secure link only (NFR4).
3. **The 3-tap budget is a hard budget** (FR1, E01). Any added confirmation step or modal in the logging flow breaks it. Count the taps.
4. **Offline is a normal state.** Every mutating screen needs Pending / Synced / Conflict feedback, not an error toast (E03).
5. **Strategy text is displayed verbatim** from the backend. The frontend never generates, edits, rewrites or re-orders strategy content — it has not been through the safety gate.
6. **Blocked-AI is a designed state, not an error.** When AI is blocked or offline the UI shows Evidence-DB strategies normally, without implying failure (E02).
7. **Touch targets ≥44px and mobile-first** (NFR3, P04) — already enforced across the shared UI kit; keep it.
8. **Never expose a role's data in another role's bundle.** Lazy-load role areas so an unauthorised role never downloads the code or the copy.

## Current state

Built: shared UI kit, auth (login/register), marketing home page to Figma spec, six placeholder marketing pages, `/dashboard` as a component reference. See `docs/ROADMAP.md` for the full picture.
