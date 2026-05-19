# Draft for openai/codex#18555

- OP: @davidjpramsay
- Title: macOS desktop: bundled Computer Use fails when CODEX_HOME path contains @; settings stays unavailable even though direct MCP works
- Created: 2026-04-19T10:35:27Z
- URL: https://github.com/openai/codex/issues/18555
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

## Summary

On the macOS desktop app, if the home / `CODEX_HOME` path contains `@` (example: `/Users/<user>@<org>/.codex`), bundled Computer Use stays unavailable.

The bundled marketplace appears to parse the local marketplace path as if it had a git `@ref`. If I route around that with a symlinked `CODEX_HOME` path that removes `@`, install then hits a second failure (`Is a directory (os error 21)`). A direct manual MCP entry makes backend Computer Use work, but `Settings > Computer use` still shows `Computer Use plugin unavailable`.

This looks related to `#18258`, but I did not find an existing issue for the `@`-in-local-path parser failure.

## Environment

- Codex app: `26.415.40636 (1799)`
- macOS: `26.4.1 (25E253)`
- Hardware: Apple Silicon / M1
- Home / `CODEX_HOME` path contains `

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
gh issue comment 18555 --repo openai/codex --body-file outbound/drafts/2026-05-19/openai-codex-18555.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
