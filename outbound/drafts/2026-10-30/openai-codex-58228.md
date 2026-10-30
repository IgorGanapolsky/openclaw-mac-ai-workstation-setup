# Draft for openai/codex#58228

- OP: @sixiakun
- Title: macOS Computer Use: physical keystrokes duplicated in controlled native app until session reset
- Created: 2026-10-30T03:26:38Z
- URL: https://github.com/openai/codex/issues/58228
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

### Summary
After Codex native Computer Use operates a macOS application, a human pressing a physical key once can produce two characters (a → aa). This persists after the agent stops operating. A single native-control session is sufficient.

### Environment
- macOS 26.6.2 (25G83)
- Desktop client: 26.1027.30824, bundle build 22943
- SkyComputerUseService: 26.1022.1001641 (1001641)
- Confirmed target: Feishu/Lark desktop
- Reproduces with the macOS ABC input source, so it is not limited to Chinese IME composition

### Reproduction observed
1. Start one native Computer Use session and bind Feishu using cua.getApp("Lark").
2. Read fresh application state, then use app.pressKey("super+k") to open the search field.
3. The human user physically taps a once. The field receives aa.
4. Reset only 

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
gh issue comment 58228 --repo openai/codex --body-file outbound/drafts/2026-10-30/openai-codex-58228.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
