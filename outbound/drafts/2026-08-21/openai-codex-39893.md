# Draft for openai/codex#39893

- OP: @omarpinarecords
- Title: [macOS][ChatGPT Desktop] Computer Use startup reconciliation recreates a disabled stale MCP override
- Created: 2026-08-21T08:45:16Z
- URL: https://github.com/openai/codex/issues/39893
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

# [macOS][ChatGPT Desktop] Computer Use startup reconciliation recreates a disabled stale MCP override

## Classification

- Type: Bug
- Scope: Public OpenAI/Codex product
- Target repository: `openai/codex`
- Privacy class: Public-safe
- Owner: `omarpinarecords`
- Attempted feedback/correlation ID: `01a022f3-5719-7031-89cc-51c641d82a96`
- Diagnostic upload status: `NOT_PROVED` — the app displayed “We couldn't submit your feedback.”

## Environment

- ChatGPT desktop: `26.818.31338` (build `6892`)
- macOS: `26.6.2` (`25G83`)
- Architecture: Apple Silicon (`arm64`)
- Computer Use plugin: `1.0.1000816`

## Summary

The OpenAI-bundled Computer Use plugin remains installed and enabled, but ChatGPT desktop startup/plugin reconciliation has repeatedly recreated a stale explicit `computer-use` MC

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
gh issue comment 39893 --repo openai/codex --body-file outbound/drafts/2026-08-21/openai-codex-39893.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
