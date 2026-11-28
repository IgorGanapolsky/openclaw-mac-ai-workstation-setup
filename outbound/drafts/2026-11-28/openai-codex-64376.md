# Draft for openai/codex#64376

- OP: @duan521127
- Title: macOS 27.2.1: Computer Use screenshots and AX clicks work, coordinate input fails with noWindowsAvailable
- Created: 2026-11-27T19:41:09Z
- URL: https://github.com/openai/codex/issues/64376
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

## Environment
- Installed desktop application ChatGPT.app (bundle com.openai.codex), CFBundleShortVersionString: 26.1117.41037 (read from installed Info.plist).
- macOS 27.2.1, build 26B131 (sw_vers).
- Observed 2026-11-27.

## Reproduction and observed results
Using the supported cua_repl API:
1. `await cua.getApp('com.tencent.xinWeChat')` can return the WeChat mini-program window titled 聚吧跳棋; screenshots show the game.
2. `await app.click([x, y])` on visible game controls frequently fails immediately with `Computer Use server error -10005: noWindowsAvailable`. Also observed `windowNotFoundAtPosition`, timeouts, and intermittent ScreenCaptureKit error -3811 during later capture attempts.
3. Cross-application test with System Settings: AX element-index clicks successfully navigated Privac

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
gh issue comment 64376 --repo openai/codex --body-file outbound/drafts/2026-11-28/openai-codex-64376.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
