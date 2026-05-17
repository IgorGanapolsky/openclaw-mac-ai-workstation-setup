# Draft for openai/codex#20852

- OP: @its-DeFine
- Title: Feature request: parallel Computer Use sessions for multiple Codex agents
- Created: 2026-05-03T07:14:26Z
- URL: https://github.com/openai/codex/issues/20852
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

### Problem

Computer Use currently behaves like a single shared desktop-control surface. That makes it difficult to run multiple Codex agent instances that each need to use different apps or browser sessions at the same time.

The desired workflow is to have several agent instances operating in parallel, each with its own Computer Use context. For example:

- Agent A uses an approved browser session to retrieve a value from Google Cloud Console.
- Agent B works in YouTube Studio or another browser profile.
- Agent C drafts or posts through x.com after user approval.

Today, that kind of workflow is not practically supported. Even when multiple Codex sessions/subagents exist, Computer Use does not expose a clear per-agent desktop session, window lease, app lease, browser profile, virtual d

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
gh issue comment 20852 --repo openai/codex --body-file outbound/drafts/2026-05-17/openai-codex-20852.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
