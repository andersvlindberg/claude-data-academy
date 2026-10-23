---
name: ae-customer-data-platforms
description: Customer data platforms and the customer data ecosystem for the Analytics Engineering Academy. Use for questions about CDPs, data sources and data flows for customer data, internal and external sources, data silos, data integration, data ingestion by API, batch, file, SDK and streaming, identity resolution, device id versus user id, deterministic and probabilistic matching, unified customer profiles and customer 360, segmentation and activation, composable CDPs and reverse ETL, CDP versus CRM versus DMP versus data warehouse, first-party data, adtech including DSP, SSP, real-time bidding, conversions APIs and consent management platforms, and mapping a company's customer data flow.
---

# Module 22: Customer data platforms and the customer data ecosystem

Customer data is everywhere in a company: CRM, website, app, e-commerce, point of sale, customer service, email, loyalty program. Normal system integration seldom creates a connected picture of the customer. This module is the chain that does: **sources → ingestion → integration → quality → identity resolution → unified profile → segmentation → activation → business value.**

## How to use this skill

Follow `ae-coach` for mode. Without it: explain → LEARN, map/design → BUILD, graded work → LEARN only.

Always work customer-first: **Follow the customer. Follow the data. Understand the ecosystem. Create effect.** Never start with "which system should we buy?"

The four questions for any company or case:
1. **See:** what happens for the customer?
2. **Understand:** what happens to the data?
3. **Analyse:** what does it mean for systems, people and processes?
4. **Create:** what could we do better?

## Mastery ladder

| Level | Evidence |
|---|---|
| L1 | Explains data sources, silos, integration, CDP, identity resolution, segmentation and activation |
| L2 | Maps a company's customer data sources and draws its data flow, marking gaps and problems |
| L3 | Builds identity resolution and a unified profile in the warehouse, defines segments and an activation path with consent |
| L4 | Recommends packaged CDP versus composable (warehouse + reverse ETL) versus "fix the integrations" for a company, with evidence and uncertainty |

## Core knowledge

### Data sources and flows
- **Internal sources:** CRM, ERP, e-commerce, POS, app, website analytics, customer service, email/automation, loyalty, HR.
- **External sources:** social media, market research, public databases, partners, ad platforms.
- **Structured** (tables, records) versus **unstructured** (free text in tickets, reviews, call recordings).
- A **data flow** shows how data moves between systems: one-way or two-way, internal or external, batch or real time.
- **Challenges:** silos, data quality, security and integrity, incompatible formats.
- **Optimising flows:** automation, integration, standardisation, monitoring.

### Data integration (the basic process)
1. **Collect** from sources. 2. **Combine** (match keys, standardise formats). 3. **Analyse and use.** Benefits: one unified view, better decisions, efficient processes. Success factors: data quality, security, compatibility, ownership.

### Data ingestion into a CDP or warehouse
| Method | How | When |
|---|---|---|
| API | Real-time calls between systems | Need for immediate updates |
| Batch import | Scheduled transfer (nightly) | Reports, loyalty analysis |
| File transfer | CSV, XML or JSON files | Legacy systems, partners |
| SDK and event data | Directly from app or website | Behavioural events |
| Streaming | Continuous real-time stream | Speed is critical (a cancelled train departure now) |

### Data quality and standardisation
The same customer looks different in three systems: different ids, spellings, date formats, field names, missing and outdated values. Data must be validated, cleaned, standardised, normalised and enriched. **Bad data in → bad data out:** a CDP does not create good data from bad sources.

### Identity resolution
One person can exist in many systems with different identifiers: `customer_id` in e-commerce, `email` in the newsletter, `user_id` in the app, `cookie_id` on the website, `member_id` in loyalty, phone in customer service, card number in the store.
- **Device id / cookie** = the phone or browser. **User id** = the human after login. The link between them is the point.
- **Deterministic matching:** certain links (login, email, customer number).
- **Probabilistic matching:** likely links (IP, device, behaviour). Can merge the wrong people.
- The process is **matching, merging and deduplication**. It is never perfect; it needs good data and clear rules.

