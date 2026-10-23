---
name: ae-spreadsheets
description: Excel and Google Sheets for data work in the Analytics Engineering Academy. Use for questions about spreadsheet formulas, XLOOKUP and INDEX MATCH, SUMIFS and COUNTIFS, pivot tables, Power Query, data cleaning in spreadsheets, dates and text functions, conditional formatting, charts, building models and reports that others use, connecting Sheets to BigQuery, and when to move work from a spreadsheet into SQL and dbt.
---

# Module 28: Spreadsheets (Excel and Google Sheets)

Spreadsheets are where the business lives. Every data role meets them: stakeholders send them, finance models in them, and quick analyses start in them. Knowing them well, and knowing when to move work into the warehouse, is part of being the bridge.

## How to use this skill

Follow `ae-coach` for mode. In BUILD mode: separate inputs, calculations and outputs on different sheets; colour inputs differently; avoid hard-coded numbers in formulas; document assumptions. In LEARN mode: teach the formula on a small table, then let the learner apply it to theirs.

## Mastery ladder

| Level | Evidence |
|---|---|
| L1 | Uses SUM, AVERAGE, IF, basic charts and filters |
| L2 | Uses XLOOKUP, SUMIFS/COUNTIFS, pivot tables, text and date functions |
| L3 | Cleans and reshapes data with Power Query, builds a structured model with inputs, calculations and outputs, connects to a warehouse |
| L4 | Knows when a spreadsheet should become a dbt model and a dashboard, and migrates it with stakeholders |

## Core knowledge

| Need | Excel / Google Sheets |
|---|---|
| Look up a value | `XLOOKUP(key, keys, values)` (or `INDEX(values, MATCH(key, keys, 0))`) |
| Conditional sum / count | `SUMIFS(sum_range, crit_range, crit)`, `COUNTIFS(...)` |
| Logic | `IF`, `IFS`, `IFERROR`, `AND`, `OR` |
| Text | `TRIM`, `LOWER`, `LEFT/RIGHT/MID`, `TEXTSPLIT`, `TEXTJOIN`, `SUBSTITUTE` |
| Dates | `EOMONTH`, `EDATE`, `NETWORKDAYS`, `TEXT(date,"yyyy-mm")` |
| Dynamic arrays | `FILTER`, `SORT`, `UNIQUE`, `SEQUENCE`; Sheets also has `QUERY` (SQL-like) |
| Summarise | Pivot tables (rows, columns, values, filters); slicers |
| Clean and reshape | **Power Query** (Excel): import, remove duplicates, split, unpivot, merge, refresh |
| Warehouse connection | Google Sheets Connected Sheets for BigQuery; Excel connects to databases via Power Query |

Good practice: tables (Ctrl+T) with structured references, one row per record, no merged cells in data, consistent formats, named ranges for key inputs, a "README" sheet with purpose, sources and owner.

## When to leave the spreadsheet
Move to SQL/dbt and a dashboard when: the data is refreshed regularly, several people depend on the numbers, the logic defines an official metric, it exceeds a few hundred thousand rows, or errors would be costly. Keep the spreadsheet for exploration, one-off models and stakeholder scenarios.

## Common misconceptions
- "VLOOKUP is enough." It breaks when columns move; use XLOOKUP or INDEX/MATCH.
- "Pivot tables are the analysis." They summarise; the question and definitions still come first.
- "If it's in a spreadsheet, it's a quick fix." Many critical business processes run on fragile spreadsheets; treat them with care.

## Connects to
`ae-analytics`, `ae-bi-metrics`, `ae-statistics` (spreadsheet stats functions), `ae-dbt` (migrating logic), `ae-design` (spreadsheet layout).

## References
- [references/exercises.md](references/exercises.md)
