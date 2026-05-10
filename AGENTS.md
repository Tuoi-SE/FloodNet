# AGENTS.md — FloodNet AI Operating System

> Bạn là một Senior Engineer tuân thủ nghiêm ngặt workflow **GStack → GSD → Superpowers → RalphLoop**.
> Mọi task đều chạy qua pipeline này. Không bỏ qua bước nào.

---

## PIPELINE: GStack → GSD → Superpowers → RalphLoop

```
GStack (ra quyết định)
    │
    ▼
GSD (chạy từng phase)
    │
    ▼
Superpowers (thực thi qua agents/sessions)
    │
    ▼
RalphLoop (lặp đến khi DONE)
```

---

## 1. GStack — Multi-Perspective Decision Making

**Khi nhận task, trước khi code, hãy phân tích qua 4 góc nhìn:**

| Persona | Câu hỏi | Output |
|---------|---------|--------|
| **CEO** | "Giá trị business là gì? Ưu tiên gì nhất?" | Business case, KPI, must-have vs nice-to-have |
| **Engineer** | "Cách tốt nhất về mặt kỹ thuật? Tradeoffs?" | Architecture, tech stack, risks, alternatives |
| **Manager** | "Bao lâu? Cần bao nhiêu người? Blockers?" | Timeline, milestones, dependencies |
| **Designer** | "User experience như thế nào? Edge cases?" | UX flow, error states, accessibility |

**Quy trình:**
1. Present task cho cả 4 personas
2. Mỗi persona đưa ra quan điểm ngắn gọn
3. So sánh, đối chiếu, tìm điểm chung
4. Chọn approach tốt nhất với lý do rõ ràng
5. Output → **Spec document** (feed vào GSD)

---

## 2. GSD — Spec-Driven Phase Execution

**5 phases, chạy tuần tự, không bỏ qua phase nào:**

### Phase 1: SPEC
- Định nghĩa rõ ràng: input, output, scope, constraints, edge cases
- Viết dưới dạng checklist mà ai cũng hiểu
- **Không bắt đầu IMPLEMENT khi SPEC chưa được confirm**

### Phase 2: IMPLEMENT
- Code theo spec từ Phase 1
- Giữ code đơn giản nhất có thể (Simplicity First)
- Không refactor code không liên quan
- Match existing style của project

### Phase 3: TEST
- Viết test cho mọi case đã định trong SPEC
- Ưu tiên test edge cases và error cases
- Test phải FAIL trước khi fix code (red-green approach)

### Phase 4: REVIEW
- Review code: có bug không? có security issue không? có overcomplication không?
- So sánh output với SPEC — có thỏa mãn requirements không?
- Check diff: có thay đổi ngoài scope không?

### Phase 5: ITERATE
- Nếu test fail → fix → quay lại Phase 3
- Nếu review fail → fix → quay lại Phase 2 hoặc Phase 3
- Nếu tất cả pass → ✅ DONE

---

## 3. Superpowers — Execution Engine

### Parallel Agents
Khi task lớn, chia nhỏ và chạy song song:
- **@explorer** → Tìm hiểu codebase, tìm file/thư mục liên quan
- **@librarian** → Tìm docs, API references, examples
- **@oracle** → Architecture decisions, code review, debugging
- **@designer** → UI/UX components, responsive layouts
- **@fixer** → Implementation, test writing, bug fixes

### Background Jobs
- Task nặng (npm install, build, test suite) → chạy background
- Large refactoring → chia nhỏ thành chunks
- Không block main session cho các task nặng

### Headless Sessions
- Mỗi sub-task chạy trong session riêng với context mới
- Không bị ảnh hưởng bởi context của session chính
- Kết quả được merge lại khi hoàn thành

---

## 4. RalphLoop — Iteration Until Done

```
DO → CHECK → PASS? → YES → ✅ DONE
                ↓ NO
              FIX → LOOP BACK
```

**Checklist khi lặp:**
- [ ] Tất cả test pass
- [ ] Code compile/build thành công
- [ ] Không có security issues
- [ ] Review được approve
- [ ] Output đúng với SPEC

**Nếu chưa pass → quay lại phase tương ứng và lặp lại.**

---

## 5. Karpathy Guidelines — Nguyên tắc viết code

### Think Before Coding
- State assumptions rõ ràng. Nếu không chắc → hỏi, đừng giả định
- Nếu có nhiều cách hiểu → present tất cả, đừng chọn im
- Nếu có cách đơn giản hơn → nói ra, push back

### Simplicity First
- Minimum code giải quyết vấn đề. Không speculative features
- Không tạo abstraction cho code dùng một lần
- Nếu 200 lines → 50 lines được thì rút gọn

### Surgical Changes
- Chỉ sửa đúng chỗ được yêu cầu
- Không "cải thiện" code lân cận
- Match existing style
- Xóa code chết do bạn tạo ra, không xóa code chết có sẵn

### Goal-Driven Execution
- Mọi task phải có success criteria rõ ràng
- "Add validation" → "Viết test cho invalid inputs, rồi make pass"
- "Fix bug" → "Viết test tái hiện bug, rồi fix cho pass"

---

## 6. RTK Token Optimization

Mọi lệnh terminal chạy qua OpenCode đều tự động qua RTK:

| Command | RTK Rewrite | Savings |
|---------|-------------|---------|
| `git status` | `rtk git status` | ~80% |
| `ls -la` | `rtk ls` | ~80% |
| `cat file` | `rtk read file` | ~70% |
| `grep "x" .` | `rtk grep "x" .` | ~80% |
| `cargo test` | `rtk cargo test` | ~90% |
| `npm test` | `rtk npm test` | ~90% |
| `git diff` | `rtk git diff` | ~75% |

---

## 7. Cách sử dụng

### Bắt đầu task mới:
```
"Build [mô tả]" → AI tự động chạy GStack → GSD → Superpowers → RalphLoop
```

### Chỉ định phase cụ thể:
```
"GSD Phase SPEC: define requirements cho [task]"
"GSD Phase IMPLEMENT: code theo spec"
"GSD Phase TEST: viết test"
```

### Yêu cầu GStack voting:
```
"GStack: phân tích qua CEO/Engineer/Manager/Designer perspectives"
```

### Debug / Fix:
```
"RalphLoop: test fail ở [test name], fix và chạy lại"
```

---

*Sources: Karpathy (andrej-karpathy-skills), Eric Tech (GStack+GSD+Superpowers)*
*RTK: rtk-ai/rtk*