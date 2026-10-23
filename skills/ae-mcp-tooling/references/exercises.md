# Exercises: MCP and tooling

## Set A (practitioner)

1. Explain host, client and server in MCP with the example "Claude reads my dbt project".
2. List the tools you would expose to an AI for a dbt project and which you would not.
3. Write a CLAUDE.md for your capstone repository.
4. Use Claude Code to explain one of your models; then check its explanation against the compiled SQL.

## Set B (independent)

1. Create a read-only AI role on your warehouse limited to marts, connect a database MCP server with it, and prove it cannot read raw or PII tables.
2. Connect the dbt project (dbt MCP server or Claude Code in the repo) and have the AI draft tests and docs for three models; verify with `dbt build` and correct anything untrue.
3. Write a one-page AI access policy for a small data team: identities, scopes, PII, confirmations, logging, review.
4. Demonstrate a prompt-injection risk with a harmless example (a table cell containing an instruction) and how your setup prevents acting on it.

## Quiz bank

1. What are MCP tools, resources and prompts?
2. Why start with read-only access?
3. What is prompt injection in a data context?
4. What belongs in a CLAUDE.md?
5. How do you verify AI-written SQL?

## Interview questions

1. "How do you use AI in your data work, and how do you make sure it's correct?"
2. "How would you give an AI assistant access to our warehouse safely?"
3. "What tasks would you not delegate to AI?"
