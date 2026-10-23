#!/usr/bin/env python3
"""Validate every skill folder: frontmatter, naming, required files, links."""
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SKILLS = ROOT / "skills"
errors = []

for skill_dir in sorted(p for p in SKILLS.iterdir() if p.is_dir()):
    md = skill_dir / "SKILL.md"
    if not md.exists():
        errors.append(f"{skill_dir.name}: missing SKILL.md")
        continue
    text = md.read_text(encoding="utf-8")
    m = re.match(r"^---\n(.*?)\n---\n", text, re.S)
    if not m:
        errors.append(f"{skill_dir.name}: missing frontmatter")
        continue
    fm = dict(
        line.split(":", 1) for line in m.group(1).splitlines() if ":" in line
    )
    fm = {k.strip(): v.strip() for k, v in fm.items()}
    if set(fm) != {"name", "description"}:
        errors.append(f"{skill_dir.name}: frontmatter keys must be name, description (got {sorted(fm)})")
    if fm.get("name") != skill_dir.name:
        errors.append(f"{skill_dir.name}: name '{fm.get('name')}' does not match folder")
    if not re.fullmatch(r"[a-z0-9-]{1,64}", fm.get("name", "")):
        errors.append(f"{skill_dir.name}: invalid name format")
    desc = fm.get("description", "")
    if not desc or len(desc) > 1024:
        errors.append(f"{skill_dir.name}: description empty or over 1024 chars ({len(desc)})")
    if "<" in desc or ">" in desc:
        errors.append(f"{skill_dir.name}: description contains angle brackets")
    if skill_dir.name != "ae-coach" and not (skill_dir / "references" / "exercises.md").exists():
        errors.append(f"{skill_dir.name}: missing references/exercises.md")
    for link in re.findall(r"\]\((references/[^)#]+)\)", text):
        if not (skill_dir / link).exists():
            errors.append(f"{skill_dir.name}: broken link {link}")

if errors:
    print("\n".join(errors))
    sys.exit(1)
print(f"OK: {len(list(SKILLS.iterdir()))} skills valid")
