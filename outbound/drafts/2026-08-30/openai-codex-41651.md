# Draft for openai/codex#41651

- OP: @anquanfuzhu-cloud
- Title: [macOS] Computer Use crashes in node_repl with sandbox_apply error (exit 71); direct MCP works
- Created: 2026-08-30T10:31:13Z
- URL: https://github.com/openai/codex/issues/41651
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

### What version of the Codex App are you using (From “About Codex” dialog)?

26.825.51511 (build 7377)

### What subscription do you have?

ChatGPT Pro

### What platform is your computer?

Darwin 25.5.0 arm64

### What issue are you seeing?

The official bundled Computer Use integration is unusable in local Codex tasks on macOS. Even a read-only Finder request causes the managed node_repl process to terminate before Computer Use can read the UI.

Prompt used:

> Use Computer Use to read the title of the current Finder window. Do not click, type, or modify anything.

Actual result:

```text
trusted Node process exited unexpectedly; kernel reset
sandbox_apply: Operation not permitted
macos_sandbox_failed
exited(code=71)
Expected result:
Computer Use should return the current Finder window 

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
gh issue comment 41651 --repo openai/codex --body-file outbound/drafts/2026-08-30/openai-codex-41651.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
