# Draft for openai/codex#37597

- OP: @RoundTable02
- Title: [macOS][Computer Use] Native Finder-to-app file drop is not delivered
- Created: 2026-08-08T14:53:24Z
- URL: https://github.com/openai/codex/issues/37597
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

### What version of the Codex App are you using (From “About Codex” dialog)?

26.527.31326

### What subscription do you have?

Pro

### What platform is your computer?

`Darwin 25.5.0 arm64 arm`

### What issue are you seeing?

On macOS, Computer Use does not deliver a native Finder file payload to a Drop target in another app.

Computer Use can operate Finder and the destination app independently, select the source file, and interact with controls in either app. However, a drag from a verified Finder file coordinate to a visible Drop target completes without the destination receiving a Drop event.

This blocks end-to-end Computer Use verification of macOS apps whose supported input flow is Finder Drag & Drop. The same drag succeeds immediately when performed manually, so the destination 

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
gh issue comment 37597 --repo openai/codex --body-file outbound/drafts/2026-08-09/openai-codex-37597.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
