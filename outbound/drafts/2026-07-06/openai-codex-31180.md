# Draft for openai/codex#31180

- OP: @wenwenyu
- Title: Locked Computer Use cannot be enabled on macOS 12.5.1 Intel: sky.node fails to dlopen due to missing Foundation symbol
- Created: 2026-07-05T16:57:19Z
- URL: https://github.com/openai/codex/issues/31180
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

### What version of the Codex App are you using (From "About Codex" dialog)?

Codex app `26.623.101652`

### What subscription do you have?

Personal account

### What platform is your computer?

```text
Model: MacBook Pro (MacBookPro16,1)
CPU: 6-Core Intel Core i7
Architecture: x86_64
macOS: 12.5.1 (21G83)
Bundle ID: com.openai.codex
Install path: /Applications/Codex.app
```

### What issue are you seeing?

In Codex Desktop settings, under Computer Control / Computer Use, Chrome control is connected, but enabling the locked computer use / lock-screen operation setting fails. The UI shows a toast equivalent to:

```text
Unable to update "Locked operation" setting
```

This does not look like a Chrome extension problem. Chrome control is already connected and working. It also does not look 

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
gh issue comment 31180 --repo openai/codex --body-file outbound/drafts/2026-07-06/openai-codex-31180.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
