# Draft for openai/codex#21668

- OP: @GGBondBlueWhale
- Title: Privacy/security risk: Codex Computer Use captures wrong macOS Space/window instead of target app
- Created: 2026-05-08T05:34:29Z
- URL: https://github.com/openai/codex/issues/21668
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

## Summary

Codex Computer Use appears to have unreliable target app/window selection on macOS when multiple Desktops / Spaces are used. This is not only a workflow bug; it is also a privacy/security risk because screenshots from the wrong app, window, or Space can be uploaded as model context.

In my workflow, I often keep the Codex desktop app on one primary Desktop/Space and put the actual target app that Computer Use should operate on, such as Google Chrome or another development/browser window, on a different Desktop/Space. This is a common macOS workflow because a single desktop is not enough for many users, so multiple Spaces are used to separate Codex, browser, IDE, terminal, documentation, etc.

The problem is that Computer Use often seems to blindly capture the currently active D

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
gh issue comment 21668 --repo openai/codex --body-file outbound/drafts/2026-05-14/openai-codex-21668.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
