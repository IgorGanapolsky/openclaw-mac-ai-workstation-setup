# Draft for openai/codex#36627

- OP: @lraveri
- Title: macOS Computer Use bootstrap lacks Node REPL privileged bridge
- Created: 2026-08-02T18:43:36Z
- URL: https://github.com/openai/codex/issues/36627
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

## Summary

Computer Use is installed and enabled on macOS, but the Node REPL runtime exposed to a Codex Desktop task lacks the privileged Computer Use bridge. The bundled Computer Use wrapper therefore fails before it can load `@oai/sky`.

This is not an Accessibility or Screen Recording permission problem: the failure happens before the macOS helper receives a request.

## Environment

- macOS 26.5.2 (25F84), Apple Silicon (arm64)
- Computer Use helper: `26.727.1000550` (build `1000550`)
- Codex CLI: `0.146.0-alpha.9.2`

## Expected behavior

With the bundled `computer-use@openai-bundled` plugin enabled, a fresh Codex Desktop task should expose the privileged Node REPL capabilities required by the Computer Use wrapper. `sky.list_apps()` should load the bundled client and proceed to the n

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
gh issue comment 36627 --repo openai/codex --body-file outbound/drafts/2026-08-03/openai-codex-36627.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
