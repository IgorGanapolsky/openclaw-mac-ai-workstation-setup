# Draft for openai/codex#29157

- OP: @llamallamaredpajama
- Title: macOS Computer Use leaks SkyComputerUseClient turn-ended helpers
- Created: 2026-06-20T00:57:22Z
- URL: https://github.com/openai/codex/issues/29157
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

# Codex Computer Use leaks `SkyComputerUseClient turn-ended` helper processes on macOS

## Summary

Codex Desktop / Computer Use on macOS leaves `SkyComputerUseClient` helper processes running after turns complete. The leaked helpers include orphaned processes whose parent is PID 1 (`launchd`) and nested chains of:

```text
SkyComputerUseClient turn-ended --previous-notify <json>
  /bin/bash .../codex-notify.sh turn-ended -- SkyComputerUseClient turn-ended <json>
    SkyComputerUseClient turn-ended <json>
```

This accumulates over time and survives normal Codex turns/sessions. The command payload contains turn metadata, so examples here are redacted.

## Environment

- Host: macOS 27.0, build 26A5353q, arm64
- Codex.app currently installed: 26.616.32156, build 4157
- Originally observed v

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
gh issue comment 29157 --repo openai/codex --body-file outbound/drafts/2026-06-20/openai-codex-29157.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
