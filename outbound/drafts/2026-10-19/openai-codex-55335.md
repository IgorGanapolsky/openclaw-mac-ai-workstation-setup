# Draft for openai/codex#55335

- OP: @MichaelAntonFischer
- Title: [macOS] Computer Use cannot open local Office files in native dialogs; input loses window binding
- Created: 2026-10-19T18:08:29Z
- URL: https://github.com/openai/codex/issues/55335
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

### What version of the Codex App are you using?

26.1013.40934, read from the installed application bundle.

### What subscription do you have?

Not included in this report.

### What platform is your computer?

macOS 27.0.1 (26A434), Apple Silicon. `uname -mprs`: `Darwin 27.0.0 arm64 arm`.

Microsoft Word and Excel: 16.99 (16.99.25071321).

### What issue are you seeing?

App-bound background Computer Use can select a valid local DOCX or XLSX in the native Office Open dialog, but the **Open** button stays disabled. The selected row and disabled button are visible in both the accessibility tree and a screenshot. The workflow previously worked according to the user.

Accessibility double-click, the exposed `Open Finder item` secondary action, Return, Command-Down, and keyboard selection do

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
gh issue comment 55335 --repo openai/codex --body-file outbound/drafts/2026-10-19/openai-codex-55335.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
