# Draft for openai/codex#24000

- OP: @adrewtr
- Title: Codex Desktop: cannot enable Computer Use or Mobile Remote on macOS
- Created: 2026-05-22T04:06:07Z
- URL: https://github.com/openai/codex/issues/24000
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

### What version of the Codex App are you using (From “About Codex” dialog)?

26.519.31651 (3017)

### What subscription do you have?

Not specified yet.

### What platform is your computer?

Darwin 25.3.0 arm64 arm

### What issue are you seeing?

I cannot enable either of these Codex app features:

- Computer Use
- Codex Mobile Remote / remote control from the mobile app

This appears to affect the same desktop install/account rather than only one feature. The bundled Computer Use plugin exists locally inside the app bundle:

```text
/Applications/Codex.app/Contents/Resources/plugins/openai-bundled/plugins/computer-use
```

However, the app does not make Computer Use available to enable. Mobile Remote also does not become enabled/enrolled for this machine.

Recent desktop log snippets fr

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
gh issue comment 24000 --repo openai/codex --body-file outbound/drafts/2026-05-23/openai-codex-24000.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
