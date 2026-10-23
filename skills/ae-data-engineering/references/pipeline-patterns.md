# Pipeline patterns

## Idempotent daily load (Python, partition overwrite)

```python
import datetime as dt
import duckdb

def load_orders_for_day(day: dt.date, con: duckdb.DuckDBPyConnection) -> int:
    """Reload exactly one day. Running it twice gives the same result."""
    rows = extract_orders(day)                      # e.g. API call for that day
    con.execute("delete from raw.orders where order_date = ?", [day])
    con.executemany(
        "insert into raw.orders values (?, ?, ?, ?, ?)",
        [(r["id"], r["customer_id"], r["total"], r["status"], day) for r in rows],
    )
    return len(rows)

def backfill(start: dt.date, end: dt.date, con):
    day = start
    while day <= end:
        load_orders_for_day(day, con)
        day += dt.timedelta(days=1)
```

## Upsert with MERGE (BigQuery / Snowflake)

```sql
merge into raw.customers as t
using staging_customers as s
on t.customer_id = s.customer_id
when matched and s.updated_at > t.updated_at then
    update set email = s.email, city = s.city, updated_at = s.updated_at
when not matched then
    insert (customer_id, email, city, updated_at)
    values (s.customer_id, s.email, s.city, s.updated_at)
```

## Incremental with a lookback window

Load `where updated_at > (select max(updated_at) from target) - interval 3 day` and deduplicate on the key. The lookback catches late-arriving rows.

## Dagster with dbt (reference stack sketch)

```python
# definitions.py — verify APIs against current Dagster docs
from dagster import Definitions, ScheduleDefinition, define_asset_job
from dagster_dbt import DbtCliResource, dbt_assets, DbtProject

dbt_project = DbtProject(project_dir="dbt")

@dbt_assets(manifest=dbt_project.manifest_path)
def analytics_models(context, dbt: DbtCliResource):
    yield from dbt.cli(["build"], context=context).stream()

daily = define_asset_job("daily_analytics", selection="*")

defs = Definitions(
    assets=[analytics_models],          # add Fivetran assets via dagster-fivetran
    jobs=[daily],
    schedules=[ScheduleDefinition(job=daily, cron_schedule="0 5 * * *")],
    resources={"dbt": DbtCliResource(project_dir=dbt_project)},
)
```
Every dbt model becomes an asset with lineage in the Dagster UI; Fivetran connectors can be added as upstream assets so dbt runs only after fresh data arrives.

## Airflow DAG skeleton

```python
from datetime import datetime
from airflow import DAG
from airflow.operators.python import PythonOperator
from airflow.operators.bash import BashOperator

with DAG(
    dag_id="webshop_daily",
    start_date=datetime(2026, 1, 1),
    schedule="0 5 * * *",
    catchup=False,
    default_args={"retries": 2},
) as dag:
    extract_load = PythonOperator(
        task_id="extract_load_orders",
        python_callable=load_orders_for_day,
        op_kwargs={"day": "{{ ds }}"},
    )
    transform = BashOperator(task_id="dbt_build", bash_command="dbt build --target prod")
    extract_load >> transform
```
Check the current Airflow docs for import paths; they changed between major versions.

## Docker Compose: local Postgres for practice

```yaml
services:
  db:
    image: postgres:16
    environment:
      POSTGRES_USER: dev
      POSTGRES_PASSWORD: dev
      POSTGRES_DB: webshop
    ports:
      - "5432:5432"
    volumes:
      - pgdata:/var/lib/postgresql/data
volumes:
  pgdata:
```
`docker compose up -d` starts it; `docker compose down -v` removes it including data.

## Failure checklist

1. Did the job run at all? (orchestrator status)
2. Did it fail or succeed with wrong data? (logs versus row counts)
3. Is the source down, changed or rate limiting? (API status codes)
4. Is the problem one partition or all? (rerun one day)
5. After fixing: backfill the affected range and verify counts against the source.
