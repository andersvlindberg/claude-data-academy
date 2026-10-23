# Reference architecture: e-commerce MarTech stack

```
 Website / app ──► data layer ──► tag manager ──► analytics (GA4) ──► BigQuery export
      │                               │
      │                               └──► ad platforms (conversions API, consent-aware)
      ▼
 Shop platform (orders, products) ──► ingestion ──► WAREHOUSE ◄── CRM / support / email tool
                                                      │
                                              dbt models (customers, orders,
                                              sessions, segments, CLV)
                                                      │
                     ┌────────────────┬───────────────┼────────────────┐
                     ▼                ▼               ▼                ▼
                 BI dashboards   reverse ETL     ML scores (churn,   AI agents
                                 to email/CRM/   CLV) back to tools  (company brain)
                                 ad audiences
```

Design questions:
1. Which business goal does each system serve?
2. What is the customer identifier across systems (email hash, customer id) and where is identity resolved?
3. Where is consent stored and how does every system respect it?
4. Which system is the source of truth for each entity (customer, order, product)?
5. Who owns each system and each data domain (RACI)?

## The MarTech lab arc (four weeks)

| Week | Question | Typical outputs |
|---|---|---|
| 1. Find and understand data | Where is data created and how is it recorded? | Touchpoint list, event list, data table per system |
| 2. Retrieve and extract data | How do we get data out of a system? | Export options, API endpoints, sample payloads |
| 3. Structure and move data | How do systems understand each other's data? | Field mapping, identifiers, data flow diagram |
| 4. Build and test an architecture | How do systems connect and how do we know it works? | Architecture diagram, test plan, monitoring |

Working method for each task: read the task and identify what to find out → search (Swedish or English) → use AI to explain terms and compare options → verify key facts in vendor documentation or standards → apply to a concrete e-commerce example → document with sources.
