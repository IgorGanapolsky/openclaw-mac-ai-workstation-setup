# Draft for openai/codex#41356

- OP: @Benjamai
- Title: Computer Use helper crashes on every click on macOS 27
- Created: 2026-08-28T15:53:24Z
- URL: https://github.com/openai/codex/issues/41356
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

### What version of the Codex App are you using (From “About Codex” dialog)?

26.826.12353

### What subscription do you have?

Pro

### What platform is your computer?

Mac OS 27

### What issue are you seeing?

macOS 27.0, build 26A5421a
Computer Use helper 26.826.1000901
**Clicks fail everywhere**
Keyboard commands still work
Crash signature: Window Bounds Observer → _swift_task_checkIsolatedSwift → _dispatch_assert_queue_fail

### What steps can reproduce the bug?

Anytime I try to use computer use and they need to click something

### What is the expected behavior?

for clicking to work.

### Additional information

_No response_

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
gh issue comment 41356 --repo openai/codex --body-file outbound/drafts/2026-08-28/openai-codex-41356.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
