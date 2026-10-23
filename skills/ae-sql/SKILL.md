---
name: ae-sql
description: SQL training and reference for the Analytics Engineering Academy. Use when writing, explaining, reviewing, optimising or debugging SQL, including SELECT, joins, aggregation, CTEs, subqueries, window functions, NULL handling, deduplication, sessionisation, funnels, cohorts, date logic, and differences between BigQuery, Snowflake, DuckDB, Postgres and SQLite dialects.
---

# Module 02: SQL

SQL is the working language of the whole chain. Data engineers load with it, analytics engineers model with it, analysts ask questions with it.

## How to use this skill

Follow `ae-coach` for mode. Without it: explain → LEARN, build → BUILD, graded work → LEARN only (teach with a parallel query on different data, review their attempt, never write their hand-in).

When teaching SQL, always:
- Show the **result shape** (a few rows) next to the query, so the learner sees what each clause does.
- Teach the **logical order of execution**: FROM/JOIN → WHERE → GROUP BY → HAVING → SELECT → window functions → DISTINCT → ORDER BY → LIMIT. Most beginner errors come from expecting SELECT to run first.
- Use the practice schema in [references/practice-schema.md](references/practice-schema.md) unless the learner has their own data.

When writing SQL in BUILD mode, follow the style rules below and always propose a **verification query** (row counts, sums against source, a known example).

## Mastery ladder

| Level | Evidence |
|---|---|
| L1 | Explains SELECT/WHERE/JOIN/GROUP BY and the logical execution order |
| L2 | Writes multi-join aggregations with correct join types; handles NULLs; uses CTEs |
| L3 | Uses window functions (ranking, running totals, LAG/LEAD), deduplicates, sessionises, debugs fan-out and double counting |
| L4 | Explains performance (scans, partitions, join strategies), dialect differences, and defends readability trade-offs |

## Core knowledge

### The building blocks
- `SELECT ... FROM ... WHERE` filters rows **before** grouping; `HAVING` filters groups **after**.
- `GROUP BY`: every non-aggregated column in SELECT must be in GROUP BY.
- Joins: `INNER` (matches only), `LEFT` (keep all left rows), `FULL` (keep all), `CROSS` (every combination). A join condition placed in WHERE on the right table turns a LEFT JOIN into an INNER JOIN.
- `COUNT(*)` counts rows; `COUNT(col)` counts non-NULL values; `COUNT(DISTINCT col)` counts unique non-NULL values.
- NULL is "unknown": `NULL = NULL` is not true. Use `IS NULL`, `COALESCE`, and be careful with `NOT IN` on columns that contain NULLs (prefer `NOT EXISTS`).

### CTEs
Build queries in readable steps:
```sql
with orders as (
    select * from orders where status = 'completed'
),
revenue_per_customer as (
    select customer_id, sum(order_total) as revenue
    from orders
    group by customer_id
)
select * from revenue_per_customer order by revenue desc
```

### Window functions
Calculate across rows **without collapsing them**: `function() over (partition by ... order by ... rows between ...)`.
- Ranking: `row_number()`, `rank()`, `dense_rank()`.
- Navigation: `lag()`, `lead()`, `first_value()`, `last_value()` (watch the default frame).
- Aggregates: `sum() over (...)` for running totals and shares of total.
- Filter on window results with `QUALIFY` (BigQuery, Snowflake, DuckDB) or a wrapping CTE elsewhere.

### The fan-out trap
Joining a one-to-many table before aggregating multiplies rows. Summing `order_total` after joining `order_items` overstates revenue. Fix: aggregate each side to the same grain **before** joining, or aggregate at the right grain.

## Style rules (BUILD mode)

- Lowercase keywords or uppercase, but consistent. Snake_case names.
- One column per line in long selects; trailing or leading commas consistently.
- CTEs over nested subqueries. Name CTEs for what they contain.
- Explicit join types and explicit column lists in final outputs.
- Qualify columns with table aliases when more than one table is involved.
- Comment the **why**, not the what.

## On the reference stack

Examples use Snowflake syntax by default (`QUALIFY`, `DATEADD`, `DIV0`, `IFF`); see references/dialects.md for BigQuery (GA4) and DuckDB equivalents. Using another stack? Tell the coach once and it adapts (see STACK.md).

## Common misconceptions

- "SELECT runs first, so I can use my alias in WHERE." (It runs after WHERE.)
- "LEFT JOIN never removes rows." (A WHERE filter on the right table does.)
- "COUNT(column) counts all rows." (It skips NULLs.)
- "DISTINCT fixes duplicates." (It hides a grain problem; find why duplicates exist.)
- "ROW_NUMBER and RANK are the same." (Ties.)

## Connects to

`ae-modeling` (grain), `ae-dbt` (SQL in models), `ae-warehouses` (dialects and cost), `ae-analytics` (analysis patterns).

## References

- [references/practice-schema.md](references/practice-schema.md): the webshop schema used in all exercises.
- [references/patterns.md](references/patterns.md): dedup, top-N per group, sessionisation, gaps and islands, funnels, cohorts, running totals.
- [references/dialects.md](references/dialects.md): BigQuery, Snowflake, DuckDB, Postgres, SQLite differences.
- [references/exercises.md](references/exercises.md)
