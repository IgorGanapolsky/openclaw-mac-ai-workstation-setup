# Draft for openai/codex#48340

- OP: @Carleo10032
- Title: [macOS][Computer Use] Purple window capture indicator briefly disappears and reappears during native app observation
- Created: 2026-09-26T03:34:48Z
- URL: https://github.com/openai/codex/issues/48340
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

### What version of the Codex App are you using (From “About Codex” dialog)?

26.924.20706 (build 11431), read from the installed ChatGPT/Codex desktop app bundle.

### What subscription do you have?

Not provided.

### What platform is your computer?

macOS 27.0 (26A428), Apple Silicon.
`uname -mprs`: `Darwin 27.0.0 arm64 arm`.

### What issue are you seeing?

During Codex Computer Use interactions with a native macOS application, the purple window-capture/sharing indicator that replaces the window's traffic-light controls can briefly disappear and reappear. This causes a visible flicker in the upper-left corner of the window.

A recording of a Finder interaction confirms that the **entire purple indicator briefly disappears**, rather than only changing brightness or animating the white s

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
gh issue comment 48340 --repo openai/codex --body-file outbound/drafts/2026-09-26/openai-codex-48340.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
