# Lab 50: Reconcile numbers across sources

| Role | Level | Time | Tools | Cost |
|---|---|---|---|---|
| Data analyst · Analytics engineer | L2 | 2 h | SQL, Sheets | Free |

**Goal:** Explain why GA4, the shop and finance show different revenue.

## How this lab works
1. **Hub:** open this step in your study hub and take the lecture (*Lecture*), or skip it if you know the theory.
2. **Claude Code:** the lecture ends with a practice project. Claude sets it up for you (a fictional scenario and generated data) and you build it in a real tool.
3. **GitHub:** commit as you go and merge it into your fork. Then tick it off in the hub.

```bash
cd claude-data-academy        # your fork
git checkout -b lab-50
mkdir -p my-work/lab-50-reconcile-numbers && cd my-work/lab-50-reconcile-numbers
claude
```
Type `LAB 50`. This is a brief lab: the coach turns the milestones below into steps for your level, and you write the code.

## Milestones
1. Pull revenue from three sources for one month
2. List every definitional difference (tax, refunds, timezones, consent)
3. Build a bridge from one number to the other
4. Write a definition everyone signs off

## Done when
- [ ] Bridge closes to zero or gaps explained
- [ ] Agreed definition written

## Save it to your portfolio
```bash
git add .
git commit -m "lab 50: <what you built>"
git push -u origin lab-50
```
Before the last commit, Claude updates `my-work/PROGRESS.md` (step, date, what you built, what to review). Open a pull request in your fork, read your own diff like a reviewer, merge it, and mark the lab *Done* in your hub. Add a short `README.md` in the lab folder: what you built, how to run it, what you learned.

## Portfolio
A revenue bridge: a classic interview case.

> Safety: use fictional or public data, keep secrets in `.env` (in `.gitignore`), and Claude asks before anything destructive.

[← All labs](README.md)
