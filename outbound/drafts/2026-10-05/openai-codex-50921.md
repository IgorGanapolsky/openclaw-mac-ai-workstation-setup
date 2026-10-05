# Draft for openai/codex#50921

- OP: @fugamante
- Title: [macOS][Computer Use] “Stop Using” menu retains Finder and Safari after capture ends
- Created: 2026-10-04T17:44:05Z
- URL: https://github.com/openai/codex/issues/50921
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

## Environment

- macOS 26.7.1 (25G241)
- ChatGPT/Codex 26.930.31730 (build 12947)
- Codex Computer Use helper 26.929.1001365

## Observed behavior

After a Computer Use task involving Finder and Safari on October 3, the ChatGPT menu still offered **“Stop Using Finder”** and **“Stop Using Safari”** on October 4. The menu screenshot was taken at approximately 13:30 AST on October 4. There was no intentional ongoing Computer Use task for either app.

## Evidence

- The Computer Use helper process remained running from October 3 at 11:47 AST.
- Its saved app approvals include Finder and Safari; a saved session lists Finder.
- The macOS unified log records a screen capture starting October 3 at 13:16 and stopping around 13:30. The stop sequence includes ScreenCaptureKit errors `-3817` and `-38

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
gh issue comment 50921 --repo openai/codex --body-file outbound/drafts/2026-10-05/openai-codex-50921.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
