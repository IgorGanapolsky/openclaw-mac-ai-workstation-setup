# Draft for openai/codex#56326

- OP: @LOSTTEMPER
- Title: macOS Computer Use: Apple Simulator intermittently returns -10005 noWindowsAvailable after successful AX/screenshot reads
- Created: 2026-10-23T01:54:19Z
- URL: https://github.com/openai/codex/issues/56326
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

## Summary
macOS desktop Computer Use intermittently loses the Apple Simulator window after successful accessibility and screenshot reads. A subsequent operation returns:
```
Computer Use server error -10005: noWindowsAvailable
```
This prevents completion of native UI acceptance testing. Please provide a supported recovery, diagnostic procedure, or fixed build; repeated rebinding has not provided a lasting solution.

## Environment
Read from the installed desktop application metadata during this investigation:
- Desktop bundle identifier: com.openai.codex (installed as ChatGPT.app)
- Desktop app version: 26.1013.40934, build 20770
- macOS 15.7.3, arm64
- Xcode 26.3.0; Apple Simulator, iPhone 17 Pro / iOS 26.3.1 test runtime
- Supported cua_repl interface, target bundle com.apple.iphonesim

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
gh issue comment 56326 --repo openai/codex --body-file outbound/drafts/2026-10-23/openai-codex-56326.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
