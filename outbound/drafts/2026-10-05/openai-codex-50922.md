# Draft for openai/codex#50922

- OP: @Pygmalion03
- Title: [macOS][Computer Use] Existing conversation loses CUA tools after executor disconnect/reconnect
- Created: 2026-10-04T17:49:35Z
- URL: https://github.com/openai/codex/issues/50922
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

### What version of the Codex App are you using (From “About Codex” dialog)?

Not recorded

### What subscription do you have?

Not recorded

### What platform is your computer?

macOS; exact version and architecture not recorded. Connected desktop executor.

### What issue are you seeing?

In the Codex desktop app on macOS, an existing conversation lost its Computer Use (CUA) tools after the connected desktop executor disconnected and reconnected. Other tools and the conversation resumed, but screen control remained unavailable.

Before the interruption, CUA screenshots and clicks worked in a new local task. After reconnecting and resuming that same conversation, a tool availability check returned:

`unknown MCP server 'cua_repl'`

The desktop plugin runtime files and application permissi

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
gh issue comment 50922 --repo openai/codex --body-file outbound/drafts/2026-10-05/openai-codex-50922.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
