# Draft for openai/codex#39648

- OP: @ljt7560868
- Title: [macOS Intel] Unable to enable “Locked use”: managed Computer Use service fails to spawn
- Created: 2026-08-20T07:41:36Z
- URL: https://github.com/openai/codex/issues/39648
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

### What version of the Codex App are you using (From “About Codex” dialog)?

26.814.41957 (6744)

### What subscription do you have?

ChatGPT Plus

### What platform is your computer?

Darwin 23.6.0 x86_64 i386

### What issue are you seeing?

### Summary

Enabling **Settings → Computer use → Locked use** immediately turns the setting back off and displays the following error:

> Unable to update “Locked use” setting.

The regular Google Chrome and Microsoft Excel controls can be enabled successfully.

### Environment

- Codex App: 26.814.41957 (6744)
- macOS: 14.8.5
- Kernel/architecture: Darwin 23.6.0, Intel x86_64
- MDM enrollment: No

### Steps to reproduce

1. Open the Codex/ChatGPT desktop app.
2. Go to **Settings → Computer use**.
3. Enable **Locked use**.
4. Observe that the toggl

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
gh issue comment 39648 --repo openai/codex --body-file outbound/drafts/2026-08-20/openai-codex-39648.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
