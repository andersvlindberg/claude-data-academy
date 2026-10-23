---
name: ae-digital-analytics
description: Digital analytics for the Analytics Engineering Academy. Use for questions about web and app analytics with GA4, measurement plans and tracking plans, connecting measurement to business value, GA4 reports, explorations, dimensions, metrics, sessions, users and engagement, conversion rate optimisation, landing pages and UX research, heatmaps and session recordings, marketing analytics, UTM parameters, channel grouping, SEO and paid search data, attribution, marketing mix modeling and incrementality, sustainable and privacy-friendly data collection, and the Google Analytics certification.
---

# Module 23: Digital analytics

Digital analytics measures what people do in digital channels and turns it into decisions about marketing, product and the customer journey. It sits between tracking (`ae-web-tracking`) and the warehouse (`ae-dbt`).

## How to use this skill

Follow `ae-coach` for mode. Without it: explain → LEARN, plan/analyse → BUILD, graded work → LEARN only.

Every measurement starts with a **measurement plan**: business objectives → goals → KPIs → targets → segments → events and parameters. Never start with "track everything".

## Mastery ladder

| Level | Evidence |
|---|---|
| L1 | Explains users, sessions, events, conversions (key events), channels and the measurement plan idea |
| L2 | Writes a measurement plan and tracking plan for a site; builds GA4 explorations (funnel, path, segment) |
| L3 | Runs a CRO cycle (research → hypothesis → test → learn); builds channel and campaign reporting in the warehouse with UTM governance |
| L4 | Explains attribution limits, chooses between attribution, incrementality tests and MMM, and designs privacy-friendly measurement |

## Core knowledge

### Measurement plan
| Level | Example (furniture e-commerce) |
|---|---|
| Business objective | Grow online revenue profitably |
| Goals | More purchases from returning visitors; higher add-to-cart rate |
| KPIs | Conversion rate, revenue per session, add-to-cart rate, repurchase rate |
| Targets | CR from 1.8% to 2.2% this year |
| Segments | Channel, device, new vs returning, category |
| Events and parameters | `view_item`, `add_to_cart`, `begin_checkout`, `purchase` with item and value parameters |

The **tracking plan** is the technical specification: event name, trigger, parameters (name, type, example), where it is sent, consent category, owner, status. See [references/measurement-and-tracking-plan.md](references/measurement-and-tracking-plan.md).

### GA4 concepts
- **Event-based model:** everything is an event with parameters. **Key events** (formerly conversions) mark important actions.
- **Users** (active users, new users), **sessions** (started by `session_start`), **engaged sessions** (lasting long enough, with a key event, or with multiple page views; check current definition), **engagement rate**.
- **Dimensions** describe (channel, device, page); **metrics** count (users, sessions, revenue). **Scope** matters: user-, session-, event- and item-scoped data do not always combine.
- **Reports** (standard, customisable) versus **Explorations** (free form, funnel, path, segment overlap, cohort, user lifetime).
- **Data thresholds and sampling** can hide or approximate data in the interface; the BigQuery export gives raw events.
- **Data retention** settings limit explorations on old data; the export keeps raw data.
- **Consent Mode** and modeling affect numbers in the interface.
- Default **channel grouping** is rule-based on source/medium; it depends on correct UTMs.

### UTM governance
`utm_source` (google, newsletter), `utm_medium` (cpc, email, social), `utm_campaign`, optional `utm_content`, `utm_term`. Write a naming convention, use lowercase, keep a campaign register, and never tag internal links (it restarts attribution).

### Conversion rate optimisation (CRO)
1. **Research:** analytics (where do people drop?), qualitative (surveys, user tests, interviews), heatmaps and session recordings (Hotjar, Microsoft Clarity; consent applies), heuristic review (clarity, relevance, friction, distraction, urgency, trust).
2. **Hypothesis:** "Because we saw [data], we believe [change] for [segment] will [effect], measured by [metric]."
3. **Prioritise** with PIE (potential, importance, ease) or ICE (impact, confidence, ease).
4. **Test:** A/B or multivariate with proper design (see `ae-statistics`).
5. **Learn and document**, including failed tests.
Landing page basics: one clear goal, message match with the ad, visible value proposition, social proof, fast load, few distractions, mobile first.

### Marketing analytics
- **Channel performance:** sessions, CR, revenue, cost, CPA, ROAS per channel and campaign (cost data imported from ad platforms).
- **SEO data:** Google Search Console (impressions, clicks, CTR, position by query and page).
- **Paid search and social:** platform data (Google Ads, Meta) versus analytics data differ in attribution and counting; reconcile, do not expect equality.
- **Share of search** as a brand indicator.

### Attribution and effect
| Approach | What it says | Limits |
|---|---|---|
| Last click / last non-direct | Credit to the final touch | Undervalues awareness |
| Rule-based multi-touch | Splits credit by rule | Arbitrary |
| Data-driven attribution (GA4) | Model-based credit across touches | Black box, only observed touches |
| Incrementality test (geo/holdout) | Causal lift of a channel | Needs volume and time |
| Marketing mix modeling (MMM) | Statistical effect of spend on outcomes, including offline | Needs history; coarse |
Use attribution for day-to-day optimisation, incrementality and MMM for budget decisions.

### Sustainable and privacy-friendly collection
Collect only what the measurement plan needs (minimisation), respect consent before tags fire, prefer first-party and server-side setups with clear purposes, avoid sending personal data to analytics tools, reduce third-party tags (performance and privacy), document everything. Lighter pages and fewer tags are also a sustainability gain.

## On the reference stack

GA4 + GTM collect; the GA4 export lands in BigQuery and is modeled with dbt (or moved into Snowflake); campaign cost data arrives via Fivetran from ad platforms. Using another stack? Tell the coach once and it adapts (see STACK.md).

## Common misconceptions

- "GA4 shows the truth." It shows consented, modeled, sampled measurement events.
- "More events = better analytics." A measurement plan with fewer, well-defined events beats a pile.
- "The winning channel in last click deserves the budget." It may be harvesting demand created elsewhere.
- "Heatmaps tell us why." They show where; research tells why.

## Connects to

`ae-web-tracking` (implementation), `ae-analytics` (analysis methods), `ae-statistics` (testing), `ae-martech` (channels and KPIs), `ae-bi-metrics` (reporting), `ae-dbt` (GA4 models), `ae-governance-gdpr` (consent).

## References

- [references/measurement-and-tracking-plan.md](references/measurement-and-tracking-plan.md): templates and a worked example.
- [references/exercises.md](references/exercises.md): exercises, quiz and Google Analytics certification prep.
