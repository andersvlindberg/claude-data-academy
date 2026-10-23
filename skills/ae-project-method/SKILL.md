---
name: ae-project-method
description: Project management and methodical work for the Analytics Engineering Academy. Use for questions about running projects and group work, project leadership, agile, Scrum, Kanban, sprints, user stories and acceptance criteria, definition of done, prioritisation with MoSCoW, estimation, RACI, stakeholder maps, risk registers, project charters, data project lifecycles such as CRISP-DM, documentation, retrospectives, structured troubleshooting with hypotheses and evidence, and the project management and development processes course.
---

# Module 17: Project method

Good technical work fails without method: unclear goals, no owner, no definition of done, no way to know whether something is fixed. This module is how a data person delivers, alone or in a team.

## How to use this skill

Follow `ae-coach` for mode. Without it: explain → LEARN, plan/run → BUILD, graded work → LEARN only.

The personal working loop used across the academy:
**Capture → Plan → Do one step → Verify → Document (What / Why / Result / Verification)**

## Mastery ladder

| Level | Evidence |
|---|---|
| L1 | Explains Scrum roles, events and artifacts, Kanban, user stories and RACI |
| L2 | Writes user stories with acceptance criteria, a backlog prioritised with MoSCoW, and a RACI for a group project |
| L3 | Leads a group project: charter, sprint plan, board, risks, reviews and retrospectives; troubleshoots with a documented evidence chain |
| L4 | Adapts the method to context (data versus software work, deadlines, stakeholders) and explains why |

## Core knowledge

### Agile in one page
Values: individuals and interactions, working solutions, customer collaboration, responding to change. Deliver small increments, get feedback, adapt.

**Scrum**
- Roles: **Product Owner** (value, backlog order), **Scrum Master** (process, removes impediments), **Developers** (deliver).
- Events: **Sprint** (fixed length, often 1–4 weeks), **Sprint Planning**, **Daily Scrum** (15 minutes, progress towards the sprint goal), **Sprint Review** (show the increment), **Retrospective** (improve the way of working).
- Artifacts: **Product Backlog**, **Sprint Backlog**, **Increment** (meets the definition of done).

**Kanban**
Visualise work (To do → Doing → Review → Done), **limit work in progress**, manage flow, improve continuously. Good for support-heavy data teams with unpredictable requests.

**Plan-driven (waterfall)** fits fixed requirements and regulatory deliveries; most data work benefits from iteration because requirements become clear only when people see data.

### Requirements
- **User story:** *As a [role], I want [capability], so that [benefit].*
- **Acceptance criteria:** *Given [context], when [action], then [result].*
- **INVEST:** independent, negotiable, valuable, estimable, small, testable.
- **Definition of done (data):** model built, tests pass, documented, reviewed, reconciled with source, deployed.
- **MoSCoW:** must, should, could, won't (this time).

### People and responsibility
- **RACI:** Responsible, Accountable (exactly one), Consulted, Informed.
- **Stakeholder map:** power × interest → manage closely, keep satisfied, keep informed, monitor.
- **Project charter:** purpose, goal (SMART), scope and out of scope, deliverables, stakeholders, roles, timeline, risks, success criteria.

### Risk register
| Risk | Probability | Impact | Owner | Mitigation | Status |
|---|---|---|---|---|---|

### Data project lifecycle
**CRISP-DM:** business understanding → data understanding → preparation → modeling → evaluation → deployment. In practice for analytics engineering: discovery (questions, decisions) → data audit (sources, quality, access) → prototype (one model, one chart) → validate with stakeholders → productionise (tests, docs, CI, schedule) → hand over (owner, runbook).

### Structured troubleshooting
1. What was expected?
2. What can we actually observe?
3. What is the last link we know works?
4. Which small test separates two causes?
5. What proves it is fixed?

Work with **hypotheses that can be disproved**, change **one thing at a time**, and keep the evidence. A conclusion states what the evidence supports **and** what it does not show.

### Leadership and team excellence
- **Team stages (Tuckman):** forming → storming → norming → performing (→ adjourning). Conflict in storming is normal; agree working norms early.
- **Psychological safety:** people can raise problems and mistakes without fear; the strongest predictor of team performance in many studies. Leaders build it by asking, listening and admitting their own mistakes.
- **Feedback and feedforward:** feedback looks back at specific behaviour and its effect (situation, behaviour, impact); feedforward suggests what to do next time. Be direct and clear.
- **Situational leadership:** adjust between directing, coaching, supporting and delegating depending on a person's competence and commitment for the task.
- **Facilitation:** clear purpose and agenda, timebox, everyone heard, decisions and owners written down.
- **Decision rights:** decide how a decision is made (leader decides, consult, consensus, vote) before discussing what to decide.
- **Leading without a title:** in data roles you often influence without authority: bring evidence, understand stakeholders' goals, make the next step easy.

### Retrospectives
Start / stop / continue · what went well / what to improve / actions with owners · one improvement per sprint, followed up next time.

## Common misconceptions

- "Agile means no planning." It means planning in shorter cycles.
- "The project leader does everything." The leader makes sure everything has an owner.
- "Daily standups are status reports to a boss." They coordinate the team towards the goal.
- "We'll document at the end." Documentation written during the work is cheaper and better.

## Connects to

`ae-git-devops` (team workflow), `ae-business-journeys` (requirements and business cases), `ae-presentation-design` (reviews and final presentations), `ae-web-tracking` (troubleshooting model).

## References

- [references/group-work-playbook.md](references/group-work-playbook.md): running a student or team project, including shared presentations.
- [references/templates.md](references/templates.md): charter, user stories, RACI, risk register, retrospective, meeting notes.
- [references/exercises.md](references/exercises.md)
