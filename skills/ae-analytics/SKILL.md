---
name: ae-analytics
description: Analytics and insight for the Analytics Engineering Academy. Use for questions about exploratory data analysis, descriptive statistics, funnel analysis, cohort and retention analysis, customer segmentation and RFM, A/B testing and statistical significance, root cause analysis of metric changes, time series and seasonality, correlation versus causation, Simpson's paradox, analysis quality checks, and turning findings into recommendations.
---

# Module 10: Analytics

Analytics turns modeled data into answers and recommendations. The analytics engineer builds for analysts, and often is one; knowing how analysis is done determines how marts should be built.

## How to use this skill

Follow `ae-coach` for mode. Without it: explain → LEARN, analyse → BUILD, graded work → LEARN only.

Every analysis follows the same frame:
1. **Question** and the decision it supports (from `ae-business-journeys`).
2. **Check the data first:** grain, completeness, freshness, known gaps. Many "insights" are data bugs.
3. **Method** chosen for the question (table below).
4. **Result** with uncertainty stated.
5. **So what:** recommendation, confidence, and what would change the conclusion.

| Question type | Method |
|---|---|
| What does the data look like? | EDA |
| Where do users drop off? | Funnel |
| Do customers come back? | Cohort / retention |
| Which groups behave differently? | Segmentation (RFM, clustering) |
| Did the change cause the effect? | A/B test or quasi-experiment |
| Why did the metric move? | Root cause analysis |
| What happens next month? | Time series / forecast |

## Mastery ladder

| Level | Evidence |
|---|---|
| L1 | Explains funnel, cohort, segmentation, A/B test and correlation versus causation |
| L2 | Runs a funnel and cohort analysis in SQL with correct denominators |
| L3 | Designs and analyses an A/B test (sample size, significance, SRM check); runs a structured root cause analysis |
| L4 | Communicates uncertainty and trade-offs to stakeholders; spots flawed analyses (peeking, Simpson's paradox, survivorship) |

## Core knowledge

### EDA checklist
Row count and grain · nulls per column · distinct counts · min/max/percentiles · outliers · distributions · duplicates on the supposed key · date coverage gaps · relationships between key columns. Write down surprises before explaining them.

### Funnels
- Define the unit (session or user), the steps, the order requirement and the time window.
- Report step-to-step and overall conversion. The biggest absolute drop is not always the best place to act; combine with effort and impact.

### Cohorts and retention
- A cohort = customers who started in the same period (first order month).
- Retention table: cohort × periods since start. Read diagonally for seasonality, down columns for improvement over time.
- Distinguish **retention** (active again) from **revenue retention**.

### Segmentation
- **RFM:** Recency, Frequency, Monetary scored 1–5 each; segments like champions, at risk, lost.
- **Behavioural / needs-based:** from product usage or survey.
- **Clustering** (k-means) when many dimensions; validate that segments are actionable and stable (see `ae-ai-ml`).

### A/B testing
- Hypothesis, primary metric, guardrail metrics, minimum detectable effect (MDE), significance level (often 5%), power (often 80%) → sample size **before** starting.
- Randomise on the right unit (user, not session, for most UX tests).
- **Sample ratio mismatch (SRM):** if a 50/50 test has 52/48 users, randomisation is broken; do not trust results.
- **Peeking:** checking repeatedly and stopping when significant inflates false positives. Fix the duration or use sequential methods.
- A p-value is the probability of data at least this extreme if there were no effect. It is not the probability that the variant is better.
- Report the effect with a confidence interval, not just "significant".

### Root cause analysis (a metric moved)
1. **Is it real?** Check data freshness, pipeline changes, tracking changes, definitions.
2. **Size and timing:** how big, when did it start, sudden or gradual?
3. **Decompose:** metric = drivers (sessions × CR × AOV). Which driver moved?
4. **Segment:** channel, device, country, new versus returning, product. Where is the change concentrated?
5. **Mix versus rate:** did the share of a segment change, or the behaviour inside it?
6. **External factors:** seasonality, campaigns, competitors, outages, releases.
7. **Conclude** with evidence and remaining uncertainty.

### Traps
- **Correlation is not causation.** Ice cream and drowning both rise in summer.
- **Simpson's paradox:** a trend in every segment reverses in the total because of mix.
- **Survivorship bias:** analysing only customers who stayed.
- **Regression to the mean:** extreme periods are followed by more normal ones.
- **Averages of rates:** recompute from totals.

## On the reference stack

Analyses run in SQL on Snowflake marts (or in Python/notebooks reading them); results that become recurring move into dbt models and Looker Studio. Using another stack? Tell the coach once and it adapts (see STACK.md).

## Common misconceptions

- "Significant means important." Significant means unlikely to be noise; the effect can be tiny.
- "No significant result means no effect." It may mean the test was underpowered.
- "The segment with the biggest drop caused it." Check mix and size.
- "We can run the test until it wins." That is peeking.

## Connects to

`ae-sql` (patterns), `ae-bi-metrics` (metric definitions), `ae-ai-ml` (models, clustering), `ae-business-journeys` (decisions), `ae-presentation-design` (communicating findings).

## References

- [references/methods.md](references/methods.md): A/B test calculations, RFM in SQL, root cause template, analysis QA checklist.
- [references/exercises.md](references/exercises.md)
