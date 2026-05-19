# Draft for openai/codex#19077

- OP: @todayslibera-dev
- Title: Computer Use MCP denies Chrome approval after TCC reset and app restart
- Created: 2026-04-23T04:09:34Z
- URL: https://github.com/openai/codex/issues/19077
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

# Bug Report: Computer Use MCP denies Chrome approval after TCC reset and app restart

## Summary

Computer Use in Codex App consistently fails before interacting with Google Chrome:

    Computer Use approval denied via MCP elicitation for app 'com.google.Chrome'.

This started suddenly around 2026-04-22/2026-04-23. The same Computer Use flow reportedly worked a few days earlier. Restarting Codex completely multiple times and resetting macOS TCC permissions did not resolve it.

## Environment

- macOS: 15.6.1 (Build 24G90)
- Codex App bundle id: `com.openai.codex`
- Codex App version: `26.417.41555`
- Codex App build: `1858`
- Computer Use helper bundle id: `com.openai.sky.CUAService`
- Computer Use helper version: `1.0`
- Computer Use helper build: `755`
- Codex CLI: `codex-cli 0.122.0`


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
- End with the $19 quick-read CTA: https://igorganapolsky.github.io/openclaw-mac-ai-workstation-setup/speed-to-lead.html
  and a refund clause.
- Cap length at ~2000 chars.
-->

(write here)

---

## Post command (when reviewed and edited)

```
gh issue comment 19077 --repo openai/codex --body-file outbound/drafts/2026-05-19/openai-codex-19077.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
