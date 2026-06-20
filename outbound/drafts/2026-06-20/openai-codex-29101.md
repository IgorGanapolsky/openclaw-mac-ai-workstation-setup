# Draft for openai/codex#29101

- OP: @jacob00755
- Title: Appshots fails because managed Computer Use service/plugin is missing on macOS
- Created: 2026-06-19T14:38:50Z
- URL: https://github.com/openai/codex/issues/29101
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

### Codex version

26.611.62324 (desktop app)

### Environment

- macOS 26.5.1
- Intel / x86_64
- ChatGPT Plus

### Problem

Appshots are visible and the double-Command hotkey is registered, but every capture fails before producing a screenshot or accessibility text.

The desktop logs report:

```text
Failed to spawn managed Computer Use service
failureReason=start_request_failed
hadAxText=false hadScreenshot=false
```

### Steps to reproduce

1. Open the Codex desktop app on macOS.
2. Grant Screen & System Audio Recording and Accessibility permissions.
3. Bring another app window to the front.
4. Press both Command keys to create an Appshot.

### Expected behavior

The frontmost window is attached to the current or a new Codex thread.

### Actual behavior

The capture immediately fails wi

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
gh issue comment 29101 --repo openai/codex --body-file outbound/drafts/2026-06-20/openai-codex-29101.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
