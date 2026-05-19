# Draft for openai/codex#21579

- OP: @ShalevZorany
- Title: Computer Use does not appear in Settings despite plugin and helper existing
- Created: 2026-05-07T20:01:44Z
- URL: https://github.com/openai/codex/issues/21579
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

## Short description
Computer Use does not appear in Codex Settings, and the assistant cannot use Computer Use actions, even though the bundled plugin and helper app appear to be installed and enabled.

## What we already tried
- Tried to use Computer Use directly (e.g., request to open Calculator without terminal commands).
- Verified local Codex configuration and plugin enablement.
- Verified local plugin/helper installation paths.
- Checked whether the related service process is running.

## Diagnostic results
Environment:
- macOS: 26.5 (Build 25F71)
- CPU: arm64, Apple A18 Pro
- Codex CLI: codex-cli 0.129.0-alpha.15

Checks:
- `features.apps = true` is present in `~/.codex/config.toml`.
- `[plugins."computer-use@openai-bundled"]` exists with `enabled = true` in `~/.codex/config.toml`.


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
- End with the $19 quick-read CTA: https://igorganapolsky.github.io/openclaw-mac-ai-workstation-setup/speed-to-lead.html
  and a refund clause.
- Cap length at ~2000 chars.
-->

(write here)

---

## Post command (when reviewed and edited)

```
gh issue comment 21579 --repo openai/codex --body-file outbound/drafts/2026-05-15/openai-codex-21579.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
