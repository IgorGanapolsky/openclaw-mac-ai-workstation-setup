# Draft for openai/codex#48712

- OP: @fscheps
- Title: [macOS][Computer Use] PrusaSlicer listed as running but getApp cannot attach to its window
- Created: 2026-09-27T13:45:20Z
- URL: https://github.com/openai/codex/issues/48712
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

## Summary

On macOS, Computer Use lists PrusaSlicer as running but cannot attach to its window. Selecting the displayed app name, its inventory identifier, or any of its installed app paths fails. The user reports that PrusaSlicer is open and the relevant macOS permissions are enabled.

## Observed on 2026-09-27

`cua.getState()` returned:

```json
{"displayName":"PrusaSlicer","id":"com.prusa3d.slic3r.","isRunning":true}
```

The same inventory also contained a non-running PrusaSlicer entry with identifier `com.prusa3d.slic3r/`.

Calls and results:

- `cua.getApp("com.prusa3d.slic3r.")` → `Invalid app: com.prusa3d.slic3r.`
- `cua.getApp("PrusaSlicer")` → `Running application not found: com.prusa3d.slic3r/`
- `cua.getApp("/Applications/PrusaSlicer.app")` → `Running application not found: c

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
gh issue comment 48712 --repo openai/codex --body-file outbound/drafts/2026-09-28/openai-codex-48712.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
