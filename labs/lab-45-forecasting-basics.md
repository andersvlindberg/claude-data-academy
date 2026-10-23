# Lab 45: Forecasting basics: trend and seasonality

| Role | Level | Time | Tools | Cost |
|---|---|---|---|---|
| Data analyst | L3 | 2–3 h | Python (statsmodels) or Sheets | Free |

**Goal:** Forecast next quarter's orders and explain how wrong it might be.

## Run it with Claude Code
```bash
mkdir lab-45-forecasting-basics && cd lab-45-forecasting-basics
git init
claude
```
Type `LAB 45`. This is a brief lab: the coach turns the milestones below into steps that fit your level and stack, and you write the code.

## Milestones
1. Decompose a daily series into trend and seasonality
2. Fit a simple model (e.g. Holt-Winters)
3. Backtest on a held-out period
4. Present the forecast with an interval

## Done when
- [ ] Backtest error reported
- [ ] Interval shown, not just a line

## Portfolio
Forecast notebook.

> Safety: use fake or public data, keep secrets in `.env` (in `.gitignore`), and Claude asks before anything destructive.

[← All labs](README.md)
