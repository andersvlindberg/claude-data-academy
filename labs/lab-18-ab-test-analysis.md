# Lab 18: Analyse an A/B test properly

| Role | Level | Time | Tools | Cost | Builds on |
|---|---|---|---|---|---|
| Data analyst | L3 | 2–3 h | Python (pandas, scipy) or SQL | Free | Lab 01 |

**Goal:** Decide whether a variant won, with the right test, confidence interval and caveats.

## What you'll learn
- Hypotheses, p-values and confidence intervals
- Sample size and power before the test
- Sample ratio mismatch and peeking

## Setup
- Simulate a test dataset in Python (two groups, conversion rates)

## How this lab works
1. **Hub:** open this step in your study hub and take the lecture (*Lecture*), or skip it if you know the theory.
2. **Claude Code:** the lecture ends with a practice project. Claude sets it up for you (a fictional scenario and generated data) and you build it in a real tool.
3. **GitHub:** commit as you go and merge it into your fork. Then tick it off in the hub.

```bash
cd claude-data-academy        # your fork
git checkout -b lab-18
mkdir -p my-work/lab-18-ab-test-analysis && cd my-work/lab-18-ab-test-analysis
claude
```
Type `LAB 18`. The coach walks you through the steps below one at a time; you write the code and it reviews.

## Steps
1. Calculate the required sample size for a 10% relative lift.
2. Check sample ratio mismatch with a chi-square test.
3. Compare conversion with a two-proportion z-test; report the CI of the difference.
4. Simulate peeking every day and see how false positives increase.
5. Write the decision memo: result, uncertainty, recommendation.

## Done when
- [ ] Memo states effect size with CI, not just a p-value
- [ ] SRM checked

## Stretch
- Do a Bayesian version and compare the message

## Ask the coach
- *"LEARN: p-values without the jargon"*
- *"QUIZ me on A/B testing pitfalls"*

## Save it to your portfolio
```bash
git add .
git commit -m "lab 18: <what you built>"
git push -u origin lab-18
```
Before the last commit, Claude updates `my-work/PROGRESS.md` (step, date, what you built, what to review). Open a pull request in your fork, read your own diff like a reviewer, merge it, and mark the lab *Done* in your hub. Add a short `README.md` in the lab folder: what you built, how to run it, what you learned.

## Portfolio
Notebook + one-page memo.

> Safety: use fictional or public data, keep secrets in `.env` or the tool's secrets file (in `.gitignore`), and Claude asks before anything destructive.

[← All labs](README.md)
