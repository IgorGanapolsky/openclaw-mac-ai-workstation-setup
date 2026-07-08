# Draft for openai/codex#25269

- OP: @cuiqingwei
- Title: macOS Desktop Appshot fails: Unable to attach appshot, captureNotFound after start succeeds
- Created: 2026-05-30T12:16:17Z
- URL: https://github.com/openai/codex/issues/25269
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

This is a Codex Desktop macOS issue, not a Codex CLI issue.

## Environment

- macOS: 26.5, build 25F71
- Codex Desktop: 26.527.31326, build 3390
- Computer Use helper: `com.openai.sky.CUAService`, version 1.0, build 799

## Symptom

When using Appshot from Codex Desktop, the screenshot appears to be taken, but Codex shows:

```text
Unable to attach appshot
```

No appshot attachment is added to the conversation.

## Reproduction

1. Open Codex Desktop.
2. Use Appshot / Attach app screenshot.
3. Try with Finder or Zed as the target app.
4. Codex shows `Unable to attach appshot`.

The failure is not limited to one target app. It has reproduced with:

- Finder, bundle identifier `com.apple.finder`
- Zed, bundle identifier `dev.zed.Zed`

## Key Log Pattern

Latest observed log pattern:

```te

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
gh issue comment 25269 --repo openai/codex --body-file outbound/drafts/2026-05-30/openai-codex-25269.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
