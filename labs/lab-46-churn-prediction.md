# Lab 46: Churn prediction with logistic regression

| Role | Level | Time | Tools | Cost |
|---|---|---|---|---|
| Data analyst | L3 | 3 h | Python, scikit-learn | Free |

**Goal:** Predict which customers are likely to churn and what drives it.

## How this lab works
1. **Hub:** open this step in your study hub and take the lecture (*Lecture*), or skip it if you know the theory.
2. **Claude Code:** the lecture ends with a practice project. Claude sets it up for you (a fictional scenario and generated data) and you build it in a real tool.
3. **GitHub:** commit as you go and merge it into your fork. Then tick it off in the hub.

```bash
cd claude-data-academy        # your fork
git checkout -b lab-46
mkdir -p my-work/lab-46-churn-prediction && cd my-work/lab-46-churn-prediction
claude
```
Type `LAB 46`. This is a brief lab: the coach turns the milestones below into steps for your level, and you write the code.

## Milestones
1. Define churn and build features from orders
2. Train/test split and a logistic regression
3. Evaluate with ROC AUC and a confusion matrix
4. Turn coefficients into actions

## Done when
- [ ] No data leakage
- [ ] Business actions tied to drivers

## Save it to your portfolio
```bash
git add .
git commit -m "lab 46: <what you built>"
git push -u origin lab-46
```
Open a pull request in your fork, read your own diff like a reviewer, merge it, and mark the lab *Done* in your hub. Add a short `README.md` in the lab folder: what you built, how to run it, what you learned.

## Portfolio
Model card + notebook.

> Safety: use fictional or public data, keep secrets in `.env` (in `.gitignore`), and Claude asks before anything destructive.

[← All labs](README.md)
