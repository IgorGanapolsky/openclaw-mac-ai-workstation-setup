# Draft for openai/codex#50637

- OP: @majiayu000
- Title: macOS: Computer Use MCP helpers remain resident across long-lived Codex conversations (~903 MiB RSS)
- Created: 2026-10-03T13:46:13Z
- URL: https://github.com/openai/codex/issues/50637
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

## Summary

Computer Use MCP helper processes remain resident for hours or days across multiple long-lived Codex conversations on macOS, with a noticeable combined memory and CPU cost. I frequently finish a task that used Computer Use and find the helpers still running afterward.

This report includes observations from the current desktop app and `codex-cli 0.160.0` daemon. It is a suspected lifecycle / idle-resource-retention issue, not a confirmed unbounded leak: several conversations are open concurrently, and I have not mapped each helper to an active or completed conversation.

## Environment

- macOS 26.5.1, arm64.
- ChatGPT desktop app: 26.928.20755, build 12246 (bundle identifier `com.openai.codex`).
- Background app-server daemon: `codex-cli 0.160.0`.
- Desktop-bundled CLI: `codex

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
gh issue comment 50637 --repo openai/codex --body-file outbound/drafts/2026-10-03/openai-codex-50637.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
