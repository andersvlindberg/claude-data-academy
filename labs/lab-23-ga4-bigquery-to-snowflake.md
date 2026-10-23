# Lab 23: Move the GA4 export from BigQuery into Snowflake

| Role | Level | Time | Tools | Cost |
|---|---|---|---|---|
| Data engineer | L2–L3 | 3 h | BigQuery, Snowflake, Python or dlt | Free + trial |

**Goal:** Load GA4 export tables into Snowflake RAW so the reference stack has one warehouse.

## How this lab works
1. **Hub:** open this step in your study hub and take the lecture (*Lecture*), or skip it if you know the theory.
2. **Claude Code:** the lecture ends with a practice project. Claude sets it up for you (a fictional scenario and generated data) and you build it in a real tool.
3. **GitHub:** commit as you go and merge it into your fork. Then tick it off in the hub.

```bash
cd claude-data-academy        # your fork
git checkout -b lab-23
mkdir -p my-work/lab-23-ga4-bigquery-to-snowflake && cd my-work/lab-23-ga4-bigquery-to-snowflake
claude
```
Type `LAB 23`. This is a brief lab: the coach turns the milestones below into steps for your level, and you write the code.

## Milestones
1. Export a few days of the GA4 sample to Parquet in Cloud Storage or locally
2. Load into a Snowflake RAW table with a VARIANT column for nested fields
3. Query nested params with LATERAL FLATTEN
4. Make the load incremental by event date

## Done when
- [ ] Row counts match BigQuery per day
- [ ] Nested params are queryable in Snowflake

## Save it to your portfolio
```bash
git add .
git commit -m "lab 23: <what you built>"
git push -u origin lab-23
```
Before the last commit, Claude updates `my-work/PROGRESS.md` (step, date, what you built, what to review). Open a pull request in your fork, read your own diff like a reviewer, merge it, and mark the lab *Done* in your hub. Add a short `README.md` in the lab folder: what you built, how to run it, what you learned.

## Portfolio
Cross-cloud ingestion: a strong DE talking point.

> Safety: use fictional or public data, keep secrets in `.env` (in `.gitignore`), and Claude asks before anything destructive.

[← All labs](README.md)
