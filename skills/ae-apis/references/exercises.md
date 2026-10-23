# Exercises: APIs

## Set A (practitioner)

1. Call a public API (e.g. a weather or exchange-rate API) in Bruno with a query parameter. Note method, URL, status, headers and the JSON shape.
2. Repeat in Python with `requests`; print three fields.
3. Explain 401 versus 403 versus 429 with an example each.
4. Store an API key in an environment variable and read it in Python.

## Set B (independent)

1. Build an extractor for a paginated API with retries and backoff; load results into DuckDB idempotently (see `ae-data-engineering`).
2. Add an incremental parameter (`updated_since`) using the max timestamp already loaded.
3. Write a webhook receiver that verifies a signature and ignores duplicate deliveries; test with a fake signed payload.
4. Design the integration between a webshop, an ESP and a CRM: compare point-to-point, iPaaS and warehouse-centric with reverse ETL for a 20-person company.

## Quiz bank

1. Which methods are idempotent?
2. Offset versus cursor pagination: which is safer when data changes, and why?
3. What should you do on a 429?
4. Why must webhook handlers be idempotent?
5. What is reverse ETL?

## Interview questions

1. "How would you extract data from an API with strict rate limits?"
2. "How do you keep API credentials safe in a data pipeline?"
3. "Webhooks or polling: how do you decide?"
