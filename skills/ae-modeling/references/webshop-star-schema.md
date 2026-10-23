# Worked example: the webshop star schema

## Business questions it must answer
- Revenue, orders and average order value by day, channel, category and customer segment.
- Conversion rate by channel and device.
- Customer lifetime value and repeat purchase rate.

## Bus matrix

| Business process (fact) | date | customer | product | channel | device |
|---|---|---|---|---|---|
| Order lines `fct_order_items` | ✔ | ✔ | ✔ | ✔ | ✔ |
| Orders `fct_orders` | ✔ | ✔ | | ✔ | ✔ |
| Sessions `fct_sessions` | ✔ | ✔ (if known) | | ✔ | ✔ |
| Reviews `fct_reviews` | ✔ | ✔ | ✔ | | |

## Grains
- `fct_order_items`: one row per product per order.
- `fct_orders`: one row per order.
- `fct_sessions`: one row per session.
- `dim_customers`: one row per customer (current state); `dim_customers_history` via snapshot for SCD2.
- `dim_products`: one row per product.
- `dim_channels`: one row per campaign/channel.
- `dim_date`: one row per calendar day.

## Diagram

```
                 dim_date
                    │
dim_customers ── fct_orders ── dim_channels
                    │
             fct_order_items ── dim_products
```

## Decisions and trade-offs
- Revenue lives in `fct_order_items` (line level) and `fct_orders` (order level, including shipping and discounts). Document which one each metric uses.
- Conversion rate is computed in the metric layer from `fct_sessions` (sessions with order / sessions), never stored per day and averaged.
- Customer segment at order time: join `fct_orders` to the SCD2 snapshot on `ordered_at between valid_from and coalesce(valid_to, '9999-12-31')`.
