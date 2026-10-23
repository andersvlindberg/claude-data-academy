# Statistics cookbook

## Descriptive statistics (pandas)
```python
df["order_total"].describe(percentiles=[.25, .5, .75, .9, .99])
q1, q3 = df["order_total"].quantile([.25, .75])
iqr = q3 - q1
outliers = df[(df.order_total < q1 - 1.5 * iqr) | (df.order_total > q3 + 1.5 * iqr)]
```

## Confidence interval for a mean
```python
import numpy as np
from scipy import stats
x = df["order_total"].to_numpy()
mean, se = x.mean(), stats.sem(x)
low, high = stats.t.interval(0.95, len(x) - 1, loc=mean, scale=se)
```

## Two proportions (A/B conversion)
```python
from statsmodels.stats.proportion import proportions_ztest, confint_proportions_2indep
count, nobs = [310, 352], [10000, 10050]
z, p = proportions_ztest(count, nobs)
ci = confint_proportions_2indep(count[1], nobs[1], count[0], nobs[0])   # variant - control
```

## Two means (AOV), robust to unequal variances
```python
stats.ttest_ind(a, b, equal_var=False)       # Welch
stats.mannwhitneyu(a, b)                      # rank-based alternative
```

## Bootstrap a difference in medians
```python
rng = np.random.default_rng(42)
diffs = [np.median(rng.choice(b, len(b))) - np.median(rng.choice(a, len(a))) for _ in range(5000)]
np.percentile(diffs, [2.5, 97.5])
```

## Chi-square: is channel associated with conversion?
```python
table = pd.crosstab(df.channel, df.converted)
chi2, p, dof, expected = stats.chi2_contingency(table)
```

## Sample ratio mismatch check
```python
stats.chisquare([10000, 10600], f_exp=[10300, 10300])   # expected 50/50
```

## Linear regression
```python
import statsmodels.formula.api as smf
model = smf.ols("revenue ~ ad_spend + C(month) + discount_share", data=weekly).fit()
print(model.summary())
```

## Spreadsheet equivalents
| Need | Excel / Google Sheets |
|---|---|
| Mean, median, SD | `AVERAGE`, `MEDIAN`, `STDEV.S` |
| Percentile | `PERCENTILE.INC(range, 0.9)` |
| CI half-width for a mean | `CONFIDENCE.T(0.05, STDEV.S(range), COUNT(range))` |
| t-test p-value | `T.TEST(range1, range2, 2, 3)` (two-tailed, unequal variance) |
| Correlation | `CORREL(x, y)` |
| Chi-square p-value | `CHISQ.TEST(observed, expected)` |
