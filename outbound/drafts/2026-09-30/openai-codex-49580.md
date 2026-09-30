# Draft for openai/codex#49580

- OP: @angelinabriskindova-afk
- Title: Computer Use fails on macOS 14.3.1: unbound variable TIOCSTI
- Created: 2026-09-30T10:51:44Z
- URL: https://github.com/openai/codex/issues/49580
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

### What version of the Codex App are you using (From “About Codex” dialog)?

26.928.21956 (build 12404)

### What subscription do you have?

pro

### What platform is your computer?

macOS Sonoma 14.3.1 (23D60) uname -mprs: Darwin 23.3.0 arm64 arm

### What issue are you seeing?

Computer Use crashes during startup, before it can connect to Safari or Finder.

Full error:
node_repl kernel exited unexpectedly
kernel_status: exited(code=65)
kernel_stderr_tail:
sandbox-exec: unbound variable: TIOCSTI at <input string>, line 151, column 33
Backtrace:
<input string>:151:33:
    TIOCSTI

Some attempts first return:
trusted Node process exited unexpectedly; kernel reset, rerun your request

The app updater reports up_to_date.

### What steps can reproduce the bug?

1. Open the desktop app on macO

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
gh issue comment 49580 --repo openai/codex --body-file outbound/drafts/2026-09-30/openai-codex-49580.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
