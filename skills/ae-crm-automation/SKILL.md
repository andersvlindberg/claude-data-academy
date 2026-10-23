---
name: ae-crm-automation
description: CRM and marketing automation for the Analytics Engineering Academy. Use for questions about CRM systems and CRM as a way of working, contacts, accounts, leads, opportunities and pipelines, customer lifecycle stages, lead scoring and nurturing, MQL and SQL, CRM data quality, deduplication and golden records, customer service tickets, SLA, CSAT and NPS from service data, marketing automation logic with triggers, workflows, segments and suppression, email and SMS flows like welcome, abandoned cart, win-back and post-purchase, consent and opt-in, deliverability, personalisation, measuring automation with holdouts, CRM and automation tools such as Salesforce, HubSpot, Dynamics, Voyado, Klaviyo and Braze, and building CRM data models in the warehouse.
---

# Module 21: CRM and marketing automation

The customer data developer's home ground. CRM holds the relationship; marketing automation acts on it. Both are only as good as the data under them, and both are where analytics engineering meets day-to-day marketing and service.

**CRM is a way of working before it is a system.** Many companies run "CRM" across an e-commerce platform, a support tool, an email tool and analytics, without one system called CRM. The job is the same: know the customer, remember the relationship, act on it consistently.

## How to use this skill

Follow `ae-coach` for mode. Without it: explain → LEARN, design/build → BUILD, graded work → LEARN only.

Every CRM or automation design starts with:
1. **Customer problem and business goal** (not the tool).
2. **Lifecycle stage** the design serves (acquire, onboard, grow, retain, win back).
3. **Data needed:** identifier, events, attributes, consent state, and where each lives.
4. **Rules:** who enters, who is excluded (suppression), frequency limits, exit conditions.
5. **Measurement:** primary metric, holdout group, guardrails (unsubscribes, complaints).

## Mastery ladder

| Level | Evidence |
|---|---|
| L1 | Explains CRM versus CDP versus marketing automation, lifecycle stages, trigger versus workflow |
| L2 | Maps a lifecycle with stages and entry criteria; designs a welcome and an abandoned-cart flow with suppression and consent |
| L3 | Builds CRM-ready models in dbt (contacts, accounts, lifecycle stage, scores), deduplicates into golden records, and measures a flow with a holdout |
| L4 | Diagnoses why a CRM or automation program underperforms (data, process, organisation) and designs the operating model |

## Core knowledge

### CRM: system and way of working
- **Operational CRM:** sales, marketing and service processes (contacts, deals, cases).
- **Analytical CRM:** analysing customer data for segmentation, CLV, churn.
- **Collaborative CRM:** sharing customer information across functions and channels.
Support tools (Zendesk, Freshdesk) are service systems that hold relationship data; they are part of the CRM ecosystem even if not called CRM.

### Core objects
| Object | Meaning | B2C/B2B |
|---|---|---|
| Contact / person | An individual | Both |
| Account / company | An organisation | B2B |
| Lead | An unqualified potential customer | Mostly B2B |
| Opportunity / deal | A potential sale with value, stage and close date | B2B, high-value B2C |
| Activity | Email, call, meeting, page view logged to a contact | Both |
| Case / ticket | A service request | Both |
| Campaign / list / segment | A group targeted together | Both |

### Lifecycle and pipeline
Typical lifecycle: **subscriber → lead → marketing qualified lead (MQL) → sales qualified lead (SQL) → opportunity → customer → loyal customer / advocate** (and churned). In B2C the simplified version is **visitor → known (opted in) → first-time buyer → repeat buyer → loyal → at risk → lapsed**.
- Entry criteria for each stage must be written and agreed; otherwise marketing and sales count different things.
- **Pipeline** = opportunities by stage with value and probability; **weighted pipeline** = Σ value × stage probability.
- Key funnel metrics: stage conversion rates, velocity (days per stage), win rate, average deal size.

### Lead scoring and nurturing
- **Fit score** (who they are: role, company size, segment) + **engagement score** (what they do: visits, downloads, email clicks) with **decay** for old activity.
- Threshold to MQL agreed with sales; review conversion of MQL → SQL to recalibrate.
- **Nurturing:** sequences that educate leads not yet ready to buy, by topic and stage.

### CRM data quality ("garbage in, garbage out")
| Problem | Effect on the customer | Fix |
|---|---|---|
| Duplicates | Five-year customer gets "Welcome, new customer" | Matching rules, merge, golden record |
| Missing or inconsistent fields | Wrong segment, broken personalisation | Required fields, picklists, validation at entry |
| Different definitions ("active customer") | Teams report different numbers | Written definitions, one source |
| Stale data | Mail to old addresses, wrong preferences | Freshness rules, re-permission |
| Broken integrations (renamed field, rate limits) | Silent data loss | Monitoring, queues, alerts |
| No service context | Customer with an open complaint gets a sales email | Suppress on open tickets |

**Golden record:** the single best version of a customer built from all sources using **survivorship rules** (which source wins per field, e.g. newest verified email, address from order system). Deduplication = matching (deterministic on email/customer id, probabilistic on name+address) + merging + keeping a cross-reference of source ids.

