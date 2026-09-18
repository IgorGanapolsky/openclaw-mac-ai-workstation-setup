# Draft for openai/codex#46307

- OP: @Pavel-Danilin
- Title: macOS Computer Use stops native Yandex session with URL-not-allowed error after successful use
- Created: 2026-09-17T21:27:58Z
- URL: https://github.com/openai/codex/issues/46307
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

## What version of the Codex App are you using?

26.911.61220, build 9647 (installed desktop app bundle metadata).

## What subscription do you have?

ChatGPT subscription; exact tier not confirmed for this report.

## What platform is your computer?

macOS 26.2, arm64. Native Yandex browser, bundle ID `ru.yandex.desktop.yandex-browser`.

## What issue are you seeing?

After more than an hour of successful, user-authorized browser work, Computer Use stopped a native Yandex session while reading an Avito account page. The blocked action only inspected the interface; it did not submit a payment, publish an item, or change account settings.

At 2026-09-17 20:31:58.305 UTC (23:31:58.305 Moscow time), `mcp__cua_repl.js` returned this error on `yandex.getAXState({emit:false})`:

> This session h

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
gh issue comment 46307 --repo openai/codex --body-file outbound/drafts/2026-09-18/openai-codex-46307.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
