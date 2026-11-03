# Draft for openai/codex#59202

- OP: @lsm
- Title: macOS Computer Use JS timeouts leave display-sleep assertions after the turn completes
- Created: 2026-11-03T18:33:32Z
- URL: https://github.com/openai/codex/issues/59202
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)


Codex desktop Computer Use appears to leak a macOS `PreventUserIdleDisplaySleep` assertion when a `cua_repl` JS call times out and resets its kernel. The display can remain awake long after the turn finishes.

Observed on one macOS desktop, November 1–3, 2026:

- `SkyComputerUseService` owns assertions named `Codex Computer Use interaction` in `pmset -g assertions`.
- Seven of eight calls ending with `js execution timed out; kernel reset` left an assertion behind. The oldest persisted for approximately 32 hours.
- Successful calls and other observed failure types left no persistent matching assertion.
- Affected turns still ended normally with `task_complete`. A locally configured `SkyComputerUseClient turn-ended` notification did not release the assertions.
- In one supervised cleanup, t

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
gh issue comment 59202 --repo openai/codex --body-file outbound/drafts/2026-11-03/openai-codex-59202.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