### Unified customer profile (single customer view, customer 360)
Who the customer is and which channels they use; what they bought and viewed; campaigns they responded to; service history and preferences; membership and latest activity. **What matters is that the information can be connected and used, not that it physically sits in one database.**

### Segmentation and activation
Example segments: frequent buyers (3+ purchases last year), interested but passive (viewed a category often, never bought), declining activity, loyal high value (high CLV), new members. Value is created only when data is **activated**: email and automation, ad platforms (Google, Meta), CRM and customer service, website and app personalisation, BI. Flow: **profile → segment → activation → customer experience**.

### CDP versus CRM versus data warehouse versus DMP
| | CDP | CRM | Data warehouse | DMP |
|---|---|---|---|---|
| Main job | Unify customer data into profiles and activate audiences | Manage known customer relationships and processes | Store and model data for analysis | Build anonymous audiences for advertising |
| Data | First-party, known and anonymous | Known contacts, deals, cases | Anything | Mostly third-party/cookie-based |
| Users | Marketing, CX | Sales, service, marketing | Data teams, BI | Media buyers |
| Status | Growing; overlaps with warehouses | Core system | Core infrastructure | Fading with third-party cookies |
Boundaries blur; organisations often run several in parallel.

**Packaged CDP** (Segment/Twilio, Bloomreach, Tealium, Salesforce Data Cloud, Adobe RT-CDP) versus **composable CDP** (the warehouse is the profile store; dbt builds profiles; reverse ETL such as Hightouch or Census activates). The composable route makes the analytics engineer central.

### First-party data
Data collected directly from the company's own customers and channels: web and app behaviour, purchases, CRM and service data, membership, surveys and preferences. More important as third-party cookies decline and privacy rules tighten. It is the most reliable data asset: you own it and know its origin.

### Data protection in the customer data ecosystem
Being technically able to integrate data does not mean it should be: legal basis per data point, data minimisation, access control, retention limits, customer rights (access, rectification, erasure). See `ae-governance-gdpr`.

### Adtech basics
- **Real-time bidding (RTB):** when a page loads, the publisher's **SSP** (supply-side platform) sends a bid request; advertisers' **DSPs** (demand-side platforms) bid; the highest bid wins, all in a fraction of a second.
- The **consent signal** travels with the bid request; without it, the flow should stop. A **CMP** (consent management platform) is the cookie banner system that records consent.
- **Conversions APIs** (e.g. Meta Conversions API, Google enhanced conversions) send purchases server-side, with consent and hashed identifiers.
- **Retargeting** uses first-party audiences or pixels to reach previous visitors.

### Common CDP challenges
Bad data quality (not a quick fix), silos and legacy systems, many identifiers, unclear definitions ("active customer"?) and ownership, and high expectations: a CDP does not solve business problems without good data, processes and goals.

### The customer data developer's role here
You work at the border between business, marketing, IT and data engineering. You need to discuss and analyse: which sources exist and what they collect; how data gets in and integrates; how the customer is identified and quality ensured; which profiles and segments are needed; where data is activated and what value it creates. You do not have to build all infrastructure yourself, but you must **understand, specify requirements and collaborate**.

## On the reference stack

Composable CDP: Fivetran/dlt in, identity resolution and profiles in dbt on Snowflake, activation by reverse ETL. Using another stack? Tell the coach once and it adapts (see STACK.md).

## Common misconceptions

- "A CDP gives us clean data." It amplifies whatever quality you put in.
- "Everything must be in one database." It must be connectable and usable.
- "Probabilistic matching is just as good." It can merge different people; use it carefully and transparently.
- "A new system is the answer." Often better data quality, integration, configuration or ways of working are.

## Connects to

`ae-crm-automation` (activation in CRM and flows), `ae-martech` (the stack), `ae-web-tracking` (identity on the web), `ae-dbt` (building profiles), `ae-apis` (ingestion, reverse ETL), `ae-governance-gdpr` (consent and minimisation), `ae-systems-processes` (system landscape).

## References

- [references/data-flow-mapping.md](references/data-flow-mapping.md): workshop method for mapping a company's customer data flow, with a worked hotel example.
- [references/identity-resolution.md](references/identity-resolution.md): identity graph model and SQL in the warehouse.
- [references/exercises.md](references/exercises.md)
