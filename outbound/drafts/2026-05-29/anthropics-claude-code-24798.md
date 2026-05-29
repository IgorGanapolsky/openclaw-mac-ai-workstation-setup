# Draft for anthropics/claude-code#24798

- OP: @hmcg001
- Title: Inter-session communication for multi-Claude workflows
- Created: 2026-02-10T20:28:15Z
- URL: https://github.com/anthropics/claude-code/issues/24798
- Suggested landing page: `claude-code-channels-not-working.html`

## Bug report excerpt (first 800 chars)

## Feature Request

**Direct project workflow between siloed Claude sessions to sequence higher level processes with dependencies.**

### Problem

When working on a large project, users run multiple Claude Code sessions in parallel — each focused on a different module or task. These sessions are completely siloed with no way to communicate, share state, or coordinate.

Today I'm running 5 concurrent Claude sessions:
- One doing a **server migration** (Lightsail → EC2)
- One working on **database/taxonomy** changes
- One building a **search module**
- One on **card design/KPI dashboards**
- One as a **terminal monitor** (health checks, backups, handoffs)

The migration session is changing the server IP, certificates, and service configs. Every other session still has the old IP hardcoded in

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
gh issue comment 24798 --repo anthropics/claude-code --body-file outbound/drafts/2026-05-29/anthropics-claude-code-24798.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
