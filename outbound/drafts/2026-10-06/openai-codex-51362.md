# Draft for openai/codex#51362

- OP: @andrisolva
- Title: macOS Computer Use regression: app approval prompt missing for Ableton and Premiere Pro
- Created: 2026-10-06T12:57:13Z
- URL: https://github.com/openai/codex/issues/51362
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

## Summary
Computer Use in ChatGPT Work mode previously worked normally on this Mac. Last week I could use it to edit podcasts in Ableton Live 10 Standard and Adobe Premiere Pro without any problems. Since approximately October 5, 2026, these applications are blocked and the approval prompt never appears.

## Actual behavior
When I ask Computer Use to interact with an already open application, it reports:

> Computer Use was not approved to use Adobe Premiere

Ableton has also failed with Computer Use access-denied / not-approved messages. I am never shown an app-level approval request to accept. Enabling Computer Use and allowing Any App does not resolve it.

After resetting permissions, Finder and Google Chrome worked again, but Ableton and Premiere Pro remain affected.

## Expected beha

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
gh issue comment 51362 --repo openai/codex --body-file outbound/drafts/2026-10-06/openai-codex-51362.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
