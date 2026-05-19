# Draft for openai/codex#22856

- OP: @LuisJG8
- Title: MCP client for `computer-use` failed to start
- Created: 2026-05-15T15:40:33Z
- URL: https://github.com/openai/codex/issues/22856
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

### What version of Codex CLI is running?

0.130.0

### What subscription do you have?

Pro

### Which model were you using?

gpt-5.5 xhigh fast

### What platform is your computer?

Darwin 24.6.0 arm64 arm

### What terminal emulator and version are you using (if applicable)?

Warp 0.2026.05.13.09.15.01

### What issue are you seeing?

error message: 
⚠ MCP client for `computer-use` failed to start: MCP startup failed: handshaking
  with MCP server failed: connection closed: initialize response

⚠ MCP startup incomplete (failed: computer-use)

I only see the error message when I open a new Codex session.

### What steps can reproduce the bug?

Uploaded thread: 019e2c3a-4797-7ff2-9e4c-bb78c1d13919

### What is the expected behavior?

I should not be able to see the error since I have compu

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
gh issue comment 22856 --repo openai/codex --body-file outbound/drafts/2026-05-16/openai-codex-22856.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
