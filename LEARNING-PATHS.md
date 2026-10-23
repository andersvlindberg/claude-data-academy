# How you learn here

```
  HUB  ───────►  LECTURE  ───────►  CLAUDE CODE  ───────►  GITHUB
  start here      the theory          the practice            your portfolio
  pick a step     slides + PDF        a real tool             commit, PR, merge
```

**You always start in your study hub.** It's a private artifact with three pages: choose your track, walk your 20 steps, and see your progress (with quizzes on what you've finished).

Every step has two halves:

1. **Lecture (Claude app).** Press *Copy lecture request* in the hub and paste it in Claude. You get slides with speaker notes, downloadable as PDF or PowerPoint. The last slide is a **practice project** linked to the lecture: a fictional scenario, the data to generate and what to build.
2. **Lab (Claude Code).** In your fork, start a branch and type `LAB <number>`. Your own Claude sets up the practice project (fictional data, a real tool from the stack) and coaches you while you build it. If the lecture is about extracting data from a platform into a warehouse, that's exactly what you do, for free.

Then **commit, push, open a pull request and merge** in your fork, and tick the step off in the hub. Git is part of every step, from step 1 to the capstone.

Between steps, use **LEARN** in the Claude app whenever something is unclear (`LEARN: window functions`), and **QUIZ** in the hub's progress page to check that it stuck.

## The four tracks

Each track has 20 steps in three areas (Foundations, Core, Advanced). Step 1 is always *what the role is*: the job, the stack and your workspace.

| Track | The job | Steps |
|---|---|---|
| **Data engineer** | Gets data in and keeps it flowing: sources, ingestion, warehouse, orchestration, reliability | [20 labs](labs/README.md#data-engineer-track) |
| **Analytics engineer** *(the academy's focus)* | Turns raw data into trusted, documented models: dbt, modelling, tests, CI, semantic layer | [20 labs](labs/README.md#analytics-engineer-track) |
| **Data analyst** | Answers business questions: analysis, statistics, dashboards, recommendations | [20 labs](labs/README.md#data-analyst-track) |
| **Business / MarTech** | Uses data to grow the business: tracking, CRM, automation, customer journeys, strategy | [20 labs](labs/README.md#business--martech-track) |

**Finished a track?** Press *Generate 5 new steps* in the hub, or ask Claude: *"Give me 5 new labs for my data analyst track"*.

## The stack, end to end

| Layer | Tool | Free way to start |
|---|---|---|
| Sources | Shop platform, GA4 + GTM, HubSpot | Fictional data Claude generates per project |
| Ingest | Fivetran, dlt (Python) | dlt into DuckDB |
| Store | Snowflake | DuckDB locally, BigQuery sandbox |
| Transform | dbt | dbt Core with DuckDB |
| Orchestrate | Dagster | Dagster locally |
| Serve | Looker Studio, Tableau, reverse ETL | Looker Studio, Tableau Public |
| Everywhere | Git, GitHub, GitHub Actions, Claude Code | Free |

See [STACK.md](STACK.md) for why each tool, and [START-HERE.md](START-HERE.md) for setup.
