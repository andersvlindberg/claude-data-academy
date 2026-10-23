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

## How this lab works
1. **Hub:** open this step in your study hub and take the lecture (*Lecture*), or skip it if you know the theory.
2. **Claude Code:** the lecture ends with a practice project. Claude sets it up for you (a fictional scenario and generated data) and you build it in a real tool.
3. **GitHub:** commit as you go and merge it into your fork. Then tick it off in the hub.

```bash
cd claude-data-academy        # your fork
git checkout -b lab-12
mkdir -p my-work/lab-12-data-quality-contracts && cd my-work/lab-12-data-quality-contracts
claude
```
Type `LAB 12`. The coach walks you through the steps below one at a time; you write the code and it reviews.

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

## Save it to your portfolio
```bash
git add .
git commit -m "lab 12: <what you built>"
git push -u origin lab-12
```
Open a pull request in your fork, read your own diff like a reviewer, merge it, and mark the lab *Done* in your hub. Add a short `README.md` in the lab folder: what you built, how to run it, what you learned.

## Portfolio
Data quality section in your capstone README.

> Safety: use fictional or public data, keep secrets in `.env` or the tool's secrets file (in `.gitignore`), and Claude asks before anything destructive.

[← All labs](README.md)
