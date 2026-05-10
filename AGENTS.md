# AGENTS.md - OpenCode Agent Guidelines

## Core Philosophy

> "Don't assume. Don't hide confusion. Don't overcomplicate. Touch only what you must."

---

## 1. Karpathy Guidelines

- **Think Before Coding**: State assumptions. Ask if uncertain. Present tradeoffs.
- **Simplicity First**: Minimum code that solves problem. No speculative features.
- **Surgical Changes**: Touch only what's asked. Clean your own mess.
- **Goal-Driven**: Define success criteria. Test first, then implement.

---

## 2. Workflow: GSD Phases

```
SPEC → IMPLEMENT → TEST → REVIEW → ITERATE
```

| Phase | What | Agent |
|-------|------|-------|
| **SPEC** | Define requirements rõ ràng, clarify intent | @oracle |
| **IMPLEMENT** | Write code | @fixer |
| **TEST** | Write tests, verify pass | @fixer |
| **REVIEW** | Code review, security check | @oracle |
| **ITERATE** | Loop until all pass | @fixer |

**Rules**:
- Don't skip to IMPLEMENT without SPEC
- TEST must pass before REVIEW
- All must pass = DONE

---

## 3. GStack: Multi-Persona Decision Making

Khi gặp design/architecture questions quan trọng, delegate tới nhiều perspectives:

| Role | Vai trò | Question type |
|------|--------|--------------|
| **CEO** | Strategy, priorities | "Nên build gì?" |
| **Engineer** | Technical feasibility | "Cách implement tốt nhất?" |
| **Manager** | Timeline, resources | " Bao lâu?" |
| **Designer** | UX/UI experience | "User sẽ feel gì?" |

**Cách dùng**: Present options từ các perspectives → vote/choose best approach.

---

## 4. Superpowers: Execution

**Background jobs**:
- Heavy tasks (`npm install`, `cargo build`) → run in background
- Large refactoring → run in chunks
- Test suites → run parallel

**Headless sessions**:
- Task lớn được delegate tới fresh context
- Subagent cho từng feature
- Không share context với main session

---

## 5. RalphLoop: Iteration

```
DO → CHECK → IF fail → FIX → LOOP
              └→ IF pass → DONE
```

**Loop cho đến khi**:
1. Tests pass
2. Code compiles
3. No security issues
4. REVIEW approved

---

## 6. OpenCode Agents

| Task | Use |
|-----|-----|
| Explore codebase | @explorer |
| Find library docs | @librarian |
| Architecture decisions | @oracle |
| UI/UX design | @designer |
| Implementation | @fixer |
| Debugging | @oracle |

**Parallel execution**: Task A + B + C → parallel @fixers

---

## 7. RTK Token Optimization

Use RTK for commands (saves 60-90%):
- `git status` → `rtk git status` (-80%)
- `ls -la` → `rtk ls` (-80%)
- `cat file` → `rtk read file` (-70%)
- `cargo test` → `rtk cargo test` (-90%)

---

*Sources: Karpathy (andrej-karpathy-skills), Eric Tech (GStack+GSD+Superpowers)*