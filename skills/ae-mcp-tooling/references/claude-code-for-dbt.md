# Claude Code for a dbt project

## CLAUDE.md template
```markdown
# CLAUDE.md

## Project
dbt project for <company/webshop>. Warehouse: <BigQuery|Snowflake|DuckDB>. dbt version: <x.y>.

## Layers and naming
- staging: stg_<source>__<entity>, views, rename/cast only
- intermediate: int_<entity>_<verb>
- marts: fct_<process>, dim_<entity>, tables
- Every model: grain sentence in description, PK unique + not_null

## Commands
- dbt build -s <model>+      # build and test a model and downstream
- dbt compile -s <model>     # inspect generated SQL
- sqlfluff lint models

## Rules
- Never run against prod; target is dev unless told otherwise.
- Never commit profiles.yml, keys or .env.
- Ask before: full refreshes of large models, dropping objects, changing materialisations.
- Columns tagged meta.contains_pii must not appear in marts used by BI.
- After changes: run dbt build on changed models, report test results, propose a commit message.
```

## A read-only role for AI tools

**Snowflake (sketch):**
```sql
create role if not exists ai_reader;
grant usage on warehouse reporting_xs to role ai_reader;
grant usage on database analytics to role ai_reader;
grant usage on schema analytics.prod to role ai_reader;
grant select on all tables in schema analytics.prod to role ai_reader;
grant select on future tables in schema analytics.prod to role ai_reader;
-- no access to raw schemas or PII tables
create user if not exists ai_service default_role = ai_reader;   -- key pair auth
grant role ai_reader to user ai_service;
```

**BigQuery (sketch):** a service account with BigQuery Job User on the project and Data Viewer only on the marts dataset; set maximum bytes billed in the client where possible.

## Recipes
1. **"Explain fct_orders"** → read model, YAML and parents → explain grain, joins, filters → learner explains back.
2. **"Add tests to stg_shop__orders"** → propose YAML → run `dbt build -s stg_shop__orders` → report → commit on a branch.
3. **"Why did not_null on customer_id fail?"** → query failing rows (read-only) → hypotheses → evidence → fix at the right layer.
4. **"Write the README section for the marts"** → draft from YAML and lineage → learner edits for accuracy and voice.
