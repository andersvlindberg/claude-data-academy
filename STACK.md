# The reference stack

**In one line:** **Sources** (e-commerce platform such as Shopify, GA4 + GTM, CRM) → **Fivetran / dlt** → **Snowflake** → **dbt** → **Looker Studio / Tableau** + **reverse ETL to CRM**. **Dagster** orchestrates the whole flow; Git and GitHub Actions guard the code.

GA4 is the exception at ingestion: it exports natively to BigQuery, so either model it there or move it into Snowflake. Fivetran handles the other sources (shop, CRM, ad platforms, databases).

**Pattern: ELT, not ETL.** Fivetran (and Python/dlt) extract and load raw data untouched into Snowflake; all transformation happens inside the warehouse with dbt. Raw data stays available, logic is versioned and tested, and models can be rebuilt at any time.

The academy teaches concepts that work with any tools, but every example, exercise and the capstone default to **one modern analytics engineering stack**: the most common setup in product companies hiring analytics engineers.

| Layer | Reference tool | Why |
|---|---|---|
| Sources | E-commerce platform (e.g. Shopify), CRM, ad platforms, payment and support systems | Where business events are created |
| Source tracking | **Google stack:** Google Tag Manager + GA4 (with the BigQuery export) | Most widely used web analytics setup |
| Ingestion | **Fivetran** for standard sources (Shopify, CRM, ad platforms, databases); Python with dlt for custom APIs; Airbyte as open-source alternative | The most common managed ELT tool; code only where no connector exists |
| Warehouse | **Snowflake** (key pair auth, roles, dev/prod) | Very common in analytics engineering job ads |
| Transformation | **dbt** (dbt Cloud or dbt Core) | The standard transformation layer |
| Version control and CI | Git, GitHub, GitHub Actions | Standard developer workflow |
| Orchestration | **Dagster** (asset-based, modern, strong dbt integration). Airflow is still the most common in job ads; the concepts (DAGs, schedules, retries, backfills) transfer directly, so learning Dagster prepares you for Airflow |  Runs ingestion and dbt in the right order, with retries and monitoring |
| BI | **Looker Studio** (Google stack, free, native with GA4 and BigQuery); **Tableau** as the alternative | Stays in the Google ecosystem with GA4; Tableau is common in product and tech companies |
| Activation | Reverse ETL (Hightouch/Census) to CRM and marketing automation | Composable customer data stack |
| AI | Claude + MCP (read-only warehouse access) | Safe AI on documented marts |
| Local practice | DuckDB | Free, no cloud cost |

GA4 exports to BigQuery. In the reference stack you either model the GA4 export where it lands (BigQuery) or move it into Snowflake as a data engineering exercise.

## Start free on Google

You can learn the whole chain at no cost before starting any trial: GA4 (demo account or the public sample `bigquery-public-data.ga4_obfuscated_sample_ecommerce`) → BigQuery sandbox (no card) → dbt → Looker Studio. Move to Snowflake, Fivetran and Dagster for the capstone. See [START-HERE.md](START-HERE.md#the-google-first-path-cheapest-way-to-start).

## Adjust it to you

The reference stack is a sensible, common default, not a rule. Adjust it as your interests and target companies become clearer.

## Use your own stack

The coach defaults to the reference stack. If you work with something else, say so once ("I use Databricks and Power BI") and the coach adapts examples and code. To change the default for everyone, **fork the repo** and edit this file and the stack notes in the skills. Choose based on the niche you want and the companies you target:

| If you aim for | Typical stack |
|---|---|
| Product companies, scale-ups | Snowflake or BigQuery + dbt + Looker/Power BI |
| Microsoft-centric enterprises and industry | Microsoft Fabric + Power BI + Azure Data Factory |
| Large data volumes, ML-heavy teams | Databricks (Spark, Delta Lake) + dbt or notebooks |
| Google-centric marketing analytics | BigQuery + Dataform or dbt + Looker Studio |
| Small companies | DuckDB/Postgres + dbt Core + Metabase |

Check job ads for the companies you want (tools like Wappalyzer and the ads themselves show their stack) and adjust.
