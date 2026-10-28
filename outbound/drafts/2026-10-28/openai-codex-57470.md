# Draft for openai/codex#57470

- OP: @laurent-maurin
- Title: [macOS] Chrome browser automation API unavailable despite enabled extension and usable native Computer Use
- Created: 2026-10-27T14:29:49Z
- URL: https://github.com/openai/codex/issues/57470
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

### Environment

26.1021.31345 (build 21828; verified from the installed app bundle metadata)

macOS 27.0.1, Apple silicon. uname -mprs: Darwin 27.0.0 arm64 arm. Chrome 156.0.8078.48.

### Subscription

Not disclosed in this public report.

### Observed behavior

In a local ChatGPT/Codex desktop conversation, the official Chrome browser automation API and its supported bootstrap instructions are not exposed to the agent, although native Computer Use can read and operate Chrome.

The official Chrome extension is enabled in the active profile. Its side-panel chat loads, and the official native-host manifest diagnostic reports correct=true. Native read-only navigation/downloads from an authenticated web application have succeeded.

The general Node REPL is available, but it does not expose in

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
gh issue comment 57470 --repo openai/codex --body-file outbound/drafts/2026-10-28/openai-codex-57470.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
