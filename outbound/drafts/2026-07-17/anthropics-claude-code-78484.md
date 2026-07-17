# Draft for anthropics/claude-code#78484

- OP: @tildework
- Title: Remote Control (Windows desktop): disconnect crash permanently sticks the toggle; all sessions now fail with "Remote credentials fetch failed"
- Created: 2026-07-17T11:44:28Z
- URL: https://github.com/anthropics/claude-code/issues/78484
- Suggested landing page: `claude-code-channels-not-working.html`

## Bug report excerpt (first 800 chars)

## Summary

I drive my Windows desktop Claude Code sessions from an iPhone via Remote Control. Two defects make this unusable:

1. **A disconnect crash leaves the toggle permanently stuck**, so a dropped session can never be re-armed — only a full app restart clears it.
2. **Since 2026-07-17 17:45 JST, Remote Control fails account-wide** with `Remote credentials fetch failed`, for every session including brand-new forks. This survived an app restart and an app update.

Everything below is copied from logs on my machine, not inference.

## Environment

| | |
|---|---|
| App | Claude desktop, Windows. Reproduced on `1.21459.3.0`, still failing after updating to `v1.22209.0` |
| Claude Code | bundled `2.1.209`; CLI on PATH `2.1.212` (auto-updating) |
| Entrypoint | `CLAUDE_CODE_ENTRYPOINT=cla

---

## Draft comment

<!--
HUMAN REVIEW REQUIRED. Write a personalized diagnostic below.

Rules:
- DO NOT fabricate diagnostic commands, log labels, or internal behaviors
  you cannot verify in the actual source repo or the OP's bug report.
- Lead with one specific detail from the OP's report (proves you read it).
- Name one verified check or workaround.
- Link to https://igorganapolsky.github.io/openclaw-mac-ai-workstation-setup/claude-code-channels-not-working.html
  with UTM tag ?utm_source=channels-issue&utm_medium=funnel&utm_campaign=qr-2026.
- End with the $19 quick-read CTA: https://buy.stripe.com/aFaeVd3Ug3n05pLfSH3sI0u?utm_source=channels-issue&utm_medium=funnel&utm_campaign=qr-2026
  and a refund clause.
- Cap length at ~2000 chars.
-->

(write here)

---

## Post command (when reviewed and edited)

```
gh issue comment 78484 --repo anthropics/claude-code --body-file outbound/drafts/2026-07-17/anthropics-claude-code-78484.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
