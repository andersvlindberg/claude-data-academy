# Your study hub

The hub is where every step starts. It's a private artifact with three pages:

1. **Tracks:** choose data engineer, analytics engineer, data analyst or business / MarTech, and see the whole stack you'll work in.
2. **My track:** your 20 steps, from *what is the role?* to a capstone. Each step has the lecture request (Claude app), the lab command (Claude Code) and the Git commands (GitHub).
3. **Progress:** what you've finished in each of the three areas, quizzes on finished steps, and your learning log.

## Make your own

Paste this in the Claude app with the Data Academy plugin installed:

```text
Publish my Data Academy hub as an artifact from hub/index.html in
github.com/andersvlindberg/claude-data-academy, with the db, user and sample
capabilities. Set my name to <your name> and my track to <AE / DE / DA / BIZ>.
```

Claude publishes a private copy that only you can open. Progress is saved in the artifact's own database, so it follows you across devices.

## Keep it up to date

- **Mark a step done** when you've merged its pull request.
- **Take a quiz** on the progress page; scores are saved per area.
- **End a session** with *"add it to my hub"* and Claude writes your log entry.
- **Generate new steps** when you finish a track.

What's stored: your name, track, step status, quiz scores, extra steps and log entries. Nothing else.
