# Draft for anthropics/claude-code#60721

- OP: @nate-lusher
- Title: [BUG] notifications/claude/channel silently dropped on stdin — slack-channel + telegram plugins, plain interactive + --agent modes, v2.1.144
- Created: 2026-05-20T00:52:25Z
- URL: https://github.com/anthropics/claude-code/issues/60721
- Suggested landing page: `claude-code-channels-not-working.html`

## Bug report excerpt (first 800 chars)

## Summary

Same root-cause bug as #44181, #42138, #36827, #37663, #36411, #37933 — filing a fresh report because #42138 is the only one still open (marked stale) and the others were closed as duplicates without resolution. Adding new diagnostic evidence: confirmed reproducible on Claude Code 2.1.144 (latest stable on Homebrew) in BOTH plain interactive mode AND `--agent <name>` mode, with a non-Anthropic local MCP channel plugin (Slack equivalent of the official Telegram plugin).

The plugin emits `notifications/claude/channel` JSON-RPC frames on its stdout. Claude Code's MCP transport receives the bytes (proven via plugin-side `.then()` resolving the promise, confirming the SDK has written successfully). No `<channel source="..." ...>` block ever appears in the conversation. Outbound MCP

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
gh issue comment 60721 --repo anthropics/claude-code --body-file outbound/drafts/2026-05-20/anthropics-claude-code-60721.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
