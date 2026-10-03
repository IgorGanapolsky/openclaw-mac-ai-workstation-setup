# Draft for openai/codex#50532

- OP: @devinaryeh
- Title: macOS: “Any App” and @Computer missing despite Computer Use plugin being enabled
- Created: 2026-10-03T05:43:38Z
- URL: https://github.com/openai/codex/issues/50532
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

### What version of the Codex App are you using (From “About Codex” dialog)?

26.930.31730 (build 12947, prod channel)

### What subscription do you have?

ChatGPT Plus — personal workspace

### What platform is your computer?

Darwin 25.6.0 x86_64 i386

### What issue are you seeing?

Native macOS Computer Use is unavailable in the ChatGPT/Codex desktop app.

The following documented controls are missing:

- “Any App” under Settings → Computer Use
- Computer Use plugin setup with its MCP server and skill toggles
- The “Try now” control
- `@Computer` in the mention menu

Typing `@Computer` returns no Computer option. Browser-related Computer Use surfaces are available, but native macOS applications are not.

The bundled `unified-computer-use@openai-bundled` plugin is installed and enabled 

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
gh issue comment 50532 --repo openai/codex --body-file outbound/drafts/2026-10-03/openai-codex-50532.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
