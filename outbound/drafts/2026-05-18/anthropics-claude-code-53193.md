# Draft for anthropics/claude-code#53193

- OP: @Choppaaahh
- Title: [BUG] CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1 disables TUI scrollback in v2.1.119 (terminal can't scroll up to view earlier turns)
- Created: 2026-04-25T08:33:18Z
- URL: https://github.com/anthropics/claude-code/issues/53193
- Suggested landing page: `claude-code-channels-not-working.html`

## Bug report excerpt (first 800 chars)

### Preflight Checklist

- [x] Searched existing issues (related: #52673, #52251, #52139, #38932 — all Agent-Teams+TUI in 2.1.119, but none specifically about scrollback)
- [x] Single bug report
- [x] Latest version (2.1.119)

### What's Wrong?

Setting `CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1` before launching `claude` in v2.1.119 silently disables terminal scrollback. The user can't scroll up to see earlier turns in the conversation. Mouse wheel and PageUp/PageDown produce no movement past the visible viewport.

The exact same terminal, the exact same launch command WITHOUT the env var, produces a fully-scrollable session.

### Repro

Same machine, same terminal (tested in Linux screen wrapper + VS Code integrated terminal — identical behavior in both):

**Scroll WORKS:**
\`\`\`bash
cd ~/

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
gh issue comment 53193 --repo anthropics/claude-code --body-file outbound/drafts/2026-05-18/anthropics-claude-code-53193.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
