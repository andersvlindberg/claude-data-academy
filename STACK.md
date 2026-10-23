# The reference stack

**In one line:** GA4 + GTM → **Fivetran** (+ Python/dlt) → **Snowflake** → **dbt** → **Dagster** → Power BI / Looker Studio → reverse ETL to CRM, versioned in GitHub with GitHub Actions.

The academy teaches concepts that work with any tools, but every example, exercise and the capstone default to **one modern analytics engineering stack**: the most common setup in product companies hiring analytics engineers.

| Layer | Reference tool | Why |
|---|---|---|
| Source tracking | Google Tag Manager + GA4 | Most widely used web analytics setup |
| Ingestion | **Fivetran** for standard sources (Shopify, CRM, ad platforms, databases); Python with dlt for custom APIs; Airbyte as open-source alternative | The most common managed ELT tool; code only where no connector exists |
| Warehouse | **Snowflake** (key pair auth, roles, dev/prod) | Very common in analytics engineering job ads |
| Transformation | **dbt** (dbt Cloud or dbt Core) | The standard transformation layer |
| Version control and CI | Git, GitHub, GitHub Actions | Standard developer workflow |
| Orchestration | **Dagster** (asset-based, strong dbt integration); Airflow as the widely used alternative; dbt Cloud jobs for simple setups | Runs ingestion and dbt in the right order, with retries and monitoring |
| BI | Power BI or Looker Studio | Power BI dominates many Nordic companies; Looker Studio is free with Google data |
| Activation | Reverse ETL (Hightouch/Census) to CRM and marketing automation | Composable customer data stack |
| AI | Claude + MCP (read-only warehouse access) | Safe AI on documented marts |
| Local practice | DuckDB | Free, no cloud cost |

GA4 exports to BigQuery. In the reference stack you either model the GA4 export where it lands (BigQuery) or move it into Snowflake as a data engineering exercise.

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
