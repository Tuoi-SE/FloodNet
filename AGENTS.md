# AGENTS.md — FloodNet AI Operating System

Behavioral guidelines + workflow pipeline. Every task runs through the pipeline below.
Karpathy rules apply at all times, across all phases.

---

## PIPELINE

```
#full      → GStack → GSD → Superpowers → RalphLoop   (feature mới, module lớn)
#standard  → GSD: SPEC → IMPLEMENT → TEST → REVIEW    (bug fix, feature nhỏ)
#fast      → Code trực tiếp                            (typo, rename, comment)
#decision  → GStack only                               (chọn tech/approach)
#debug     → RalphLoop only                            (test fail, iterate)
```

---

## GStack — 4 Lenses Before Any Decision

| Persona | Ask | Output |
|---------|-----|--------|
| CEO | Business value? Priority? | KPIs, must-have vs nice-to-have |
| Engineer | Best approach? Tradeoffs? | Architecture, risks, alternatives |
| Manager | Timeline? Blockers? | Milestones, dependencies |
| Designer | UX flow? Edge cases? | Error states, accessibility |

→ Output: **Spec document** → feed into GSD.

---

## GSD — 5 Phases, Sequential, None Skippable

| Phase | Rule |
|-------|------|
| **SPEC** | Define input/output/scope/edge cases as checklist. Confirmed before IMPLEMENT. |
| **IMPLEMENT** | Code only what spec says. Simplest solution. Match existing style. |
| **TEST** | Cover every spec case. Edge cases first. Tests FAIL before fix (red-green). |
| **REVIEW** | Check: bugs? security? scope creep? Output matches spec exactly? |
| **ITERATE** | Test fail → Phase 3. Review fail → Phase 2 or 3. All pass → ✅ DONE. |

---

## Superpowers — Parallel Agents for Large Tasks

| Agent | Role |
|-------|------|
| @explorer | Codebase discovery, find relevant files/dirs |
| @librarian | Docs, API refs, examples |
| @oracle | Architecture decisions, debugging, code review |
| @designer | UI/UX components, responsive layouts |
| @fixer | Implementation, test writing, bug fixes |

Heavy tasks (build, install, large refactors) → background, split into chunks.
Each sub-task runs in isolated session. Results merged on completion.

---

## RalphLoop — Iterate Until All Pass

```
DO → CHECK → all pass? → YES → DONE
                ↓ NO
              FIX → LOOP
```

Exit only when ALL true:
- [ ] All tests pass
- [ ] Build succeeds
- [ ] No security issues
- [ ] Review approved
- [ ] Output matches SPEC

---

## Karpathy Rules — Always On

**Tradeoff:** These bias toward caution over speed. For trivial tasks, use judgment.

### 1. Think Before Coding
Don't assume. Don't hide confusion. Surface tradeoffs.

- State assumptions explicitly. If uncertain, ask.
- If multiple interpretations exist, present them — don't pick silently.
- If a simpler approach exists, say so. Push back when warranted.
- If something is unclear, stop. Name what's confusing. Ask.

### 2. Simplicity First
Minimum code that solves the problem. Nothing speculative.

- No features beyond what was asked.
- No abstractions for single-use code.
- No "flexibility" that wasn't requested.
- If you write 200 lines and it could be 50, rewrite it.

### 3. Surgical Changes
Touch only what you must. Clean up only your own mess.

- Don't "improve" adjacent code, comments, or formatting.
- Don't refactor things that aren't broken.
- Match existing style, even if you'd do it differently.
- Remove imports/variables/functions YOUR changes made unused.
- If you notice unrelated dead code, mention it — don't delete it.

The test: every changed line should trace directly to the request.

### 4. Goal-Driven Execution
Define success criteria. Loop until verified.

- "Fix the bug" → "Write a test that reproduces it, then make it pass"
- "Add validation" → "Write tests for invalid inputs, then make them pass"
- "Refactor X" → "Ensure tests pass before and after"

For multi-step tasks:
```
1. [Step] → verify: [check]
2. [Step] → verify: [check]
```

Strong success criteria = loop independently. Weak criteria = constant clarification.

---

## Snippets

Location: `.opencode/snippets/`

Format: **Markdown với YAML frontmatter** (không phải JSON!)

```
---
aliases: []
description: Mô tả ngắn
---
Nội dung snippet
```

Filename = primary hashtag (không cần # trong filename).

Ví dụ `full.md` → gõ `#full` để expand.