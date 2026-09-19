# Draft for openai/codex#46607

- OP: @raisedadead
- Title: [macOS] Computer Use helper repeatedly asks for first-open approval after ChatGPT updates
- Created: 2026-09-19T08:04:17Z
- URL: https://github.com/openai/codex/issues/46607
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

### What version of the Codex App are you using (From “About Codex” dialog)?

Affected desktop release observed: ChatGPT 26.915.31945, build 9922 (`com.openai.codex`).

### What subscription do you have?

Not included in this public report.

### What platform is your computer?

macOS 27.0, build 26A428, Apple Silicon.

Computer Use helper: 26.916.1001103 (`com.openai.sky.CUAService`). Homebrew: 7.0.4-17-g2f1c682, official `chatgpt` cask. Both Homebrew and the app's Sparkle updater have been used.

### What issue are you seeing?

After ChatGPT updates, macOS repeatedly asks for first-open approval of `Codex Computer Use.app`:

> “Codex Computer Use.app” is an app downloaded from the Internet. Are you sure you want to open it?

The dialog also says that Apple checked the app for malicious so

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
gh issue comment 46607 --repo openai/codex --body-file outbound/drafts/2026-09-19/openai-codex-46607.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
