# Draft for openai/codex#26282

- OP: @wise-l
- Title: Codex Desktop: Computer Use / "Any application" option missing on macOS Intel
- Created: 2026-06-04T01:32:54Z
- URL: https://github.com/openai/codex/issues/26282
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

### What version of the Codex App are you using (From “About Codex” dialog)?

Codex Desktop: 26.601.21317

### What subscription do you have?

api key

### What platform is your computer?

macOS 13.7.8  Intel Core i7 2.8 GHz

### What issue are you seeing?

In Codex Desktop, the Computer Use / "Any application" option is missing. I only see browser-related options such as Browser and Chrome.

`codex plugin list` shows Browser and Chrome plugins installed and enabled, but there is no `computer-use`, desktop-control, or arbitrary-application-control plugin available.

Codex Desktop version: 26.601.21317
Codex CLI version: 0.136.0-alpha.2

I would like to know whether Computer Use / arbitrary desktop application control is gated by account, rollout channel, macOS version, Intel CPU architectu

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
gh issue comment 26282 --repo openai/codex --body-file outbound/drafts/2026-06-04/openai-codex-26282.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
