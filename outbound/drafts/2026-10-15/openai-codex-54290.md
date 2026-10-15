# Draft for openai/codex#54290

- OP: @drjonbaker
- Title: macOS app: fresh chat inherits stale symlinked writable root, blocking shell and Computer Use
- Created: 2026-10-15T13:20:22Z
- URL: https://github.com/openai/codex/issues/54290
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

### What version of the Codex App are you using?
Exact desktop build not collected. Shell execution and Computer Use are blocked before startup, so this report does not infer a version.

### What subscription do you have?
Not supplied in this report.

### What platform is your computer?
macOS desktop. Exact macOS version and architecture have not been collected.

### What issue are you seeing?
A stale symlinked writable root prevents both shell execution and Computer Use from starting. The saved project path and the current chat working directory use the real, non-symlink project location, but the effective writable-root list still includes the legacy alias.

This also affects a **fresh chat created in the corrected project**, after restarting/reopening Codex. It is blocking ongoing rider-

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
gh issue comment 54290 --repo openai/codex --body-file outbound/drafts/2026-10-15/openai-codex-54290.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
