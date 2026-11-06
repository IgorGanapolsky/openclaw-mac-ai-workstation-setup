# Draft for openai/codex#59942

- OP: @robinagsilva-commits
- Title: macOS: physical keyboard input duplicates across apps while Computer Use is active
- Created: 2026-11-06T16:53:29Z
- URL: https://github.com/openai/codex/issues/59942
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

### What version of the Codex App are you using?

ChatGPT desktop 26.1029.61003 (build 24614). Codex Computer Use helper 26.1027.1001730.

### What platform is your computer?

macOS 26.4.1 (25E253), with a Logitech MX Keys S connected via Bluetooth.

### What issue are you seeing?

While Codex uses native Computer Use in the background, physical keyboard input is duplicated across applications. The user clarified that the issue is not limited to Computer Use controlling Claude Desktop. It also occurs when Computer Use operates other applications. Typing a word once can produce doubled letters, and doubled spaces can become a period. The user reports that normal typing returns after all Computer Use tasks end. This makes it difficult to use the Mac while the task runs.

### What steps can r

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
gh issue comment 59942 --repo openai/codex --body-file outbound/drafts/2026-11-06/openai-codex-59942.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
