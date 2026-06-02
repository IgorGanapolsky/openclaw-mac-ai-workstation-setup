# Draft for openai/codex#25813

- OP: @ahmadmustafaanis
- Title: macOS Desktop filters computer-use out of bundled marketplace even though bundled plugin is present
- Created: 2026-06-02T09:07:09Z
- URL: https://github.com/openai/codex/issues/25813
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

> Note: this issue was drafted and opened by Codex on behalf of the user, based on local diagnostics from the affected macOS machine. User restarted Codex Desktop and the issue persists.

## Summary

Codex Desktop on macOS shows Computer Use as disabled/unavailable. The local app bundle contains the `computer-use` bundled plugin and helper app, and the `computer_use` feature flag is enabled, but the runtime-generated `openai-bundled` marketplace filters `computer-use` out. As a result, `computer-use@openai-bundled` is not visible/installable from the active marketplace.

This looks like a bundled-plugin reconciliation/runtime marketplace filtering issue, not a missing binary, macOS version issue, or `config.toml` feature flag being disabled.

Related: #18258. This report includes newer evi

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
gh issue comment 25813 --repo openai/codex --body-file outbound/drafts/2026-06-02/openai-codex-25813.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
