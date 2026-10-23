---
name: ae-statistics
description: Statistics and experimental design for the Analytics Engineering Academy. Use for questions about descriptive statistics, mean, median, variance and standard deviation, distributions, percentiles and outliers, probability basics, sampling and sampling bias, the central limit theorem, confidence intervals, hypothesis testing, p-values, t-tests, chi-square and proportion tests, statistical power and sample size, A/B test and experiment design, correlation and regression, multiple testing, survey design and analysis, and statistics in Python or spreadsheets.
---

# Module 24: Statistics and experimental design

Statistics is how you know whether a difference is real, how sure you can be, and what a number does not tell you. Analysts, digital analysts and analytics engineers all need it; it is the backbone of A/B testing, surveys and forecasting.

## How to use this skill

Follow `ae-coach` for mode. Without it: explain → LEARN, analyse → BUILD, graded work → LEARN only.

Teach with small numeric examples first, then with code (Python `scipy`, `statsmodels`, or spreadsheet functions). Always connect the result back to a decision and state what the test **cannot** show.

## Mastery ladder

| Level | Evidence |
|---|---|
| L1 | Explains mean versus median, standard deviation, sample versus population, what a p-value is |
| L2 | Computes descriptive statistics, confidence intervals and a two-proportion test; reads a box plot and histogram |
| L3 | Designs an experiment with power analysis, runs the right test, checks assumptions, fits and interprets a regression |
| L4 | Explains pitfalls (peeking, multiple testing, Simpson's paradox, confounding) and communicates uncertainty to decision makers |

## Core knowledge

### Describing data
- **Centre:** mean (sensitive to outliers), median (robust), mode.
- **Spread:** range, interquartile range (IQR), variance, standard deviation.
- **Shape:** skewness (order values are typically right-skewed: mean > median), outliers (rule of thumb: beyond 1.5 × IQR from the quartiles).
- **Visuals:** histogram, box plot, scatter plot.

### Probability and distributions
- Probability between 0 and 1; independent events multiply; conditional probability P(A|B).
- **Normal distribution:** about 68% within 1 SD, 95% within 2, 99.7% within 3.
- **Binomial:** count of successes in n trials (conversions out of sessions).
- **Poisson:** counts of events in a period (tickets per hour).
- **Central limit theorem:** means of samples are approximately normal for large enough samples, which is why many tests work on non-normal data.

### Sampling
- Population versus sample; **random sampling**; **sampling bias** (only surveying happy customers, survivorship).
- **Standard error** = SD ÷ √n: precision grows with the square root of sample size.

### Confidence intervals
A 95% confidence interval is a range produced by a method that captures the true value 95% of the time. Report effects as "+0.4 pp (95% CI +0.1 to +0.7)", not just "significant".

### Hypothesis testing
1. H0 (no difference) and H1.
2. Significance level α (often 0.05).
3. Test statistic and p-value: probability of data at least as extreme **if H0 were true**.
4. Decide; report effect size and interval.
- **Type I error:** false positive (α). **Type II error:** false negative (β). **Power** = 1 − β (often 80%).

| Situation | Test |
|---|---|
| Two conversion rates | Two-proportion z-test or chi-square |
| Two means (e.g. AOV) | Welch's t-test (or Mann-Whitney for skewed data / bootstrap) |
| More than two groups, means | ANOVA |
| Categorical association | Chi-square test of independence |
| Before/after on the same units | Paired t-test |

### Experimental design
- Hypothesis, primary metric, guardrails, unit of randomisation, **minimum detectable effect**, α, power → **sample size and duration** fixed in advance.
- Run full weeks (weekday effects), avoid peeking, check **sample ratio mismatch**.
- **Multiple testing:** many metrics or variants inflate false positives; pre-register the primary metric, correct (e.g. Bonferroni) when needed.
- **Novelty effects** and seasonality can mislead short tests.

### Correlation and regression
- Correlation (−1 to 1) measures linear association; it does not show causation.
- **Linear regression:** effect of each predictor holding others constant; check residuals, outliers, multicollinearity; R² measures explained variance, not correctness.
- **Logistic regression** for yes/no outcomes (churn).
- **Confounding:** a third variable drives both (season drives ad spend and sales).

### Survey design and analysis
- Clear, neutral, single-topic questions; avoid leading and double-barrelled questions; balanced scales.
- Sample and response bias; report response rate and margin of error.
- Likert scales are ordinal: report distributions and medians, not just means.
- Personal data in surveys follows GDPR: minimise, inform, secure, honour rights.

## Common misconceptions

- "p = 0.03 means a 97% chance the variant is better." No.
- "Not significant means no effect." Maybe underpowered.
- "The average customer spends X." With skewed data, the median is more representative.
- "A big sample makes any result important." It makes tiny effects significant; judge practical size.

## Connects to

`ae-analytics` (A/B, cohorts), `ae-digital-analytics` (CRO tests), `ae-ai-ml` (regression and classification), `ae-python` (code), `ae-presentation-design` (communicating uncertainty).

## References

- [references/stats-cookbook.md](references/stats-cookbook.md): worked examples in Python and spreadsheet formulas.
- [references/exercises.md](references/exercises.md)
