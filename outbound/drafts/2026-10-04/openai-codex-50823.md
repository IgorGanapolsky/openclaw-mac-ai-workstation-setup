# Draft for openai/codex#50823

- OP: @karineandrei-boop
- Title: macOS Computer Use service crashes while inspecting a SwiftUI sheet
- Created: 2026-10-04T08:33:43Z
- URL: https://github.com/openai/codex/issues/50823
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

Codex desktop: 26.930.41038 (build 13022), production, up to date.
Computer Use service: 26.929.1001365 (build 1001365), com.openai.sky.CUAService.
macOS: 26.6.2 (25G83), Apple Silicon.

Steps to reproduce:
1. Launch a local SwiftUI macOS app from Xcode.
2. Inspect the main window with Computer Use (Table of SwiftData models). UI reading, screenshots and search input succeed.
3. Open a detail sheet from a Table button. It contains NavigationStack, ScrollView, Grid, text fields, DatePicker and Picker.
4. Request the sheet UI state or screenshot.

Actual: "Sky Computer Use native pipe closed before response". Six macOS crash reports show SkyComputerUseService EXC_BREAKPOINT / SIGTRAP, with _assertionFailure and Array.remove(at:) at the top of the faulting thread.
Expected: inspect the sheet 

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
gh issue comment 50823 --repo openai/codex --body-file outbound/drafts/2026-10-04/openai-codex-50823.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
