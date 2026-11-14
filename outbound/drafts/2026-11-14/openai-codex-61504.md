# Draft for openai/codex#61504

- OP: @Iyanu1396
- Title: macOS Computer Use cannot click CapCut: noWindowsAvailable
- Created: 2026-11-14T11:27:38Z
- URL: https://github.com/openai/codex/issues/61504
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

## Description

While editing a project in CapCut on macOS, Codex Computer Use can see the window and read its accessibility tree, but coordinate clicks fail with `Computer Use server error -10005: noWindowsAvailable`. This prevents editing the timeline.

## Steps to reproduce

1. Open a project in CapCut on macOS.
2. Connect to `/Applications/CapCut.app` using Computer Use and obtain a screenshot.
3. Try clicking a visible control using its coordinates.

**Expected:** The control is clicked.

**Actual:** The call fails with `Computer Use server error -10005: noWindowsAvailable`, even though the screenshot and accessibility tree show the window. Reopening CapCut and resetting the Computer Use session did not resolve the issue. Raising the window also failed in this session, reporting that 

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
gh issue comment 61504 --repo openai/codex --body-file outbound/drafts/2026-11-14/openai-codex-61504.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
