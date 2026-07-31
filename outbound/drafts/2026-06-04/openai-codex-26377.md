# Draft for openai/codex#26377

- OP: @michikaru
- Title: Computer Use plugin install does not persist after restart in Codex desktop
- Created: 2026-06-04T11:28:05Z
- URL: https://github.com/openai/codex/issues/26377
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

### What version of the Codex App are you using (From “About Codex” dialog)?

26.601.21317

### What subscription do you have?

Plus

### What platform is your computer?

macOS Darwin 25.5.0 arm64 arm

### What issue are you seeing?

[bug-report-computer-use-plugin.md](https://github.com/user-attachments/files/28593449/bug-report-computer-use-plugin.md)

### What steps can reproduce the bug?

1. Open Codex desktop on macOS.

2. In a Codex thread, call list_available_plugins_to_install and confirm that computer-use@openai-bundled appears as an installable plugin.

3. Call request_plugin_install with:
   - action_type: install
   - tool_id: computer-use@openai-bundled
   - tool_type: plugin

4. Observe that the install may intermittently return completed=false/user_confirmed=false.

5. Retry

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
gh issue comment 26377 --repo openai/codex --body-file outbound/drafts/2026-06-04/openai-codex-26377.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
