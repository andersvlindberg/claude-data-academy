# Lectures

A lecture is the academy's third way to learn, next to LEARN (dialogue) and LAB (hands-on). Use it when the learner wants an overview, a structured walk-through of a topic, business theory, or material to read before a lab or exam.

## Where lectures come from

Learners start every step in their study hub. Each of the 20 steps on their track has a *Lecture* button that asks for the lecture belonging to that lab (for example "LECTURE: Your first dbt project (step 9 of the analytics engineer track, before LAB 08)"). Build the lecture for exactly that step: the theory the lab needs, at the track's level, ending with the practical step.

## When to offer one

- The learner says "lecture", "föreläsning", "presentation", "slides", "give me an overview", "teach me the theory".
- A topic is new and broad (for example "what is a CDP", "dimensional modelling", "GDPR for marketers") and the learner is at L1.
- Before a lab, if the learner lacks the concepts the lab assumes.

Do not replace LEARN with lectures. After a lecture, offer a short QUIZ (5 questions) and the matching lab.

## How to deliver

| Where the learner is | Deliver as |
|---|---|
| Claude app (claude.ai, desktop) with the Slides artifact type | A Slides artifact. It downloads as PDF or PowerPoint |
| Claude app without Slides | A .pptx with the pptx skill, plus a PDF export |
| Claude Code | A .pptx built with the pptx skill (or python-pptx), saved in `lectures/` in their repo |

Always produce **speaker notes** on every content slide: what a lecturer would say, two to five sentences, with the example spelled out. The notes are what make a deck a lecture rather than a poster.

## Structure (12–18 slides, about 30–45 minutes)

1. **Title:** topic, which role it serves (data engineer, analytics engineer, data analyst, business), level (L1–L4), duration.
2. **Why it matters:** one business problem the topic solves, with a concrete Swedish or Nordic company-style example (fictional names).
3. **Learning objectives:** three to four "after this you can…" statements, each testable.
4. **Where it sits in the data chain:** Sources → Ingest → Store → Transform → Serve → Analyse → Decide, with this topic highlighted.
5. **Core concepts** (4–8 slides): one idea per slide, a diagram or code snippet, a plain-language definition, the common misconception.
6. **Worked example** (2–3 slides): one realistic case from start to finish in the reference stack.
7. **In the job:** what this looks like on a Tuesday at work; which job ads mention it; interview question.
8. **Check yourself:** three questions (answers in the notes).
9. **Summary:** five bullets maximum.
10. **Your practice project (always the last slide):** a linked project the learner does next in Claude Code. Make it fit the topic: a short fictional scenario (a company and its problem), the data to generate (Claude Code creates it, synthetic and free of personal data), the real tool to use from the academy stack (or a free equivalent), the one deliverable, and the Git step (branch `lab-nn`, commit, push, pull request in their fork). Then two reliable sources (official docs first).

Every lecture is the theory half of a step; the practice project is the other half. If the lecture is about extracting data from a platform into a warehouse, the project is doing exactly that, for free (for example a small fake API or CSV export loaded with dlt into DuckDB or the BigQuery sandbox). Nothing needs to exist in advance: the learner's own Claude creates the scenario and data when they start the lab. The repository's Nordvik Outdoor generator (`datasets/nordvik/`) is an optional ready-made example.

## Style

- Academy look: dark grey (#2B2B2B) and orange (#E8752A) accents on light slides, generous whitespace, one idea per slide, max about 30 words of body text per slide.
- Diagrams over bullets. Code in monospace with the key line highlighted.
- Business lectures (strategy, customer journeys, CRM, MarTech) use cases, frameworks and numbers rather than code.
- English slide text by default; speaker notes in the learner's language if they write in another language.
- No copyrighted course material reproduced. Teach from official documentation and general knowledge; the learner's own notes may shape emphasis.

## Lecture catalogue

| # | Lecture | Role | Level | Matching labs | Topic skill |
|---|---|---|---|---|---|
| 0 | What the role does: the job, the stack and how you'll work (one version per role) | All | L1 | 00 | ae-career, ae-foundations |
| 1 | The modern data stack and ELT | All | L1 | 01, 05, 08 | ae-foundations |
| 2 | SQL that analysts and engineers actually use | AE, DA | L1–L2 | 01, 03 | ae-sql |
| 3 | GA4, GTM and the dataLayer | DE, Business | L1–L2 | 02, 04 | ae-web-tracking |
| 4 | Ingestion: connectors, APIs and dlt | DE | L2 | 05, 07 | ae-data-engineering |
| 5 | Cloud warehouses: Snowflake and BigQuery | DE, AE | L2 | 06 | ae-warehouses |
| 6 | dbt fundamentals | AE | L1–L2 | 08 | ae-dbt |
| 7 | Dimensional modelling (Kimball) | AE | L2 | 09 | ae-modeling |
| 8 | Incremental models, snapshots and scale | AE | L3 | 10 | ae-dbt |
| 9 | Testing, contracts and data quality | AE | L2–L3 | 12 | ae-governance-gdpr |
| 10 | Git, CI/CD and working in a data team | DE, AE | L2 | 11 | ae-git-devops |
| 11 | Orchestration with Dagster | DE, AE | L2–L3 | 13 | ae-data-engineering |
| 12 | GDPR, cookies and privacy by design | All | L1–L2 | 04, 14 | ae-governance-gdpr |
| 13 | Dashboards that drive decisions | DA | L1–L2 | 15, 16 | ae-bi-metrics |
| 14 | Statistics and A/B testing for analysts | DA | L2 | 18 | ae-statistics |
| 15 | Digital analytics: attribution and funnels | DA, Business | L2 | 03 | ae-digital-analytics |
| 16 | Customer value: RFM, CLV and segmentation | DA, Business | L2 | 17 | ae-analytics |
| 17 | CRM and marketing automation data | Business, AE | L1–L2 | 19 | ae-crm-automation |
| 18 | Customer data platforms and reverse ETL | AE, Business | L2 | 19 | ae-customer-data-platforms |
| 19 | MarTech landscape and customer journeys | Business | L1 | 04 | ae-martech, ae-business-journeys |
| 20 | Business strategy for data people | Business | L1 | 17 | ae-business-strategy |
| 21 | Python for data work | DE, DA | L1–L2 | 05, 18 | ae-python |
| 22 | AI, ML and MCP on your data | AE, DA | L2 | 20 | ae-ai-ml, ae-mcp-tooling |
| 23 | Presenting data to stakeholders | All | L1 | 15 | ae-presentation-design |
| 24 | Your career as an analytics engineer | All | L1 | All | ae-career |

The catalogue is a menu, not a limit: build a lecture on any topic the learner asks for, following the structure above.
