<p align="center">
  <img src="assets/banner.svg" alt="Claude Data Academy: learn data the way a mentor would teach it" width="100%">
</p>

<h1 align="center">Claude Data Academy</h1>

<p align="center">
  <strong>Complete Claude skills for learning data: from your first <code>SELECT</code> to the boardroom.</strong><br>
  Make your AI better than everyone else's.
</p>

<p align="center">
  <a href="https://github.com/andersvlindberg/claude-data-academy/actions/workflows/validate.yml"><img src="https://github.com/andersvlindberg/claude-data-academy/actions/workflows/validate.yml/badge.svg" alt="skills validated"></a>
  <img src="https://img.shields.io/badge/skills-28-F26B1D" alt="28 skills">
  <img src="https://img.shields.io/badge/works%20with-Claude%20apps%20%C2%B7%20Claude%20Code-16181C" alt="works with Claude apps and Claude Code">
  <img src="https://img.shields.io/badge/license-MIT-blue" alt="MIT license">
</p>

<p align="center">
  <a href="#install-in-60-seconds">Install</a> ·
  <a href="#see-the-difference">See the difference</a> ·
  <a href="#the-28-skills">The 28 skills</a> ·
  <a href="CURRICULUM.md">Curriculum</a> ·
  <a href="projects/capstone">Capstone</a>
</p>

---

Ask a normal AI how a LEFT JOIN works and you get an essay you'll forget by tomorrow. Ask a Claude running **Claude Data Academy** and it finds out what you already know, teaches you one step at a time, makes you do the last step yourself, and checks that you can prove it.

28 skills cover the **whole data chain**, not one tool:

```
 SOURCES ─► INGEST ─► STORE ─► TRANSFORM ─► SERVE ─► DECIDE
 web, CRM,   APIs,     BigQuery,  dbt,        BI, AI,   business case,
 apps, POS   ELT       Snowflake  tests       CRM, ads  customer journey
 └─ data engineering ─┘└──── analytics engineering ────┘└─ analytics & business ─┘
        governance · GDPR · Git · statistics · project method · communication
```

## Why it's different

| A normal AI assistant | Claude with Claude Data Academy |
|---|---|
| Answers immediately, at one generic level | **Diagnoses first**, then teaches at your level |
| Dumps the full solution | **One step per turn**, you do the last step |
| Writes your homework if you ask | **Academic integrity built in**: explains and reviews, never writes graded hand-ins |
| Forgets what you learned | **Learning log** and spaced review (+1 day, +1 week, +1 month) |
| Knows tools in isolation | Connects everything to the **chain and the business decision** |
| Says "it depends" | **Opinionated conventions**: dbt layers, naming, tests, metric definitions, contact policies |
| Confident about outdated facts | Flags fast-changing facts with **"verify in current docs"** |
| Never asks for proof | Every answer ends with **how to verify it** |

## See the difference

> **You:** explain window functions

<details open>
<summary><strong>Claude with the academy</strong></summary>

> **Claude:** Quick check so I pitch this right: have you used `GROUP BY` to sum revenue per customer? If yes, what happens to the individual order rows when you do that?
>
> **You:** they get squashed into one row per customer
>
> **Claude:** Exactly. A window function does the same calculation **without squashing the rows**. Same orders table, but now every order keeps its row and gets the customer's total next to it:
>
> ```sql
> select order_id, customer_id, order_total,
>        sum(order_total) over (partition by customer_id) as customer_total
> from orders
> ```
>
> | order_id | customer_id | order_total | customer_total |
> |---|---|---|---|
> | 1 | A | 500 | 1 200 |
> | 2 | A | 700 | 1 200 |
> | 3 | B | 300 | 300 |
>
> Your turn: what would you add inside `over (...)` so `customer_total` becomes a *running* total in date order?

</details>

## Install in 60 seconds

