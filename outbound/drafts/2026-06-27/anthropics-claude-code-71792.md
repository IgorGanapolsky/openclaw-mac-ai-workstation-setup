# Draft for anthropics/claude-code#71792

- OP: @ray-amjad
- Title: --dangerously-load-development-channels does not register bare server: channels (inbound notifications silently dropped)
- Created: 2026-06-27T11:57:01Z
- URL: https://github.com/anthropics/claude-code/issues/71792
- Suggested landing page: `claude-code-channels-not-working.html`

## Bug report excerpt (first 800 chars)

## Summary

A `.mcp.json` MCP server that declares `capabilities.experimental["claude/channel"]` connects fine and its tools work (outbound `reply` succeeds), but **inbound channel notifications are silently dropped** when the session is launched with `--dangerously-load-development-channels server:<name>`.

Every session, `--debug` logs:

```
MCP server "myserver": Channel notifications skipped: server myserver not in --channels list for this session
```

This is the `kind:"session"` gate — the server has already passed the capability check, the `tengu_harbor` feature-flag gate, auth (claude.ai OAuth, confirmed logged in), and the org-policy gate. It fails purely because the dev-flag server was never registered into the session channel list.

Decompiling the binary (v2.1.195) shows the ca

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
gh issue comment 71792 --repo anthropics/claude-code --body-file outbound/drafts/2026-06-27/anthropics-claude-code-71792.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
