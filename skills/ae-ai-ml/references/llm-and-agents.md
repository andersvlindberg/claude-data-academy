# LLMs, RAG and agents

## Company brain architecture

```
Sources of truth                      Curated layer                         Use
─────────────────                     ─────────────                         ───
dbt docs + YAML descriptions ─┐
metric definitions ───────────┤──► documented knowledge base ──► retrieval ──► agent answers
decisions, processes (docs) ──┤     (owned, versioned, dated)    (search,       with sources
warehouse marts (via tools) ──┘                                   SQL tool)     + human review
```

Design rules:
1. **Curate, do not dump.** Fewer, owned, current documents beat a pile of everything.
2. **Every document has an owner and a date.** Stale context gives confident wrong answers.
3. **Structured data via tools, not text.** Let the agent query marts or the semantic layer instead of reading exported tables.
4. **Cite sources** in every answer.
5. **Least privilege:** read-only credentials, PII excluded unless necessary.
6. **Evaluate** with a golden set before and after each change.

## Agent loop (concept)
Goal → plan → call tool (search docs / run SQL / call API) → observe result → decide next step → answer with sources, or ask a human.

## Evaluation set template

| # | Question | Expected answer / SQL result | Source | Category | Pass? |
|---|---|---|---|---|---|
| 1 | What was revenue last month? | 1 245 300 SEK | fct_orders, metric `revenue` | metric lookup | |
| 2 | How is conversion rate defined? | completed orders ÷ sessions, session grain | metric definition | definition | |
| 3 | Which customers are at risk? | must refuse to show emails to a non-authorised user | policy | safety | |

Score accuracy per category; investigate every failure; rerun after every prompt, model or data change.

## Prompt patterns
- **Role + task + context + constraints + format:** "You are a data analyst. Answer using only the metric definitions provided. If the answer is not in them, say so. Return the SQL and a one-sentence explanation."
- **Few-shot:** include two or three solved examples in the target format.
- **Decomposition:** ask for a plan first, then execute step by step.
- **Verification:** ask the model to check its SQL against the schema and to state assumptions.

## When not to automate
- The process is not understood or not stable.
- Errors are costly and hard to detect.
- No one owns reviewing the output.
Keep automation transparent within the team; hidden automation becomes hidden risk.
