# Draft for openai/codex#41040

- OP: @covenantpiano-creator
- Title: [macOS] Computer Use cannot target a specific process when multiple apps share one bundle identifier
- Created: 2026-08-27T03:47:34Z
- URL: https://github.com/openai/codex/issues/41040
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

### What version of the Codex App are you using (From “About Codex” dialog)?

26.820.60940 (build 7119)

Bundled Computer Use plugin: 1.0.1000816

### What subscription do you have?

ChatGPT subscription

### What platform is your computer?

macOS 15.5 (24F74), Apple Silicon arm64

### What issue are you seeing?

On macOS, Computer Use cannot select a specific application process or window when multiple running applications share the same bundle identifier.

I reproduced this with three independent Google Chrome processes, all registered as `com.google.Chrome`. One process owned the intended test window; the others did not.

The current app selector accepted each of these values:

- `com.google.Chrome`
- `Google Chrome`
- `/Applications/Google Chrome.app`

All three resolved to the same no

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
gh issue comment 41040 --repo openai/codex --body-file outbound/drafts/2026-08-27/openai-codex-41040.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
