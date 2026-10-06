# Draft for openai/codex#51166

- OP: @TrudosKudos
- Title: Let macOS notifications work during Computer Use without enabling them for all screen sharing
- Created: 2026-10-05T19:47:14Z
- URL: https://github.com/openai/codex/issues/51166
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

### What variant of Codex are you using?

Codex App on macOS — Computer Use

### What feature would you like to see?

Please investigate whether Codex Computer Use makes macOS treat local screen observation as display sharing for notification delivery. If it does, is there a way to preserve notifications from other apps while keeping macOS’s “Notifications Off when mirroring or sharing the display” protection for actual presentations?

The current workaround is to select “Allow Notifications” during sharing. That may expose notification previews during a real screen share. Setting Chrome previews to “Never” would hide them throughout the day, which is not the desired tradeoff.

If macOS cannot distinguish these cases, please consider releasing screen capture when Computer Use is idle or cl

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
gh issue comment 51166 --repo openai/codex --body-file outbound/drafts/2026-10-06/openai-codex-51166.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
