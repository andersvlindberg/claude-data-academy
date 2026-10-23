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

## Run it with Claude Code
Labs are hands-on, so do them in Claude Code inside your own repo, where Claude can see your files and errors:
```bash
mkdir lab-18-ab-test-analysis && cd lab-18-ab-test-analysis
git init
claude
```
Then type: `LAB 18`. The coach walks you through the steps below one at a time, you type the code, and it reviews.

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

## Portfolio
Notebook + one-page memo.

> Safety: use fake or public data, keep secrets in `.env` or the tool's secrets file (in `.gitignore`), and Claude asks before anything destructive.

[← All labs](README.md)
