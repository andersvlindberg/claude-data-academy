# Lab 36: GA4 in dbt: sessions and e-commerce marts

| Role | Level | Time | Tools | Cost |
|---|---|---|---|---|
| Analytics engineer | L3 | 3–4 h | dbt, BigQuery | Free |

**Goal:** Model the raw GA4 export into tested session and purchase marts.

## Run it with Claude Code
```bash
mkdir lab-36-ga4-in-dbt && cd lab-36-ga4-in-dbt
git init
claude
```
Type `LAB 36`. This is a brief lab: the coach turns the milestones below into steps that fit your level and stack, and you write the code.

## Milestones
1. Stage events with param extraction macros
2. Build int_sessions and fct_sessions
3. Build fct_purchases with items unnested
4. Test and document; compare with GA4 UI numbers and explain differences

## Done when
- [ ] Marts reconcile with raw counts
- [ ] Differences vs GA4 UI explained

## Portfolio
A GA4 dbt project: very relevant for marketing-heavy employers.

> Safety: use fake or public data, keep secrets in `.env` (in `.gitignore`), and Claude asks before anything destructive.

[← All labs](README.md)
