# Draft for openai/codex#28404

- OP: @banteg
- Title: Codex Desktop rewrites user notify hook through SkyComputerUseClient --previous-notify
- Created: 2026-06-15T22:51:41Z
- URL: https://github.com/openai/codex/issues/28404
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

## Environment

- macOS: 26.5, build 25F71
- Codex Desktop: 26.609.71144, build 3952
- Codex CLI: 0.137.0
- Computer Use helper: 1.0, build 809
- Platform: macOS Apple Silicon

## Summary

Codex Desktop rewrites a user-owned `notify` command into a Computer Use wrapper on app restart. The rewritten command launches `SkyComputerUseClient turn-ended` first and stores the original notifier under `--previous-notify`.

This causes macOS Gatekeeper/codesign failures for `Codex Computer Use.app` even though the user only configured a normal notification script.

This appears to be a Desktop startup/plugin migration behavior, not the standalone CLI.

## Original user config

Before restarting Codex Desktop, `~/.codex/config.toml` contained:

```toml
notify = ["uv","run","--quiet","/Users/banteg/.c

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
gh issue comment 28404 --repo openai/codex --body-file outbound/drafts/2026-06-16/openai-codex-28404.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
