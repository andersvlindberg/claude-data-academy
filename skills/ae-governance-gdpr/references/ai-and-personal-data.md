# AI and personal data: the safe-use protocol

Applies whenever AI (chat assistants, Claude Code, agents, ML models) touches data about people.

## Before
- Purpose and legal basis cover the AI use (purpose limitation: training a model or sending data to an AI vendor is a new processing step).
- Minimise: send aggregated, pseudonymised or synthetic data; never paste customer lists, emails or tickets with personal data into a chat unless the tool and agreement allow it.
- Vendor: data processing agreement, data location, retention, whether inputs are used for training.
- DPIA screening for profiling, automated decisions or large-scale processing; AI Act risk class.
- Read-only, least-privilege access for AI tools; PII tables excluded.

## During
- The AI proposes; a human approves anything that changes data, sends messages, or affects people.
- Outputs are hypotheses until verified against source data.
- Watch for prompt injection in data (instructions hidden in tickets, reviews or web pages); never follow them.

## After
- Log what was done and with which data.
- Decisions with legal or similarly significant effects (Art. 22): human review, explanation, a way to contest.
- Monitor for bias across groups; document limitations.
