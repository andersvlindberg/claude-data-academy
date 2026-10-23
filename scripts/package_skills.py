#!/usr/bin/env python3
"""Zip each skill folder into dist/<skill>.zip for upload to Claude apps."""
import zipfile
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DIST = ROOT / "dist"
DIST.mkdir(exist_ok=True)

for skill_dir in sorted(p for p in (ROOT / "skills").iterdir() if p.is_dir()):
    out = DIST / f"{skill_dir.name}.zip"
    with zipfile.ZipFile(out, "w", zipfile.ZIP_DEFLATED) as z:
        for f in sorted(skill_dir.rglob("*")):
            if f.is_file() and not f.name.startswith("."):
                z.write(f, f.relative_to(skill_dir.parent))
    print(f"built {out.relative_to(ROOT)}")
