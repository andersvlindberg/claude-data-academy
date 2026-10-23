# Analytics Engineering Academy

**A complete, skill-based training program for Claude that covers the whole data chain, from the click on a website to the decision in the boardroom.**

Data Engineering → Analytics Engineering → Analytics → Business, with a deep track in customer data, CRM and MarTech. Twenty-seven Claude skills, one capstone project, and a coaching layer that teaches instead of just answering.

```
  SOURCES        INGEST         STORE          TRANSFORM        SERVE           DECIDE
 ┌────────┐    ┌────────┐    ┌──────────┐    ┌──────────┐    ┌──────────┐    ┌──────────┐
 │ web,   │ →  │ APIs,  │ →  │ BigQuery │ →  │   dbt    │ →  │ metrics, │ →  │ business │
 │ GA4,   │    │ ELT,   │    │ Snowflake│    │ staging→ │    │ BI, AI,  │    │ case,    │
 │ CRM,   │    │ events │    │ DuckDB   │    │  marts   │    │ reverse  │    │ customer │
 │ apps   │    │        │    │          │    │  tests   │    │ ETL      │    │ journey  │
 └────────┘    └────────┘    └──────────┘    └──────────┘    └──────────┘    └──────────┘
 └──── Data Engineering ────┘└──────── Analytics Engineering ────────┘└──── Analytics & Business ────┘
                     Governance, GDPR, Git, project method and communication run through all of it
```

## Why this exists

Most learning material covers one tool. Real jobs cover a chain. An analytics engineer is valuable because they are **the bridge**: they understand where data is born, how it is moved and modeled, and what the business actually needs from it. This academy is built around that chain, and around one rule:

> **Observation is not interpretation.** Every module trains you to separate what you can prove from what you assume.

## What's inside

| # | Skill | Covers |
|---|---|---|
| 00 | [`ae-coach`](skills/ae-coach) | The learning engine: diagnosis, learn/build modes, quizzes, progress log, academic integrity |
| 01 | [`ae-foundations`](skills/ae-foundations) | Data literacy, the data lifecycle, the roles in a data team, observation vs interpretation |
| 02 | [`ae-sql`](skills/ae-sql) | SQL from SELECT to window functions, query patterns, dialects |
| 03 | [`ae-modeling`](skills/ae-modeling) | Relational and dimensional modeling, grain, keys, slowly changing dimensions |
| 04 | [`ae-data-engineering`](skills/ae-data-engineering) | Ingestion, ELT, batch and streaming, orchestration, idempotency, Docker |
| 05 | [`ae-dbt`](skills/ae-dbt) | dbt end to end: layers, tests, docs, macros, incremental models, deployment |
| 06 | [`ae-warehouses`](skills/ae-warehouses) | BigQuery, Snowflake and DuckDB: architecture, cost, performance, security |
| 07 | [`ae-web-tracking`](skills/ae-web-tracking) | The click-to-data chain: HTTP, DevTools, cookies, identity, data layer, consent, GA4 |
| 08 | [`ae-martech`](skills/ae-martech) | MarTech stack, CDP/CRM, marketing automation, KPI math, organisation |
| 09 | [`ae-business-journeys`](skills/ae-business-journeys) | Data-driven business processes, customer journeys, touchpoints, business cases |
| 10 | [`ae-analytics`](skills/ae-analytics) | EDA, funnels, cohorts, segmentation, A/B tests, root cause analysis |
| 11 | [`ae-bi-metrics`](skills/ae-bi-metrics) | Metric design, semantic layer, dashboards, Looker Studio and Power BI |
| 12 | [`ae-governance-gdpr`](skills/ae-governance-gdpr) | GDPR, consent, PII handling, data quality, data contracts, ownership |
| 13 | [`ae-apis`](skills/ae-apis) | REST, JSON, auth, pagination, webhooks, integration patterns, reverse ETL |
| 14 | [`ae-python-oop`](skills/ae-python-oop) | Python for data, object-oriented programming, testing, pandas |
| 15 | [`ae-ai-ml`](skills/ae-ai-ml) | ML on customer data, LLMs, RAG, agents, evaluation, responsible AI |
| 16 | [`ae-git-devops`](skills/ae-git-devops) | Git, GitHub, branching, pull requests, CI/CD for data |
| 17 | [`ae-project-method`](skills/ae-project-method) | Agile, requirements, RACI, troubleshooting method, the evidence chain |
| 18 | [`ae-presentation-design`](skills/ae-presentation-design) | Slides and reports that look designed, data storytelling, pitching |
| 19 | [`ae-mcp-tooling`](skills/ae-mcp-tooling) | MCP, Claude Code, connecting Claude to warehouses, dbt and GitHub safely |
| 20 | [`ae-career`](skills/ae-career) | Portfolio, internships, interviews, your professional moat |
| 21 | [`ae-crm-automation`](skills/ae-crm-automation) | CRM, lifecycle, leads and pipeline, service data, marketing automation flows, holdouts |
| 22 | [`ae-customer-data-platforms`](skills/ae-customer-data-platforms) | Data sources and flows, CDP, identity resolution, customer 360, activation, adtech |
| 23 | [`ae-digital-analytics`](skills/ae-digital-analytics) | Measurement plans, GA4, CRO, UTMs, attribution, privacy-friendly collection |
| 24 | [`ae-statistics`](skills/ae-statistics) | Descriptive stats, inference, experiment design, regression, surveys |
| 25 | [`ae-business-strategy`](skills/ae-business-strategy) | Business acumen, Business Model Canvas, goals, SMART, KPIs, data maturity, leadership |
| 26 | [`ae-systems-processes`](skills/ae-systems-processes) | ERP, OMS, WMS, PIM, CMS, order to cash, master data, migration |

