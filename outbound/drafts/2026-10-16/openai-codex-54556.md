# Draft for openai/codex#54556

- OP: @ZhangYiqun018
- Title: [macOS desktop] Computer Use cannot request fresh authorization in the same conversation after Stop Sharing
- Created: 2026-10-16T08:37:14Z
- URL: https://github.com/openai/codex/issues/54556
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

### Environment

- Surface: ChatGPT desktop / Work–Codex Computer Use on macOS.
- Target application: Safari.
- Subscription: ChatGPT Pro.
- Desktop version reported in the conversation environment: 26.1013.31256 (not independently verified in the About dialog).
- Exact macOS and Safari versions: not collected.

### What issue are you seeing?

After manually selecting **Stop Sharing** following a completed Computer Use task, I cannot reliably get a fresh authorization request in the same affected conversation when I later ask the assistant to control Safari again.

An associated message is:

> That approval request is no longer active. Please retry the action if you still want ChatGPT to continue with it.

Stopping access after a task is complete is an ordinary privacy-preserving workflow.

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
gh issue comment 54556 --repo openai/codex --body-file outbound/drafts/2026-10-16/openai-codex-54556.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
