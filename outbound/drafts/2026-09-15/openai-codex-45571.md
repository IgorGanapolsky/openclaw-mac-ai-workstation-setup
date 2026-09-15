# Draft for openai/codex#45571

- OP: @DEANOFORPHAN
- Title: macOS: Computer Use blocks public WeChat articles while Chrome settings remain accessible
- Created: 2026-09-15T02:04:28Z
- URL: https://github.com/openai/codex/issues/45571
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

## Summary
On macOS, Computer Use can inspect Chrome settings, but switching to an already-open public WeChat article terminates the tool session with a URL restriction. Browser settings show default browsing and downloads as Always allow.

## Environment
- Desktop app: 26.908.40834 (build 8881; bundle identifier com.openai.codex)
- Google Chrome: 152.0.7977.84
- Cached browser, chrome and unified-computer-use packages: all 26.908.40834, enabled in configuration
- Chrome latest points to 26.908.40834

## Reproduction
1. Open https://mp.weixin.qq.com/s/YosYRQRrfaexYoPheYDBrA in Chrome.
2. Ask the agent to inspect the public article and save its sheet music as a PDF.
3. Computer Use can read chrome://settings/system.
4. Switch to the existing article tab using Computer Use.
5. The tool stops

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
gh issue comment 45571 --repo openai/codex --body-file outbound/drafts/2026-09-15/openai-codex-45571.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
