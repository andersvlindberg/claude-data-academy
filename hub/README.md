# Your study hub

The hub is where every step starts. It's a private artifact, in English and Swedish (toggle top right), with five pages:

1. **Tracks:** choose data engineer, analytics engineer, data analyst or business / MarTech, and see the whole stack you'll work in.
2. **My track:** your 20 steps, from *what is the role?* to a capstone. Each step has the lecture request (Claude app), the lab command (Claude Code) and the Git commands (GitHub).
3. **Progress:** what you've finished in each of the three areas, quizzes on finished steps, and your learning log.
4. **Guide:** the setup and the loop, step by step.
5. **About:** what the academy is, and a short bio about you.

## Get it running (5 minutes)

**1. Create your hub (Claude app).** Paste this in a chat with the Data Academy plugin installed:

```text
Publish my Data Academy hub as an artifact from hub/index.html in
github.com/andersvlindberg/claude-data-academy, with the db, user and sample
capabilities. Set my name to <your name>, my track to <AE / DE / DA / BIZ>,
my language to <en / sv> and my bio to: <two or three sentences about you>.
```

Claude publishes a private copy that only you can open. Progress is saved in the artifact's own database, so it follows you across devices.

**2. Copy its link.** Open the hub and copy the address (`https://claude.ai/artifact/...`).

**3. Connect it to Claude Code.** With the `academy-hud` mod installed (`claude plugin install academy-hud@data-academy`), run once in Claude Code:

```text
/academy https://claude.ai/artifact/<your-hub-id>
```

From then on, `/academy` in Claude Code opens your hub in the browser and shows the lab you're working on. Pin the hub in the Claude app sidebar too, so it's one click away there.

## Keep it up to date

- **Mark a step done** when you've merged its pull request.
- **Take a quiz** on the progress page; scores are saved per area.
- **End a session** with *"add it to my hub"* and Claude writes your log entry.
- **Generate new steps** when you finish a track.

What's stored: your name, track, step status, quiz scores, extra steps and log entries. Nothing else.
