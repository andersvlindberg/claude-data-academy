---
name: ae-business-journeys
description: Data-driven business processes and customer journeys for the Analytics Engineering Academy. Use for questions about customer journey mapping, touchpoints, service blueprints, process mapping, business models, turning business questions into data requirements, KPI and metric trees, north star metrics, prioritising improvements, business cases and ROI, stakeholder management, data-driven decision making, being the bridge between business and tech, and the course on data-driven business processes and business development.
---

# Module 09: Business, processes and customer journeys

Data only has value when it changes a decision. This module trains the business half of the analytics engineer: understanding processes and customers well enough to know which data matters and why.

## How to use this skill

Follow `ae-coach` for mode. Without it: explain → LEARN, analyse/design → BUILD, graded work → LEARN only (use a different company or journey as the worked example; review their own map).

Every analysis in this module ends with three lines:
- **Decision:** what decision does this support?
- **Data:** which data (and which touchpoint created it) is needed?
- **Metric:** how will we know it worked?

## Mastery ladder

| Level | Evidence |
|---|---|
| L1 | Explains customer journey, touchpoint and process map; names the stages of a purchase journey |
| L2 | Maps a real journey with touchpoints, pain points and the data each touchpoint creates |
| L3 | Turns a business goal into a metric tree, data requirements and a prioritised improvement backlog |
| L4 | Writes and defends a business case with costs, benefits, risks and a measurement plan to stakeholders |

## Core knowledge

### Customer journey mapping
A journey map shows the customer's experience over time, from their point of view.

Rows of a map:
| Row | Content |
|---|---|
| Stages | e.g. awareness → consideration → purchase → delivery → use → loyalty |
| Customer goal | what they try to achieve in each stage |
| Actions | what they do |
| Touchpoints and channels | where they meet the company (ad, search, site, store, email, support, invoice) |
| Thoughts and feelings | emotional curve, highs and lows |
| Pain points | friction, confusion, waiting |
| Opportunities | what could be better |
| **Data created** | which events, records and systems capture this step |
| **KPIs** | how we measure the stage |

The last two rows are what make a journey map useful for a data person: they connect experience to the warehouse.

Touchpoints can be before purchase (ads, social, search, web, PR, word of mouth, email, events), at purchase (webshop, store, checkout, payment, campaigns) and after purchase (invoice, customer service, product use, loyalty, reviews). They can be owned, paid or earned, digital or human.

A **service blueprint** extends the journey with what happens backstage: employee actions, support processes and systems. That is where data is actually created.

### Prioritising: fix the hole below the waterline
The customer sees one company, not your departments. Prioritise problems with the **largest impact, affecting the most customers, that are easiest to solve**. A simple scoring: impact × reach ÷ effort.

### Process mapping
- Map the as-is process before designing the to-be.
- Swimlanes by role or system show handovers, where errors and delays hide.
- For each step: input, output, owner, system, data created, cycle time, error rate.
- BPMN is the formal notation; for most work, clear swimlanes are enough.

### From business question to data requirement
1. **Business goal:** increase repeat purchases.
2. **Question:** which customers are likely to buy again, and what triggers it?
3. **Hypotheses:** customers who get delivery on time and a follow-up email buy again more.
4. **Data:** orders, deliveries, emails sent/opened, customer ids that link them.
5. **Metric:** 90-day repurchase rate by cohort.
6. **Decision:** change delivery promise or email flow; test with a holdout.

### Metric trees
Break a top-level outcome into drivers you can act on:
```
Revenue
├── Sessions (traffic)
│   └── by channel
├── Conversion rate
│   ├── add-to-cart rate
│   └── checkout completion rate
└── Average order value
    ├── items per order
    └── price per item
```
A **north star metric** captures the value customers get (e.g. weekly active buyers). Input metrics are the levers teams own.

### Data-driven decision cycle
Question → hypothesis → data → analysis → decision → follow-up → learning. Without the follow-up step there is no learning over time.

### Business case structure
1. Problem and its cost today (with data).
2. Options, including "do nothing".
3. Recommended option: costs (one-off and running), benefits (quantified with assumptions), risks.
4. Financials: payback period, simple ROI; NPV for larger investments.
5. Measurement plan: KPIs, baseline, target, how and when to evaluate.
6. Implementation: owners (RACI), timeline, dependencies.

See [references/business-case.md](references/business-case.md).

### Being the bridge
- Translate both ways: business language into data requirements, and technical findings into business consequences.
- Ask "what will you do differently if the number is X versus Y?" If nothing, the analysis is not needed.
- Write definitions down and get them agreed.

## Common misconceptions

- "The journey map is a pretty poster." It is a tool for finding data gaps and priorities.
- "More touchpoints means a better journey." More friction points, often.
- "We need a dashboard." Usually they need an answer to a question; find the question.
- "The business case is just numbers." It is assumptions; make them explicit and testable.

## Connects to

`ae-martech` (systems behind touchpoints), `ae-web-tracking` (digital touchpoints), `ae-analytics` (testing the hypotheses), `ae-bi-metrics` (metric definitions), `ae-presentation-design` (presenting the case), `ae-project-method` (delivering it).

## References

- [references/journey-mapping.md](references/journey-mapping.md): template and a worked e-commerce example.
- [references/business-case.md](references/business-case.md): template, formulas and an example.
- [references/course-notes-journeys.md](references/course-notes-journeys.md): customer journey phases, touchpoints, moments of truth, customer journey analytics in six steps.
- [references/exercises.md](references/exercises.md)