### Customer service data as strategy
- Tickets become insight when **categorised and tagged** (reason, product, channel, sentiment).
- Service KPIs: **SLA** (agreed response/resolution time), **first contact resolution (FCR)**, average handle time, backlog, **CSAT** (per interaction), **CES** (effort), **NPS** (relationship; a lagging indicator).
- Rising unresolved tickets is a **leading** indicator of falling NPS next quarter.
- A hundred tickets about the same fault are an alarm, often before IT's own monitoring.
- Close the loop: feed ticket data to product, marketing (suppression) and the customer profile.

### Marketing automation logic
- **Trigger = the sensor** (an event or condition: signup, cart abandoned, 90 days since last order, birthday).
- **Workflow = the steps** (wait, check condition, send, branch, update field, exit).
- **Segment = who**; **suppression = who not** (unsubscribed, open complaint, just bought, recently contacted).
- **Exit conditions:** stop the flow when the goal is reached (customer bought).
- **Frequency capping:** a contact policy across all flows and campaigns.
- **Outbound** (company initiates) versus **inbound** (customer initiates, the company responds).
- **Automate a bad process and you get a bad process faster.** A perfectly built workflow on wrong data is harmful.

### Standard flows (B2C e-commerce)
| Flow | Trigger | Goal | Key data |
|---|---|---|---|
| Welcome / onboarding | Newsletter signup or account created | First purchase, preference capture | Consent, source, interests |
| Browse abandonment | Viewed product, no cart | Return to product | Product views, identity |
| Abandoned cart | Cart created, no purchase in X hours | Recover purchase | Cart contents, price, stock |
| Post-purchase | Order delivered | Satisfaction, review, cross-sell | Order, delivery status, category |
| Replenishment | Expected re-order time reached | Repeat purchase | Product usage cycle |
| Loyalty / VIP | Tier reached | Retain high value | CLV, tier |
| Win-back / reactivation | No purchase beyond the customer's normal interval | Return before lapse | Recency vs personal cadence |
| Seasonal / campaign | Calendar (Black Friday, Christmas) | Revenue peak | Segments, stock |

### Channels and permissions
- Email, SMS, push, in-app, direct mail, paid-media audiences (retargeting).
- **Consent and opt-in** per channel and purpose; double opt-in where appropriate; one-click unsubscribe; respect marketing law and GDPR (see `ae-governance-gdpr`).
- **Deliverability:** sender authentication (SPF, DKIM, DMARC), list hygiene, engagement-based sending, complaint rates. Major mailbox providers enforce sender requirements; check current rules.

### Personalisation
Personalisation is understanding **intention**, not inserting a first name. Levels: segment-based content → behaviour-triggered messages → individual recommendations → next-best-action. Personalisation becomes surveillance when the customer cannot understand how the company knows something.

### Measuring automation
- **Holdout / control group** per flow: the only honest measure of incremental effect.
- Metrics: delivered, open (unreliable since mail privacy features), click, conversion, revenue per recipient, unsubscribe and complaint rate, incremental revenue versus holdout.
- Attribution windows must be stated ("purchase within 5 days of click").

### Tools (examples; verify current features)
CRM: Salesforce, HubSpot, Microsoft Dynamics 365, Lime CRM, Pipedrive. B2C automation/CRM: Voyado, Klaviyo, Braze, Salesforce Marketing Cloud, Emarsys/SAP, Rule. B2B automation: HubSpot, Marketo, Pardot (Salesforce), Eloqua.

## Where the analytics engineer fits
- Builds the **customer models** that CRM and automation read: golden customer, lifecycle stage, RFM, CLV, churn score, consent state, suppression flags.
- Syncs them to tools with **reverse ETL** or native integrations; makes sure ids and consent travel with the data.
- Builds **measurement**: flow performance with holdouts, lifecycle movement, data quality dashboards.
- Writes and enforces **definitions** (active customer, MQL, churn) shared by marketing, sales and service.

## On the reference stack

Customer models built in dbt on Snowflake and synced to CRM and automation tools by reverse ETL (Hightouch or Census), with consent and suppression flags travelling along. Using another stack? Tell the coach once and it adapts (see STACK.md).

## Common misconceptions

- "Buying a CRM gives us a CRM." Without process, ownership and data quality you get an expensive address book.
- "More emails = more revenue." Until unsubscribes and fatigue eat the list; measure incrementally.
- "Open rate shows engagement." Privacy features inflate opens; use clicks and conversions.
- "Lead scoring is set and forget." Recalibrate against actual conversion.
- "Automation replaces strategy." It executes a strategy; it does not create one.

## Connects to

`ae-customer-data-platforms` (profiles, identity), `ae-martech` (the stack), `ae-business-journeys` (lifecycle and journeys), `ae-governance-gdpr` (consent, marketing law), `ae-dbt` (customer models), `ae-apis` (integrations, webhooks, reverse ETL), `ae-analytics` (holdouts, cohorts).

## References

- [references/crm-data-model.md](references/crm-data-model.md): dbt models for golden customer, lifecycle stage, suppression, lead score; dedup SQL.
- [references/automation-playbook.md](references/automation-playbook.md): flow design template, contact policy, abandoned cart and win-back specs, measurement with holdouts.
- [references/glossary-sv-en.md](references/glossary-sv-en.md): Swedish–English CRM and MarTech terms.
- [references/exercises.md](references/exercises.md)
