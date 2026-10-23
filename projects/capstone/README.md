# Capstone: E-commerce data platform, from click to decision

One project that grows through the whole curriculum and becomes the portfolio. Each milestone maps to a curriculum phase.

## Reference stack

GA4 + GTM (tracking) · Python (custom ingestion) · **Snowflake** (warehouse, key pair auth, dev/prod) · **dbt** (transformation, tests, docs) · GitHub + GitHub Actions (CI) · Power BI or Looker Studio (BI) · reverse ETL concept for CRM sync · Claude + MCP (read-only agent). DuckDB is fine for early practice. See [STACK.md](../../STACK.md) to adapt it.

The project is analytics engineering focused: milestone 4 (the tested dbt project with CI and a customer layer) is the core, and every other milestone feeds or uses it.

## Data options
| Option | What | Good for |
|---|---|---|
| BigQuery public GA4 sample (`bigquery-public-data.ga4_obfuscated_sample_ecommerce`) | Real, obfuscated GA4 export from the Google Merchandise Store (a few months of data) | GA4 modeling, sessions, funnels |
| BigQuery public `thelook_ecommerce` | Synthetic e-commerce: users, orders, order items, products, events | Orders, customers, CLV, star schema. Export it and load into Snowflake (a good ingestion exercise) |
| Synthetic generator (ask the coach) | The practice webshop schema with planted quality issues | Full control, DuckDB locally, no cloud cost |
| Own tracked mini-site | A small site with data layer + GA4 | Phase 1 tracking milestone |

Never use real personal data in a public repo.

## Milestones

### M1 · Tracking and evidence (Phase 1)
- Mini site or practice page with `view_item`, `add_to_cart`, `purchase` pushes, GTM, GA4, consent state.
- Evidence chain document: one action traced through all links, including what could not be proven.
- Repo initialised: README skeleton, `.gitignore`, first commits.
**Skills:** `ae-web-tracking`, `ae-git-devops`, `ae-project-method`.

### M2 · Business case and metric tree (Phase 2)
- Customer journey map for the shop with data created and KPIs per stage.
- Metric tree and written definitions for revenue, orders, AOV, conversion rate, repurchase rate, CLV.
- Business Model Canvas, goal tree and prioritised KPIs; short business case: which decisions the platform supports.
- Customer data flow map: sources, identifiers, gaps.
**Skills:** `ae-business-journeys`, `ae-martech`, `ae-bi-metrics`, `ae-presentation-design`.

### M3 · Data loaded (Phase 3)
- Raw data in BigQuery, Snowflake or DuckDB with dev/prod separation and least-privilege roles.
- One custom ingestion (API or file) written in Python with classes, tests, idempotent loads and backfill.
- Star schema design document with grains and a bus matrix.
**Skills:** `ae-warehouses`, `ae-data-engineering`, `ae-apis`, `ae-python`, `ae-modeling`, `ae-sql`.

### M4 · Trusted models (Phase 4)
- dbt project: sources with freshness, staging, intermediate, marts (`fct_orders`, `fct_sessions`, `dim_customers`, `dim_products`).
- Tests on every primary and foreign key, accepted values, at least one singular test and one unit test; PII tagged and kept out of marts.
- Docs and lineage; CI on pull requests; a scheduled production run.
- Customer layer: identity map, golden `dim_customers`, lifecycle stages, consent and suppression flags, and a `mart_crm_sync` ready for a CRM or automation tool.
- Dashboard on the marts with defined metrics.
**Skills:** `ae-dbt`, `ae-governance-gdpr`, `ae-git-devops`, `ae-bi-metrics`, `ae-crm-automation`, `ae-customer-data-platforms`.

### M5 · Insight and AI (Phase 5)
- Measurement plan review, funnel, cohort and RFM analyses with a recommendation.
- One automation flow designed and evaluated against a holdout (simulated).
- Churn or CLV model with point-in-time features and a baseline comparison.
- "Company brain" agent: answers questions from documented marts and metric definitions with sources, evaluated on a golden set; read-only access.
- Final presentation (10 minutes) and polished README.
**Skills:** `ae-analytics`, `ae-statistics`, `ae-digital-analytics`, `ae-ai-ml`, `ae-mcp-tooling`, `ae-presentation-design`, `ae-career`.

## Definition of done per milestone
- Works and is verified (tests, reconciliations, screenshots).
- Documented in the README with What / Why / Result / Verification.
- Committed in small, clear commits on a branch, merged via PR.
- Learning log updated.

## Suggested repository layout
```
capstone/
├── README.md
├── docs/            # journey map, metric definitions, business case, evidence chain, learning log
├── ingestion/       # Python package + tests
├── dbt/             # dbt project
├── analysis/        # notebooks/SQL for analyses
├── ai/              # agent prototype + evaluation set
└── .github/workflows/
```
