# MiZanova — Product Brief

> **Shared document.** An identical copy lives in `MiZanova-Frontend/docs/` and `MiZanova-Backend/docs/`. If you change one, change both.

**Company:** Special Miles Pty Ltd · **Tagline:** Balance. Discover. Thrive.

**Naming:** the ICT301 requirement documents call this product **InsightED**. The name is finalised as **MiZanova**. Any "InsightED" reference in an older document, Figma file or prompt means MiZanova.

---

## What MiZanova is

A neurodiversity-affirming behaviour support platform for schools. A teacher logs a classroom behaviour in **under 20 seconds and 3 taps**; the system returns up to **3 evidence-based support strategies** that have been anonymised and safety-screened before they are shown. Parents, specialists and administrators each get a role-scoped view of the same underlying data.

It is a **support tool, not a clinical tool.** Output is never diagnostic.

## The six actors

| Role | Who they are | Core job |
|---|---|---|
| **Educator (Teacher)** | Classroom teacher | Log behaviour fast, get safe strategies, work offline |
| **Parent** | Caregiver of a student | See daily reports, log home observations, book specialists, buy Premium |
| **Neurodiverse Specialist** | Clinical reviewer | Validate low-confidence AI strategies, keep private notes, maintain the strategy library |
| **School Admin** | Institution staff | Manage teacher↔student assignments, approve Critical incidents, set school policy, view KPIs |
| **Platform Admin** | Special Miles operations | Assign jurisdictions, verify teacher WWCC/ID, manage subscriptions and revenue |
| **Super Admin** | Technical root | AI thresholds, global kill switches, environments, regional pricing, system health |

## The two AI safety gates

Every AI strategy request passes through both, in this order:

1. **Anonymisation (always applies — an `include` relationship).** Student PII is stripped *before* anything is saved or sent to a model. The model sees "the student", never a name.
2. **Judge-LLM validation (conditional — an `extend` relationship).** Risk keywords (self-harm, violence, abuse) **block** AI generation outright and trigger the safeguarding workflow. Low-confidence output is routed to the Specialist Review Queue for manual clinical approval before release.

If AI is blocked, offline, or killed by a Super Admin switch, the system **falls back to the curated Evidence Database**. It never fails open and never returns unvalidated content.

---

## Non-negotiable rules

These constrain every code change. If a requested change breaks one, stop and raise it rather than implementing it.

1. **Never send student PII to a model.** No first name, last name, or identifying free text in a prompt. Strategy text must refer to "the student".
2. **Never let AI output reach a user unscreened.** Risk keywords block generation; low confidence routes to a specialist; blocked or offline falls back to the Evidence DB.
3. **Never produce diagnostic or medication content.** Strategies are educational and support-focused. Diagnostic labelling is a compliance defect.
4. **Parent-facing surfaces use the student's First Name only.** Notifications (incl. WhatsApp) carry **no names at all** — only a secure link.
5. **Critical incidents are locked** from parent sharing until a School Admin approves or edits them.
6. **Australian student data stays in the Australian region.** Jurisdiction is set per school by a Platform Admin and inherited by every user under it; users cannot override it.
7. **Consent gates access.** A specialist only sees students with explicit parental consent. Consent is revocable and versioned with an audit trail.
8. **2FA is mandatory** for Specialists and Super Admins. Specialist sessions time out after 20 minutes.
9. **In-app messaging only.** No direct personal phone contact between roles.
10. **Offline is a first-class state,** not an error. Local encrypted storage, automatic sync, and a visible Pending / Synced / Conflict indicator.
11. **Admin actions are auditable.** Deactivations, approvals, consent changes and config changes record actor ID and timestamp, immutably.
12. **No cross-institution data exposure**, ever — including in exports and reports.

---

## Source documents

Held outside the repos, under `C:\Users\ferdo\OneDrive\Desktop\koi\T1-26\ICT 301\`:

| File | Contents |
|---|---|
| `Final Requirements (1).docx` | **Canonical.** FR/NFR list, use case logic, WBS, user stories + acceptance criteria |
| `UPdated User Stories with acceptance criteria.docx` | Earlier user story pass |
| `Parent User Stories.docx` | Parent-specific detail |
| `Proposal Draft_2.docx`, `timeline and requirements.docx` | Background and schedule |
| `Gantt (2).pdf` | Delivery timeline |

The Figma design file is `UZ69SK3oHm9TxtmwDGQIQx` ("Untitled", Page 1) — the `Landing Page` frame is the marketing home page; other frames cover the app screens.

`docs/REQUIREMENTS.md`, `docs/USER-STORIES.md` and `docs/ROADMAP.md` in this repo are the working transcription of the canonical docx. If they disagree with the docx, the docx wins — and fix the transcription.
