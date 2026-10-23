# Exercises: dbt

## Set A (practitioner)

1. Declare the practice webshop tables as sources with freshness.
2. Build staging models for orders, customers and products with renames and casts.
3. Add `unique` and `not_null` on primary keys and one `accepted_values` test.
4. Build `fct_orders` and `dim_customers`; write grain sentences as descriptions.
5. Run `dbt docs generate` and explain the lineage graph out loud.

## Set B (independent)

1. Convert `fct_sessions` to an incremental model with a 3-day lookback. Prove it gives the same result as a full refresh on a test range.
2. Write a macro and use it in two models; show the compiled SQL.
3. Add a singular test: no order may have `order_total` different from its items' sum by more than 0.01.
4. Write a unit test for the channel-grouping logic with mocked rows.
5. Create a snapshot of customers and query "segment at time of order".
6. Set up CI that runs `dbt build -s state:modified+` on pull requests.
7. Debug: a model fails with "relation does not exist" only in production. List likely causes and checks.

## Quiz bank

1. What does `ref()` do besides returning a table name? *(Builds the DAG and resolves the environment-specific schema.)*
2. Where are joins allowed according to the layer rules?
3. Difference between `dbt run` and `dbt build`?
4. What does `is_incremental()` return on the first run? *(false)*
5. When would you choose `ephemeral`?
6. What does `--defer` do in slim CI?
7. What are the four built-in generic tests?

## Interview questions

1. "Walk me through a dbt project you built. Why those layers?"
2. "How do you handle late-arriving data in incremental models?"
3. "A test started failing in production overnight. What do you do?"
4. "How do you stop two teams defining revenue differently?"

## Certification prep (dbt Analytics Engineering)

The exam guide on getdbt.com lists the current topics and format; check it before studying. Historically the topics have included: developing dbt models, debugging data modeling errors, monitoring and maintaining pipelines, implementing tests, creating and maintaining documentation, managing external dependencies (sources, packages), and leveraging dbt state. Map each topic to the exercises above and run a timed mock quiz with the coach per topic.
