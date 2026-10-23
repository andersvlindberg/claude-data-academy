---
name: ae-python
description: Python and programming for data, including object-oriented programming, for the Analytics Engineering Academy. Use for questions about Python for data work, virtual environments and packages, functions and modules, pandas and polars, Jupyter notebooks versus scripts, object-oriented programming concepts such as classes, objects, encapsulation, inheritance, polymorphism, abstraction, interfaces and composition, dataclasses, SOLID principles, exceptions, type hints, logging, testing with pytest, project structure, and the object-oriented programming courses, including C# equivalents.
---

# Module 14: Python for data

Analytics engineers write mostly SQL, but Python glues the chain together: ingestion scripts, API clients, tests, automation and ML. Object-oriented programming is how larger code stays understandable.

## How to use this skill

Follow `ae-coach` for mode. Without it: explain → LEARN, build → BUILD, graded work → LEARN only (parallel examples in a different domain, review their code, debug errors they show; never write the assigned program).

When the course language is not Python (for example C#), teach the concept language-agnostically and use the mapping in [references/oop-concepts.md](references/oop-concepts.md). Concepts transfer; syntax is looked up.

Live debugging: read the traceback bottom-up (the last line is the error, the lines above show the path), reproduce with the smallest input, change one thing at a time, use `print`/logging or a debugger breakpoint.

## Mastery ladder

| Level | Evidence |
|---|---|
| L1 | Explains variables, types, functions, classes versus objects, and the four OOP pillars |
| L2 | Writes a script with functions and a class that reads, transforms and writes data; uses a virtual environment |
| L3 | Structures a small package with classes, composition, error handling, logging, type hints and pytest tests |
| L4 | Explains design choices (composition versus inheritance, SOLID, testability) and refactors messy code |

## Core knowledge

### Python for data, essentials
- **Environments:** one virtual environment per project (`python -m venv .venv` or `uv venv`), dependencies in `requirements.txt` or `pyproject.toml`.
- **Data structures:** list, dict, set, tuple; comprehensions; f-strings.
- **Files:** `pathlib`, `csv`, `json`; context managers (`with open(...)`).
- **pandas** for tabular work: `read_csv`, `merge`, `groupby().agg()`, `pivot_table`, vectorised operations over loops. **polars** is a fast alternative with a similar mindset. **DuckDB** lets you run SQL on DataFrames.
- **Notebooks** for exploration; **scripts/packages** for anything that runs repeatedly. Move code out of notebooks once it works.

### OOP concepts
| Concept | Meaning | Data example |
|---|---|---|
| Class / object | Blueprint / instance | `ApiClient` class; `shop_client = ApiClient(...)` |
| Attribute / method | Data / behaviour on the object | `client.base_url`, `client.get_orders()` |
| Encapsulation | Hide internals behind a clear interface | Token refresh happens inside the client |
| Inheritance | A subclass extends a base class | `ShopifyClient(ApiClient)` |
| Polymorphism | Same interface, different implementations | Every `Extractor` has `.extract()` |
| Abstraction | Define what, not how | `abc.ABC` base class with abstract `extract()` |
| Composition | Objects built from other objects | `Pipeline(extractor, loader)` |

**Prefer composition over deep inheritance.** A pipeline that *has* an extractor and a loader is easier to test and change than a tower of subclasses.

### SOLID in one line each
- **S**ingle responsibility: one reason to change per class.
- **O**pen/closed: extend with new classes, not by editing working ones.
- **L**iskov substitution: subclasses must work wherever the base class works.
- **I**nterface segregation: small, focused interfaces.
- **D**ependency inversion: depend on abstractions (pass the loader in), not concrete classes.

### Quality habits
- Type hints (`def load(rows: list[dict]) -> int:`), checked with `mypy` or the editor.
- Exceptions: catch specific ones, add context, never silently `except: pass`.
- Logging instead of print in pipelines (`logging.getLogger(__name__)`).
- Tests with `pytest`: arrange, act, assert; test pure functions first; mock external APIs.
- Formatting and linting: `ruff`.

## Common misconceptions

- "A class is needed for everything." Functions are fine for simple transforms; classes when state and behaviour belong together.
- "Inheritance is the main point of OOP." Encapsulation and clear interfaces matter more.
- "Notebooks are production." They are for exploring.
- "Tests slow me down." They let you change code without fear.

## Connects to

`ae-apis` (clients), `ae-data-engineering` (pipelines), `ae-ai-ml` (ML code), `ae-git-devops` (versioning and CI), `ae-analytics` (pandas analysis).

## References

- [references/oop-concepts.md](references/oop-concepts.md): a worked pipeline design with classes and tests, plus Python ↔ C# mapping.
- [references/exercises.md](references/exercises.md)
