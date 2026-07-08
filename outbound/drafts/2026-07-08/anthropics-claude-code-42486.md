# Draft for anthropics/claude-code#42486

- OP: @zac15987
- Title: --dangerously-load-development-channels should support skipping the confirmation dialog
- Created: 2026-04-02T09:22:50Z
- URL: https://github.com/anthropics/claude-code/issues/42486
- Suggested landing page: `claude-code-channels-not-working.html`

## Bug report excerpt (first 800 chars)

## Problem

Every time I launch `claude --dangerously-load-development-channels server:my-channel`, the startup dialog forces me to manually select "I am using this for local development" before Claude Code proceeds. There's no way to persist this choice or skip it via a flag.

For workflows that frequently restart Claude Code with the same local channel server (e.g. a custom dispatch tool that launches multiple agents), this adds unnecessary friction — especially since the user has already opted in by typing `--dangerously-load-development-channels` in the first place.

## Current behavior

1. Run `claude --dangerously-load-development-channels server:my-channel`
2. Dialog appears: "WARNING: Loading development channels"
3. Must manually select option 1 and press Enter
4. Claude Code star

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
gh issue comment 42486 --repo anthropics/claude-code --body-file outbound/drafts/2026-07-08/anthropics-claude-code-42486.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
