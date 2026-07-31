# Draft for openai/codex#24566

- OP: @hnsy2016
- Title: Codex Desktop plugin marketplace rendering broken on macOS 12.7.6
- Created: 2026-05-26T10:20:15Z
- URL: https://github.com/openai/codex/issues/24566
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

# Codex Desktop plugin marketplace rendering broken on macOS 12.7.6

## Summary

Codex Desktop shows a broken plugin marketplace layout on macOS 12.7.6. Reinstalling the app does not resolve it. Browser / Computer Use integration also appears unavailable from the assistant side even when the UI indicates the browser/plugin is started.

## Environment

- OS: macOS 12.7.6
- Codex Desktop version: 26.519.41501 (3044)
- Install location: `/Applications/Codex.app`

## Symptoms

- Plugin marketplace page is visibly mis-rendered:
  - Large blank area on the left.
  - Plugin cards/text are clipped horizontally.
  - Search/filter controls appear offset.
  - Carousel/card content overlaps or renders outside expected bounds.
- Reinstalling Codex Desktop does not fix the rendering issue.
- Browser plu

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
gh issue comment 24566 --repo openai/codex --body-file outbound/drafts/2026-05-26/openai-codex-24566.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
