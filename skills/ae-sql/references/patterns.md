# SQL patterns

## Deduplicate: keep the latest row per key
```sql
select *
from raw_customers
qualify row_number() over (partition by customer_id order by updated_at desc) = 1
```
Without QUALIFY: wrap in a CTE and filter `where rn = 1`.

## Top N per group
```sql
select category, name, revenue
from product_revenue
qualify dense_rank() over (partition by category order by revenue desc) <= 3
```

## Running total and share of total
```sql
select
    order_date,
    revenue,
    sum(revenue) over (order by order_date rows between unbounded preceding and current row) as running_revenue,
    revenue / sum(revenue) over () as share_of_total
from daily_revenue
```

## Period over period
```sql
select
    month,
    revenue,
    lag(revenue) over (order by month) as prev_month,
    safe_divide(revenue - lag(revenue) over (order by month), lag(revenue) over (order by month)) as mom_growth
from monthly_revenue
```
(`safe_divide` is BigQuery; use `div0` in Snowflake, or `nullif(x, 0)` in the denominator elsewhere.)

## Sessionisation (30-minute inactivity rule)
```sql
with ordered as (
    select
        user_id, event_at,
        case
            when lag(event_at) over (partition by user_id order by event_at) is null
              or event_at > lag(event_at) over (partition by user_id order by event_at) + interval 30 minute
            then 1 else 0
        end as is_new_session
    from events
)
select
    *,
    sum(is_new_session) over (partition by user_id order by event_at) as session_number
from ordered
```
Interval syntax varies by dialect (see dialects.md).

## Gaps and islands (consecutive active days)
```sql
with days as (
    select distinct customer_id, date(ordered_at) as d from orders
),
grouped as (
    select customer_id, d,
           date_sub(d, interval row_number() over (partition by customer_id order by d) day) as grp
    from days
)
select customer_id, min(d) as streak_start, max(d) as streak_end, count(*) as streak_days
from grouped
group by customer_id, grp
```

## Funnel (sessions reaching each step)
```sql
select
    count(distinct session_id) as sessions,
    count(distinct case when event_type = 'view_item'      then session_id end) as viewed,
    count(distinct case when event_type = 'add_to_cart'    then session_id end) as added,
    count(distinct case when event_type = 'begin_checkout' then session_id end) as checkout,
    count(distinct case when event_type = 'purchase'       then session_id end) as purchased
from events
```
Ordered funnels (step B must come after step A) need window functions or per-session min timestamps per step.

## Cohort retention (BigQuery syntax)
```sql
with first_orders as (
    select customer_id, date_trunc(date(min(ordered_at)), month) as cohort_month
    from orders group by customer_id
),
activity as (
    select o.customer_id, f.cohort_month,
           date_diff(date_trunc(date(o.ordered_at), month), f.cohort_month, month) as months_since
    from orders o join first_orders f using (customer_id)
)
select cohort_month, months_since, count(distinct customer_id) as active_customers
from activity
group by 1, 2
order by 1, 2
```

## Avoid fan-out: aggregate before joining
```sql
with order_lines as (
    select order_id, sum(quantity * unit_price) as items_total
    from order_items group by order_id
)
select o.order_id, o.order_total, l.items_total, o.order_total - l.items_total as diff
from orders o
left join order_lines l using (order_id)
where abs(o.order_total - coalesce(l.items_total, 0)) > 0.01
```

## Anti-join (rows with no match)
```sql
select s.*
from sessions s
where not exists (select 1 from orders o where o.session_id = s.session_id)
```
