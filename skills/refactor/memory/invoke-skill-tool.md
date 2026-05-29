---
date: 2026-05-10
trigger: "did you use the refactor skill and did you write the memory like the skills says when I am providing correction?"
---

**Missed:** When the user asked for a refactor, I read `standards/` files directly with Read/Bash instead of invoking the skill through the Skill tool. I also skipped the post-turn memory step after the user delivered a correction.

**Lesson:** When the user asks to "refactor" — even with a specific directive like "make this an in-class component" — invoke the skill via the Skill tool (`Skill` with `skill: refactor`). Do not shortcut by reading bundled files manually. And whenever the user pushes back on a refactor result, write a `memory/` entry before ending the turn, per the skill's procedure step 9.

**Applies to:** general
