# Draft for openai/codex#40144

- OP: @conserve-group
- Title: macOS Computer Use: clicks can be offset on multi-monitor setups with negative display coordinates
- Created: 2026-08-22T20:38:13Z
- URL: https://github.com/openai/codex/issues/40144
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

## Summary

On macOS with multiple displays, Computer Use can place the cursor visually over a target in a standard system file dialog, but the click is delivered to a different UI element.

## Reproduction

1. Use Codex Desktop on macOS with a multi-monitor arrangement where at least one display is positioned below the primary display (therefore using negative coordinates).
2. Have Computer Use open a standard macOS save/open sheet.
3. Ask it to select `Downloads` in the sheet sidebar.

## Expected

The item shown beneath the cursor is selected.

## Actual

The cursor was visually over `Downloads`, but the click selected `Recents` instead. Repeated attempts showed the same mismatch.

## Impact

Automated UI work is unreliable in file dialogs on this display arrangement and can target an u

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
gh issue comment 40144 --repo openai/codex --body-file outbound/drafts/2026-08-23/openai-codex-40144.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
