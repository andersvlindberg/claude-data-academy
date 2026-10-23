# KPI formulas

Example numbers are invented for practice.

## Customer value over time

| KPI | Means | Formula | Example |
|---|---|---|---|
| CLV / LTV | Value of a customer over the whole relationship | avg order × orders per year × years × margin | 500 × 3 × 2 × 30% = 900 |
| CAC | Cost to acquire one new customer | (marketing + sales cost) ÷ new customers | 100 000 ÷ 250 = 400 |
| LTV:CAC | Do we earn more than the customer cost? | LTV ÷ CAC (below 1 = loss; ~3:1 often cited) | 900 ÷ 400 ≈ 2.3 |
| Churn | Share of customers who leave | lost customers ÷ customers at period start | 120 ÷ 1 000 = 12% |
| Retention | Share who stay | 1 − churn (when no new customers are counted) | 88% |
| Repurchase rate | Share of customers with 2+ orders | customers with ≥2 orders ÷ customers | |

RevOps principle: sales and marketing steer on the same numbers (CAC, LTV, churn). Think CLV, not today's order.

## Campaign and e-commerce

| KPI | Means | Formula | Example |
|---|---|---|---|
| CTR | Share who click | clicks ÷ impressions | 50 ÷ 2 000 = 2.5% |
| CR | Conversion rate | purchases ÷ sessions (or visitors; define it) | 30 ÷ 1 500 = 2% |
| AOV | Average order value | revenue ÷ orders | 60 000 ÷ 120 = 500 |
| CPA | Cost per acquisition | cost ÷ conversions | 6 000 ÷ 30 = 200 |
| ROAS | Revenue per ad krona | revenue ÷ ad cost | 24 000 ÷ 6 000 = 4 |
| ROI | Return on investment | (profit − cost) ÷ cost, using margin | |

Pitfalls:
- CR and AOV move together: a discount can raise CR and lower AOV. Watch revenue per session (CR × AOV).
- ROAS uses revenue; ROI uses profit. Break-even ROAS = 1 ÷ margin (25% margin → ROAS 4 is break-even).
- Every rate needs a precise denominator (sessions or users? all orders or completed?). Write it in the metric definition.
- Never average rates across segments or days; recompute from totals.

## SQL patterns (practice schema)

```sql
-- AOV and conversion rate per channel
select
    c.channel,
    count(distinct s.session_id)                                        as sessions,
    count(distinct o.order_id)                                          as orders,
    sum(o.order_total)                                                  as revenue,
    sum(o.order_total) * 1.0 / nullif(count(distinct o.order_id), 0)    as aov,
    count(distinct o.order_id) * 1.0 / nullif(count(distinct s.session_id), 0) as conversion_rate
from sessions s
join campaigns c on c.campaign_id = s.campaign_id
left join orders o on o.session_id = s.session_id and o.status = 'completed'
group by c.channel
```

```sql
-- Simple historical CLV per customer (revenue-based, before margin)
select
    customer_id,
    count(*)                                   as orders,
    sum(order_total)                           as lifetime_revenue,
    min(ordered_at)                            as first_order_at,
    max(ordered_at)                            as last_order_at
from orders
where status = 'completed'
group by customer_id
```

## NPS
`NPS = % promoters (9–10) − % detractors (0–6)`, range −100 to +100. Passives (7–8) count in the denominator only.
