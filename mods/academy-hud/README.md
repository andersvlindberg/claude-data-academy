# academy-hud

A Claude Code mod for Claude Data Academy. It turns your study sessions into a heads-up display.

**Band above the prompt** (appears once you start a session):
`DATA ACADEMY  LEARN  incremental models in dbt · ○○○●○○○ Transform · 24m · 6 turns · streak 3d`

**Study pane** (`/academy`):
- Mode buttons: LEARN, LECTURE, LAB, BUILD, QUIZ, REVIEW, INTERVIEW (hotkeys 1–7) put the mode in your prompt
- The data chain, Sources → Ingest → Store → Transform → Serve → Analyse → Decide, with the layer you're studying highlighted and the role it belongs to
- Session timer, turns, daily streak and total sessions
- **Close session + log** (hotkey `c`) and **Give me a hint** (hotkey `h`)
- A rotating study tip

The mod reads only your prompts' first words and keywords to set the mode and layer. It sends nothing anywhere and stores only your streak.

## Install

```bash
claude plugin marketplace add andersvlindberg/claude-data-academy
claude plugin install academy-hud@data-academy
```

Needs Claude Code 2.1.287 or later. Restart Claude Code, then start with `LEARN: <topic>` or open the pane with `/academy`. `/academy-band` hides or shows the band.
