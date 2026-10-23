# Lab 45: Forecasting basics: trend and seasonality

| Role | Level | Time | Tools | Cost |
|---|---|---|---|---|
| Data analyst | L3 | 2–3 h | Python (statsmodels) or Sheets | Free |

**Goal:** Forecast next quarter's orders and explain how wrong it might be.

## How this lab works
1. **Hub:** open this step in your study hub and take the lecture (*Lecture*), or skip it if you know the theory.
2. **Claude Code:** the lecture ends with a practice project. Claude sets it up for you (a fictional scenario and generated data) and you build it in a real tool.
3. **GitHub:** commit as you go and merge it into your fork. Then tick it off in the hub.

```bash
cd claude-data-academy        # your fork
git checkout -b lab-45
mkdir -p my-work/lab-45-forecasting-basics && cd my-work/lab-45-forecasting-basics
claude
```
Type `LAB 45`. This is a brief lab: the coach turns the milestones below into steps for your level, and you write the code.

## Milestones
1. Decompose a daily series into trend and seasonality
2. Fit a simple model (e.g. Holt-Winters)
3. Backtest on a held-out period
4. Present the forecast with an interval

## Done when
- [ ] Backtest error reported
- [ ] Interval shown, not just a line

## Save it to your portfolio
```bash
git add .
git commit -m "lab 45: <what you built>"
git push -u origin lab-45
```
Before the last commit, Claude updates `my-work/PROGRESS.md` (step, date, what you built, what to review). Open a pull request in your fork, read your own diff like a reviewer, merge it, and mark the lab *Done* in your hub. Add a short `README.md` in the lab folder: what you built, how to run it, what you learned.

## Portfolio
Forecast notebook.

> Safety: use fictional or public data, keep secrets in `.env` (in `.gitignore`), and Claude asks before anything destructive.

[← All labs](README.md)
