# academy-hud

A Claude Code mod for Claude Data Academy. It turns your study sessions into a heads-up display.

The practice side of Claude Data Academy. You start every step in your study hub (the artifact); this mod keeps you on track while you build it in Claude Code.

**Band above the prompt** (appears when you type `LAB 08`):
`◆ DA  LAB 08  Your first dbt project · · · ● · · ·  · git ✓commit ○push ○PR · 24m`

**`/academy`** opens your study hub in the browser and the practice pane. The first time, link your hub: `/academy https://claude.ai/artifact/<your-hub-id>` (copy the link from your hub's Share menu or the address bar).

**Practice pane:**
- The lab you're on, with its title and where it sits in the stack (Sources → Ingest → Store → Transform → Serve → Analyse → Decide)
- A checklist for the step: practice project set up, committed, pushed, pull request opened. It ticks itself when you run `git commit`, `git push` and `gh pr create`
- Buttons: LAB, LEARN, BUILD, QUIZ, REVIEW, INTERVIEW (hotkeys 1–6), **Hint** (`h`), **Git next step** (`g`), **Close + log** (`c`)

The mod reads only your prompts' first words and the git commands Claude runs. It sends nothing anywhere and stores only your streak.

## Install

```bash
claude plugin marketplace add andersvlindberg/claude-data-academy
claude plugin install academy-hud@data-academy
```

Needs Claude Code 2.1.287 or later. Restart Claude Code, then start with `LEARN: <topic>` or open the pane with `/academy`. `/academy-band` hides or shows the band.
