# Draft for openai/codex#50378

- OP: @luworks
- Title: macOS: Computer Use controlling Claude Desktop triggers duplicated typing and voice input across apps
- Created: 2026-10-02T17:34:43Z
- URL: https://github.com/openai/codex/issues/50378
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

### What version of the Codex App are you using?

26.930.21537 (build 12776), read from the installed desktop application's bundle metadata. On this machine the application is named ChatGPT.app and has bundle identifier `com.openai.codex`.

Computer Use helper: 26.929.1001365 (build 1001365), bundle identifier `com.openai.sky.CUAService`.

### What subscription do you have?

Not provided in this report.

### What platform is your computer?

- macOS 26.6 (25G72), Apple silicon.
- `uname -mprs`: `Darwin 25.6.0 arm64 arm`.
- Automation target: Anthropic Claude Desktop 2.19675.0 (`com.anthropic.claudefordesktop`).
- Native app automation through the Unified Computer Use plugin / `cua_repl`.
- Sogou Pinyin 6.25.1.11973 was installed and was also involved in input-source troubleshooting; see the

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
gh issue comment 50378 --repo openai/codex --body-file outbound/drafts/2026-10-03/openai-codex-50378.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
