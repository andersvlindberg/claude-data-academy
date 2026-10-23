# Business case

## Template

1. **Summary** (3 sentences: problem, recommendation, expected value).
2. **Problem today:** what is happening, how we know (data), what it costs.
3. **Options:** A do nothing, B ..., C ...
4. **Recommendation:** why this option.
5. **Costs:** one-off (implementation, licences, hours) and running (licences, maintenance).
6. **Benefits:** quantified, with every assumption listed.
7. **Risks and mitigations.**
8. **Financials:** payback, ROI, optionally NPV.
9. **Measurement plan:** KPI, baseline, target, method (ideally an experiment), review date.
10. **Implementation:** RACI, milestones, dependencies.

## Formulas
- **ROI** = (benefit − cost) ÷ cost.
- **Payback period** = one-off cost ÷ monthly net benefit.
- **NPV** = Σ (net cash flow in year t ÷ (1 + r)^t) − initial investment, with discount rate r.
- **Sensitivity:** recalculate with pessimistic and optimistic assumptions; a case that only works in the optimistic scenario is weak.

## Example: abandoned-cart email flow

- Problem: 70% of carts are abandoned; 2 000 abandoned carts per month with average cart value 800.
- Assumption: a reminder flow recovers 5% of abandoned carts (validate with a holdout).
- Benefit: 2 000 × 5% × 800 = 80 000 revenue/month; at 30% margin = 24 000 gross profit/month.
- Cost: setup 40 000 one-off, tool and maintenance 4 000/month.
- Net monthly benefit: 24 000 − 4 000 = 20 000. Payback: 40 000 ÷ 20 000 = 2 months.
- Sensitivity: at 2% recovery, gross profit 9 600 − 4 000 = 5 600/month, payback about 7 months. Still positive.
- Measurement: 10% holdout group without reminders; compare recovered revenue per abandoned cart after 8 weeks.
