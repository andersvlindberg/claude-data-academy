---
name: ae-martech
description: Marketing technology and customer data for the Analytics Engineering Academy. Use for questions about MarTech versus adtech, the MarTech landscape, building a MarTech stack, CRM, CDP, DMP, CMS, marketing automation and customer flows, customer data types, marketing KPIs and their formulas such as CLV, CAC, churn, CTR, conversion rate, AOV, CPA, ROAS and ROI, NPS, CSAT and CES, attribution, organising around the customer, RACI and data ownership, brand and customer experience, and the MarTech course and lab.
---

# Module 08: MarTech and customer data

MarTech is where customer data turns into action: an email, an offer, a recommendation, a budget shift. The analytics engineer builds the data these systems run on, so they must speak marketing.

Core rule: **the stack follows the business.** Business goals → brand strategy → customer journey → MarTech stack. Technology is a means, not the goal.

## How to use this skill

Follow `ae-coach` for mode. Without it: explain → LEARN, design/build → BUILD, graded work → LEARN only.

For lab-style tasks use the course template for every exercise:
**Question** (what did we need to find out?) · **Answer** · **Example** (how it works in practice, ideally e-commerce) · **Source** (documentation or standard) · **Conclusion** (what it means and what we are still unsure about).

Calculate every KPI with the formula shown, state the assumptions, and flag when a number can mislead (e.g. high ROAS with low margin).

## Mastery ladder

| Level | Evidence |
|---|---|
| L1 | Explains MarTech versus adtech and the job of CMS, CRM, CDP, marketing automation, analytics and adtech |
| L2 | Calculates CLV, CAC, LTV:CAC, churn, CTR, CR, AOV, CPA, ROAS and ROI correctly with interpretation |
| L3 | Designs a stack and data flows for a business goal, including identity, consent and integrations; builds KPI marts |
| L4 | Advises on organisation (RACI, data ownership), attribution trade-offs and why stacks are underused |

## Core knowledge

### MarTech versus adtech
- **MarTech:** tools that support and automate marketing, sales and customer experience. Focus: journey, loyalty, personalisation, long-term relationships (CRM, email automation, CDP, personalisation engines).
- **Adtech:** advertising and campaign optimisation. Focus: buying attention and driving traffic (Google Ads, Meta Ads Manager, programmatic display).

The MarTech landscape has six areas: advertising and promotion, content and experience, social and relationships, commerce and sales, data, and management. The data area covers analytics, attribution, tag management, CDP, DMP, dashboards, governance and privacy.

### The systems and their jobs
| System | Job |
|---|---|
| CMS | Manages content |
| CRM | Manages relationships (contacts, deals, service history) |
| CDP | Collects and unifies customer data into profiles and audiences |
| Marketing automation | Orchestrates communication (flows, triggers, segments) |
| Analytics | Measures behaviour |
| Adtech | Drives traffic |
| Tag management | Controls what is sent where, under which consent |

**CDP versus CRM versus DMP:** a CRM is a system of record for known contacts and interactions; a CDP unifies first-party data from many sources into persistent profiles and activates audiences; a DMP worked mainly with anonymous third-party cookie audiences for advertising and is fading. A **composable CDP** uses the warehouse as the profile store and **reverse ETL** to activate audiences in tools, which puts the analytics engineer at the centre.

### Customer data
Seven types: customer (demographics, preferences), interaction (clicks, views, conversions), campaign (CTR, opens, ROI), transaction (purchases, order value), engagement (social, reviews, loyalty), segmentation, analysis (A/B results, attribution). Another way to layer it: identity, demographics, behaviour, transactions, communication/service.

When every department buys its own tool, the customer becomes five different people. Systems are organs, integrations are nerves, data is the impulses.

### KPIs on three levels
| Level | Question | Examples |
|---|---|---|
| Tactical (behaviour) | Does the activity work now? | CTR, open rate, conversion rate, session time, engagement rate |
| Strategic (brand) | Is the brand getting stronger? | Awareness, preference, NPS, share of search, repurchase rate |
| Structural (business) | Does the business model hold? | CLV, churn, CAC/LTV, revenue, profitability per segment |

KPI families: traffic and attraction, engagement and behaviour, conversion, experience and loyalty, financial performance, operational.

Formulas and pitfalls: see [references/kpi-formulas.md](references/kpi-formulas.md).

### Customer surveys
- **NPS** (loyalty): "How likely are you to recommend us?" 0–10. % promoters (9–10) minus % detractors (0–6).
- **CSAT** (experience): satisfaction with a specific interaction.
- **CES** (friction): how easy it was to get something done.
Read them together and triangulate with behaviour data and support tickets. Customers do not always do what they say.

### Marketing automation
A strategy, not just a tool. Trigger = the sensor, workflow = the steps. Standard flows: welcome series, abandoned cart, recommendations/cross-sell, loyalty, win-back, campaign and season. B2C tools include Voyado, Klaviyo and Emarsys; B2B tools include HubSpot, Eloqua and Pardot. **Automate a bad process and you get a bad process faster.**

### Attribution
Rule-based models: last click, first click, linear, time decay, position-based. Data-driven attribution uses modeling. All are **correlational**. Causal approaches: holdout/incrementality tests and marketing mix modeling (MMM). Analytics engineers build the touchpoint data; be explicit about which model a dashboard uses.

### Organisation
- **Silo** (functional): efficient locally, fragments the customer experience; MarTech becomes "IT's project".
- **Customer-centric:** shared vision of customer value, cross-functional teams per customer phase (acquisition, onboarding, retention).
- **RACI:** Responsible (does), Accountable (owns), Consulted, Informed. Ask: who owns customer data, who chooses systems, who follows up impact?
- **Data roles:** data owner = the business (purpose), data steward = quality, data custodian = IT (operations, security).
- Execution chain: strategy → organisation → roles → cross-functional ways of working → processes → change management → follow-up. Break one link and impact drops sharply.
- Stacks are often used far below capacity, and the cause is usually organisation, not technology.

### Brand and customer experience
Brand = expectation (the promise), CX = delivery, MarTech = keeping the promise consistently at scale. Match → loyalty; mismatch → distrust. Brand dimensions: functional, emotional, symbolic.

Why customers buy: psychographics before demographics; need versus want versus driver; four purchase stages (inspiration, comparison, trust, decision), where the right message in the wrong stage is the wrong message. Data shows **what**, interviews show **why**.

## Common misconceptions

- "Personalisation means using the first name." It means understanding intention.
- "ROAS 4 means profit." Not if margin is below 25%.
- "Average order value went up, so the campaign worked." Check conversion rate in parallel.
- "The CDP will fix our data." Not without ownership, definitions and quality.
- "Last-click shows what works." It shows what was last.

For deep dives see `ae-crm-automation` (CRM, lifecycle, automation flows) and `ae-customer-data-platforms` (CDP, identity resolution, adtech).

## Connects to

`ae-business-journeys` (journeys and touchpoints), `ae-web-tracking` (collection), `ae-bi-metrics` (KPI definitions), `ae-governance-gdpr` (consent and purpose), `ae-apis` (integrations, reverse ETL), `ae-analytics` (measuring effect).

## References

- [references/kpi-formulas.md](references/kpi-formulas.md): formulas, worked examples, pitfalls, SQL for each.
- [references/stack-architecture.md](references/stack-architecture.md): reference architecture for an e-commerce MarTech stack and the four-week lab arc.
- [references/course-notes-martech.md](references/course-notes-martech.md): my summary of the MarTech course: the red thread, perspectives, ecosystem thinking, integration concepts, what goes wrong, lab method.
- [references/exercises.md](references/exercises.md)
