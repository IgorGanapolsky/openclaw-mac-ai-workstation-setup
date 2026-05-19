# Draft for openai/codex#18522

- OP: @smartlau83
- Title: Codex Desktop: Computer Use approval denied in old/resumed threads after restart, while new threads can authorize normally
- Created: 2026-04-19T01:57:50Z
- URL: https://github.com/openai/codex/issues/18522
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

### What version of the Codex App are you using (From “About Codex” dialog)?

26.415.40636 (1799)

### What subscription do you have?

Pro for $200

### What platform is your computer?

macOS 26.4.1, Codex Desktop

### What issue are you seeing?

After restarting Codex Desktop, old/resumed threads can no longer use Computer Use for app state access. Calls such as get_app_state for Chrome, Excel, or Word fail immediately with:

Computer Use approval denied via MCP elicitation for app 'com.google.Chrome'.
Computer Use approval denied via MCP elicitation for app 'com.microsoft.Excel'.
Computer Use approval denied via MCP elicitation for app 'com.microsoft.Word'.

Newly created threads can trigger Computer Use authorization and use Chrome/Word/Excel normally, so this does not appear to be a ma

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
gh issue comment 18522 --repo openai/codex --body-file outbound/drafts/2026-05-19/openai-codex-18522.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
