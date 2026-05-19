# Draft for openai/codex#19544

- OP: @mattleong
- Title: Homebrew Codex CLI cannot use Computer Use, while Codex.app-bundled CLI works
- Created: 2026-04-25T09:18:28Z
- URL: https://github.com/openai/codex/issues/19544
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

### What version of Codex CLI is running?

Homebrew CLI: `codex-cli 0.125.0`

App-bundled CLI control case: `codex-cli 0.125.0-alpha.3`

### What subscription do you have?

ChatGPT Pro

### Which model were you using?

`gpt-5.4-mini` for the minimal `codex exec` probe. The same issue also occurs from an interactive CLI session.

### What platform is your computer?

`Darwin 25.4.0 arm64 arm`

### What terminal emulator and version are you using (if applicable)?

Ghostty `1.3.1`

### What issue are you seeing?

Computer Use is unusable from the Homebrew-installed Codex CLI, but works from the Codex.app-bundled CLI on the same machine with the same Computer Use plugin/cache and macOS permissions.

The Homebrew CLI path fails even for the lowest-risk Computer Use call, `list_apps`, with:

```t

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
- End with the $19 quick-read CTA: https://igorganapolsky.github.io/openclaw-mac-ai-workstation-setup/speed-to-lead.html
  and a refund clause.
- Cap length at ~2000 chars.
-->

(write here)

---

## Post command (when reviewed and edited)

```
gh issue comment 19544 --repo openai/codex --body-file outbound/drafts/2026-05-18/openai-codex-19544.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
