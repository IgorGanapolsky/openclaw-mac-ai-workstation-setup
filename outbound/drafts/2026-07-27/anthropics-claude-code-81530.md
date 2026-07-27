# Draft for anthropics/claude-code#81530

- OP: @dev-ignis
- Title: Intermittent tool-call serialization failure: tool calls rendered as literal prose (76 instances on v2.1.199; not yet reproduced on v2.1.217)
- Created: 2026-07-27T03:31:04Z
- URL: https://github.com/anthropics/claude-code/issues/81530
- Suggested landing page: `claude-code-channels-not-working.html`

## Bug report excerpt (first 800 chars)

## Environment

- Deployment shape: a single long-running Claude Code CLI session per container
  lifetime, invoked as `claude --dangerously-skip-permissions --model claude-opus-4-8
  --channels <2 chat-platform plugins> --append-system-prompt-file <file>`, restarted
  periodically (auth/error recovery, scheduled context-hygiene recycle, or container
  rebuild) — so "one session" below means one CLI process lifetime, one
  `~/.claude/projects/<cwd-slug>/<sessionId>.jsonl` transcript file.
- Model: `claude-opus-4-8` (1M-context beta), set via `--model`, unrelated to the CLI
  version under discussion — included here only in case the bugs below are
  model/beta-header-interaction-specific rather than pure-CLI bugs.
- Two chat-platform integration MCP plugins are loaded (a Discord-shaped one 

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
gh issue comment 81530 --repo anthropics/claude-code --body-file outbound/drafts/2026-07-27/anthropics-claude-code-81530.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
