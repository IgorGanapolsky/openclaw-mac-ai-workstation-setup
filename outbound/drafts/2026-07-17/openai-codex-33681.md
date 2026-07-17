# Draft for openai/codex#33681

- OP: @trillestyoungin
- Title: Codex Desktop macOS: Computer Use skill loads but required node_repl tool is not exposed
- Created: 2026-07-16T20:03:46Z
- URL: https://github.com/openai/codex/issues/33681
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

### What version of the Codex App are you using (From “About Codex” dialog)?

26.707.91948

### What subscription do you have?

ChatGPT Plus

### What platform is your computer?

Darwin 25.5.0 arm64 arm

### What issue are you seeing?

The official Computer Use plugin loads, but the task is not given the `node_repl` JavaScript tool required by the Computer Use skill.

Using `@Computer` with this prompt:

> List my currently open applications. Do not change anything. Do not use terminal commands or create a fallback bridge. If the required Computer Use tool is unavailable, stop and report the exact missing tool.

produces this exact response:

> Cannot proceed: the required `node_repl` Computer Use tool is unavailable in this task. No changes were made.

The plugin is enabled, Workspace Dep

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
gh issue comment 33681 --repo openai/codex --body-file outbound/drafts/2026-07-17/openai-codex-33681.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
