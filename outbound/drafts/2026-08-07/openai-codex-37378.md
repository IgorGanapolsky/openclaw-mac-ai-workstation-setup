# Draft for openai/codex#37378

- OP: @Hubert1965
- Title: ChatGPT.app repeatedly requests access to other apps’ data although Computer Use is not enabled
- Created: 2026-08-07T04:49:27Z
- URL: https://github.com/openai/codex/issues/37378
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

### What version of the Codex App are you using (From “About Codex” dialog)?

26.730.61639

### What subscription do you have?

ChatGPT Plus

### What platform is your computer?

Darwin 25.5.0 arm64 arm

### What issue are you seeing?

The unified ChatGPT/Codex macOS app repeatedly displays this macOS privacy prompt:

> “ChatGPT.app” would like to access data from other apps.
> Keeping app data separate makes it easier to manage your privacy and security.

I have never installed or enabled general Computer Use (“Any App”).

Current permission state:

- Full Disk Access for ChatGPT.app: disabled
- Accessibility for Codex Computer Use.app: disabled
- Screen and System Audio Recording for ChatGPT/Codex Computer Use: not granted
- Automation access for ChatGPT: not present
- Locked Use: disabl

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
gh issue comment 37378 --repo openai/codex --body-file outbound/drafts/2026-08-07/openai-codex-37378.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
