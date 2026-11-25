# Draft for openai/codex#63867

- OP: @dasom4689
- Title: bug: Computer Use helper cannot start on macOS
- Created: 2026-11-25T09:16:12Z
- URL: https://github.com/openai/codex/issues/63867
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

### Summary
Computer Use cannot control any native macOS app. Attempting to access CapCut or any other local app immediately fails.

### Error
Sky Computer Use service startup request failed

### Environment
- MacBook Pro, Apple M1 Pro, arm64
- ChatGPT/Codex desktop version 26.1120.50957, build 30866

### Steps already tried
1. Updated the ChatGPT/Codex desktop app.
2. Restarted macOS and fully quit/reopened the app.
3. Enabled Screen Recording and Accessibility permissions.
4. Confirmed Computer Use > Control > Any App is enabled.
5. Toggled Any App off and back on to reprovision the helper.
6. Removed the existing Computer Use helper so the app could reprovision it. A new helper was created, but native-app access still fails with the same error.

### Additional diagnostic
The managed hel

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
gh issue comment 63867 --repo openai/codex --body-file outbound/drafts/2026-11-25/openai-codex-63867.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
