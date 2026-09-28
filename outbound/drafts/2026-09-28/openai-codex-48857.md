# Draft for openai/codex#48857

- OP: @pdecary
- Title: macOS Computer Use: SkyComputerUseService crashes in Array.remove(at:) when opening a SwiftUI detail view
- Created: 2026-09-28T03:32:29Z
- URL: https://github.com/openai/codex/issues/48857
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

### What version of the Codex App are you using?
26.924.22138 (installed ChatGPT/Codex desktop bundle CFBundleShortVersionString)

### What subscription do you have?
Not included in this public diagnostic.

### What platform is your computer?
macOS 15.8, Apple Silicon
Darwin 24.6.0 arm64 arm

### What issue are you seeing?
Computer Use's native helper repeatedly crashes with:

```
Sky Computer Use native pipe closed before response
```

macOS crash reports identify `SkyComputerUseService` with `EXC_BREAKPOINT`, `SIGTRAP`, termination `Trace/BPT trap: 5`. The faulting stack repeatedly contains Swift `_assertionFailure` and `Array.remove(at:)`.

Sanitized stack excerpt:
```
0: closure #1 in closure #1 in closure #1 in _assertionFailure(_:_:file:line:flags:)
1: closure #1 in closure #1 in _as

---

## Draft comment

<!--
HUMAN REVIEW REQUIRED. Write a personalized diagnostic below.

Rules:
- DO NOT fabricate diagnostic commands, log labels, or internal behaviors
  you cannot verify in the actual source repo or the OP's bug report.
- Lead with one specific detail from the OP's report (proves you read it).
- Name one verified check or workaround.
- Link to https://igorganapolsky.github.io/openclaw-mac-ai-workstation-setup/troubleshooting.html
  with UTM tag ?utm_source=codex-issue&utm_medium=funnel&utm_campaign=qr-2026.
- End with the $19 quick-read CTA: https://buy.stripe.com/aFaeVd3Ug3n05pLfSH3sI0u?utm_source=codex-issue&utm_medium=funnel&utm_campaign=qr-2026
  and a refund clause.
- Cap length at ~2000 chars.
-->

(write here)

---

## Post command (when reviewed and edited)

```
gh issue comment 48857 --repo openai/codex --body-file outbound/drafts/2026-09-28/openai-codex-48857.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
