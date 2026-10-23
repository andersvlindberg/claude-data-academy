---
name: ae-foundations
description: Data foundations for the Analytics Engineering Academy. Use for questions about what data is, data types, the data lifecycle from source to decision, ETL versus ELT at concept level, the roles in a data team (data engineer, analytics engineer, analyst, data scientist), the modern data stack, data maturity, and the principle of separating observation from interpretation.
---

# Module 01: Data foundations

The mental map every other module hangs on. If a learner is confused about where something happens, come back here.

## How to use this skill

Follow `ae-coach` for mode (LEARN, BUILD, QUIZ, REVIEW). If `ae-coach` is not loaded: explain-type questions default to LEARN (diagnose, one step at a time, check understanding); build requests default to BUILD (plan, confirm, verify). Graded coursework is always LEARN.

## Mastery ladder

| Level | Evidence |
|---|---|
| L1 | Draws the lifecycle (sources → ingest → store → transform → serve → decide) and places five tools on it |
| L2 | Maps a real scenario (a webshop purchase from ad click to dashboard) onto the lifecycle, naming the data created at each step |
| L3 | Explains where a given data problem most likely originates and who owns fixing it |
| L4 | Explains the difference between DE, AE and analyst roles with trade-offs and argues where they sit |

## Core knowledge

### The data lifecycle

| Step | Question it answers | Typical tools | Main role |
|---|---|---|---|
| Sources | Where is data born? | Web/app, GA4, CRM, ERP, payment, support tools, files | Product and engineering teams |
| Ingest | How does it get out? | Native exports, APIs, Fivetran/Airbyte, custom Python | Data engineer |
| Store | Where does it live? | BigQuery, Snowflake, Databricks, Postgres, data lake | Data engineer |
| Transform | How does it become usable? | dbt, SQL, Spark | Analytics engineer |
| Serve | Who consumes it? | BI dashboards, semantic layer, reverse ETL, ML features, AI agents | Analytics engineer, analyst |
| Decide | What changes because of it? | Meetings, campaigns, product changes | Business, with the analyst |

Orchestration, quality, governance and version control run across all steps.

### Observation versus interpretation

The single most important habit in the academy.

| Observation (what we can prove) | Interpretation (what we assume) |
|---|---|
| a request was sent | the server stored it |
| status 200 was returned | the user understood |
| a cookie was set | the user is recognised |
| the payload contained an id | same id = same person |
| the dashboard shows 0 purchases | no one bought anything |

Measurement data is a **constructed picture** of reality, not reality itself. Every conclusion should state what the evidence supports **and** what it does not show.

### Data types and shapes

- **Structured** (tables with a fixed schema), **semi-structured** (JSON, nested GA4 events), **unstructured** (text, images, call recordings).
- **Transactional** (orders, payments: the business event happened) versus **behavioural** (clicks, views: a measurement event was sent). They often disagree, and both can be "right".
- **First-party** (collected by you), **second-party** (partner's first-party), **third-party** (bought/aggregated, increasingly restricted).
- **Customer data layers:** identity, demographics, behaviour, transactions, communication/service.

### ETL versus ELT

- **ETL:** transform before loading. Older pattern, used when storage was expensive or data must be cleaned before landing (e.g. strip PII).
- **ELT:** load raw data first, transform inside the warehouse. The modern default because warehouses are cheap and scalable, and raw data stays available for reprocessing. dbt lives in the T of ELT.

### Roles

| Role | Owns | Typical output |
|---|---|---|
| Data engineer | Infrastructure, ingestion, reliability, scale | Pipelines, platforms |
| Analytics engineer | Transformation, modeling, testing, documentation, metric definitions | Trusted tables (marts), semantic layer |
| Data analyst | Questions, analysis, insight, communication | Analyses, dashboards, recommendations |
| Data scientist / ML engineer | Prediction, experimentation, models | Models, experiments |
| Data owner / steward | Purpose, quality and rules for a data domain | Definitions, policies |

The analytics engineer is **the bridge**: engineering practices (version control, tests, CI) applied to business logic.

### Data maturity

A simple four-step scale useful in business cases:
1. **Ad hoc:** spreadsheets, manual exports, numbers disagree.
2. **Centralised:** a warehouse exists, some dashboards.
3. **Trusted:** modeled, tested, documented data; one definition per metric.
4. **Data-driven:** decisions and automation run on the data; data products have owners.

## Common misconceptions

- "The dashboard is the data." It is the last interpretation of many.
- "More data means better decisions." Unclear definitions with more data means more confusion.
- "GA4 numbers should match the order system." They measure different things (measurement events versus business events).
- "Analytics engineer is just a fancy analyst." The difference is engineering discipline on the transformation layer.

## Connects to

`ae-web-tracking` (where data is born), `ae-data-engineering` (moving it), `ae-dbt` (modeling it), `ae-business-journeys` (why it matters).

## References

- [references/scenario-click-to-decision.md](references/scenario-click-to-decision.md): one purchase followed through the full chain.
- [references/exercises.md](references/exercises.md)
