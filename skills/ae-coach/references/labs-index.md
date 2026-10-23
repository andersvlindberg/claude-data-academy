# Labs: practical experience in the stack

Every role has its own track of **20 labs**, from foundations to a capstone. Some labs are shared between roles. Pick your role, work down the track, and put each lab in your portfolio.

**How to run a lab:** open Claude Code in an empty folder or your capstone repo and type `LAB 08` (any number). You write the code; Claude explains, reviews and debugs with you. Want the theory first? Ask for `LECTURE: <topic>` in the Claude app.

**Always start in your [study hub](https://github.com/andersvlindberg/claude-data-academy/tree/main/hub)**: take the lecture, then do the practical step in Claude Code, then commit it to your fork on GitHub. Each lecture ends with a practice project that your own Claude creates for that step: a fictional scenario, generated data and a real tool. Nothing has to exist in advance; [Nordvik Outdoor](https://github.com/andersvlindberg/claude-data-academy/tree/main/datasets/nordvik) is a ready-made example dataset if you want one.

**Full labs** (00–20) have step-by-step instructions. **Brief labs** (21–64) have milestones, and the coach turns them into steps for your level.

**Finished a track?** Ask the coach: *"Give me 5 new labs for my analytics engineer track at level L3"*, or use the button in your [study hub](https://github.com/andersvlindberg/claude-data-academy/tree/main/hub).

**Cost:** start free with DuckDB and the BigQuery sandbox. Labs marked *trial* use time-limited trials; start them when you're ready. See [START-HERE.md](https://github.com/andersvlindberg/claude-data-academy/blob/main/START-HERE.md).

## Data engineer track

**Foundations**

| # | Lab | Level | Time | Cost |
|---|---|---|---|---|
| 1 | [Lab 00: Start here: the role, the stack and your workspace](https://github.com/andersvlindberg/claude-data-academy/blob/main/labs/lab-00-start-role-stack-workspace.md) | L1 | 1–2 h | Free |
| 2 | [Lab 01: Your first local warehouse with DuckDB](https://github.com/andersvlindberg/claude-data-academy/blob/main/labs/lab-01-duckdb-sql-basics.md) | L1 | 1–2 h | Free |
| 3 | [Lab 21: Python scripts that fetch data reliably](https://github.com/andersvlindberg/claude-data-academy/blob/main/labs/lab-21-python-data-scripts.md) | L1–L2 | 2 h | Free |
| 4 | [Lab 05: Ingest a REST API with dlt](https://github.com/andersvlindberg/claude-data-academy/blob/main/labs/lab-05-dlt-api-ingestion.md) | L2 | 2–3 h | Free |
| 5 | [Lab 22: CSV, JSON and Parquet: formats and partitioning](https://github.com/andersvlindberg/claude-data-academy/blob/main/labs/lab-22-file-formats-parquet.md) | L1–L2 | 1–2 h | Free |
| 6 | [Lab 04: Track an e-commerce event with GTM and verify it in DevTools](https://github.com/andersvlindberg/claude-data-academy/blob/main/labs/lab-04-gtm-ga4-tracking.md) | L2 | 2–3 h | Free |
| 7 | [Lab 06: Set up Snowflake like a team would](https://github.com/andersvlindberg/claude-data-academy/blob/main/labs/lab-06-snowflake-setup.md) | L2 | 2 h | Trial (30 days) |

**Core**

| # | Lab | Level | Time | Cost |
|---|---|---|---|---|
| 8 | [Lab 07: Managed ingestion with Fivetran](https://github.com/andersvlindberg/claude-data-academy/blob/main/labs/lab-07-fivetran-to-snowflake.md) | L2 | 1–2 h | Fivetran free plan / trial |
| 9 | [Lab 23: Move the GA4 export from BigQuery into Snowflake](https://github.com/andersvlindberg/claude-data-academy/blob/main/labs/lab-23-ga4-bigquery-to-snowflake.md) | L2–L3 | 3 h | Free + trial |
| 10 | [Lab 24: Docker and a Postgres source database](https://github.com/andersvlindberg/claude-data-academy/blob/main/labs/lab-24-docker-postgres-source.md) | L2 | 2 h | Free |
| 11 | [Lab 25: Change data capture and incremental extraction](https://github.com/andersvlindberg/claude-data-academy/blob/main/labs/lab-25-cdc-incremental-extraction.md) | L3 | 2–3 h | Free |
| 12 | [Lab 11: dbt CI with GitHub Actions and Slim CI](https://github.com/andersvlindberg/claude-data-academy/blob/main/labs/lab-11-dbt-ci-github-actions.md) | L3 | 2–3 h | Free |
| 13 | [Lab 13: Orchestrate dlt and dbt with Dagster](https://github.com/andersvlindberg/claude-data-academy/blob/main/labs/lab-13-dagster-orchestration.md) | L3 | 3–4 h | Free (local) |
| 14 | [Lab 26: Partitions, backfills and idempotent pipelines](https://github.com/andersvlindberg/claude-data-academy/blob/main/labs/lab-26-partitions-backfills.md) | L3 | 2–3 h | Free |

**Advanced**

| # | Lab | Level | Time | Cost |
|---|---|---|---|---|
| 15 | [Lab 14: Privacy by design: zones, pseudonymisation and masking](https://github.com/andersvlindberg/claude-data-academy/blob/main/labs/lab-14-privacy-zones-masking.md) | L3 | 3 h | Trial / free |
| 16 | [Lab 27: Data observability: freshness, volume and schema alerts](https://github.com/andersvlindberg/claude-data-academy/blob/main/labs/lab-27-data-observability.md) | L3 | 2 h | Free |
| 17 | [Lab 28: Infrastructure as code: Snowflake with Terraform](https://github.com/andersvlindberg/claude-data-academy/blob/main/labs/lab-28-terraform-snowflake.md) | L3 | 3 h | Trial |
| 18 | [Lab 29: Cost control: sizing, profiling and budgets](https://github.com/andersvlindberg/claude-data-academy/blob/main/labs/lab-29-warehouse-cost-control.md) | L2–L3 | 2 h | Trial / free |
| 19 | [Lab 30: Streaming basics: events in micro-batches](https://github.com/andersvlindberg/claude-data-academy/blob/main/labs/lab-30-streaming-intro.md) | L3 | 2–3 h | Free |
| 20 | [Lab 32: DE capstone: an end-to-end pipeline with a runbook](https://github.com/andersvlindberg/claude-data-academy/blob/main/labs/lab-32-de-capstone.md) | L3–L4 | 8–12 h | Free + trials |

## Analytics engineer track

**Foundations**

| # | Lab | Level | Time | Cost |
|---|---|---|---|---|
| 1 | [Lab 00: Start here: the role, the stack and your workspace](https://github.com/andersvlindberg/claude-data-academy/blob/main/labs/lab-00-start-role-stack-workspace.md) | L1 | 1–2 h | Free |
| 2 | [Lab 01: Your first local warehouse with DuckDB](https://github.com/andersvlindberg/claude-data-academy/blob/main/labs/lab-01-duckdb-sql-basics.md) | L1 | 1–2 h | Free |
| 3 | [Lab 02: Explore real GA4 e-commerce data in BigQuery](https://github.com/andersvlindberg/claude-data-academy/blob/main/labs/lab-02-ga4-bigquery-explore.md) | L1–L2 | 2 h | Free (sandbox, no card) |
| 4 | [Lab 03: Sessions and a purchase funnel with window functions](https://github.com/andersvlindberg/claude-data-academy/blob/main/labs/lab-03-ga4-funnel-window-functions.md) | L2 | 2–3 h | Free |
| 5 | [Lab 06: Set up Snowflake like a team would](https://github.com/andersvlindberg/claude-data-academy/blob/main/labs/lab-06-snowflake-setup.md) | L2 | 2 h | Trial (30 days) |
| 6 | [Lab 08: Your first dbt project: sources, staging and tests](https://github.com/andersvlindberg/claude-data-academy/blob/main/labs/lab-08-dbt-first-project.md) | L2 | 3 h | Free |
| 7 | [Lab 09: Dimensional modelling in dbt: facts and dimensions](https://github.com/andersvlindberg/claude-data-academy/blob/main/labs/lab-09-dbt-dimensional-modeling.md) | L2–L3 | 3–4 h | Free |

**Core**

| # | Lab | Level | Time | Cost |
|---|---|---|---|---|
| 8 | [Lab 33: Jinja and macros in dbt](https://github.com/andersvlindberg/claude-data-academy/blob/main/labs/lab-33-dbt-jinja-macros.md) | L2–L3 | 2–3 h | Free |
| 9 | [Lab 35: dbt packages: dbt_utils, codegen and audit_helper](https://github.com/andersvlindberg/claude-data-academy/blob/main/labs/lab-35-dbt-packages.md) | L2 | 2 h | Free |
| 10 | [Lab 10: Incremental models and snapshots (SCD type 2)](https://github.com/andersvlindberg/claude-data-academy/blob/main/labs/lab-10-dbt-incremental-snapshots.md) | L3 | 3 h | Free |
| 11 | [Lab 12: Data quality: contracts, freshness and anomaly checks](https://github.com/andersvlindberg/claude-data-academy/blob/main/labs/lab-12-data-quality-contracts.md) | L3 | 2–3 h | Free |
| 12 | [Lab 11: dbt CI with GitHub Actions and Slim CI](https://github.com/andersvlindberg/claude-data-academy/blob/main/labs/lab-11-dbt-ci-github-actions.md) | L3 | 2–3 h | Free |
| 13 | [Lab 36: GA4 in dbt: sessions and e-commerce marts](https://github.com/andersvlindberg/claude-data-academy/blob/main/labs/lab-36-ga4-in-dbt.md) | L3 | 3–4 h | Free |
| 14 | [Lab 37: Semantic layer and metrics with MetricFlow](https://github.com/andersvlindberg/claude-data-academy/blob/main/labs/lab-37-semantic-layer-metrics.md) | L3 | 2–3 h | Free (local) |

**Advanced**

| # | Lab | Level | Time | Cost |
|---|---|---|---|---|
| 15 | [Lab 13: Orchestrate dlt and dbt with Dagster](https://github.com/andersvlindberg/claude-data-academy/blob/main/labs/lab-13-dagster-orchestration.md) | L3 | 3–4 h | Free (local) |
| 16 | [Lab 14: Privacy by design: zones, pseudonymisation and masking](https://github.com/andersvlindberg/claude-data-academy/blob/main/labs/lab-14-privacy-zones-masking.md) | L3 | 3 h | Trial / free |
| 17 | [Lab 38: Refactor a legacy SQL report into dbt](https://github.com/andersvlindberg/claude-data-academy/blob/main/labs/lab-38-legacy-sql-to-dbt.md) | L3 | 3 h | Free |
| 18 | [Lab 19: Activate segments in a CRM (reverse ETL)](https://github.com/andersvlindberg/claude-data-academy/blob/main/labs/lab-19-reverse-etl-crm.md) | L3 | 2–3 h | Free |
| 19 | [Lab 20: Safe AI on your marts: Claude + MCP, read-only](https://github.com/andersvlindberg/claude-data-academy/blob/main/labs/lab-20-claude-mcp-warehouse.md) | L3 | 2 h | Free / trial |
| 20 | [Lab 39: AE capstone: the Nordvik analytics platform](https://github.com/andersvlindberg/claude-data-academy/blob/main/labs/lab-39-ae-capstone.md) | L3–L4 | 10–15 h | Free + trials |

## Data analyst track

**Foundations**

| # | Lab | Level | Time | Cost |
|---|---|---|---|---|
| 1 | [Lab 00: Start here: the role, the stack and your workspace](https://github.com/andersvlindberg/claude-data-academy/blob/main/labs/lab-00-start-role-stack-workspace.md) | L1 | 1–2 h | Free |
| 2 | [Lab 01: Your first local warehouse with DuckDB](https://github.com/andersvlindberg/claude-data-academy/blob/main/labs/lab-01-duckdb-sql-basics.md) | L1 | 1–2 h | Free |
| 3 | [Lab 02: Explore real GA4 e-commerce data in BigQuery](https://github.com/andersvlindberg/claude-data-academy/blob/main/labs/lab-02-ga4-bigquery-explore.md) | L1–L2 | 2 h | Free (sandbox, no card) |
| 4 | [Lab 40: Spreadsheets for analysts: pivots, XLOOKUP and validation](https://github.com/andersvlindberg/claude-data-academy/blob/main/labs/lab-40-sheets-for-analysts.md) | L1 | 2 h | Free |
| 5 | [Lab 03: Sessions and a purchase funnel with window functions](https://github.com/andersvlindberg/claude-data-academy/blob/main/labs/lab-03-ga4-funnel-window-functions.md) | L2 | 2–3 h | Free |
| 6 | [Lab 41: Exploratory analysis in Python with pandas](https://github.com/andersvlindberg/claude-data-academy/blob/main/labs/lab-41-pandas-eda.md) | L2 | 2–3 h | Free |
| 7 | [Lab 15: A decision-ready dashboard in Looker Studio](https://github.com/andersvlindberg/claude-data-academy/blob/main/labs/lab-15-looker-studio-dashboard.md) | L2 | 2–3 h | Free |

**Core**

| # | Lab | Level | Time | Cost |
|---|---|---|---|---|
| 8 | [Lab 16: KPI story in Tableau Public](https://github.com/andersvlindberg/claude-data-academy/blob/main/labs/lab-16-tableau-public-kpi.md) | L2 | 3 h | Free (public) |
| 9 | [Lab 42: KPI design: a metric tree for e-commerce](https://github.com/andersvlindberg/claude-data-academy/blob/main/labs/lab-42-kpi-metric-tree.md) | L2 | 2 h | Free |
| 10 | [Lab 17: Customer segmentation: RFM and lifetime value](https://github.com/andersvlindberg/claude-data-academy/blob/main/labs/lab-17-rfm-clv-segmentation.md) | L2–L3 | 3 h | Free |
| 11 | [Lab 43: Cohort retention analysis in SQL](https://github.com/andersvlindberg/claude-data-academy/blob/main/labs/lab-43-cohort-retention.md) | L2–L3 | 2–3 h | Free |
| 12 | [Lab 18: Analyse an A/B test properly](https://github.com/andersvlindberg/claude-data-academy/blob/main/labs/lab-18-ab-test-analysis.md) | L3 | 2–3 h | Free |
| 13 | [Lab 44: Marketing attribution and channel ROI](https://github.com/andersvlindberg/claude-data-academy/blob/main/labs/lab-44-marketing-attribution.md) | L2–L3 | 3 h | Free |
| 14 | [Lab 45: Forecasting basics: trend and seasonality](https://github.com/andersvlindberg/claude-data-academy/blob/main/labs/lab-45-forecasting-basics.md) | L3 | 2–3 h | Free |

**Advanced**

| # | Lab | Level | Time | Cost |
|---|---|---|---|---|
| 15 | [Lab 46: Churn prediction with logistic regression](https://github.com/andersvlindberg/claude-data-academy/blob/main/labs/lab-46-churn-prediction.md) | L3 | 3 h | Free |
| 16 | [Lab 47: Customer survey: design and analysis (GDPR-safe)](https://github.com/andersvlindberg/claude-data-academy/blob/main/labs/lab-47-survey-analysis.md) | L2 | 2–3 h | Free |
| 17 | [Lab 48: Data storytelling: a 5-slide recommendation](https://github.com/andersvlindberg/claude-data-academy/blob/main/labs/lab-48-data-storytelling.md) | L2 | 2 h | Free |
| 18 | [Lab 49: Product analytics: feature adoption and funnels](https://github.com/andersvlindberg/claude-data-academy/blob/main/labs/lab-49-product-analytics.md) | L2–L3 | 2–3 h | Free |
| 19 | [Lab 50: Reconcile numbers across sources](https://github.com/andersvlindberg/claude-data-academy/blob/main/labs/lab-50-reconcile-numbers.md) | L2 | 2 h | Free |
| 20 | [Lab 51: DA capstone: quarterly business review for Nordvik](https://github.com/andersvlindberg/claude-data-academy/blob/main/labs/lab-51-da-capstone.md) | L3–L4 | 8–10 h | Free |

## Business & MarTech track

**Foundations**

| # | Lab | Level | Time | Cost |
|---|---|---|---|---|
| 1 | [Lab 00: Start here: the role, the stack and your workspace](https://github.com/andersvlindberg/claude-data-academy/blob/main/labs/lab-00-start-role-stack-workspace.md) | L1 | 1–2 h | Free |
| 2 | [Lab 52: Map a customer journey with data touchpoints](https://github.com/andersvlindberg/claude-data-academy/blob/main/labs/lab-52-customer-journey-map.md) | L1 | 2 h | Free |
| 3 | [Lab 53: Write a tracking plan for a webshop](https://github.com/andersvlindberg/claude-data-academy/blob/main/labs/lab-53-tracking-plan.md) | L1–L2 | 2 h | Free |
| 4 | [Lab 04: Track an e-commerce event with GTM and verify it in DevTools](https://github.com/andersvlindberg/claude-data-academy/blob/main/labs/lab-04-gtm-ga4-tracking.md) | L2 | 2–3 h | Free |
| 5 | [Lab 54: Cookie and consent audit of a real site](https://github.com/andersvlindberg/claude-data-academy/blob/main/labs/lab-54-consent-cookie-audit.md) | L2 | 2 h | Free |
| 6 | [Lab 02: Explore real GA4 e-commerce data in BigQuery](https://github.com/andersvlindberg/claude-data-academy/blob/main/labs/lab-02-ga4-bigquery-explore.md) | L1–L2 | 2 h | Free (sandbox, no card) |
| 7 | [Lab 15: A decision-ready dashboard in Looker Studio](https://github.com/andersvlindberg/claude-data-academy/blob/main/labs/lab-15-looker-studio-dashboard.md) | L2 | 2–3 h | Free |

**Core**

| # | Lab | Level | Time | Cost |
|---|---|---|---|---|
| 8 | [Lab 42: KPI design: a metric tree for e-commerce](https://github.com/andersvlindberg/claude-data-academy/blob/main/labs/lab-42-kpi-metric-tree.md) | L2 | 2 h | Free |
| 9 | [Lab 55: CRM data model in HubSpot](https://github.com/andersvlindberg/claude-data-academy/blob/main/labs/lab-55-crm-data-model.md) | L1–L2 | 2 h | Free |
| 10 | [Lab 56: Email automation: welcome and abandoned cart](https://github.com/andersvlindberg/claude-data-academy/blob/main/labs/lab-56-email-automation-flow.md) | L2 | 2–3 h | Free |
| 11 | [Lab 17: Customer segmentation: RFM and lifetime value](https://github.com/andersvlindberg/claude-data-academy/blob/main/labs/lab-17-rfm-clv-segmentation.md) | L2–L3 | 3 h | Free |
| 12 | [Lab 44: Marketing attribution and channel ROI](https://github.com/andersvlindberg/claude-data-academy/blob/main/labs/lab-44-marketing-attribution.md) | L2–L3 | 3 h | Free |
| 13 | [Lab 19: Activate segments in a CRM (reverse ETL)](https://github.com/andersvlindberg/claude-data-academy/blob/main/labs/lab-19-reverse-etl-crm.md) | L3 | 2–3 h | Free |
| 14 | [Lab 57: Lead scoring: from rules to data](https://github.com/andersvlindberg/claude-data-academy/blob/main/labs/lab-57-lead-scoring.md) | L2–L3 | 2–3 h | Free |

**Advanced**

| # | Lab | Level | Time | Cost |
|---|---|---|---|---|
| 15 | [Lab 58: UTM governance and a campaign report](https://github.com/andersvlindberg/claude-data-academy/blob/main/labs/lab-58-utm-campaign-report.md) | L1–L2 | 2 h | Free |
| 16 | [Lab 59: MarTech stack audit](https://github.com/andersvlindberg/claude-data-academy/blob/main/labs/lab-59-martech-stack-audit.md) | L2 | 2–3 h | Free |
| 17 | [Lab 60: CDP evaluation: composable vs packaged](https://github.com/andersvlindberg/claude-data-academy/blob/main/labs/lab-60-cdp-business-case.md) | L2–L3 | 3 h | Free |
| 18 | [Lab 48: Data storytelling: a 5-slide recommendation](https://github.com/andersvlindberg/claude-data-academy/blob/main/labs/lab-48-data-storytelling.md) | L2 | 2 h | Free |
| 19 | [Lab 62: GDPR for a marketing campaign](https://github.com/andersvlindberg/claude-data-academy/blob/main/labs/lab-62-gdpr-for-marketing.md) | L2 | 2 h | Free |
| 20 | [Lab 63: Business capstone: a data-driven growth plan for Nordvik](https://github.com/andersvlindberg/claude-data-academy/blob/main/labs/lab-63-biz-capstone.md) | L3 | 8–10 h | Free |
