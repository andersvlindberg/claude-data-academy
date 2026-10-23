---
name: ae-modeling
description: Data modeling for the Analytics Engineering Academy. Use for questions about designing tables and schemas, entity relationship diagrams, primary and foreign keys, surrogate keys, normalisation, grain, fact and dimension tables, star schemas, Kimball dimensional modeling, slowly changing dimensions, one big table, data vault, medallion architecture, and the Data Management and Data Design course.
---

# Module 03: Data modeling

Modeling is deciding what one row means. Get the grain right and everything downstream is simple; get it wrong and every dashboard double counts.

## How to use this skill

Follow `ae-coach` for mode. Without it: explain → LEARN, design requests → BUILD, graded work → LEARN only.

Always start a design by asking: **What business process or entity is this table about, and what does one row represent?** Write the grain as a sentence before writing any SQL.

## Mastery ladder

| Level | Evidence |
|---|---|
| L1 | Explains primary key, foreign key, grain, fact versus dimension |
| L2 | Draws an ERD for a webshop and normalises a flat table to 3NF |
| L3 | Designs a star schema with stated grains, picks fact table types, handles SCD type 2 |
| L4 | Argues star schema versus one big table versus data vault for a given team and workload |

## Core knowledge

### Keys
- **Primary key:** uniquely identifies a row. Must be unique and not null (in dbt, test both).
- **Foreign key:** references a primary key elsewhere. Warehouses rarely enforce them, so test them (`relationships` test).
- **Natural key:** comes from the business (order number, email). Can change or collide across sources.
- **Surrogate key:** generated (a hash of natural key columns, or an integer). Stable and source-independent. In dbt: `dbt_utils.generate_surrogate_key([...])`.
- **Composite key:** several columns together (order_id + product_id).

### Normalisation (operational systems)
- **1NF:** atomic values, no repeating groups.
- **2NF:** no column depends on only part of a composite key.
- **3NF:** no column depends on another non-key column.
Normalised models avoid update anomalies; that is why source systems use them. Analytics models **denormalise on purpose** for simpler, faster queries.

### Dimensional modeling (Kimball)
Four-step design process:
1. **Choose the business process** (orders, sessions, support tickets).
2. **Declare the grain** (one row per order line).
3. **Identify the dimensions** (customer, product, date, channel).
4. **Identify the facts** (quantity, amount, discount).

Fact table types:
| Type | Grain | Example |
|---|---|---|
| Transaction | one row per event | `fct_order_items` |
| Periodic snapshot | one row per entity per period | `fct_inventory_daily` |
| Accumulating snapshot | one row per process instance, updated as it moves | `fct_order_fulfilment` with ordered_at, shipped_at, delivered_at |
| Factless | records that something happened, no measures | `fct_campaign_eligibility` |

Measures: **additive** (revenue: sum over anything), **semi-additive** (balance: not over time), **non-additive** (rates and ratios: recompute from components, never sum or average them).

**Star schema:** a fact table surrounded by denormalised dimensions. **Snowflake schema:** dimensions normalised into sub-dimensions (rarely worth it in modern warehouses). **Conformed dimensions** are shared across facts so reports can be combined.

### Slowly changing dimensions
| Type | Behaviour | Use when |
|---|---|---|
| 0 | Never changes | Original signup date |
| 1 | Overwrite | Corrections, attributes where history does not matter |
| 2 | New row per change with `valid_from`, `valid_to`, `is_current` | You need "as it was at the time" (customer segment at order time) |
| 3 | Previous value column | Rare; one level of history |

In dbt, type 2 is built with **snapshots**.

### Modern patterns
- **One Big Table (OBT):** a wide, denormalised table for one use case. Fast for BI tools and easy for analysts; duplicates logic if overused. Often built *on top of* a star schema.
- **Medallion (bronze/silver/gold)** maps roughly to raw/staging → intermediate → marts.
- **Data vault (hubs, links, satellites):** auditable and flexible integration layer for many changing sources; heavier to build and query. Usually an enterprise choice, not a starting point.
- **Inmon versus Kimball:** enterprise normalised warehouse first versus business-process star schemas first. Most dbt projects are pragmatic Kimball.

## Design checklist (BUILD mode)

- Grain written as a sentence and tested as a unique key.
- Every fact has foreign keys to its dimensions, tested with `relationships`.
- Rates are not stored as summable columns; store numerator and denominator.
- Timestamps are in one agreed timezone; dates for reporting derived explicitly.
- PII is isolated in as few tables as possible (see `ae-governance-gdpr`).
- Names follow the dbt conventions in `ae-dbt` (`fct_`, `dim_`, `_id`, `_at`, `is_`).

## Common misconceptions

- "Normalised is always better." Not for analytics reads.
- "The grain is obvious." Write it down; most bugs come from two people assuming different grains.
- "We can average the conversion rates per day to get the monthly rate." Non-additive; recompute.
- "Surrogate keys are only for performance." They are mainly for stability and source independence.

## Connects to

`ae-sql` (fan-out), `ae-dbt` (implementing the model), `ae-bi-metrics` (facts feed metrics), `ae-governance-gdpr` (PII placement).

## References

- [references/webshop-star-schema.md](references/webshop-star-schema.md): a worked design for the practice webshop.
- [references/exercises.md](references/exercises.md)
