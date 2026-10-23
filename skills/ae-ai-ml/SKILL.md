---
name: ae-ai-ml
description: AI and machine learning on customer data for the Analytics Engineering Academy. Use for questions about the machine learning lifecycle, supervised and unsupervised learning, feature engineering from warehouse data, train and test splits, data leakage, model evaluation metrics, churn prediction, customer lifetime value models, clustering and segmentation, recommendations, ML inside the warehouse, large language models, prompting, embeddings, retrieval augmented generation, AI agents and tool use, a company brain, text-to-SQL, evaluating AI systems, and responsible AI, plus the AI and machine learning course.
---

# Module 15: AI and machine learning on customer data

Models are only as good as the data under them. The analytics engineer's edge in AI is clean, documented, well-defined data and the judgement to know when a model helps a decision.

**Context is king:** for both classic ML (features) and LLM agents (retrieved context), quality and relevance of the input decide the output.

## How to use this skill

Follow `ae-coach` for mode. Without it: explain → LEARN, build → BUILD, graded work → LEARN only.

Every ML or AI build starts with:
1. **Decision:** what will someone do differently with the prediction or answer?
2. **Baseline:** what is the simple rule or current process to beat?
3. **Data:** which marts, what grain, what time window, any leakage risk, any personal data?
4. **Evaluation:** which metric, on which held-out data, and what is "good enough"?
5. **Risk:** who is affected if it is wrong; does GDPR Art. 22 or the AI Act apply?

## Mastery ladder

| Level | Evidence |
|---|---|
| L1 | Explains supervised versus unsupervised, training versus inference, overfitting, and how LLMs, RAG and agents differ |
| L2 | Trains and evaluates a churn classifier or k-means segmentation on mart data with a proper split |
| L3 | Builds features in dbt, avoids leakage with point-in-time logic, compares to a baseline; builds a RAG or agent prototype grounded in documented marts with an evaluation set |
| L4 | Decides when not to use ML, explains model risk, monitoring and responsible AI requirements to stakeholders |

## Core knowledge: machine learning

### Lifecycle (CRISP-DM)
Business understanding → data understanding → data preparation → modeling → evaluation → deployment → (monitor, repeat).

### Problem types
| Type | Customer data example | Typical models |
|---|---|---|
| Classification | Will this customer churn in 90 days? | Logistic regression, gradient boosting |
| Regression | Next-year spend | Linear regression, gradient boosting |
| Clustering | Behavioural segments | k-means, hierarchical |
| Recommendation | Products to show | Co-occurrence, collaborative filtering |
| Forecasting | Orders next month | Seasonal baselines, Prophet-style models, ARIMA |
| Probabilistic CLV | Expected future purchases | BG/NBD + Gamma-Gamma |

### Features from the warehouse
Recency, frequency, monetary value, tenure, product categories bought, discount share, support tickets, email engagement, delivery problems. Build them as a dbt feature model with one row per customer **per snapshot date**.

### Leakage (the classic failure)
Using information that would not be available at prediction time. Example: predicting churn with "number of orders in the next 90 days". Fix with **point-in-time** features: compute features as of a cutoff date, label from the period after it.

### Evaluation
- Split train/validation/test; for time-dependent data, split by time (train on past, test on later).
- Classification: precision (of flagged, how many were right), recall (of actual positives, how many were found), F1, ROC AUC; choose based on cost of false positives versus false negatives. Accuracy is misleading with imbalance (5% churners → 95% accuracy by predicting nobody churns).
- Regression: MAE, RMSE, MAPE.
- Always compare with a baseline (e.g. "customers with no purchase in 120 days churn").

### ML in the warehouse
BigQuery ML (`create model ... options(model_type='logistic_reg')`) and Snowflake's ML functions let you train simple models with SQL next to the data. Good for prototypes and teams without ML infrastructure. Verify current feature sets.

## Core knowledge: LLMs and agents

- **LLM:** predicts text from context. Strong at language, summarising, drafting, code; can be confidently wrong (hallucination).
- **Prompting:** clear role, task, context, constraints, examples, output format. Precision in prompts is a real skill and quick to learn; dictating long prompts is a practical trick.
- **Embeddings:** numeric vectors representing meaning; used for semantic search.
- **RAG (retrieval augmented generation):** retrieve relevant documents or rows, put them in the context, then generate. Grounds answers in your data.
- **Agents and tool use:** the model calls tools (run SQL, read docs, call APIs) in a loop to reach a goal. MCP standardises how tools are connected (see `ae-mcp-tooling`).
- **Company brain:** a curated, documented knowledge base (definitions, dbt docs, decisions, processes) that agents read from. Its quality is a data engineering problem: ownership, freshness, structure.
- **Text-to-SQL:** works far better when grounded in a semantic layer or well-documented marts than on raw tables. Always validate generated SQL and results.
- **Evaluation:** a fixed set of questions with known correct answers ("golden set"), scored on every change. Track accuracy, refusals, latency and cost.
- **Human in the loop:** keep a person accountable for outputs that affect customers or decisions.

### Responsible AI
- GDPR applies to personal data used for training and prompts (purpose, minimisation, legal basis). Art. 22 restricts solely automated decisions with legal or similarly significant effects.
- The EU AI Act sets risk-based obligations (see `ae-governance-gdpr`).
- Bias: models learn from historical data, including its skew. Check performance across segments.
- Do not over-automate: automate what is well understood and verifiable; keep judgement where errors are costly.

## Common misconceptions

- "More features = better model." More leakage and noise, often.
- "95% accuracy is great." Check the base rate.
- "The LLM knows our data." Only what you give it in context or tools.
- "An agent can replace the data team." It amplifies a well-modeled, documented warehouse; it fails on a messy one.

## Connects to

`ae-dbt` (feature models, documentation), `ae-analytics` (segmentation, testing impact), `ae-bi-metrics` (semantic layer as grounding), `ae-mcp-tooling` (connecting tools), `ae-governance-gdpr` (personal data and AI Act), `ae-python-oop` (code).

## References

- [references/ml-on-customer-data.md](references/ml-on-customer-data.md): churn model walkthrough, point-in-time features in SQL, BigQuery ML example, CLV approaches.
- [references/llm-and-agents.md](references/llm-and-agents.md): RAG and agent architecture, company brain design, evaluation set template, prompt patterns.
- [references/exercises.md](references/exercises.md)
