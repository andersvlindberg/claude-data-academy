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
- Fake customer data only (generate it with Faker)

## Run it with Claude Code
Labs are hands-on, so do them in Claude Code inside your own repo, where Claude can see your files and errors:
```bash
mkdir lab-14-privacy-zones-masking && cd lab-14-privacy-zones-masking
git init
claude
```
Then type: `LAB 14`. The coach walks you through the steps below one at a time, you type the code, and it reviews.

## Steps
1. Load fake customers with names, emails and phone numbers into a restricted RAW schema.
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

## Portfolio
A diagram of your zones; a strong talking point in interviews.

> Safety: use fake or public data, keep secrets in `.env` or the tool's secrets file (in `.gitignore`), and Claude asks before anything destructive.

[← All labs](README.md)
