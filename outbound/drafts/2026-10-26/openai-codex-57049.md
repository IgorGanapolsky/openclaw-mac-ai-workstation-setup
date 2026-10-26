# Draft for openai/codex#57049

- OP: @DKsoup
- Title: Computer Use inspection of a complex Word document can terminate the Word host on macOS
- Created: 2026-10-26T07:25:22Z
- URL: https://github.com/openai/codex/issues/57049
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

No private document, document text, local file path, account information, or raw log attachment is included.

## Environment

- macOS 27.0.1 (26A434), Apple Silicon.
- Microsoft Word 16.114.1 (16.114.26102031).
- ChatGPT desktop 26.1021.31345 (21828), using Codex Computer Use 26.1021.1001631.
- Bundled and installed Computer Use plugin versions both match 1.0.1001631.

## Observed failure

With all documents saved and the human user not interacting, selecting a complex DOCX test copy and inspecting it through Computer Use reproduced termination of the Microsoft Word process twice. Both subsequent Word startups reported the same native crash signature as four earlier exits associated with Computer Use inspection.

Historical associated calls included `getAXState()`, `getAXStateAndScreenshot

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
gh issue comment 57049 --repo openai/codex --body-file outbound/drafts/2026-10-26/openai-codex-57049.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
