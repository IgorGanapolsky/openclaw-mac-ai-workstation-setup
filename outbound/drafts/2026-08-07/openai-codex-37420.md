# Draft for openai/codex#37420

- OP: @echokz
- Title: `[Bug] Computer Use causes a replayd XPC reconnect loop and ~90% CPU while idle on macOS`
- Created: 2026-08-07T09:32:48Z
- URL: https://github.com/openai/codex/issues/37420
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

# Recommended issue title

`[Bug] Computer Use causes a replayd XPC reconnect loop and ~90% CPU while idle on macOS`

# Bug report body

## Summary

On macOS, the ChatGPT desktop app's Computer Use service entered a tight XPC connect/cancel loop with Apple's `replayd` process even though Computer Use was not actively being used.

The loop caused sustained high CPU usage and made the MacBook Air noticeably hot:

- `replayd`: approximately **91.2% CPU**
- `SkyComputerUseService`: approximately **19.8% CPU**

The issue recurred after the processes were stopped manually. Disabling Computer Use, removing its `turn-ended` notification hook, and removing the Computer Use runtime stopped the loop immediately. After mitigation, `replayd` remained at **0.0% CPU** across repeated samples and `SkyComp

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
gh issue comment 37420 --repo openai/codex --body-file outbound/drafts/2026-08-07/openai-codex-37420.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
