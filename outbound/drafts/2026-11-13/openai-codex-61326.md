# Draft for openai/codex#61326

- OP: @yepjules
- Title: Physical keyboard input doubles system-wide while computer use is active on macOS
- Created: 2026-11-13T16:26:41Z
- URL: https://github.com/openai/codex/issues/61326
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

### What version of the Codex App are you using (From “About Codex” dialog)?

26.1103.60933 (build 25894; read from the installed Codex.app bundle)

### What subscription do you have?

Pro 500

### What platform is your computer?

Darwin 27.3.0 arm64 arm (macOS; uname -mprs)

### What issue are you seeing?

Whenever Codex has control of a desktop app on my Mac, my physical keyboard input registers twice. For example, typing asd produces aassdd. This happens everywhere I type while app control is active, not just in the app Codex is controlling.

Codex's own automated typing works normally. Only my physical keyboard input is duplicated. It also happens when Codex is merely observing the app and is not clicking or typing.

Codex directly observed the doubled text during my demonstration in t

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
gh issue comment 61326 --repo openai/codex --body-file outbound/drafts/2026-11-13/openai-codex-61326.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
