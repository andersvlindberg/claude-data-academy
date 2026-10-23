# Lab 36: GA4 in dbt: sessions and e-commerce marts

| Role | Level | Time | Tools | Cost |
|---|---|---|---|---|
| Analytics engineer | L3 | 3–4 h | dbt, BigQuery | Free |

**Goal:** Model the raw GA4 export into tested session and purchase marts.

## How this lab works
1. **Hub:** open this step in your study hub and take the lecture (*Lecture*), or skip it if you know the theory.
2. **Claude Code:** the lecture ends with a practice project. Claude sets it up for you (a fictional scenario and generated data) and you build it in a real tool.
3. **GitHub:** commit as you go and merge it into your fork. Then tick it off in the hub.

```bash
cd claude-data-academy        # your fork
git checkout -b lab-36
mkdir -p my-work/lab-36-ga4-in-dbt && cd my-work/lab-36-ga4-in-dbt
claude
```
Type `LAB 36`. This is a brief lab: the coach turns the milestones below into steps for your level, and you write the code.

## Milestones
1. Stage events with param extraction macros
2. Build int_sessions and fct_sessions
3. Build fct_purchases with items unnested
4. Test and document; compare with GA4 UI numbers and explain differences

## Done when
- [ ] Marts reconcile with raw counts
- [ ] Differences vs GA4 UI explained

## Save it to your portfolio
```bash
git add .
git commit -m "lab 36: <what you built>"
git push -u origin lab-36
```
Open a pull request in your fork, read your own diff like a reviewer, merge it, and mark the lab *Done* in your hub. Add a short `README.md` in the lab folder: what you built, how to run it, what you learned.

## Portfolio
A GA4 dbt project: very relevant for marketing-heavy employers.

> Safety: use fictional or public data, keep secrets in `.env` (in `.gitignore`), and Claude asks before anything destructive.

[← All labs](README.md)
