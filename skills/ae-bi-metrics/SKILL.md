---
name: ae-bi-metrics
description: Metrics, semantic layer and BI for the Analytics Engineering Academy. Use for questions about defining metrics unambiguously, metric types such as ratio, derived and cumulative metrics, the dbt semantic layer and MetricFlow, LookML or other semantic layers, building dashboards, choosing charts, dashboard layout and design, Looker Studio, Power BI and DAX basics, import versus direct query, self-service analytics, and keeping one definition of each KPI across the company.
---

# Module 11: Metrics, semantic layer and BI

The last mile of the chain. A perfect model is worthless if two dashboards show two different revenues. This module is about defining metrics once and serving them clearly.

## How to use this skill

Follow `ae-coach` for mode. Without it: explain → LEARN, define/build → BUILD, graded work → LEARN only.

BUILD rules:
- No metric goes on a dashboard without a written definition (template in [references/metric-definitions.md](references/metric-definitions.md)).
- Ratios are computed from summed numerator and denominator at query time, never averaged.
- Every dashboard states its purpose, audience, data freshness and owner.
- For visual quality, also apply `ae-presentation-design` principles.

## Mastery ladder

| Level | Evidence |
|---|---|
| L1 | Explains why metric definitions matter and what a semantic layer does |
| L2 | Writes complete metric definitions; builds a dashboard in Looker Studio or Power BI on a mart |
| L3 | Implements metrics in a semantic layer (dbt MetricFlow or equivalent) or as tested metric marts; designs a dashboard for a specific decision |
| L4 | Designs metric governance for a company (ownership, certification, change process) and argues semantic layer versus BI-tool logic |

## Core knowledge

### Metric definition essentials
Name · business question · formula (numerator, denominator) · grain and filters · time logic (calendar, timezone, attribution window) · dimensions allowed · source model · owner · caveats. "Conversion rate" is meaningless until you say: purchases ÷ sessions, completed orders only, session-level, by session start date in Europe/Stockholm.

### Metric types
| Type | Example |
|---|---|
| Simple (sum/count) | Revenue, orders |
| Ratio | Conversion rate = orders ÷ sessions |
| Derived | Gross margin = revenue − COGS |
| Cumulative | Revenue month-to-date, running total |
| Conversion (funnel) | Visitors who purchased within 7 days |

### Where metric logic lives
| Option | Pros | Cons |
|---|---|---|
| In each BI tool / dashboard | Fast | Definitions drift, duplicated logic |
| Metric marts in dbt (pre-aggregated tables) | Tested, versioned, simple for BI | Fixed grain; new dimensions need new models |
| Semantic layer (dbt Semantic Layer/MetricFlow, LookML, Cube) | Define once, query any allowed dimension, consistent everywhere | More setup, tool integration needed |

### dbt semantic layer (concept)
- **Semantic models** on top of dbt models declare **entities** (join keys), **dimensions** and **measures**.
- **Metrics** reference measures (simple, ratio, derived, cumulative, conversion).
- BI tools and APIs query metrics by name and dimension; MetricFlow generates the SQL and joins.
Check the current dbt docs for YAML syntax, which has evolved.

### Dashboard design
1. **Purpose:** which decision or routine does it support? (Monitor, explore, explain.)
2. **Audience:** executive (few KPIs, trends, targets), operational (detail, filters), analyst (exploration).
3. **Layout:** KPI row on top (value, change versus comparison, target) → trends → breakdowns → detail table. Most important top left.
4. **Charts:** line for trends over time, bar for comparing categories, stacked bar only for few parts of a whole, scatter for relationships, table for precise lookups. Avoid pie charts with many slices and 3D anything.
5. **Context:** every number needs a comparison (previous period, target, benchmark).
6. **Clarity:** direct labels, consistent colours (one accent for what matters), units in titles, "as of" timestamp.
7. **Performance:** pre-aggregate heavy queries, limit default date range.

### Looker Studio (Google)
Free, connects natively to BigQuery and GA4. Data source → report → charts. Calculated fields for simple logic; keep heavy logic in dbt. Watch BigQuery costs from many viewers (use extracts or pre-aggregated marts). Blends are limited; join in the warehouse instead.

### Power BI (Microsoft)
- **Power Query** (M) for shaping; keep it light when dbt already models.
- **Data model:** star schema with relationships (one-to-many, single direction preferred).
- **DAX measures** compute at query time in filter context: `Revenue = SUM(fct_orders[order_total])`, `Conversion Rate = DIVIDE([Orders], [Sessions])`.
- **Import** (fast, scheduled refresh) versus **DirectQuery** (live, slower, warehouse cost).
- Strong in Microsoft-centric companies; very common in Swedish industry.

## Common misconceptions

- "The dashboard is the deliverable." The decision is.
- "More charts = more insight." Fewer, with comparisons.
- "Average of daily conversion rates = monthly conversion rate." No.
- "Calculated fields in the BI tool are fine for core KPIs." They drift; put core logic upstream.

## Connects to

`ae-dbt` (marts and semantic models), `ae-modeling` (additivity), `ae-analytics` (what to show), `ae-presentation-design` (visual craft), `ae-business-journeys` (decisions and metric trees).

## References

- [references/metric-definitions.md](references/metric-definitions.md): template and worked definitions, MetricFlow-style YAML sketch, DAX basics.
- [references/exercises.md](references/exercises.md)
