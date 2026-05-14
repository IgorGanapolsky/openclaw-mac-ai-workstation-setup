# Draft for openai/codex#21987

- OP: @Bughunter-Geek
- Title: Codex Beta main process spins at ~290% CPU after large Computer Use thread
- Created: 2026-05-10T00:34:58Z
- URL: https://github.com/openai/codex/issues/21987
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

## Summary

Codex Beta Desktop can enter a runaway CPU state in the main app process after a large Computer Use-heavy thread. In this case, Activity Monitor showed the main `Codex (Beta)` process at ~286-293% CPU while no agent command/tool/build was visibly running.

## Environment

- Codex Beta: `26.506.31421`
- macOS: `26.5 (25F71)`
- Machine: Apple Silicon Mac
- Repo/workspace at the time: local throwaway workspace, not running a build

## What happened

1. I used Codex Desktop with Computer Use to interact with the native WhatsApp macOS app.
2. The thread accumulated many large `get_app_state` outputs and screenshots/accessibility trees from WhatsApp.
3. After the interaction stopped, Codex Desktop continued consuming very high CPU.
4. Activity Monitor filtered to `codex` showed the m

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
gh issue comment 21987 --repo openai/codex --body-file outbound/drafts/2026-05-14/openai-codex-21987.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
