# Draft for openai/codex#32085

- OP: @suyuan2022
- Title: Computer Use 1.0.1000366 crashes on macOS 15.7.5 and appears to disable itself after enable
- Created: 2026-07-10T08:53:40Z
- URL: https://github.com/openai/codex/issues/32085
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

### What version of the Codex App are you using (From “About Codex” dialog)?

ChatGPT/Codex Desktop `26.707.31428` (build `5059`), with `computer-use@openai-bundled` plugin `1.0.1000366` and helper `26.708.1000366`.

### What subscription do you have?

Unknown / not relevant to this local helper startup crash.

### What platform is your computer?

```text
Darwin 24.6.0 arm64 arm
macOS 15.7.5 (24G624)
Apple Silicon
```

### What issue are you seeing?

Computer Use does not start even though both the plugin and MCP are enabled. From the user side, enabling Computer Use can appear to turn itself back off after the startup attempt.

The active configuration contains:

```toml
[mcp_servers.computer-use]
enabled = true

[plugins."computer-use@openai-bundled"]
enabled = true
```

The first transp

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
gh issue comment 32085 --repo openai/codex --body-file outbound/drafts/2026-07-10/openai-codex-32085.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
