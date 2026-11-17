# Draft for openai/codex#62078

- OP: @mesqueeb
- Title: Computer Use sends Command+Y instead of Command+T with macOS software Dvorak layout
- Created: 2026-11-17T16:42:53Z
- URL: https://github.com/openai/codex/issues/62078
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

### Component and environment

ChatGPT desktop app / Codex Computer Use on macOS, using the native Safari app through `mcp__cua_repl`.
Current installed desktop app version: 26.1106.51428 (build 26605).
macOS: 27.0.1 (26A434).
The user uses Dvorak selected in software on a standard keyboard, rather than a dedicated hardware Dvorak keyboard.

### Reproduction

1. Select the Dvorak input layout in macOS.
2. Open Safari.
3. Have Computer Use execute:

```javascript
var safari = await cua.getApp("Safari");
await safari.pressKey("super+t");
await safari.getAXState();
```

### Expected behavior

The requested Command+T shortcut opens a new Safari tab.

### Actual behavior

Safari opens History, consistent with receiving Command+Y. This was observed in a real Computer Use session when the agent a

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
gh issue comment 62078 --repo openai/codex --body-file outbound/drafts/2026-11-17/openai-codex-62078.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
