# MiZanova — Work Breakdown & Build Status

> **Shared document.** An identical copy lives in `MiZanova-Frontend/docs/` and `MiZanova-Backend/docs/`. If you change one, change both.
>
> WBS transcribed from `Final Requirements (1).docx` §3. **Keep the status column current** — a fresh session reads this to know where the project actually is.

Status legend: `Done` · `In progress` · `Not started`

## 1.1 Design & Compliance

| # | Item | Status |
|---|---|---|
| 1.1.1 | UI/UX design optimised for 3-tap behaviour logging | Not started |
| 1.1.2 | Jurisdictional data governance by school country (APP for AU) | Not started |
| 1.1.3 | AWS Sydney region configuration for data residency | Not started — conflicts with Supabase, see `REQUIREMENTS.md` |
| 1.1.4 | App architecture spec for webapp **and** mobile | In progress — web documented, mobile undecided |

## 1.2 Security & Identity

| # | Item | Status |
|---|---|---|
| 1.2.1 | Mandatory 2FA for Super Admins and Specialists | Not started |
| 1.2.2 | Three-tier RBAC and session locking; role selection at login | Not started — `User.role` exists (`USER`/`ADMIN`) but the six real roles are not modelled |
| 1.2.3 | Teacher verification pipeline (WWCC/ID) | Not started |
| 1.2.4 | Consent Management Engine | Not started |

**Built so far:** email/password auth with bcrypt, JWT access tokens (15 min) and rotating refresh tokens (7 day, http-only cookie), rate-limited auth endpoints, `requireAuth` / `requireRole` middleware. This is the foundation 1.2.2 builds on, not 1.2.2 itself.

## 1.3 Core Engineering (Classroom Support)

| # | Item | Status |
|---|---|---|
| 1.3.1 | Quick-Log engine — Start/Stop timer + Web Speech API, <20s logging | Not started |
| 1.3.2 | PWA offline sync, encrypted local store, "Last Edit Wins" conflict resolution | Not started |
| 1.3.3 | Anonymised AI strategy generator (PII → "the student") | Not started |
| 1.3.4 | Judge-LLM safety validation, keyword screening, Critical auto-block | Not started |
| 1.3.5 | SMART Goal module and Neurodevelopment Profiles | Not started |

## 1.4 Communication & Data Management

| # | Item | Status |
|---|---|---|
| 1.4.1 | Secure messaging and zero-PII notifications | Not started |
| 1.4.2 | Daily behaviour sync reports (First Name only) | Not started |
| 1.4.3 | Specialist review queue | Not started |
| 1.4.4 | Institutional KPI dashboard | Not started |

## 1.5 Business & Commercial

| # | Item | Status |
|---|---|---|
| 1.5.1 | Stripe — B2B school licences and B2C parent subscriptions | Not started |
| 1.5.2 | Automated IEP PDF report generator | Not started |
| 1.5.3 | Subscription feature gating, 7-day trial expiry, read-only locking | Not started |

## 1.6 Quality Assurance & Deployment

| # | Item | Status |
|---|---|---|
| 1.6.1 | System integration testing — cross-role data isolation, AI safety triggers | Not started |
| 1.6.2 | User acceptance testing — classroom logging speed | Not started |
| 1.6.3 | Go-live with immutable admin audit trail | Not started |

---

## What actually exists today

**Backend** — Express modular monolith; `auth` module (register, login, refresh, logout, me, change-password); Prisma schema with `User` and `RefreshToken`; zod validation; typed error handling; rate limiting; Supabase Postgres as the database.

**Frontend** — React + Vite + Tailwind v4 + Redux Toolkit/RTK Query; shared UI kit (Button, Input, NumberInput, Select, Modal, ConfirmModal, Table + Pagination, FileUploader, FileDownloader, Toast, Badge, Card, Spinner); marketing home page built to the Figma `Landing Page` frame (hero, 3 feature cards, CTA band, 5-column footer); placeholder pages for `/for-school`, `/for-parent`, `/for-specialist`, `/pricing`, `/resources`, `/about`; protected `/dashboard` used as the component reference.

Marketing `/for-school` built to Figma frame `P-002 For Schools` (node `264-1861`): hero with a dashboard mockup, trust strip, "Why schools choose", pricing tiers, and a pilot-request form. **Caveat:** the pilot form validates client-side but has no backend endpoint — submitting only raises a toast. `/for-parent`, `/for-specialist`, `/pricing`, `/resources`, `/about` are still placeholders (frames `P-003`, `P-004`, `P-005`, `P-006`, `P-007` exist in Figma).

Auth UI built to Figma: `/login` (frame `Login Page`, node `1-198`) and `/register` role chooser (frame `P-018 Sign Up — Choose Path`, node `186-1103`), plus `/register/:role` and a `/forgot-password` stub. **Caveats:** Google/Microsoft buttons are visual only (no OAuth backend), "Remember me" has no backend effect, `/forgot-password` is a stub, and `/register/:role` reuses the generic register form — the designed multi-step signup frames (`P-019`–`P-023`, parent and specialist equivalents) are not built.

**Nothing in the behaviour-logging, AI, consent, safeguarding, specialist, admin or billing domains has been started.** The product is at the "shell and auth" stage.

## Suggested build order

The requirements have hard dependencies. This order avoids rework:

1. **Roles and RBAC** (1.2.2) — the six real roles, school/student/teacher relationships. Everything else hangs off this.
2. **Jurisdiction and consent** (1.1.2, 1.2.4) — these gate what data may exist and who may see it, so they must precede any student data.
3. **Behaviour logging** (1.3.1) with the offline store (1.3.2) — the core loop.
4. **Anonymisation + Judge-LLM** (1.3.3, 1.3.4) — never ship logging with an unguarded AI path.
5. **Specialist queue** (1.4.3) — the human half of the safety gate; step 4 is incomplete without it.
6. **Parent surfaces** (1.4.1, 1.4.2), **admin dashboards** (1.4.4), then **billing** (1.5.x).
