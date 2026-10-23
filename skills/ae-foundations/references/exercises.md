# Exercises: Data foundations

## Set A (practitioner)

1. Draw the lifecycle for a newsletter signup on a website. Name the data created at each step.
2. Classify each as structured, semi-structured or unstructured: an order table, a GA4 event with `event_params`, a customer support chat log, a product CSV.
3. For each statement, mark observation or interpretation: "status 202 returned", "the order was saved", "the cookie `_ga` exists", "the visitor is a returning customer".
4. Explain ETL versus ELT to a non-technical manager in three sentences.

## Set B (independent)

1. A marketing manager says: "GA4 shows 80 purchases yesterday, the order system shows 112. GA4 is broken." Write five hypotheses, ordered by likelihood, each with one test that would confirm or reject it.
2. A company has data in Shopify, Klaviyo, Zendesk and Google Ads, and reports in spreadsheets. Place them on the maturity scale and propose the first three steps to the next level.

## Quiz bank

1. In which lifecycle step does dbt work? *(Transform.)*
2. Why has ELT replaced ETL as the default? *(Cheap scalable warehouse compute, raw data kept for reprocessing.)*
3. What is the difference between a business event and a measurement event? *(The business event happened in the business system; the measurement event is a signal sent to an analytics tool, which can fail independently.)*
4. Which role owns metric definitions in a mature team? *(Typically the analytics engineer in collaboration with the data owner.)*
5. Name the five customer data layers. *(Identity, demographics, behaviour, transactions, communication/service.)*

## Interview questions

1. "What does an analytics engineer do that an analyst does not?"
2. "Walk me through how a purchase on a website ends up in a dashboard."
3. "Two dashboards show different revenue. How do you approach it?"
