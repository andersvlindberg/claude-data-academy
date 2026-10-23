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

## How this lab works
1. **Hub:** open this step in your study hub and take the lecture (*Lecture*), or skip it if you know the theory.
2. **Claude Code:** the lecture ends with a practice project. Claude sets it up for you (a fictional scenario and generated data) and you build it in a real tool.
3. **GitHub:** commit as you go and merge it into your fork. Then tick it off in the hub.

```bash
cd claude-data-academy        # your fork
git checkout -b lab-02
mkdir -p my-work/lab-02-ga4-bigquery-explore && cd my-work/lab-02-ga4-bigquery-explore
claude
```
Type `LAB 02`. The coach walks you through the steps below one at a time; you write the code and it reviews.

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

## Save it to your portfolio
```bash
git add .
git commit -m "lab 02: <what you built>"
git push -u origin lab-02
```
Open a pull request in your fork, read your own diff like a reviewer, merge it, and mark the lab *Done* in your hub. Add a short `README.md` in the lab folder: what you built, how to run it, what you learned.

## Portfolio
Notebook or SQL file with findings; screenshots of results.

> Safety: use fictional or public data, keep secrets in `.env` or the tool's secrets file (in `.gitignore`), and Claude asks before anything destructive.

[← All labs](README.md)
