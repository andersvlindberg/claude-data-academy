# Lab 12: Data quality: contracts, freshness and anomaly checks

| Role | Level | Time | Tools | Cost | Builds on |
|---|---|---|---|---|---|
| Analytics engineer | L3 | 2–3 h | dbt | Free | Lab 09 |

**Goal:** Make your marts trustworthy with enforced contracts, freshness SLAs and volume checks.

## What you'll learn
- Model contracts (`contract: {enforced: true}`)
- Unit tests in dbt
- Freshness and volume checks
- Severity and `warn_if` / `error_if`

## Setup
- Lab 09 marts

## Run it with Claude Code
Labs are hands-on, so do them in Claude Code inside your own repo, where Claude can see your files and errors:
```bash
mkdir lab-12-data-quality-contracts && cd lab-12-data-quality-contracts
git init
claude
```
Then type: `LAB 12`. The coach walks you through the steps below one at a time, you type the code, and it reviews.

## Steps
1. Enforce a contract on `fct_orders` with column names and data types.
2. Change a column type upstream and watch the contract fail.
3. Write a dbt unit test for a tricky transformation (e.g. revenue net of refunds).
4. Add a row-count check that warns if today's volume drops more than 50%.
5. Set freshness SLAs on sources with warn and error thresholds.
6. Write a short data quality README: what is checked and who is alerted.

## Done when
- [ ] Contract enforced
- [ ] Unit test covers an edge case
- [ ] Freshness and volume checks run in `dbt build`

## Stretch
- Add dbt-expectations or Elementary for anomaly detection

## Ask the coach
- *"LEARN: data contracts"*
- *"REVIEW my tests: what am I missing?"*

## Portfolio
Data quality section in your capstone README.

> Safety: use fake or public data, keep secrets in `.env` or the tool's secrets file (in `.gitignore`), and Claude asks before anything destructive.

[← All labs](README.md)
