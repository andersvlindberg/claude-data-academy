# Lab 14: Privacy by design: zones, pseudonymisation and masking

| Role | Level | Time | Tools | Cost | Builds on |
|---|---|---|---|---|---|
| Data engineer · Analytics engineer | L3 | 3 h | Snowflake (or BigQuery policy tags), dbt | Trial / free | Labs 06 and 09 |

**Goal:** Separate personal data from analytics data so analysts never see identities they do not need.

## What you'll learn
- GDPR data minimisation and purpose limitation in practice
- Identity vault vs pseudonymised layer
- Dynamic data masking and row access policies
- Hashing with a salt vs encryption

## Setup
- Nordvik customers only (fictional); never real personal data

## How this lab works
1. **Hub:** open this step in your study hub and take the lecture (*Lecture*), or skip it if you know the theory.
2. **Claude Code:** the lecture ends with a practice project. Claude sets it up for you (a fictional scenario and generated data) and you build it in a real tool.
3. **GitHub:** commit as you go and merge it into your fork. Then tick it off in the hub.

```bash
cd claude-data-academy        # your fork
git checkout -b lab-14
mkdir -p my-work/lab-14-privacy-zones-masking && cd my-work/lab-14-privacy-zones-masking
claude
```
Type `LAB 14`. The coach walks you through the steps below one at a time; you write the code and it reviews.

## Steps
1. Load Nordvik customers (names, emails) into a restricted RAW schema.
2. Build an identity vault table (customer_id ↔ email) only IDENTITY_ADMIN can read.
3. In dbt, build a pseudonymised staging layer with salted hashes; the salt lives in a secret, not in code.
4. Create a masking policy: `CREATE MASKING POLICY email_mask AS (val STRING) RETURNS STRING -> CASE WHEN CURRENT_ROLE() IN ('IDENTITY_ADMIN') THEN val ELSE '***' END;` and apply it.
5. Query as REPORTER and as IDENTITY_ADMIN; document the difference.
6. Write how you would handle a deletion request (right to erasure) across the zones.

## Done when
- [ ] REPORTER never sees raw identifiers
- [ ] Erasure process is written and testable
- [ ] No real personal data used

## Stretch
- Add a row access policy by country
- Tag PII columns in dbt meta

## Ask the coach
- *"LEARN: pseudonymisation vs anonymisation under GDPR"*
- *"REVIEW my privacy design"*

## Save it to your portfolio
```bash
git add .
git commit -m "lab 14: <what you built>"
git push -u origin lab-14
```
Before the last commit, Claude updates `my-work/PROGRESS.md` (step, date, what you built, what to review). Open a pull request in your fork, read your own diff like a reviewer, merge it, and mark the lab *Done* in your hub. Add a short `README.md` in the lab folder: what you built, how to run it, what you learned.

## Portfolio
A diagram of your zones; a strong talking point in interviews.

> Safety: use fictional or public data, keep secrets in `.env` or the tool's secrets file (in `.gitignore`), and Claude asks before anything destructive.

[← All labs](README.md)
