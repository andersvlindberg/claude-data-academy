# Lab 52: Map a customer journey with data touchpoints

| Role | Level | Time | Tools | Cost |
|---|---|---|---|---|
| Business / MarTech | L1 | 2 h | Whiteboard or Slides | Free |

**Goal:** Map how a customer finds, buys and returns, and where data is created at each step.

## How this lab works
1. **Hub:** open this step in your study hub and take the lecture (*Lecture*), or skip it if you know the theory.
2. **Claude Code:** the lecture ends with a practice project. Claude sets it up for you (a fictional scenario and generated data) and you build it in a real tool.
3. **GitHub:** commit as you go and merge it into your fork. Then tick it off in the hub.

```bash
cd claude-data-academy        # your fork
git checkout -b lab-52
mkdir -p my-work/lab-52-customer-journey-map && cd my-work/lab-52-customer-journey-map
claude
```
Type `LAB 52`. This is a brief lab: the coach turns the milestones below into steps for your level, and you write the code.

## Milestones
1. Pick a persona and the stages (awareness to loyalty)
2. List touchpoints and channels per stage
3. Mark what data each touchpoint creates and in which system
4. Find two gaps where you're blind

## Done when
- [ ] Every stage has a data source or a stated gap
- [ ] Gaps ranked by business impact

## Save it to your portfolio
```bash
git add .
git commit -m "lab 52: <what you built>"
git push -u origin lab-52
```
Open a pull request in your fork, read your own diff like a reviewer, merge it, and mark the lab *Done* in your hub. Add a short `README.md` in the lab folder: what you built, how to run it, what you learned.

## Portfolio
A one-page journey map.

> Safety: use fictional or public data, keep secrets in `.env` (in `.gitignore`), and Claude asks before anything destructive.

[← All labs](README.md)
