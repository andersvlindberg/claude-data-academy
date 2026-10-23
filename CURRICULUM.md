# Curriculum

The academy is organised in five phases that follow the data chain. Each phase ends in a concrete capstone milestone, so learning and portfolio grow together.

## Focus

The core track is the career path **data engineer → analytics engineer → data analyst**. The breadth track (CRM, marketing automation, MarTech, business strategy, design, presentation, project method) is taught from a business perspective: enough to understand stakeholders, speak their language and connect data to decisions.

## Mastery levels

Every module uses the same four levels. `ae-coach` assesses and logs them.

| Level | Name | You can... | Evidence |
|---|---|---|---|
| L1 | Aware | explain the concept in your own words and say why it matters | explain-back without notes |
| L2 | Practitioner | solve a standard task with hints or documentation | finished exercise set A |
| L3 | Independent | solve an unfamiliar task, debug it and verify it yourself | exercise set B + capstone milestone |
| L4 | Interview-ready | defend trade-offs, teach it, answer follow-up questions under pressure | mock interview round passed |

Target for an analytics engineer internship: **L3 in modules 02, 03, 05, 06, 12, 16, 21 and 22, L2 everywhere else.**

## Phase 1: Foundations (how data is born)

| Module | Skill | Core outcome |
|---|---|---|
| 01 | `ae-foundations` | Map any data flow on the lifecycle and name who owns each step |
| 07 | `ae-web-tracking` | Trace one user action from click to stored event and prove each link |
| 02 | `ae-sql` (part 1) | SELECT, WHERE, JOIN, GROUP BY on a webshop database |
| 16 | `ae-git-devops` (part 1) | Clone, commit, push, branch, restore a file |
| 17 | `ae-project-method` (part 1) | Use the five-question troubleshooting method and an evidence chain |
| 26 | `ae-systems-processes` | Map order to cash across systems and name the source of truth per entity |

**Capstone milestone 1:** a tracked mini webshop event flow with a written evidence chain.

## Phase 2: Business context (why data matters)

| Module | Skill | Core outcome |
|---|---|---|
| 25 | `ae-business-strategy` | Business Model Canvas, goal tree and prioritised KPIs for a company |
| 09 | `ae-business-journeys` | Map a customer journey, its touchpoints and the data each creates |
| 08 | `ae-martech` | Explain a MarTech stack and calculate CLV, CAC, ROAS, churn correctly |
| 22 | `ae-customer-data-platforms` | Map a company's customer data flow and explain identity resolution and activation |
| 21 | `ae-crm-automation` (part 1) | Design lifecycle stages and an automation flow with suppression and a holdout |
| 23 | `ae-digital-analytics` (part 1) | Write a measurement plan and tracking plan |
| 11 | `ae-bi-metrics` (part 1) | Write an unambiguous metric definition |
| 18 | `ae-presentation-design` | Present an analysis with action titles and one message per slide |

**Capstone milestone 2:** business case and metric tree for the webshop (what decisions must the data support?).

## Phase 3: The engine (moving and modeling data)

| Module | Skill | Core outcome |
|---|---|---|
| 02 | `ae-sql` (part 2) | CTEs, window functions, deduplication, sessionisation |
| 03 | `ae-modeling` | Design a star schema with a clear grain for each fact |
| 04 | `ae-data-engineering` | Build an idempotent ELT load from a file or API into a warehouse |
| 06 | `ae-warehouses` | Set up BigQuery or Snowflake with roles, environments and cost control |
| 13 | `ae-apis` | Pull paginated data from a REST API with auth and retries |
| 14 | `ae-python` | Write a small, tested Python ingestion module with classes |

**Capstone milestone 3:** raw data loaded into the warehouse on a schedule.

## Phase 4: Analytics engineering (making data trustworthy)

| Module | Skill | Core outcome |
|---|---|---|
| 05 | `ae-dbt` | Staging → intermediate → marts with tests, docs and lineage |
| 12 | `ae-governance-gdpr` | PII inventory, legal basis per purpose, tests as data contracts |
| 16 | `ae-git-devops` (part 2) | Pull requests and CI that runs `dbt build` on changed models |
| 11 | `ae-bi-metrics` (part 2) | Semantic layer or metrics mart feeding a dashboard |
| 21 | `ae-crm-automation` (part 2) | Golden customer, lifecycle and suppression models synced to tools |

**Capstone milestone 4:** a tested, documented dbt project with CI and a dashboard.

## Phase 5: Insight and leverage (creating value)

| Module | Skill | Core outcome |
|---|---|---|
| 24 | `ae-statistics` | Design and analyse an experiment with confidence intervals |
| 10 | `ae-analytics` | Funnel, cohort and segmentation analysis with a recommendation |
| 23 | `ae-digital-analytics` (part 2) | CRO cycle and channel reporting with attribution limits stated |
| 15 | `ae-ai-ml` | A churn or CLV model and an LLM agent that answers questions from your marts |
| 19 | `ae-mcp-tooling` | Claude connected safely to your warehouse, dbt and GitHub |
| 20 | `ae-career` | Portfolio README, interview answers and a clear professional moat |

**Capstone milestone 5:** "company brain" agent on top of the marts, plus a final presentation.

## Suggested pacing (two-year vocational program, internship in year two)

| Period | Focus |
|---|---|
| Term 1 | Phase 1 and 2, alongside platform, data-driven business and MarTech courses |
| Term 2 | Phase 3, alongside data management, data stack and programming courses |
| Before internship applications | Phase 4 finished, capstone public, certification if wanted |
| Internship | Apply everything; keep the learning log going |
| Final term | Phase 5 deepened; thesis business case built on the capstone |

## How a study session runs

1. Tell the coach what you want: *"Learn: window functions"*, *"Build: staging model for orders"*, *"Quiz me: GDPR"*.
2. The coach diagnoses your level with one question.
3. You work through one step at a time.
4. The session ends with an explain-back and a log entry (what / why / result / verification).
5. Anything you built goes into the capstone repo with a commit.
