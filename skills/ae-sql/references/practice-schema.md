# Practice schema: the webshop

An electronics webshop. Works in SQLite, DuckDB, Postgres, BigQuery or Snowflake.

```
customers   (customer_id PK, name, email, city, created_at)
products    (product_id PK, name, category, price)
campaigns   (campaign_id PK, campaign, channel)            -- e.g. tiktok, google_ads, newsletter
sessions    (session_id PK, customer_id NULL, campaign_id, started_at, device)
events      (event_id PK, session_id, event_type, product_id NULL, event_at)
            -- event_type: view_item, add_to_cart, begin_checkout, purchase
orders      (order_id PK, customer_id, session_id, order_total, status, ordered_at)
order_items (order_id, product_id, quantity, unit_price)   -- PK (order_id, product_id)
reviews     (review_id PK, product_id, customer_id, rating, reviewed_at)
```

Relationships:
- A customer has many sessions and many orders. Anonymous sessions have `customer_id` NULL.
- An order has many order_items. `order_total` should equal `sum(quantity * unit_price)`; checking that it does is itself a data quality exercise.
- A session has many events and at most one order in this simplified model.

If the learner has a local file such as `webshop.db` with Swedish table names (`kunder`, `produkter`, `ordrar`, `orderrader`, `sessioner`, `kampanjer`, `handelser`, `recensioner`), map them one to one.

## Seed generator

Ask Claude to generate seed data with deliberate issues for quality practice: a duplicated order, an order whose total does not match its items, a session with a purchase event but no order, and a timezone edge case at midnight.
