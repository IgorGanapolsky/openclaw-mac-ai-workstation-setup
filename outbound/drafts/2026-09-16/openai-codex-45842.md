# Draft for openai/codex#45842

- OP: @wsnda
- Title: Computer Use crashes with sandbox-exec TIOCSTI unbound variable (exit code 65) on macOS
- Created: 2026-09-16T02:35:11Z
- URL: https://github.com/openai/codex/issues/45842
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

### Problem

Computer Use cannot connect to or control Chrome. The Node REPL runtime exits immediately with code 65.

### Exact error

```text
node_repl kernel exited unexpectedly
kernel_status: exited(code=65)
kernel_stderr_tail: sandbox-exec: <input string>:141:33: unbound variable: TIOCSTI

Environment
- macOS
- ChatGPT desktop app: 26.908.70816 (build 9275)
- Bundled Codex: codex-cli 0.154.0-alpha.6.2
- Application path: /Applications/ChatGPT.app
- Chrome extension has “Allow access to file URLs” enabled
- No duplicate ChatGPT or Codex application was found
Troubleshooting already completed
- Updated the ChatGPT desktop app
- Restarted Chrome and the desktop app
- Reinstalled the extension through Settings > Computer Use
- Verified that Chrome is using the profile where the extension i

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
gh issue comment 45842 --repo openai/codex --body-file outbound/drafts/2026-09-16/openai-codex-45842.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
