# Draft for anthropics/claude-code#50034

- OP: @becerratops
- Title: [FEATURE] Discord plugin: option to show full command in permission prompts by default
- Created: 2026-04-17T16:45:53Z
- URL: https://github.com/anthropics/claude-code/issues/50034
- Suggested landing page: `claude-code-channels-not-working.html`

## Bug report excerpt (first 800 chars)

## Problem Statement

When managing Claude Code remotely via the Discord channels plugin, permission prompts (approve/deny for bash commands, file edits, etc.) arrive in DMs with the command **truncated**. You have to tap "cmore" on every single prompt to see what command is actually being requested before you can make an informed approve/deny decision.

This adds an extra interaction to every permission prompt, which is painful when commands are flying in rapidly during active sessions. On mobile especially, it turns what should be a quick glance-and-tap into a multi-step process: (1) see truncated prompt, (2) tap cmore, (3) read full command, (4) approve or deny.

For users running headless Claude Code sessions managed entirely through Discord, the permission prompt is the **only** visib

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
gh issue comment 50034 --repo anthropics/claude-code --body-file outbound/drafts/2026-05-20/anthropics-claude-code-50034.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
