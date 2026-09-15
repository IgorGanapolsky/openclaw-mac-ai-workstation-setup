# Draft for openai/codex#45671

- OP: @kripagressel
- Title: Computer Use enabled on macOS, but tools unavailable in Codex tasks
- Created: 2026-09-15T10:37:04Z
- URL: https://github.com/openai/codex/issues/45671
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

Computer Use is installed and enabled in the ChatGPT desktop app on macOS, but Codex cannot access its tools.

The computer-use and node_repl switches are both on. Restarting the app and trying another task did not resolve the problem.

Expected: Codex can use Computer Use to open and inspect VMware Fusion.

Actual: Tasks report that Computer Use is unavailable.

Diagnostic logs contain:
“omitting MCP server without an exact ready client”
for cua_repl and node_repl.

Feedback ID: 01a07b4b-50d7-71d1-afb8-68d3f72e0781

Please help diagnose why these enabled connections are not becoming available to tasks.

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
gh issue comment 45671 --repo openai/codex --body-file outbound/drafts/2026-09-15/openai-codex-45671.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
