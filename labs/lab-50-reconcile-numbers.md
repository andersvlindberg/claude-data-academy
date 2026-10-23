# Lab 50: Reconcile numbers across sources

| Role | Level | Time | Tools | Cost |
|---|---|---|---|---|
| Data analyst · Analytics engineer | L2 | 2 h | SQL, Sheets | Free |

**Goal:** Explain why GA4, the shop and finance show different revenue.

## Run it with Claude Code
```bash
mkdir lab-50-reconcile-numbers && cd lab-50-reconcile-numbers
git init
claude
```
Type `LAB 50`. This is a brief lab: the coach turns the milestones below into steps that fit your level and stack, and you write the code.

## Milestones
1. Pull revenue from three sources for one month
2. List every definitional difference (tax, refunds, timezones, consent)
3. Build a bridge from one number to the other
4. Write a definition everyone signs off

## Done when
- [ ] Bridge closes to zero or gaps explained
- [ ] Agreed definition written

## Portfolio
A revenue bridge: a classic interview case.

> Safety: use fake or public data, keep secrets in `.env` (in `.gitignore`), and Claude asks before anything destructive.

[← All labs](README.md)
