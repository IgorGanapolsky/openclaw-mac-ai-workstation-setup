# Draft for openai/codex#56662

- OP: @postmelee
- Title: macOS Computer Use: typeText injects Option/Alt under Korean 2-Set
- Created: 2026-10-24T05:46:53Z
- URL: https://github.com/openai/codex/issues/56662
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

### What version of the Codex App are you using (From “About Codex” dialog)?

26.1016.62342 (build 21477), bundle ID `com.openai.codex`. Queried while preparing this report, after the historical experiments; the detailed provenance below distinguishes these dates.

### What subscription do you have?

Not provided; omitted rather than guessed.

### What platform is your computer?

macOS 26.5.2 (25F84), arm64.

### What issue are you seeing?

**Codex App / macOS native Computer Use bug:** plain `typeText` requests can synthesize unintended Option/Alt flags under Korean 2-Set. Uppercase letters acquire Option+Shift, so a shortcut-aware target can treat N/H/W as formatting commands and omit those letters. An engine-free textarea can receive the correct text while still exposing the unintended 

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
gh issue comment 56662 --repo openai/codex --body-file outbound/drafts/2026-10-24/openai-codex-56662.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
