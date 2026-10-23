# Glossary

| Term | Meaning | Module |
|---|---|---|
| Accumulating snapshot | Fact table with one row per process instance, updated as it progresses | 03 |
| Action title | Slide title that states the takeaway | 18 |
| Additive measure | Can be summed across all dimensions (revenue) | 03 |
| AOV | Average order value = revenue ÷ orders | 08 |
| Backfill | Reprocessing a historical range | 04 |
| CDC | Change data capture: reading database changes from the log | 04 |
| CDP | Customer data platform: unifies customer data into profiles and audiences | 08 |
| Cohort | Group sharing a start period | 10 |
| Consent Mode | Google's mechanism passing consent state to its tags | 07 |
| CTE | Common table expression (`with ... as`) | 02 |
| Data contract | Agreement on schema, semantics, quality and SLAs between producer and consumer | 12 |
| Data layer | JavaScript object that carries business events to the tag manager | 07 |
| DAG | Directed acyclic graph: dependency graph of models or tasks | 05 |
| Dimension | Descriptive table (customer, product) | 03 |
| ELT | Extract, load, then transform in the warehouse | 01 |
| Fact | Table of business events or measurements at a declared grain | 03 |
| Fan-out | Row multiplication from joining one-to-many before aggregating | 02 |
| Grain | What one row represents | 03 |
| Idempotent | Running again gives the same result | 04 |
| Incremental model | dbt model that processes only new or changed rows | 05 |
| Leakage | Using information unavailable at prediction time | 15 |
| Least privilege | Grant only the access needed | 06, 12, 19 |
| MCP | Model Context Protocol: open standard connecting AI apps to tools and data | 19 |
| Metric tree | Breakdown of an outcome into actionable drivers | 09 |
| Pseudonymisation | Replacing identifiers so data cannot be attributed without extra information; still personal data | 12 |
| RACI | Responsible, Accountable, Consulted, Informed | 08, 17 |
| RAG | Retrieval augmented generation | 15 |
| Reverse ETL | Syncing modeled warehouse data back into operational tools | 08, 13 |
| ROAS | Return on ad spend = revenue ÷ ad cost | 08 |
| SCD type 2 | Slowly changing dimension keeping history with validity dates | 03 |
| Semantic layer | Central metric and dimension definitions queried by tools | 11 |
| Slim CI | Building only changed models and their children in CI | 05 |
| Snapshot | dbt feature recording row changes over time (SCD2) | 05 |
| SRM | Sample ratio mismatch in an A/B test | 10 |
| Surrogate key | Generated key independent of source systems | 03 |
| Touchpoint | Any point where the customer meets the company | 09 |
| CRO | Conversion rate optimisation | 23 |
| Customer 360 | Unified customer profile across systems | 22 |
| Deterministic matching | Linking identities on certain keys (login, email) | 22 |
| ERP | Enterprise resource planning: finance, purchasing, inventory | 26 |
| Golden record | Best version of an entity built from several sources | 21 |
| Holdout | Group deliberately excluded to measure incremental effect | 21 |
| Identity resolution | Linking identifiers to one person | 22 |
| Key event | GA4 term for an important action (formerly conversion) | 23 |
| Leading / lagging indicator | Predicts outcomes / reports outcomes | 25 |
| Lifecycle stage | Where a customer is in the relationship | 21 |
| Master data | Shared core entities (customer, product) | 26 |
| Measurement plan | Objectives → goals → KPIs → events | 23 |
| MQL / SQL (leads) | Marketing / sales qualified lead | 21 |
| Order to cash | Process from order to payment received and booked | 26 |
| Power (statistics) | Probability of detecting a real effect | 24 |
| SMART goal | Specific, measurable, achievable, relevant, time-bound | 25 |
| Suppression | Excluding contacts from a message | 21 |
| Trigger / workflow | Event that starts an automation / its steps | 21 |
| UTM parameters | Campaign tags on links | 23 |

A Swedish–English glossary of CRM, MarTech and customer data terms is in [`skills/ae-crm-automation/references/glossary-sv-en.md`](../skills/ae-crm-automation/references/glossary-sv-en.md).

