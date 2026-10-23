# ML on customer data

## Point-in-time churn dataset (SQL sketch)

```sql
-- features as of cutoff, label from the 90 days after
with params as (select date '2026-06-30' as cutoff),

features as (
    select
        o.customer_id,
        date_diff((select cutoff from params), max(date(o.ordered_at)), day) as recency_days,
        count(*)                                                            as orders_365d,
        sum(o.order_total)                                                  as revenue_365d
    from orders o
    where date(o.ordered_at) <= (select cutoff from params)
      and date(o.ordered_at) >  date_sub((select cutoff from params), interval 365 day)
    group by o.customer_id
),

labels as (
    select
        f.customer_id,
        case when count(o.order_id) = 0 then 1 else 0 end as churned_90d
    from features f
    left join orders o
        on o.customer_id = f.customer_id
       and date(o.ordered_at) >  (select cutoff from params)
       and date(o.ordered_at) <= date_add((select cutoff from params), interval 90 day)
    group by f.customer_id
)

select * from features join labels using (customer_id)
```
Build several cutoffs (monthly) to get more training rows and to test over time.

## Training and evaluating (Python, scikit-learn)

```python
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import classification_report, roc_auc_score

X = df[["recency_days", "orders_365d", "revenue_365d"]]
y = df["churned_90d"]
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.25, stratify=y, random_state=42)

model = LogisticRegression(max_iter=1000).fit(X_train, y_train)
proba = model.predict_proba(X_test)[:, 1]
print(roc_auc_score(y_test, proba))
print(classification_report(y_test, proba > 0.5))
```
For time-based data, prefer training on earlier cutoffs and testing on a later one. Compare with the baseline rule `recency_days > 120`.

## BigQuery ML

```sql
create or replace model `proj.ml.churn_logreg`
options(model_type = 'logistic_reg', input_label_cols = ['churned_90d']) as
select recency_days, orders_365d, revenue_365d, churned_90d
from `proj.ml.churn_training`;

select * from ml.evaluate(model `proj.ml.churn_logreg`);
select * from ml.predict(model `proj.ml.churn_logreg`, table `proj.ml.churn_scoring`);
```

## CLV approaches
| Approach | When |
|---|---|
| Historical CLV (sum of past margin) | Reporting, simple segmentation |
| Simple formula (AOV × frequency × lifespan × margin) | Planning, business cases |
| Probabilistic (BG/NBD for purchase count + Gamma-Gamma for spend) | Non-contractual retail, forward-looking estimates |
| ML regression on features | Many signals available, enough history |

## Using predictions
Write scores back to the warehouse (`ml_customer_scores`) and activate them via reverse ETL (e.g. a win-back flow for high-risk, high-value customers). Measure impact with a holdout group, not by model accuracy alone.
