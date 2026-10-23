# Exercises: Governance, GDPR and quality

## Set A (practitioner)

1. Mark which are personal data: hashed email, order id, IP address, product price, `user_pseudo_id`, aggregated revenue per city with 3 customers.
2. Pick a legal basis for: shipping an order, keeping invoices, A/B testing a checkout, a newsletter. Justify each.
3. Fill the data mapping template for a small webshop with three purposes.
4. Add PII meta tags and `not_null`/`unique` tests to the customer staging model.

## Set B (independent)

1. Implement pseudonymisation: hash emails with a salt in staging, store the mapping in a restricted schema, and show that marts contain no direct identifiers.
2. Write and test a deletion procedure for one customer across raw, staging, marts and a snapshot.
3. Write a legitimate interest assessment for product analytics using server-side data.
4. Draft a data contract for GA4 purchase events consumed by your dbt project.
5. Find dark data in a sample warehouse inventory and propose keep, repurpose or delete with reasons.

6. Run the 15-minute cookie audit on a real Swedish website and present the result as an evidence chain: what happens before choice, after reject, after accept, after withdrawal.
7. Run the data collection checklist on a newsletter signup form and fix every gap.

## Quiz bank

1. Name the six legal bases.
2. Is pseudonymised data personal data? *(Yes, if re-linkable.)*
3. Within how many hours must a qualifying breach be notified to the authority? *(72)*
4. What does Art. 30 require?
5. Data owner, steward, custodian: who does what?
6. Name the six data quality dimensions.
7. Which Swedish law and authority govern cookies? *(LEK 9 kap. 28 §, PTS; GDPR and IMY for the personal data)*
8. Is a pre-ticked consent box valid? *(No, Planet49)*
9. Can analytics cookies be classed as strictly necessary? *(As a rule no in Sweden)*
10. When may you email marketing to an individual without prior consent? *(Existing customer, own similar products, opt-out offered at collection and in every message; check MFL 19 §)*

## Interview questions

1. "How do you handle a GDPR deletion request in a data warehouse?"
2. "How do you design a warehouse so analysts can work without seeing personal data?"
3. "What is a data contract and why would you want one?"
