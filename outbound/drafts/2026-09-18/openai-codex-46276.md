# Draft for openai/codex#46276

- OP: @jdy46tgjxx-dev
- Title: [macOS][Computer Use] App approval dialog never appears and Finder/Safari access is denied
- Created: 2026-09-17T18:33:51Z
- URL: https://github.com/openai/codex/issues/46276
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

### What version of the Codex App are you using (From “About Codex” dialog)?

26.911.61220

### What subscription do you have?

ChatGPT Plus

### What platform is your computer?

Darwin 25.5.0 arm64 arm

### What issue are you seeing?

Computer Use cannot control macOS applications because the app approval flow appears to fail.

I reproduced this with both Finder and Safari.

When I explicitly ask Computer Use to open Finder and request approval if necessary, Computer Use reports:

"Finder access was requested, but the tool returned that Finder operation is not approved."

However, no approval dialog is displayed, so there is no way for me to approve Finder.

Settings already verified:

ChatGPT > Settings > Computer Use:
- "Any app" is enabled.
- Use while Mac is locked is enabled.

macOS 

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
gh issue comment 46276 --repo openai/codex --body-file outbound/drafts/2026-09-18/openai-codex-46276.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
