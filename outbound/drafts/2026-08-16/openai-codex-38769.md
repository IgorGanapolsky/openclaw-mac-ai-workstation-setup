# Draft for openai/codex#38769

- OP: @bangyuwen
- Title: [macOS] ChatGPT 26.810.52044 respawns SkyComputerUseService and crashes despite Computer Use disabled
- Created: 2026-08-15T14:40:11Z
- URL: https://github.com/openai/codex/issues/38769
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

## Summary

The ChatGPT macOS desktop app repeatedly respawns `SkyComputerUseService` and then crashes, even when Computer Use and Remote Connections are disabled in the user configuration.

This is a new reproduction on ChatGPT desktop `26.810.52044` (build `6662`) and appears related to the existing Computer Use / Node-V8 crash and helper-process reports.

## Environment

- ChatGPT desktop: `26.810.52044` (build `6662`)
- macOS: `26.5.2`
- Bundle ID: `com.openai.codex`
- Computer Use runtime: `26.812.1000717`
- Apple Silicon Mac

## Reproduction

1. Fully quit ChatGPT and Computer Use helper processes.
2. Set the effective app-server configuration to:
   - `computer_use = false`
   - `remote_connections = false`
   - no Computer Use `notify` hook
3. Disable persisted remote-control state

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
gh issue comment 38769 --repo openai/codex --body-file outbound/drafts/2026-08-16/openai-codex-38769.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
