# Exercises: CRM and marketing automation

## Set A (practitioner)

1. Explain CRM, CDP and marketing automation to a store manager in one sentence each.
2. Draw a B2C lifecycle for a furniture retailer with entry criteria for each stage.
3. Design a welcome flow with the template: trigger, steps, suppression, exit, metric, holdout.
4. List five ways bad CRM data hurts the customer experience, each with a fix.

## Set B (independent)

1. Build `int_customer_identities` and `dim_customers` in dbt from three sources with overlapping customers; document survivorship rules and test them.
2. Build lifecycle stages based on each customer's own purchase rhythm and show how many customers move between stages per month.
3. Write the contact policy and suppression model for a company running six flows; prove with a test that no suppressed customer is in an export.
4. Analyse a (synthetic) abandoned-cart flow with a 10% holdout: incremental conversion, revenue and margin after discounts. Recommend keep, change or stop.
5. Tag 50 synthetic support tickets by reason and show which reasons predict churn.

## Quiz bank

1. Trigger versus workflow?
2. What is suppression and give three examples.
3. Why is open rate a weak metric today?
4. MQL versus SQL?
5. What is a golden record and what are survivorship rules?
6. Why is NPS a lagging indicator, and what leads it?
7. Outbound versus inbound?

## Interview questions

1. "How would you build a single customer view from our e-commerce, CRM and support data?"
2. "Our automation flows don't seem to work. How do you find out why?"
3. "How do you measure the real effect of an abandoned-cart flow?"
