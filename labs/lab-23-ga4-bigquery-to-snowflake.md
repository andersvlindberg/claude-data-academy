# Lab 23: Move the GA4 export from BigQuery into Snowflake

| Role | Level | Time | Tools | Cost |
|---|---|---|---|---|
| Data engineer | L2–L3 | 3 h | BigQuery, Snowflake, Python or dlt | Free + trial |

**Goal:** Load GA4 export tables into Snowflake RAW so the reference stack has one warehouse.

## Run it with Claude Code
```bash
mkdir lab-23-ga4-bigquery-to-snowflake && cd lab-23-ga4-bigquery-to-snowflake
git init
claude
```
Type `LAB 23`. This is a brief lab: the coach turns the milestones below into steps that fit your level and stack, and you write the code.

## Milestones
1. Export a few days of the GA4 sample to Parquet in Cloud Storage or locally
2. Load into a Snowflake RAW table with a VARIANT column for nested fields
3. Query nested params with LATERAL FLATTEN
4. Make the load incremental by event date

## Done when
- [ ] Row counts match BigQuery per day
- [ ] Nested params are queryable in Snowflake

## Portfolio
Cross-cloud ingestion: a strong DE talking point.

> Safety: use fake or public data, keep secrets in `.env` (in `.gitignore`), and Claude asks before anything destructive.

[← All labs](README.md)
