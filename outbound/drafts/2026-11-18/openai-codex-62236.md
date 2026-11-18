# Draft for openai/codex#62236

- OP: @yx-ren
- Title: [macOS Intel] Computer Use cursor remains after completion_summary and task_complete (26.1106.51428)
- Created: 2026-11-18T08:59:54Z
- URL: https://github.com/openai/codex/issues/62236
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

### What version of the Codex App are you using (From “About Codex” dialog)?

Installed desktop bundle: **26.1106.51428**, build **26605**, bundle ID `com.openai.codex`.
Computer Use helper: **26.1105.1001874**, build **1001874**, bundle ID `com.openai.sky.CUAService`.

These values were read from the installed bundles after the incident; the About dialog was not inspected and this is not an incident-time environment snapshot.

### What subscription do you have?

Not included in the evidence collected for this report.

### What platform is your computer?

**macOS 15.7.3 (24G419), x86_64 / Intel.**

### What issue are you seeing?

On **November 18, 2026**, after a native Computer Use segment ended and the Codex task recorded completion, the user still saw a white outlined cursor with a blur

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
gh issue comment 62236 --repo openai/codex --body-file outbound/drafts/2026-11-18/openai-codex-62236.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
