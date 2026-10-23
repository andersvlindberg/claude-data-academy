# Your study hub

`index.html` is a personal start page for the academy. Pick a role and the whole page follows it: your track of 20 labs with *Lecture first* and *Start lab* buttons, a progress ring, the lectures for that role, a learning log, and a button that generates five new labs when you finish the track.

## Make your own (Claude app)

Paste this in a chat with the Data Academy plugin installed:

```text
Publish my Data Academy hub as an artifact from hub/index.html in
github.com/andersvlindberg/claude-data-academy, with the db, user and sample
capabilities. Set my name to <your name> and my focus to <AE / DE / DA / BIZ>.
```

Claude publishes a private copy that only you can open. Progress is saved in the artifact's own database, not in the browser, so it follows you across devices.

## Keep it up to date

- **Click a status** (To do → Doing → Done) on a lab or lecture.
- **End a session** with *"Close the session and add it to my hub"*. Claude writes the log entry: what you did, the result, what's still unclear and when to review.
- **Change focus** with the role buttons at the top; *Next on your route* follows the suggested lab order for that role.

What's stored: your name, focus role, the status of each lab and lecture, and your log entries. Nothing else, and no personal data beyond what you type.
