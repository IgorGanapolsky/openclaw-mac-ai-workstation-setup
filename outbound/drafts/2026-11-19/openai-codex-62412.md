# Draft for openai/codex#62412

- OP: @anotb
- Title: macOS Codex stops exposing Computer Use when resuming an existing chat after app relaunch
- Created: 2026-11-19T02:51:50Z
- URL: https://github.com/openai/codex/issues/62412
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

### Environment

- Codex desktop for macOS 26.1111.21308 (build 27194)
- Bundled Codex CLI 0.169.0-alpha.11.1
- macOS 27.2.1
- Local desktop chat, GPT-6.2 Sol throughout the observed transition

### What happened

1. Computer Use successfully operated a native desktop app during a long turn.
2. After that turn completed, the desktop process relaunched. The target app remained running and the completed chat history was still retrievable.
3. On the first recorded turn in that chat after relaunch, Codex removed the `mcp__cua_repl` namespace from the model's available tools. Computer Use remained absent on subsequent turns in the same chat.
4. The Computer Use plugin remained enabled and its native helper was running. Desktop logs showed `cua_repl` ready for other chats after launch. Reopening

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
gh issue comment 62412 --repo openai/codex --body-file outbound/drafts/2026-11-19/openai-codex-62412.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
