# Draft for anthropics/claude-code#88932

- OP: @rahul-kau
- Title: In `--channels` sessions, the reply tool is intermittently never called despite the turn completing with a real, coherent response
- Created: 2026-08-23T04:10:03Z
- URL: https://github.com/anthropics/claude-code/issues/88932
- Suggested landing page: `claude-code-channels-not-working.html`

## Bug report excerpt (first 800 chars)

## Summary

In a `--channels plugin:telegram@claude-plugins-official` session, a turn can complete successfully (no error, real generated text, `stop_reason: end_turn`) while calling **zero tools at all** — no `reply`, nothing. The generated text is lost; it never reaches the user. This happens intermittently within the same session, alternating with turns that correctly call `reply`, with no observable difference in the input that would explain why one succeeds and the next doesn't.

This looks related to (but is more specific than) #84157 — that issue was about the channel's MCP server never connecting; this is about tool-calling reliability *after* a healthy connection, mid-conversation.

This is very likely the same underlying bug as #69988 (auto-closed for inactivity 2026-08-08, `not_

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
gh issue comment 88932 --repo anthropics/claude-code --body-file outbound/drafts/2026-08-23/anthropics-claude-code-88932.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
