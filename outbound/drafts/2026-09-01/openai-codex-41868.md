# Draft for openai/codex#41868

- OP: @GGBondBlueWhale
- Title: [macOS][Codex app] Chrome tabs retain computer-use control indicator after task completes
- Created: 2026-08-31T15:49:39Z
- URL: https://github.com/openai/codex/issues/41868
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

## Summary

After a Codex computer-use/browser task finishes, Codex sometimes fails to fully release its Google Chrome control session. Chrome tabs that were involved continue to show the mouse/cursor control badge in the tab strip even though Codex reports the task as complete.

## Steps to reproduce

1. Launch the ChatGPT desktop app on macOS.
2. Run a Codex task that uses browser control / Chrome to inspect or interact with a website.
3. Wait for the task to finish normally.
4. Switch back to Chrome and inspect the tabs that were controlled.

## Actual behavior

- One or more Chrome tabs continue to display the mouse/control indicator after the task has ended.
- The UI therefore appears to show that Codex is still attached to or controlling those tabs.
- The stale indicator remains inst

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
gh issue comment 41868 --repo openai/codex --body-file outbound/drafts/2026-09-01/openai-codex-41868.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
