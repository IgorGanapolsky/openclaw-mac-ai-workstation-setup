# Draft for openai/codex#56784

- OP: @mlgill
- Title: [macOS Computer Use] getAXState on a dismissed Shortcuts prompt opens ShortcutsViewService.xpc
- Created: 2026-10-24T19:33:51Z
- URL: https://github.com/openai/codex/issues/56784
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

### What version of the Codex app are you using?

ChatGPT macOS desktop app with Codex and Computer Use: 26.1016.61520 (build 21421). Installed `@oai/cua-repl` version: 0.1.2.

### What subscription do you have?

ChatGPT-authenticated desktop session; subscription tier was not collected.

### What platform is your computer?

macOS 27.0.1 (26A434), Apple Silicon arm64, Darwin 27.0.0.

### What issue are you seeing?

Calling `getAXState()` on an existing `com.apple.WorkflowKit.ShortcutsViewService` binding after its prompt closes causes Computer Use to attempt to open `ShortcutsViewService.xpc`. macOS displays a persistent alert: “There is no application set to open the document ‘ShortcutsViewService.xpc’.”

The closing click itself succeeds. The failure occurs in a separate, subsequent obse

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
gh issue comment 56784 --repo openai/codex --body-file outbound/drafts/2026-10-25/openai-codex-56784.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