**Claude apps (claude.ai, desktop, mobile)**
1. Download the zips from the [latest release](https://github.com/andersvlindberg/claude-data-academy/releases/latest), or build them with `python scripts/package_skills.py`.
2. Upload each zip under **Customize → Skills**. Start with `ae-coach` plus the modules you need.

**Claude Code**
```bash
git clone https://github.com/andersvlindberg/claude-data-academy.git
cp -r claude-data-academy/skills/* ~/.claude/skills/        # personal
# or: cp -r claude-data-academy/skills/* .claude/skills/     # one project
```

Then just ask. Skills load automatically when your question matches:

```
"Teach me incremental models in dbt"          → ae-coach + ae-dbt
"Quiz me on GDPR legal bases, 5 questions"    → ae-coach + ae-governance-gdpr
"Design an abandoned-cart flow with a holdout" → ae-crm-automation
"Mock interview me for an analytics engineer role" → ae-coach + ae-career
"Build the staging model for orders in my project" → ae-dbt (build mode)
```

## The 28 skills

**The engine**
| | Skill | What it does |
|---|---|---|
| 00 | [`ae-coach`](skills/ae-coach) | Learn, build, quiz, review and interview modes. Diagnosis, step-by-step scaffolding, learning log, academic integrity |

**Data engineering**
| | Skill | Covers |
|---|---|---|
| 04 | [`ae-data-engineering`](skills/ae-data-engineering) | Ingestion, ELT, batch vs streaming, idempotency, backfills, orchestration, Docker, migration |
| 06 | [`ae-warehouses`](skills/ae-warehouses) | BigQuery, Snowflake, DuckDB, cloud platforms, cost control, roles, key pair auth |
| 13 | [`ae-apis`](skills/ae-apis) | REST, auth, pagination, retries, webhooks, integration patterns, reverse ETL |
| 14 | [`ae-python`](skills/ae-python) | Python for data, pandas, classes and OOP, testing with pytest, Python ↔ C# |
| 16 | [`ae-git-devops`](skills/ae-git-devops) | Git, GitHub, pull requests, CI/CD for dbt, linting |
| 26 | [`ae-systems-processes`](skills/ae-systems-processes) | ERP, OMS, WMS, PIM, CMS, order to cash, master data, migration |

**Analytics engineering**
| | Skill | Covers |
|---|---|---|
| 01 | [`ae-foundations`](skills/ae-foundations) | The data lifecycle, roles, observation vs interpretation |
| 02 | [`ae-sql`](skills/ae-sql) | SELECT to window functions, patterns, dialects |
| 03 | [`ae-modeling`](skills/ae-modeling) | Grain, keys, star schemas, Kimball, SCD |
| 05 | [`ae-dbt`](skills/ae-dbt) | Layers, tests, docs, macros, incremental, snapshots, CI, GA4 in dbt, certification prep |
| 11 | [`ae-bi-metrics`](skills/ae-bi-metrics) | Metric definitions, semantic layer, dashboards, Looker Studio, Power BI |
| 12 | [`ae-governance-gdpr`](skills/ae-governance-gdpr) | GDPR, consent, PII, data ethics, data quality, data contracts |

**Analytics and digital analytics**
| | Skill | Covers |
|---|---|---|
| 07 | [`ae-web-tracking`](skills/ae-web-tracking) | Click to data: HTTP, DevTools, cookies, identity, data layer, GTM, consent, JavaScript |
| 10 | [`ae-analytics`](skills/ae-analytics) | EDA, funnels, cohorts, RFM, A/B tests, root cause analysis |
| 15 | [`ae-ai-ml`](skills/ae-ai-ml) | Churn and CLV models, leakage, LLMs, RAG, agents, company brain |
| 23 | [`ae-digital-analytics`](skills/ae-digital-analytics) | Measurement plans, GA4, CRO, UTMs, attribution, GA certification |
| 24 | [`ae-statistics`](skills/ae-statistics) | Inference, experiment design, power, regression, surveys |

**Customer data, CRM and MarTech**
| | Skill | Covers |
|---|---|---|
| 08 | [`ae-martech`](skills/ae-martech) | The MarTech stack, KPI math, attribution, organisation, brand and CX |
| 21 | [`ae-crm-automation`](skills/ae-crm-automation) | CRM, lifecycle, lead scoring, service data, automation flows, holdouts, golden records |
| 22 | [`ae-customer-data-platforms`](skills/ae-customer-data-platforms) | Data flows, CDP, identity resolution, customer 360, activation, adtech |

**Business, design, projects and career**
| | Skill | Covers |
|---|---|---|
| 09 | [`ae-business-journeys`](skills/ae-business-journeys) | Customer journeys, touchpoints, metric trees, business cases |
| 25 | [`ae-business-strategy`](skills/ae-business-strategy) | Business acumen, Business Model Canvas, SMART goals, KPIs, data maturity |
| 17 | [`ae-project-method`](skills/ae-project-method) | Agile, Scrum, RACI, leadership, troubleshooting, group work |
| 18 | [`ae-presentation-design`](skills/ae-presentation-design) | Decks that look designed, data storytelling, presenting |
| 19 | [`ae-mcp-tooling`](skills/ae-mcp-tooling) | MCP, Claude Code, safe AI access to warehouses, dbt and GitHub |
| 20 | [`ae-career`](skills/ae-career) | Portfolio, CV, internships, interviews, your professional moat |
| 27 | [`ae-design`](skills/ae-design) | Design direction for decks, dashboards, reports and UI: principles, references, checklist |

Every topic skill has the same shape: **mastery ladder L1–L4**, core knowledge, **common misconceptions**, deep references, and `exercises.md` with two exercise sets, a quiz bank and interview questions.

## Who it's for

- **Students** in data, analytics, MarTech or customer data programs who want to actually understand, not copy.
- **Career switchers** heading for analyst, analytics engineer or data engineer roles.
- **Working analysts** levelling up into dbt, warehouses and engineering practice.
- **Teams** who want a shared standard for how their AI teaches and builds.

The [program map](docs/program-map.md) shows how the skills cover typical courses in five example data programs (customer data developer, digital analyst, data analyst, data analysis, data engineer) and where programs often fall short.

## The capstone

Learning lands in one project that becomes a portfolio: an e-commerce data platform from **click to decision**. Tracking with an evidence chain, a business case, warehouse loads, a tested dbt project with CI, a customer layer for CRM, analyses, a churn model and a "company brain" agent. [See the milestones →](projects/capstone)

## Principles

1. **Diagnose before teaching.**
2. **One step forward every turn.**
3. **You do the last step.**
4. **Prove it:** every answer ends with a way to verify it.
5. **Business first:** every model, metric and chart traces back to a decision.
6. **Ship it in public:** the capstone grows with commits, not in stealth.

## Contributing

Found something outdated, or a topic missing? Open an issue or a pull request. See [CONTRIBUTING.md](CONTRIBUTING.md). If this helped you, a ⭐ helps others find it.

## About

Built by [Anders Lindberg](https://github.com/andersvlindberg), customer data developer student heading for analytics engineering, together with Claude. Files named `course-notes-*.md` are my own summaries of course content from my studies; they do not reproduce course material, cases or graded assignments.

MIT licensed.
