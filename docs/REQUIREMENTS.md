# MiZanova — Requirements Register

> **Shared document.** An identical copy lives in `MiZanova-Frontend/docs/` and `MiZanova-Backend/docs/`. If you change one, change both.
>
> Transcribed from `Final Requirements (1).docx` §1. **Status** reflects what exists in code today — update it in the same commit that changes the code.

Status legend: `Done` · `Partial` · `Not started`

## 1.1 Educator (Teacher)

| ID | Requirement | Status |
|---|---|---|
| FR1 | Behaviour entry in **3 taps or less**, so the teacher's eyes stay on the class | Not started |
| FR2 | Built-in Start/Stop timer automatically calculates behaviour duration | Not started |
| FR3 | Web Speech API dictation for hands-free notes | Not started |
| FR4 | **3 AI strategies per log**, student names kept private | Not started |
| NFR1 | AI strategies delivered in **under 3 seconds** | Not started |
| NFR2 | Works in Wi-Fi dead zones via a **local encrypted store** | Not started |

## 1.2 Parent

| ID | Requirement | Status |
|---|---|---|
| FR5 | Dashboard shows daily reports using the student's **First Name only** | Not started |
| FR6 | **Stripe** portal to book and pay for specialist sessions | Not started |
| FR7 | 3-month IEP-style reports behind **Parent Premium**. Must include: behaviour trends, trigger analysis, successful interventions, teacher observations, parent observations, specialist recommendations, SMART goal progress, emotional regulation patterns, engagement patterns, suggested next steps, optional attendance correlation | Not started |
| FR8 | Private area for **Home Observations** | Not started |
| FR9 | Parent AI strategy support — home logging, optional trigger selection, up to 3 anonymised safety-checked suggestions, specialist review on low confidence, safeguarding on high-risk keywords, premium gating | Not started |
| NFR3 | **Mobile-first** design | Partial — the marketing site is responsive; no app screens yet |
| NFR4 | Notifications carry **no names**, only a secure link | Not started |

## 1.3 Neurodiverse Specialist

| ID | Requirement | Status |
|---|---|---|
| FR10 | Low-confidence AI tips routed to a **specialist queue** for manual clinical checking | Not started |
| FR11 | **Private notes** invisible to parents and teachers | Not started |
| FR12 | **Version-controlled library** of proven strategies | Not started |
| NFR5 | Mandatory **2FA**; sessions time out after **20 minutes** | Not started |

## 1.4 School Admin

| ID | Requirement | Status |
|---|---|---|
| FR13 | Manage teacher↔student assignments; grant temporary permissions | Not started |
| FR14 | **Critical incidents locked** until admin review and approval | Not started |
| FR15 | School-level toggles for **Auto-share** and **Parent Invite** | Not started |
| FR16 | **Institutional KPI Dashboard**: emotional regulation trends, classroom escalation reduction, intervention effectiveness, absenteeism correlation, parent engagement score, specialist intervention success, school-wide wellbeing | Not started |

## 1.5 Platform Admin

| ID | Requirement | Status |
|---|---|---|
| FR17 | Assign a **Country** per school to trigger local privacy law | Not started |
| FR18 | Review teacher **WWCC and ID** via a Verification Pipeline | Not started |
| FR19 | Dashboard for **subscriptions and tax reporting** | Not started |

## 1.6 Super Admin

| ID | Requirement | Status |
|---|---|---|
| FR20 | Adjust **AI confidence thresholds** and toggle feature flags | Not started |
| FR21 | Global **Kill Switches** to stop AI or data sharing during a crisis | Not started |
| FR22 | Switch between **Development, Staging, Production** | Not started |
| NFR6 | Australian student data hosted in **AWS Sydney** | Done — Supabase project `qlenjoceptlezwqtzsjy` runs on AWS **ap-southeast-2 (Sydney)** |

## 1.7 Global & Cross-Functional

| ID | Requirement | Status |
|---|---|---|
| FR23 | Optional **Neurodevelopment Profile** with consent. Options: diagnosed, suspected, under assessment, prefer not to say. AI stays support-focused and non-diagnostic | Not started |
| FR24 | **SMART Goal Tracking** — create goals, assign milestones, monitor progress, weekly updates, request specialist review, attach behaviour evidence | Not started |
| FR25 | **Consent Management Engine** — digital forms, explicit approval workflow, revoke, audit history, timestamps, version control, specialist access approval, school visibility permissions | Not started |
| FR26 | **Communication Boundaries** — secure in-app messaging only, templates, restricted windows, school visibility logs, escalation rules, safeguarding triggers, no personal phone contact | Not started |
| NFR7 | Documentation must explicitly define architecture and functional scope for **both webapp and mobile app** | Partial — see `docs/FRONTEND-SCOPE.md` / `docs/BACKEND-SCOPE.md`; mobile scope undecided |

---

## Open architecture questions

Genuine conflicts between the requirements and what is currently built. Resolve these with the user before building the affected features.

1. ~~**NFR6 says AWS Sydney; the backend is on Supabase.**~~ **Resolved.** The live project (`qlenjoceptlezwqtzsjy`, org MiZanova) is hosted on AWS **ap-southeast-2 (Sydney)**, verified from the dashboard and by connecting. Australian data residency is satisfied, and student-data persistence is no longer blocked on this. Note the project is on the **Free plan** — free projects pause after inactivity and have no point-in-time recovery, so it is not suitable for real student data as-is.
2. **NFR1 (AI under 3s) has no AI provider chosen.** No model, prompt layer, or Judge-LLM exists yet.
3. **NFR2 / E03 require a PWA with encrypted local storage.** Vite is not configured as a PWA and no offline store exists. This affects frontend architecture significantly — decide before building the logging UI.
4. **FR6/FR7/FR19 require Stripe.** No Stripe integration or subscription model exists.
5. **NFR7 asks for a mobile app scope.** Only a web app exists. Confirm whether "mobile" means the responsive PWA or a separate native app.
6. **NFR5 requires 2FA and 20-minute specialist sessions.** Current auth is email/password with a 15-minute access token and 7-day refresh; no 2FA, no per-role session policy.
