---
name: ae-dbt
description: dbt (data build tool) for the Analytics Engineering Academy. Use for anything dbt - project structure, sources, staging, intermediate and mart models, ref and source, materializations, incremental models, snapshots, tests, unit tests, model contracts, documentation, Jinja and macros, packages like dbt_utils, seeds, exposures, the semantic layer, dbt Cloud environments and jobs, CI with state selection, debugging dbt errors, and preparing for the dbt Analytics Engineering certification.
---

# Module 05: dbt

dbt turns SQL into a software project: version-controlled, tested, documented and deployed. It is the core tool of the analytics engineer.

## How to use this skill

Follow `ae-coach` for mode. Without it: explain → LEARN, build → BUILD, graded work → LEARN only.

**LEARN mode:** teach through the learner's own project where possible. Show the compiled SQL (`dbt compile`, or `target/compiled/`) when explaining Jinja, `ref` or macros: seeing what dbt generates removes most confusion.

**BUILD mode:**
1. Check the dbt version and adapter first (`dbt --version`, or the project's dbt Cloud environment). Syntax for tests and some configs differs between versions.
2. Follow the conventions in [references/project-conventions.md](references/project-conventions.md).
3. Every new model gets: a grain sentence in its description, a primary key test (`unique` + `not_null`), and relationship tests for foreign keys.
4. Verify with `dbt build -s <model>` and a reconciliation query against the source (row counts, sums).
5. Small commits on a feature branch; never develop directly against production.

## Mastery ladder

| Level | Evidence |
|---|---|
| L1 | Explains what dbt does, `ref` versus `source`, and the staging/intermediate/marts layers |
| L2 | Builds staging and mart models with generic tests and descriptions; runs `dbt build` |
| L3 | Writes incremental models, snapshots, macros and singular/unit tests; debugs compilation and runtime errors; sets up CI |
| L4 | Designs a project for a team: layer boundaries, materialisation strategy, contracts, environments, slim CI, cost trade-offs |

## Core knowledge

### What dbt is
- You write `select` statements; dbt wraps them in `create view` / `create table` / `merge` and runs them in dependency order.
- `{{ source('shop', 'orders') }}` points at raw data declared in YAML. `{{ ref('stg_shop__orders') }}` points at another model and builds the **DAG** (lineage graph).
- dbt does not move data between systems; it transforms data already in the warehouse (the T in ELT).
- **dbt Core** is the open-source CLI. **dbt Cloud** adds a browser IDE, scheduler, CI, docs hosting and the semantic layer. (A newer Rust-based engine, dbt Fusion, exists; check current docs for its status and compatibility.)

### Layers
| Layer | Purpose | Rules | Default materialisation |
|---|---|---|---|
| Staging `stg_<source>__<entity>` | One model per source table; clean and standardise | Rename, cast, simple derivations. No joins, no aggregations | view |
| Intermediate `int_<entity>_<verb>` | Reusable logic, joins, re-graining | Not exposed to end users | view or ephemeral |
| Marts `fct_<process>`, `dim_<entity>` | Business-ready tables | Clear grain, documented, tested | table (incremental when large) |

### Materialisations
- **view:** always fresh, no storage, recomputed at query time.
- **table:** rebuilt every run; fast to query.
- **incremental:** only new/changed rows processed; needs `is_incremental()` logic and a `unique_key` for merges.
- **ephemeral:** inlined as a CTE; no object in the warehouse.
- **materialized view / dynamic table:** warehouse-managed refresh, adapter-dependent.

### Testing
- **Generic data tests** in YAML: `unique`, `not_null`, `accepted_values`, `relationships`. Plus package tests (`dbt_utils`, `dbt_expectations`).
- **Singular tests:** a SQL file in `tests/` that returns failing rows.
- **Unit tests** (dbt 1.8+): test model logic on mocked input rows, before running on real data.
- **Source freshness:** `loaded_at_field` with `warn_after` / `error_after`.
- **Model contracts:** enforce column names and types on a model's output.
- Recent versions use the YAML key `data_tests:`; older projects use `tests:`. Match the project's version.

### Commands
```
dbt debug                      # connection and config check
dbt deps                       # install packages
dbt build                      # run + test + seed + snapshot in DAG order
dbt run -s stg_shop__orders+   # model and everything downstream
dbt test -s fct_orders         # tests on one model
dbt compile -s fct_orders      # see generated SQL
dbt source freshness
dbt docs generate && dbt docs serve
dbt build -s state:modified+ --defer --state <prod-artifacts>   # slim CI
```

## Debugging dbt

| Error type | Where it shows | How to approach |
|---|---|---|
| YAML/parsing | Before anything runs | Indentation, wrong keys, duplicate names |
| Compilation (Jinja) | `dbt compile` fails | Read the compiled SQL; check `ref`/`source` names and macro arguments |
| Database error | During run | Copy compiled SQL into the warehouse console and run it there |
| Test failure | During test | Query the failing rows (`--store-failures` or the test's compiled SQL) and decide: data problem or logic problem? |
| Wrong results, no error | Only by checking | Reconcile against source: counts, sums, a known example row |

## Common misconceptions

- "dbt extracts data." It does not.
- "`ref` is just a table name." It builds the DAG and switches schemas between environments.
- "Tests make data correct." They detect problems; fixing is still your job.
- "Everything should be a table." Views are fine for staging; tables cost storage and build time.
- "Incremental is always faster." It adds complexity; use it when full rebuilds are too slow or expensive.

## Connects to

`ae-modeling` (what to build), `ae-sql` (how to write it), `ae-warehouses` (adapter specifics), `ae-git-devops` (CI), `ae-bi-metrics` (semantic layer), `ae-governance-gdpr` (tests as contracts, PII meta), `ae-web-tracking` (GA4 models).

## References

- [references/project-conventions.md](references/project-conventions.md): structure, naming, SQL style, YAML examples.
- [references/advanced.md](references/advanced.md): incremental, snapshots, macros, packages, contracts, environments, slim CI, semantic layer.
- [references/ga4-in-dbt.md](references/ga4-in-dbt.md): modeling the GA4 BigQuery export.
- [references/exercises.md](references/exercises.md): exercises, quiz bank, interview questions, certification prep.
