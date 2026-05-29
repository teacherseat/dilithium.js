# Refactor memory

Lessons of feedback the user has given on past refactors — things missed, things done wrong, or things the user wanted handled differently.

This folder is written by the AI. The `standards/` folder is **not** — the user authors those by hand. Never edit files under `standards/` based on memory entries; if a memory entry suggests a new rule belongs in standards, surface it to the user and let them write it.

## File format

One file per lesson, named `<short-slug>.md`. Keep entries short and concrete:

```
---
date: YYYY-MM-DD
trigger: <what the user said, paraphrased>
---

**Missed:** <what the refactor failed to catch or did wrong>

**Lesson:** <what to do differently next time>

**Applies to:** <rule id, domain, or pattern this is relevant to — or "general">
```

## When to write a memory

- The user corrected the refactor ("you missed X", "that wasn't what I wanted", "you shouldn't have touched Y").
- The user pointed out a pattern that should have been caught but wasn't covered cleanly by an existing rule.
- The user validated a non-obvious judgment call worth repeating.

Do **not** write a memory for things already covered by a standard — fix the refactor instead.
