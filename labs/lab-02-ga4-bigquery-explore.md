# Lab 02: Explore real GA4 e-commerce data in BigQuery

| Role | Level | Time | Tools | Cost | Builds on |
|---|---|---|---|---|---|
| Data analyst · Analytics engineer | L1–L2 | 2 h | BigQuery sandbox | Free (sandbox, no card) | Lab 01 |

**Goal:** Query the public GA4 sample export and understand its nested event schema.

## What you'll learn
- The GA4 export schema: one row per event, nested `event_params` and `items`
- UNNEST to flatten arrays
- Wildcard tables and `_TABLE_SUFFIX` to control cost

## Setup
- Create a Google Cloud project with the BigQuery sandbox (see START-HERE)
- Open the dataset `bigquery-public-data.ga4_obfuscated_sample_ecommerce` (data from Nov 2020 to Jan 2021)

## Run it with Claude Code
Labs are hands-on, so do them in Claude Code inside your own repo, where Claude can see your files and errors:
```bash
mkdir lab-02-ga4-bigquery-explore && cd lab-02-ga4-bigquery-explore
git init
claude
```
Then type: `LAB 02`. The coach walks you through the steps below one at a time, you type the code, and it reviews.

## Steps
1. Count events per `event_name` for one week using `_TABLE_SUFFIX BETWEEN '20201201' AND '20201207'`. Note the bytes processed before running.
2. Extract `page_location` from `event_params` with `(SELECT value.string_value FROM UNNEST(event_params) WHERE key = 'page_location')`.
3. Count users and sessions per day (`user_pseudo_id` + the `ga_session_id` param).
4. List the top products by purchase revenue by unnesting `items` on `purchase` events.
5. Compare device categories and countries for purchasers vs everyone.
6. Write down three things that surprised you about the schema.

## Done when
- [ ] Every query filters `_TABLE_SUFFIX`
- [ ] You can explain what UNNEST does and why GA4 nests data
- [ ] You know the difference between users, sessions and events

## Stretch
- Turn the param extraction into a reusable SQL UDF
- Estimate monthly cost if this ran daily on a real property

## Ask the coach
- *"LEARN: UNNEST in BigQuery with the GA4 schema"*
- *"QUIZ me on the GA4 export schema"*

## Portfolio
Notebook or SQL file with findings; screenshots of results.

> Safety: use fake or public data, keep secrets in `.env` or the tool's secrets file (in `.gitignore`), and Claude asks before anything destructive.

[← All labs](README.md)
