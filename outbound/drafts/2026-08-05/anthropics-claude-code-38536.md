# Draft for anthropics/claude-code#38536

- OP: @saikodi
- Title: Feature Request: Shared Team Memory for Claude Code
- Created: 2026-03-25T04:28:09Z
- URL: https://github.com/anthropics/claude-code/issues/38536
- Suggested landing page: `claude-code-channels-not-working.html`

## Bug report excerpt (first 800 chars)

# Feature Proposal: Shared Team Memory for Claude Code

## The Problem

Claude Code's memory system is individual-only. In real engineering teams, knowledge flows constantly between people — through handoffs, consultations, reviews, and investigations. Today, none of that context transfers at the agent level. Humans must manually reconstruct or relay it, which is slow, lossy, and doesn't scale.

This is the single biggest efficiency bottleneck for teams adopting Claude Code seriously.

## Who This Affects

Any engineering organization where:
- Multiple engineers work on the same codebase with Claude Code
- Work gets handed off between people (sprints, blockers, rotations)
- Domain expertise is distributed across team members
- Engineering managers investigate and delegate work to ICs

## R

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
gh issue comment 38536 --repo anthropics/claude-code --body-file outbound/drafts/2026-08-05/anthropics-claude-code-38536.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
