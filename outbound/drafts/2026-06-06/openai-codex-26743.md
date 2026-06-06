# Draft for openai/codex#26743

- OP: @be-student
- Title: Codex Desktop: Locked Computer Use stays on loginwindow; app GUI access returns cgWindowNotFound while locked
- Created: 2026-06-06T05:22:45Z
- URL: https://github.com/openai/codex/issues/26743
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

### Summary

Locked Computer Use appears to be enabled and the Computer Use helper is installed, but when the Mac is actually locked, Codex Computer Use can see only `loginwindow`. Attempts to access allowed desktop apps such as Chrome do not appear to trigger the temporary locked-use unlock path. Instead, app GUI access returns `cgWindowNotFound` or times out.

The target Chrome process and page were alive during the test. I could query and navigate Chrome through AppleScript while the macOS session was locked. That points away from a target-app/page failure and toward the locked-use GUI attach / temporary unlock path.

I am not sure whether this exact Codex surface is expected to qualify as a "connected device" locked-use turn. If it is not eligible, the current failure mode is still con

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
gh issue comment 26743 --repo openai/codex --body-file outbound/drafts/2026-06-06/openai-codex-26743.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
