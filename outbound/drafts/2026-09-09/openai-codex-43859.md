# Draft for openai/codex#43859

- OP: @rejacobson
- Title: macOS Computer Use: allow PID/window selection for multiple instances of the same app
- Created: 2026-09-08T16:51:51Z
- URL: https://github.com/openai/codex/issues/43859
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

## Summary

Please expose a supported way for Computer Use to select a specific running app instance by PID and/or window ID, including when multiple processes share the same executable path and bundle identifier.

I run two Godot editors on macOS, each editing a different game project, and use separate Codex CLI sessions for those projects. The current exposed `cua` API cannot distinguish the editor instances reliably.

## Environment

- macOS on Apple Silicon
- Codex CLI sessions using the bundled unified Computer Use integration
- Installed integration observed: `openai-bundled/unified-computer-use/26.901.41600`
- Two Godot editor processes using the same `Godot.app` executable
- Shared bundle identifier: `org.godotengine.godot`
- Observed September 8, 2026

## Reproduction

1. Launch t

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
gh issue comment 43859 --repo openai/codex --body-file outbound/drafts/2026-09-09/openai-codex-43859.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
