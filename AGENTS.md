# FloodNet Agent Guide

Auto-loaded by AI agents. File này định nghĩa quy tắc cho toàn monorepo.

## Repository

- Tooling: `pnpm` workspaces + `turbo`
- Package manager: `pnpm@9.0.0` — không dùng `npm` hay `yarn`
- Workspaces: `apps/backend`, `apps/frontend`, `apps/mobile`

## Required Workflow

1. Luôn thay đổi ít nhất có thể (smallest safe change).
2. Giữ code, test, và docs đồng bộ.
3. Mọi thay đổi behavior đều phải có test.
4. Trước mỗi commit, chạy lint + type-check + test cho workspace bị ảnh hưởng.
5. **KHÔNG tự động chạy `git commit`**. Sau mỗi batch logic, báo user: "COMMIT CHECKPOINT — suggested message: `type(scope): subject`"
6. Không bao giờ commit secrets, tokens, private keys, hay `.env` values.
7. Không dùng `--no-verify` để bypass pre-commit hooks.
8. Không chạy full test suite — chỉ chạy test cho file đã thay đổi.

## Commit Format

Conventional commits:
```
<type>(<scope>): <subject>

Types: feat | fix | chore | refactor | test | docs | style | perf | ci
Scopes: backend | frontend | mobile | repo | docs
```

## Code Quality

- Ưu tiên strict typing, tránh `any`.
- Giữ PR focused và reversible.
- Không expose backend enums trong UI text.
- Mọi function mới đều phải có test.

## Security

- Coi mọi credentials là sensitive.
- Dùng `.env.example` để document config.
- Validate đầu vào ở mọi boundary.
