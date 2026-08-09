# MiZanova — User Stories & Acceptance Criteria

> **Shared document.** An identical copy lives in `MiZanova-Frontend/docs/` and `MiZanova-Backend/docs/`. If you change one, change both.
>
> Transcribed from `Final Requirements (1).docx` §4. Acceptance criteria are the definition of done — implement against these, not against a paraphrase.

## Educator (Teacher)

| ID | Story | Acceptance criteria |
|---|---|---|
| **E01** | Log a behaviour in under 20 seconds, so I can keep my eyes on the class | Home screen has 4 large buttons for common behaviour categories · log saved in **3 taps or less** after student selection · saves instantly to a **local encrypted DB** (offline-ready) |
| **E02** | Receive 3 quick AI tips only after safety screening, so I provide safe support | AI generation **blocked** if risk keywords (self-harm, violence, abuse) detected · safeguarding workflow triggered and **School Admin notified immediately** · falls back to the curated Evidence DB when AI is blocked or offline |
| **E03** | The app works without Wi-Fi, so I don't lose data in dead zones | Logging to a local encrypted store while offline · auto-sync on reconnect · status indicator shows **Pending / Synced / Conflict** |
| **E04** | Use a timer for incidents, so I record exact duration | Start records the time, Stop calculates total duration · duration saved automatically to the student's log |
| **E05** | The system refers to the student generically in AI text, so identity is protected | AI must not use first or last name as a reasoning variable or in instructional text · strategy content refers to **"the student"** |
| **E06** | Complete professional verification, so my account is activated | Upload legal name, WWCC number + expiry, qualifications, government ID · status pipeline **Draft → Submitted → Pending Review → Approved → 2FA Enabled → Active** · a Platform Admin must approve before the teacher is active |

## Parent

| ID | Story | Acceptance criteria |
|---|---|---|
| **P01** | See daily reports on my phone | Dashboard shows a summary list of the child's behaviours for that day · notification whenever a teacher shares a new strategy |
| **P02** | Watch training videos and toolkits | A "Library" page lists and plays video modules and evidence-based resources · per-module completion progress is visible |
| **P03** | A private note-taking area | Secure section to create, edit and delete home-based notes · **Export** to PDF or CSV |
| **P04** | The app works perfectly on my phone | Buttons and text large enough to read and tap on small screens · simple navigation reachable from the home screen |
| **P05** | Book a session with a Specialist | Calendar view of available dates/times for assigned specialists · **Book** processes through a secure payment link |
| **P06** | Receive 3 support strategies for behaviours I observe at home | Submit a home observation in under 1 minute · system generates 3 practical strategies · high-risk terms trigger safeguarding · low-confidence routes to specialist review · Premium parents can save/export strategy history |

## School Admin

| ID | Story | Acceptance criteria |
|---|---|---|
| **S01** | Manage teacher-student assignments | Admin manages which teachers are assigned to which student profiles · can grant temporary / time-bound access |
| **S02** | Review Critical Incident reports before sharing | Auto-notify School Admin when a teacher flags a behaviour **Critical** · parent sharing **locked** until the admin approves or edits |
| **S03** | Export anonymised behaviour trends | Quarterly trend reports as PDF/CSV · **zero cross-institution data exposure** |
| **S04** | Toggle Auto-share and Parent Invite policies | ON/OFF toggles for both · admin **cannot** view private parent notes without explicit permission |
| **S05** | Deactivate staff accounts | View all teachers in the school, deactivate or remove · every deactivation logged with actor ID and timestamp |

## Neurodiverse Specialist

| ID | Story | Acceptance criteria |
|---|---|---|
| **N01** | Access a queue of low-confidence strategies to validate manually | Strategies with a **Low** Judge-LLM score route to this role · Approve / Reject buttons control release |
| **N02** | Check strategies for clinical language | Flag strategies containing diagnostic labelling or medication guidance · flagged strategies **blocked** from delivery |
| **N03** | View past behaviour logs and reports | Clicking a student opens full behavioural history and patterns · **only students with explicit parental consent appear** |
| **N04** | Add my own professional notes | Private text field for specialist observations · saved with a **non-editable** date and specialist name |
| **N05** | Send messages to parents | Secure messaging to parents and teachers · recipients see a notification icon on new messages |

## Platform Admin (Special Miles)

| ID | Story | Acceptance criteria |
|---|---|---|
| **A01** | Assign a Country to a school | Country selection determines the privacy framework (APP for AU, GDPR for UK) · all users under the school **inherit it and cannot override** |
| **A02** | Verify teacher credentials (WWCC and ID) | Dashboard tracks uploads and triggers **expiry alerts** · approve, suspend or deactivate based on verification status |
| **A03** | Configure school subscription tiers | Configure B2B tiers (Small, Mid, Large) and discount categories · enable/disable offline mode **per school** |
| **A04** | View operational AI metrics | Show flagged strategies and confidence trends · review ratio of AI-generated vs Database-only strategies |
| **A05** | Read-only revenue dashboard | Trial schools, active subscriptions, revenue summaries via Stripe · GST/tax reporting by the school's country |

## Super Admin (Technical Root)

| ID | Story | Acceptance criteria |
|---|---|---|
| **T01** | Adjust Judge-LLM confidence thresholds | Manual setting of confidence scores for strategy delivery · adjustments require root login with **hardware-based 2FA and IP allowlist** |
| **T02** | Global Kill Switches | System-wide **Global AI Disable** and **Parent Sharing Pause** · triggering forces immediate fallback to the Evidence DB for all users |
| **T03** | Manage environments and global feature flags | Switch between Dev, Staging, Production · toggle system-wide features like Offline Mode or AI Mode |
| **T04** | Configure regional pricing and data residency | Set currency, institutional tiers and tax rules per region · residency must align with the school's country config |
| **T05** | Monitor system health and API error rates | Real-time CPU, memory, database size, Stripe webhook health · automated alerts when thresholds are exceeded · target **99.5% uptime** |
