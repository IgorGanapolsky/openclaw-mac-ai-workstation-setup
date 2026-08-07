# Draft for openai/codex#37326

- OP: @mhindelang3-hub
- Title: Computer Use native pipe fails and plugin disables itself after restart on macOS
- Created: 2026-08-06T22:54:29Z
- URL: https://github.com/openai/codex/issues/37326
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

## Summary

Computer Use intermittently works once, then subsequent attempts time out or fail with:

`Sky Computer Use native pipe startup failed`

The Computer Use plugin also became disabled again after restarting/rebooting, even though it had previously been enabled.

## Environment

- Codex desktop app: 26.730.61639 (build 6234)
- Codex CLI bundled with app: 0.147.0-alpha.1.2
- macOS: 26.6 (build 25G72)
- Computer Use plugin: 1.0.1000621
- Target application tested: Microsoft Outlook for Mac

## Steps to reproduce

1. Install and enable the bundled Computer Use plugin.
2. Confirm both the Computer Use MCP server and Computer Use skill toggles are on.
3. Grant Screen Recording and Accessibility permissions to Codex Computer Use in macOS Privacy & Security.
4. Open Microsoft Outlook.
5. 

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
gh issue comment 37326 --repo openai/codex --body-file outbound/drafts/2026-08-07/openai-codex-37326.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