Plus:

- **[CURRICULUM.md](CURRICULUM.md)**: the learning path, levels and mastery criteria.
- **[projects/capstone](projects/capstone)**: one e-commerce data platform built across the whole program. The capstone *is* the portfolio.
- **[docs/](docs)**: course map (IHM Customer Data Developer plus coverage of data analyst, digital analyst and data engineer programs), learning log template and glossary.

## How the skills work

Skills are folders of instructions that Claude loads automatically when a request matches their description. You do not pick them manually. Ask *"explain incremental models"* and `ae-dbt` loads. Ask *"quiz me on GDPR legal bases"* and `ae-coach` plus `ae-governance-gdpr` load together.

Every topic skill has two modes, decided by `ae-coach`:

- **LEARN mode**: diagnose first, one step at a time, parallel examples, checks for understanding. Never writes graded work for you.
- **BUILD mode**: plan, confirm, execute step by step, verify, explain why.

Each skill folder contains:

```
skills/ae-<topic>/
├── SKILL.md              # how Claude teaches and builds in this area
└── references/
    ├── *.md              # deep reference material Claude consults
    └── exercises.md      # graded exercises, quiz bank, interview questions
```

## Install

**Claude apps (claude.ai / desktop):** zip each skill folder and upload it as a skill. `python scripts/package_skills.py` builds one zip per skill into `dist/`. Each zip is ready to upload.

**Claude Code:** copy or symlink the folders into `~/.claude/skills/` (personal) or `.claude/skills/` (per project).

```bash
python scripts/validate_skills.py   # checks frontmatter and structure
python scripts/package_skills.py    # builds dist/<skill>.zip
```

## Learning principles

1. **Diagnose before teaching.** Start where the learner is.
2. **One step forward every turn.** Short explanation, one question.
3. **Do the last step yourself.** Claude scaffolds; you finish.
4. **Prove it.** Every answer ends with a way to verify it.
5. **Business first.** Every model, metric and chart traces back to a decision.
6. **Ship it.** Everything you learn lands in the capstone repo, in public.

## Course material

Files named `course-notes-*.md` are my own summaries of course content from my studies, written to learn from. They do not reproduce course material, cases or graded assignments.

## License

MIT. Built by [Anders Lindberg](https://github.com/andersvlindberg) with Claude.
