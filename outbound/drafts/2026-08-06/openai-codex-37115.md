# Draft for openai/codex#37115

- OP: @f0rr0
- Title: [macOS] Computer Use PiP refresh loop can steal foreground focus under Stage Manager
- Created: 2026-08-05T16:25:26Z
- URL: https://github.com/openai/codex/issues/37115
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

### What version of the Codex App are you using (From "About Codex" dialog)?

ChatGPT/Codex Desktop `26.730.61639` (`CFBundleVersion` `6234`)

Bundle identifier: `com.openai.codex`

### What subscription do you have?

ChatGPT Pro

### What platform is your computer?

```text
Darwin 25.5.0 arm64 arm
macOS 26.5.1 (25F80)
```

Stage Manager was enabled with its recent-app strip visible.

### What issue are you seeing?

Codex Desktop intermittently makes itself the frontmost macOS application while it is in the background under Stage Manager. This interrupts typing and clicking in the application the user intentionally selected. The behavior was also reported while no Codex turn was active.

Diagnostics found a continuous remote-hosted Computer Use PiP reconnect loop in the Codex Desktop log:


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
gh issue comment 37115 --repo openai/codex --body-file outbound/drafts/2026-08-06/openai-codex-37115.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
