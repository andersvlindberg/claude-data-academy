# Labs: practical experience in the stack

Twenty hands-on labs that take you through the whole data chain in real tools. Each lab is a small project you can put in your portfolio.

**How to run a lab:** open Claude Code in an empty folder or your capstone repo and type `LAB 08` (or any number). The coach runs it step by step: you write the code, Claude explains, reviews and debugs with you. Want the theory first? Ask for `LECTURE: <topic>` in the Claude app.

**Cost:** start Google-first and local (DuckDB, BigQuery sandbox) for free. Labs 06, 07, 13 and 14 use trials; start them when you're ready. See [START-HERE.md](https://github.com/andersvlindberg/claude-data-academy/blob/main/START-HERE.md).

## Which lab trains which job

| Lab | Title | Level | Data engineer | Analytics engineer | Data analyst | Business / MarTech |
|---|---|---|:-:|:-:|:-:|:-:|
| 01 | [Your first local warehouse with DuckDB](https://github.com/andersvlindberg/claude-data-academy/blob/main/labs/lab-01-duckdb-sql-basics.md) | L1 |  | ● | ● |  |
| 02 | [Explore real GA4 e-commerce data in BigQuery](https://github.com/andersvlindberg/claude-data-academy/blob/main/labs/lab-02-ga4-bigquery-explore.md) | L1–L2 |  | ● | ● |  |
| 03 | [Sessions and a purchase funnel with window functions](https://github.com/andersvlindberg/claude-data-academy/blob/main/labs/lab-03-ga4-funnel-window-functions.md) | L2 |  | ● | ● |  |
| 04 | [Track an e-commerce event with GTM and verify it in DevTools](https://github.com/andersvlindberg/claude-data-academy/blob/main/labs/lab-04-gtm-ga4-tracking.md) | L2 | ● |  |  | ● |
| 05 | [Ingest a REST API with dlt](https://github.com/andersvlindberg/claude-data-academy/blob/main/labs/lab-05-dlt-api-ingestion.md) | L2 | ● |  |  |  |
| 06 | [Set up Snowflake like a team would](https://github.com/andersvlindberg/claude-data-academy/blob/main/labs/lab-06-snowflake-setup.md) | L2 | ● | ● |  |  |
| 07 | [Managed ingestion with Fivetran](https://github.com/andersvlindberg/claude-data-academy/blob/main/labs/lab-07-fivetran-to-snowflake.md) | L2 | ● |  |  |  |
| 08 | [Your first dbt project: sources, staging and tests](https://github.com/andersvlindberg/claude-data-academy/blob/main/labs/lab-08-dbt-first-project.md) | L2 |  | ● |  |  |
| 09 | [Dimensional modelling in dbt: facts and dimensions](https://github.com/andersvlindberg/claude-data-academy/blob/main/labs/lab-09-dbt-dimensional-modeling.md) | L2–L3 |  | ● |  |  |
| 10 | [Incremental models and snapshots (SCD type 2)](https://github.com/andersvlindberg/claude-data-academy/blob/main/labs/lab-10-dbt-incremental-snapshots.md) | L3 |  | ● |  |  |
| 11 | [dbt CI with GitHub Actions and Slim CI](https://github.com/andersvlindberg/claude-data-academy/blob/main/labs/lab-11-dbt-ci-github-actions.md) | L3 | ● | ● |  |  |
| 12 | [Data quality: contracts, freshness and anomaly checks](https://github.com/andersvlindberg/claude-data-academy/blob/main/labs/lab-12-data-quality-contracts.md) | L3 |  | ● |  |  |
| 13 | [Orchestrate dlt and dbt with Dagster](https://github.com/andersvlindberg/claude-data-academy/blob/main/labs/lab-13-dagster-orchestration.md) | L3 | ● | ● |  |  |
| 14 | [Privacy by design: zones, pseudonymisation and masking](https://github.com/andersvlindberg/claude-data-academy/blob/main/labs/lab-14-privacy-zones-masking.md) | L3 | ● | ● |  |  |
| 15 | [A decision-ready dashboard in Looker Studio](https://github.com/andersvlindberg/claude-data-academy/blob/main/labs/lab-15-looker-studio-dashboard.md) | L2 |  |  | ● |  |
| 16 | [KPI story in Tableau Public](https://github.com/andersvlindberg/claude-data-academy/blob/main/labs/lab-16-tableau-public-kpi.md) | L2 |  |  | ● |  |
| 17 | [Customer segmentation: RFM and lifetime value](https://github.com/andersvlindberg/claude-data-academy/blob/main/labs/lab-17-rfm-clv-segmentation.md) | L2–L3 |  |  | ● | ● |
| 18 | [Analyse an A/B test properly](https://github.com/andersvlindberg/claude-data-academy/blob/main/labs/lab-18-ab-test-analysis.md) | L3 |  |  | ● |  |
| 19 | [Activate segments in a CRM (reverse ETL)](https://github.com/andersvlindberg/claude-data-academy/blob/main/labs/lab-19-reverse-etl-crm.md) | L3 |  | ● |  | ● |
| 20 | [Safe AI on your marts: Claude + MCP, read-only](https://github.com/andersvlindberg/claude-data-academy/blob/main/labs/lab-20-claude-mcp-warehouse.md) | L3 |  | ● | ● |  |

## Suggested routes

| Goal | Labs in order |
|---|---|
| **Analytics engineer** (the academy's focus) | 01 → 02 → 03 → 08 → 09 → 10 → 11 → 12 → 13 → 14 → 20 |
| **Data engineer** | 01 → 05 → 06 → 07 → 04 → 13 → 14 → 11 |
| **Data analyst** | 01 → 02 → 03 → 15 → 16 → 17 → 18 |
| **Business / MarTech** | 02 → 04 → 15 → 17 → 19 |
| **Capstone in one go** | 05 or 07 → 08 → 09 → 13 → 15 → 19 |

Every lab ends with a *Done when* checklist. Tick it off, then ask the coach to `QUIZ` you before moving on.
