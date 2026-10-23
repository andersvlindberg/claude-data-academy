# Start here

A step-by-step setup for students. Follow it once (about an hour), and you'll have a Claude that teaches you data, a free practice stack, and a place to save everything you build.

```
 1. Claude project   ──►  2. Install skills  ──►  3. Learn the loop  ──►  4. Accounts + bookmarks
    (your classroom)        (your teacher)          (how you work)          (your toolbox)
```

---

## Step 1: Create a Claude project

A project is your classroom. It keeps your chats, files and instructions about studying in one place, separate from everything else.

1. Open [claude.ai](https://claude.ai) (or the desktop app) and go to **Projects → New project**.
2. Name it **Data Academy**.
3. Paste this into **Project instructions** and change the bracketed parts:

```text
I'm studying to become an analytics engineer. Current course: [course name, week].
Level: [beginner / some SQL / working with dbt].
Teach me with the Data Academy skills: find out what I know, one step at a time,
let me do the last step myself, and quiz me before we move on.
Use the reference stack unless I say otherwise. Answer in [English / Swedish].
Ask before doing anything I can't undo. Never write graded assignments for me.
```

4. Upload your own course notes and the syllabus as project files (your summaries, not the school's copyrighted material).
5. Add a copy of [docs/learning-log-template.md](docs/learning-log-template.md) as a project file. The coach updates it at the end of each session.

> **Projects vs skills vs memory.** Skills are *how* Claude teaches (shared across all your chats). The project is *what* you're studying right now. Memory is *who you are*. You need all three.

---

## Step 2: Install the skills

**Claude apps (claude.ai, desktop): one step for all 30**
1. **Customize → Plugins → Add → Add marketplace → Add from a repository**
2. Enter `andersvlindberg/claude-data-academy`
3. Install **data-academy**

**Claude Code (terminal):**
```bash
claude plugin marketplace add andersvlindberg/claude-data-academy
claude plugin install data-academy@data-academy
```

**Check it works:** start a chat in your project and write *"Quiz me on SQL joins, level 1."* If Claude asks you questions one at a time instead of writing an essay, the coach is running.

> Installed the skills one by one earlier? Remove them under **Customize → Skills** so you don't have duplicates.

---

## Step 3: How to work

### The daily loop (30–90 minutes)

| Step | Say this | What happens |
|---|---|---|
| 1. Start | *"LEARN: incremental models in dbt"* | The coach checks what you know and sets one goal |
| 2. Do | *"BUILD: help me write the staging model for orders"* | You write the code; Claude reviews, hints, and explains errors |
| 3. Check | *"QUIZ me on what we did"* | 3–5 questions; you need about 80% to move on |
| 4. Review | *"REVIEW my model"* | Feedback like a senior colleague would give in a pull request |
| 5. Save | *"Close the session"* | You get a learning-log entry; commit your code to GitHub |

Other modes: **INTERVIEW** (practise job interviews) and **"explain it like I'm new"** whenever you're lost.

### Rules that make it work

- **Do the last step yourself.** If Claude writes everything, you learn nothing. Ask for hints before answers.
- **Say your level.** "I'm new to window functions" gets a better lesson than a bare question.
- **Talk instead of typing.** Dictation tools (such as Wispr Flow, or the built-in voice input on your device) make you explain your thinking out loud, which is great for learning. The coach handles messy dictated text.
- **Claude asks before anything drastic.** Dropping tables, deleting files, pushing to `main` or sending data anywhere always needs your explicit "yes".
- **School assignments are yours.** The coach explains concepts, reviews your work and quizzes you. It won't write graded work for you.
- **Never paste secrets.** No passwords, API keys or real customer data in chats or in Git. Use `.env` files and add them to `.gitignore`.

### Where to save things

| What | Where |
|---|---|
| Code (SQL, dbt, Python) | A GitHub repo, one per project. Commit after every session |
| What you learned | The learning log in your Claude project |
| Notes and summaries | Project files, or a notes app you already use |
| Finished projects | Pinned repos on your GitHub profile, which is your portfolio |

---

## Step 4: Accounts and bookmarks

### Bookmark everything at once

Download [docs/bookmarks.html](docs/bookmarks.html) and import it into your browser. You get a **Data Stack** folder with every link below, sorted by layer.

- **Chrome / Edge:** Bookmarks → Import bookmarks and settings → *Bookmarks HTML file*
- **Firefox:** Bookmarks → Manage bookmarks → Import and Backup → *Import Bookmarks from HTML*

### Create accounts in this order

Start with the free, no-card accounts. **Start trials only when you're ready to use them**, because their clocks run from sign-up.

| # | Account | What you use it for | Cost | When |
|---|---|---|---|---|
| 1 | [GitHub](https://github.com/signup) + [Student Developer Pack](https://education.github.com/pack) | Code, portfolio, CI. Apply with your school email | Free | Week 1 |
| 2 | [Google account](https://accounts.google.com/signup) | Login for everything Google | Free | Week 1 |
| 3 | [Google Cloud](https://console.cloud.google.com) → [BigQuery sandbox](https://docs.cloud.google.com/bigquery/docs/sandbox) | Your first warehouse; where GA4 data lands | Free, no card (10 GB storage, 1 TB queries/month, tables expire after 60 days) | Week 1 |
| 4 | [GA4 demo account](https://support.google.com/analytics/answer/6367342) | Real e-commerce tracking data to explore | Free | Week 1 |
| 5 | [Looker Studio](https://lookerstudio.google.com) | Dashboards on GA4 and BigQuery | Free | When you reach BI |
| 6 | [dbt platform](https://www.getdbt.com/signup) | Transformation (Developer plan: 1 seat) | Free | When you reach dbt |
| 7 | [Snowflake trial](https://signup.snowflake.com) | The reference warehouse | 30 days or until the free credit runs out | When you build the capstone |
| 8 | [Fivetran](https://fivetran.com/signup) | Managed ingestion | Free plan: 500k monthly active rows (14-day trial per new connection first) | With Snowflake |
| 9 | [Tableau Public](https://public.tableau.com) | Alternative BI; public portfolio dashboards | Free (dashboards are public) | Optional |
| 10 | [HubSpot](https://www.hubspot.com/products/crm) | Free CRM to practise CRM and automation data | Free | CRM courses |
| 11 | [Shopify Partners](https://www.shopify.com/partners) | Free development store as a data source | Free | Optional |
| 12 | [Dagster+](https://dagster.io/pricing) | Hosted orchestration | 30-day trial; run Dagster locally for free instead | Optional |

### Install on your computer

| Tool | Why | Link |
|---|---|---|
| VS Code | Editor for SQL, dbt and Python | [code.visualstudio.com](https://code.visualstudio.com) |
| Git | Version control | [git-scm.com](https://git-scm.com/downloads) |
| GitHub Desktop | Git without the terminal while you learn | [desktop.github.com](https://desktop.github.com) |
| Python 3.12+ | dlt, Dagster, analysis | [python.org](https://www.python.org/downloads/) |
| DuckDB | Free local warehouse for practice | [duckdb.org](https://duckdb.org/docs/installation/) |
| dbt Core + dbt extension for VS Code | dbt on your own machine | [docs.getdbt.com](https://docs.getdbt.com/docs/get-started-dbt) |
| Claude Code | Claude in your terminal, inside your repos | [code.claude.com](https://code.claude.com/docs/en/overview) |

### The Google-first path (cheapest way to start)

The academy is Google-flavoured at the source: GA4 and Google Tag Manager for tracking, and GA4 exports **natively to BigQuery**. So you can learn the whole chain for free before you touch a trial:

```
GA4 demo / your own site ──► BigQuery sandbox ──► dbt ──► Looker Studio
                              (GA4 export or the public sample dataset)
```

- Practise on the public GA4 sample: `bigquery-public-data.ga4_obfuscated_sample_ecommerce`.
- When you build the capstone, move to the full reference stack (Fivetran → Snowflake → dbt → Dagster). Moving GA4 data from BigQuery into Snowflake is itself a good data engineering exercise.
- Prefer to stay all-Google? That's a real career niche (BigQuery + dbt or Dataform + Looker Studio). Tell the coach once, *"I use BigQuery as my warehouse"*, and it adapts. See [STACK.md](STACK.md).

> **Protect your wallet.** On any account that has a card attached, set a budget alert (Google Cloud: *Billing → Budgets & alerts*) and pause what you're not using.

---

## Stuck?

| Problem | Fix |
|---|---|
| Claude writes essays instead of teaching | Check the plugin is installed and enabled; start with *"LEARN: …"* |
| The coach is too easy or too hard | Say *"level up"* or *"slower, I'm lost"* |
| My trial ran out | Go back to the BigQuery sandbox or DuckDB; everything you learned carries over |
| dbt can't connect | Ask *"BUILD: help me debug my profiles.yml"* and paste the error (without passwords) |
| Something in the repo is wrong | [Open an issue](https://github.com/andersvlindberg/claude-data-academy/issues/new/choose) |

Next: read the [Curriculum](CURRICULUM.md), then start your first session.
