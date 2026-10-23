# Exercises: SQL

All exercises use the practice schema. Solutions are not included on purpose: the coach reviews your attempt and points at what to reconsider.

## Set A (practitioner)

1. List products over 2 000 in price, most expensive first.
2. Show each order with customer name and number of items.
3. Revenue per campaign channel, only completed orders, highest first.
4. Customers who have never ordered (two ways: LEFT JOIN + IS NULL, and NOT EXISTS).
5. Average rating per product for products with at least 2 reviews.
6. Conversion rate per channel: sessions with an order divided by all sessions.

## Set B (independent)

1. Find orders where `order_total` does not match the sum of their items. Explain how you avoided fan-out.
2. Top 3 products by revenue within each category.
3. For each customer: first order date, latest order date, number of orders, days between first and second order.
4. Monthly revenue with month-over-month growth, safe against division by zero.
5. Session funnel: sessions reaching view_item, add_to_cart, begin_checkout, purchase, with step-to-step rates.
6. Monthly cohort retention table (cohort month × months since first order).
7. Debug: a colleague's revenue per channel is 40% too high. Their query joins orders to order_items and sessions before summing `order_total`. Explain the bug and fix it.

## Quiz bank

1. In what order are WHERE, GROUP BY, SELECT and HAVING logically executed?
2. What does `COUNT(email)` return if 3 of 10 rows have NULL email? *(7)*
3. Why can `NOT IN (subquery)` return no rows at all? *(A NULL in the subquery makes every comparison unknown.)*
4. Difference between `rank()` and `dense_rank()` with ties 100, 90, 90, 80? *(1,2,2,4 vs 1,2,2,3)*
5. What is QUALIFY for?
6. Why is `SELECT *` expensive in BigQuery?

## Interview questions

1. "Explain the difference between WHERE and HAVING with an example."
2. "How would you find duplicate customers, and how would you decide which record to keep?"
3. "A query got 10x slower after a new join. How do you investigate?"
4. "Write a query for 7-day rolling revenue." (whiteboard)
