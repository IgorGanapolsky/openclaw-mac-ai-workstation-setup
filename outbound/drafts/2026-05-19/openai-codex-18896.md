# Draft for openai/codex#18896

- OP: @james-beep-boop
- Title: Codex Desktop macOS: Computer Use approval denied via MCP elicitation for every app even after reinstall, reboot, and granting Screen Recording + Accessibility
- Created: 2026-04-21T21:51:21Z
- URL: https://github.com/openai/codex/issues/18896
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

### What version of the Codex App are you using (From “About Codex” dialog)?

Codex Desktop app `26.417.41555`

### What subscription do you have?

Pro

### What platform is your computer?

macOS on Apple Silicon

### What issue are you seeing?

Computer Use cannot control any app.

`list_apps` works and returns installed/running apps, but every actual app-control request fails with:

`Computer Use approval denied via MCP elicitation for app '...'`

This happens for:
- `Google Chrome`
- `Safari`
- `Finder`

`Codex` itself returns a different expected message (`not allowed ... for safety reasons`), so that appears unrelated.


### What steps can reproduce the bug?

1. Open Codex Desktop on macOS.
2. Ensure the `Computer Use` plugin is enabled.
3. Attempt a Computer Use action such as `get_a

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
gh issue comment 18896 --repo openai/codex --body-file outbound/drafts/2026-05-19/openai-codex-18896.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
