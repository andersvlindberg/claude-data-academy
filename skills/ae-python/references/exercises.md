# Exercises: Python and OOP

## Set A (practitioner)

1. Write a function that reads a CSV of orders and returns revenue per customer as a dict.
2. Create a `Customer` class with name, email and a method `is_vip(threshold)` based on order totals.
3. Do the same aggregation with pandas `groupby`. Compare readability.
4. Set up a virtual environment, install `pandas`, freeze requirements.

## Set B (independent)

1. Build the extractor/loader/pipeline design from the reference with a new `ApiExtractor` (see `ae-apis`). Write tests with fakes.
2. Add logging and error handling: a bad row is logged and skipped, not crashing the run; the run reports counts.
3. Refactor a 150-line script with global variables into classes with single responsibilities; explain each decision.
4. Explain where inheritance would be the wrong choice in your design and why composition fits better.

## Quiz bank

1. Class versus object?
2. Name the four OOP pillars with a data example each.
3. What does "composition over inheritance" mean?
4. Why mock an API in tests?
5. What is the D in SOLID?

## Interview questions

1. "How would you structure Python code for several data sources so adding a new one is easy?"
2. "How do you test code that calls external APIs?"
3. "Tell me about refactoring something messy."
