# Draft for openai/codex#58527

- OP: @eventsprodmc
- Title: Computer Use macOS: AnyDesk attachment times out (-10005), frontend AX access works
- Created: 2026-10-31T10:06:09Z
- URL: https://github.com/openai/codex/issues/58527
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

### Environment
- macOS 26.6.2 (25G83)
- ChatGPT desktop 26.1007.30912 (20156)
- AnyDesk 9.8.0

### Reproduction
With AnyDesk running, cua.getApp("AnyDesk"), the app bundle ID, or cua.getApp("/Applications/AnyDesk.app") returns:
Computer Use server error -10005: timeoutReached
Reinitializing cua_repl does not resolve it. Finder can be controlled in the same environment.

### Relevant observation
AnyDesk has simultaneous processes with the same app name:
AnyDesk --control
AnyDesk --frontend
An explicitly user-authorized alternative using AXUIElementCreateApplication with the frontend PID can read the AnyDesk window, invoke AXPress, and capture that window. This suggests process selection may be relevant, but the underlying controller cause is not confirmed.

### Expected
Attach to the AnyDe

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
gh issue comment 58527 --repo openai/codex --body-file outbound/drafts/2026-10-31/openai-codex-58527.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
