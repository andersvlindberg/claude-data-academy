# Analysis methods

## A/B test: quick sample size intuition
For a conversion rate test, required users per variant grows with `p(1−p) / MDE²`. Halving the detectable effect quadruples the sample. Use a calculator or Python (`statsmodels.stats.power`) rather than guessing:

```python
from statsmodels.stats.power import NormalIndPower
from statsmodels.stats.proportion import proportion_effectsize

baseline, target = 0.030, 0.033          # 10% relative lift
effect = proportion_effectsize(target, baseline)
n = NormalIndPower().solve_power(effect_size=effect, alpha=0.05, power=0.8, ratio=1)
print(round(n))                           # users per variant
```

## A/B test: analysis
```python
from statsmodels.stats.proportion import proportions_ztest, proportion_confint

conversions = [310, 352]   # control, variant
users       = [10000, 10050]
stat, p = proportions_ztest(conversions, users)
ci_control = proportion_confint(conversions[0], users[0])
ci_variant = proportion_confint(conversions[1], users[1])
```
Then: SRM check (chi-square on the user split), guardrails, and an effect estimate with interval.

## RFM in SQL
```sql
with base as (
    select
        customer_id,
        date_diff(current_date(), date(max(ordered_at)), day) as recency_days,
        count(*)                                              as frequency,
        sum(order_total)                                      as monetary
    from orders
    where status = 'completed'
    group by customer_id
)
select
    *,
    6 - ntile(5) over (order by recency_days) as r_score,   -- recent = high
    ntile(5) over (order by frequency)        as f_score,
    ntile(5) over (order by monetary)         as m_score
from base
```

## Root cause template
```
Metric: ______  Change: ___ (from __ to __)  Started: ____
1. Data checks: freshness □ pipeline changes □ tracking changes □ definition changes □
2. Driver decomposition: traffic Δ __ | conversion Δ __ | AOV Δ __
3. Segments with largest contribution: ______
4. Mix or rate: ______
5. External events: ______
Conclusion (evidence): ______
Not shown / uncertain: ______
Next step: ______
```

## Analysis QA checklist (before sharing)
- [ ] Question and decision stated
- [ ] Grain and filters documented; denominators explicit
- [ ] Numbers reconcile with a trusted source (total revenue, user counts)
- [ ] Time zone and date range stated
- [ ] Outliers and nulls handled and described
- [ ] Charts start axes appropriately and label units
- [ ] Uncertainty stated; causal language only where justified
- [ ] Someone else could rerun it (SQL/notebook saved, in Git)
