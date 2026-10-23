# OOP in a data context

## Worked design: a small ingestion package

```python
# pipeline/base.py
from abc import ABC, abstractmethod
from typing import Iterable

class Extractor(ABC):
    @abstractmethod
    def extract(self) -> Iterable[dict]:
        """Yield records from a source."""

class Loader(ABC):
    @abstractmethod
    def load(self, records: list[dict]) -> int:
        """Write records, return count."""
```

```python
# pipeline/extractors.py
import csv
from pathlib import Path
from .base import Extractor

class CsvExtractor(Extractor):
    def __init__(self, path: Path):
        self._path = path                      # encapsulated

    def extract(self):
        with self._path.open(newline="", encoding="utf-8") as f:
            yield from csv.DictReader(f)
```

```python
# pipeline/loaders.py
import duckdb
from .base import Loader

class DuckDbLoader(Loader):
    def __init__(self, con: duckdb.DuckDBPyConnection, table: str):
        self._con, self._table = con, table

    def load(self, records):
        if not records:
            return 0
        cols = list(records[0].keys())
        placeholders = ", ".join("?" for _ in cols)
        self._con.executemany(
            f"insert into {self._table} ({', '.join(cols)}) values ({placeholders})",
            [tuple(r[c] for c in cols) for r in records],
        )
        return len(records)
```

```python
# pipeline/pipeline.py
from dataclasses import dataclass
from .base import Extractor, Loader

@dataclass
class Pipeline:                       # composition: has-an extractor and a loader
    extractor: Extractor
    loader: Loader

    def run(self) -> int:
        return self.loader.load(list(self.extractor.extract()))
```

```python
# tests/test_pipeline.py
from pipeline.pipeline import Pipeline
from pipeline.base import Extractor, Loader

class FakeExtractor(Extractor):
    def extract(self):
        yield {"id": 1}
        yield {"id": 2}

class FakeLoader(Loader):
    def __init__(self): self.rows = []
    def load(self, records):
        self.rows.extend(records); return len(records)

def test_pipeline_moves_all_records():
    loader = FakeLoader()
    assert Pipeline(FakeExtractor(), loader).run() == 2
    assert loader.rows == [{"id": 1}, {"id": 2}]
```

Why this design: new sources are new `Extractor` classes (open/closed), the pipeline depends on abstractions (dependency inversion), and fakes make it testable without a database or API.

## Python ↔ C# mapping

| Concept | Python | C# |
|---|---|---|
| Class | `class Customer:` | `public class Customer { }` |
| Constructor | `def __init__(self, name):` | `public Customer(string name) { }` |
| Field/property | `self.name = name`; `@property` | `public string Name { get; set; }` |
| Private by convention / enforced | `_name` (convention) | `private string _name;` |
| Inheritance | `class Vip(Customer):` | `class Vip : Customer` |
| Abstract class | `class Extractor(ABC)` + `@abstractmethod` | `abstract class Extractor` + `abstract` method |
| Interface | ABC or `typing.Protocol` | `interface IExtractor` |
| Override | redefine method | `override` keyword (base must be `virtual`/`abstract`) |
| Exceptions | `try/except/finally`, `raise` | `try/catch/finally`, `throw` |
| Collections | `list`, `dict` | `List<T>`, `Dictionary<K,V>` |
| Query data | comprehensions, pandas | LINQ |
| Tests | pytest | xUnit / NUnit / MSTest |
