# Exercises: Customer data platforms

## Set A (practitioner)

1. List eight internal and four external customer data sources for an omnichannel retailer, marking structured or unstructured.
2. Explain the six steps of the CDP flow (ingestion → activation) with one example each.
3. Anna exists as `customer_id 28491`, `anna@email.se`, `user_id 7845`, `cookie_id xyz123` and `member_id 99432`. Which links are deterministic and how would you prove each?
4. CDP, CRM, data warehouse or DMP: which fits each need? (a) sales follow-up, (b) monthly revenue analysis, (c) unified profiles for email personalisation, (d) anonymous ad audiences.

## Set B (independent)

1. Run the six-step workshop on a real company (public information only) and present the data flow with problems and a prioritised recommendation.
2. Build an identity map in dbt from four synthetic sources and a `dim_customers` profile with purchases, service history and consent.
3. Define five segments in SQL and an activation plan with consent checks and a holdout per segment.
4. Write a recommendation: packaged CDP, composable CDP or fixing integrations, for a 28-store furniture chain with web, POS, OMS, CRM, automation and support systems. Separate evidence, assumptions and what must be verified.

## Quiz bank

1. Batch versus real-time ingestion: give one use case each.
2. Device id versus user id?
3. Why can probabilistic matching be risky?
4. What is activation?
5. Why has first-party data become more important?
6. SSP versus DSP?

## Interview questions

1. "How would you create a single customer view without buying a CDP?"
2. "What are the biggest risks in identity resolution?"
3. "A marketing manager wants a CDP. What do you ask first?"
