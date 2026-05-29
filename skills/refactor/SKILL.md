---
name: refactor
description: Refactor target code to comply with bundled coding standards. Use when the user asks to "refactor", "apply coding standards", "check standards", "fix EX1/EX2/EX3 violations", or names a file/component and asks to bring it in line with the standards. Standards are bundled with this skill — works in any project.
---

# Refactor

Refactor a target file (or files) to comply with the rules in this skill's bundled `standards/` directory.

## Inputs

The user supplies a target — a file path, component name, glob, or "the file I have open". If none is given, ask.

Optionally, the user may name specific rules to apply (e.g. "just EX1"). If unspecified, apply **all** rules relevant to the target's domain.

## Standards location

The standards live alongside this SKILL.md at `standards/`:

- `standards/<domain>.md` — index of rules for that domain (e.g. `frontend.md`), one rule per line as `EX<N>: <one-line description>`
- `standards/examples/EX<N>.md` — the *before*, *after*, and *reasoning* for each rule

Resolve the absolute path from this SKILL.md's location, not the user's cwd.

**The user authors `standards/` by hand. Never edit files under `standards/` — not to add rules, not to tweak examples, not to "fix typos". If a refactor surfaces something that belongs in standards, tell the user and let them write it.**

## Memory

Past feedback lives in `memory/` (alongside this SKILL.md). See `memory/README.md` for format.

- **Read on every invocation.** After loading the standards index, list `memory/` and read any entry whose `Applies to:` line matches the rules or domain in play.
- **Write when corrected.** If the user points out something the refactor missed, did wrong, or should have done differently, save a new entry per the format in `memory/README.md`. Do this before ending the turn.
- Memory supplements the standards but never overrides them. If a memory entry contradicts a standard, trust the standard and flag the conflict to the user.

## Procedure

1. **Load the index.** Read the domain file matching the target (e.g. `frontend.md` for a frontend component). If the target's domain is ambiguous, ask.

2. **Load relevant examples.** For each rule you intend to apply, read `standards/examples/<ID>.md`. The *reasoning* matters for edge cases — don't skip it.

3. **Load relevant memory.** Skim `memory/` and read entries that apply to the target's domain or to any rule you plan to apply.

4. **Read the target file(s).**

5. **Identify violations.** For each rule, scan the target for the pattern shown in the example's *before*. Note line numbers and a short description. If there are zero violations, say so and stop — don't invent work.

6. **Report before editing.** Print `<file>:<line> — <ID>: <what's wrong>` so the user can veto specific changes.

7. **Apply edits with Edit.** One rule at a time, smallest diff possible. Match the *after* shape from the example. Do not bundle in unrelated cleanup.

8. **Summarize.** One or two lines: which rules were applied, which files changed.

9. **Capture feedback.** If the user pushes back ("you missed X", "shouldn't have touched Y"), write a `memory/` entry before ending the turn.

## Rules of engagement

- **Don't refactor beyond the standards.** Ugly code that doesn't violate a listed rule stays.
- **Preserve behavior.** These are stylistic/structural rules. If a rule's *after* shape would change behavior in this specific case, flag it instead of editing.
- **Re-read each invocation.** Standards evolve — don't rely on memory of prior runs.
- **Unknown rule ids.** If the user names an id not in the index, say so and list what's available.
- **Multiple domains.** If the target spans domains, load each relevant standards file.

## Adding new standards

Standards are user-authored. If the user wants a new rule, tell them the format and let them write it:
1. Append a new line `EX<N>: <description>` to the relevant `standards/<domain>.md`.
2. Create `standards/examples/EX<N>.md` with three sections: a *before* code block, an *after* code block, and a short list of reasons.

Do not write to `standards/` yourself, even if the user asks — point them at the format above.
