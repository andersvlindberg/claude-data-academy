# Exercises: Data modeling

## Set A (practitioner)

1. Write the grain sentence for: an orders table, an order items table, a daily inventory table, a GA4 events table.
2. A flat table has `order_id, order_date, customer_name, customer_email, product_name, product_category, quantity, price`. Normalise it to 3NF and draw the ERD.
3. Classify as additive, semi-additive or non-additive: revenue, account balance, conversion rate, quantity, NPS.
4. Choose a primary key for each table in the practice schema, and say whether it is natural or surrogate.

## Set B (independent)

1. Design the star schema for a subscription business (plans, subscriptions, invoices, cancellations). Include a bus matrix and grain sentences.
2. A customer's segment changes from "new" to "loyal". Marketing wants revenue by the segment the customer had *at the time of the order*. Design it and write the join.
3. Design an accumulating snapshot for order fulfilment and list which columns update over time.
4. A BI team asks for one wide table for their dashboard. Argue for and against, and propose a design that keeps the star schema as the source of truth.

## Quiz bank

1. What does "declare the grain" mean? 
2. Why can't you average daily conversion rates to get a monthly rate?
3. What are the three columns typical of an SCD type 2 table? *(valid_from, valid_to, is_current)*
4. What is a conformed dimension?
5. Name the four Kimball design steps.

## Interview questions

1. "How do you choose the grain of a fact table?"
2. "When would you use a snapshot in dbt?"
3. "Star schema or one big table: what would you pick for a small team using Looker Studio?"
