# Draft for openai/codex#53861

- OP: @metztim
- Title: Computer Use doubles every physical keystroke system-wide while driving a background app (macOS)
- Created: 2026-10-14T03:59:27Z
- URL: https://github.com/openai/codex/issues/53861
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

### What version of the Codex App are you using (From "About Codex" dialog)?

ChatGPT.app 26.1007.30912 (Codex Framework 155.0.8059.40, codex-cli 0.162.0-alpha.17.2), Codex Computer Use.app 26.1005.1001425

### What subscription do you have?

ChatGPT Pro

### What platform is your computer?

Darwin 27.0.0 arm64 arm (macOS 27.0.1, build 26A434)

### What issue are you seeing?

While Codex computer use is driving another app (in my case the Claude desktop app, Electron, 2.37337.1), every key I type on the physical keyboard is entered twice, in every app. Typing `asdf` in TextEdit produces `aassddff`. A single space arrives as two spaces, which macOS turns into ". " through the double-space period shortcut. The computer is unusable for the person sitting at it until the state clears.

It star

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
gh issue comment 53861 --repo openai/codex --body-file outbound/drafts/2026-10-14/openai-codex-53861.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
