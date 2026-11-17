# Draft for openai/codex#62077

- OP: @myshkin451
- Title: macOS: Computer Use repeatedly disappears across chats; relaunch temporarily restores it (26.1106 / 26.1111)
- Created: 2026-11-17T16:31:03Z
- URL: https://github.com/openai/codex/issues/62077
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

## Summary and impact

I have repeatedly lost Computer Use in different local desktop chats. The assistant reports that its computer/browser-control tool is unavailable, while other tools continue working. Fully quitting and reopening the desktop app restores the missing tool in the same chat, and actual browser/native-app operations then succeed. The problem subsequently recurs.

A review of my retained chat history and desktop logs identifies at least three separate incidents across two desktop releases. This repeatedly blocks ongoing tasks and requires restarting the whole app. The chat-level explanation is usually that the tool is missing; the underlying plugin-reconciliation failure is not made actionable there.

## Environment

- Current desktop app: 26.1111.21308, build 27194, macOS

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
gh issue comment 62077 --repo openai/codex --body-file outbound/drafts/2026-11-17/openai-codex-62077.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
