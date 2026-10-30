# Draft for openai/codex#58167

- OP: @SebaFns
- Title: macOS Computer Use: Unreal Editor coordinate clicks activate the control under the physical cursor
- Created: 2026-10-29T19:56:39Z
- URL: https://github.com/openai/codex/issues/58167
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

### What version of the Codex App are you using (From “About Codex” dialog)?

26.1023.51421 (build 22530), read from installed ChatGPT.app bundle metadata; Codex surface, bundle ID `com.openai.codex`.

Bundled Computer Use helper: 26.1022.1001641 (build 1001641).

### What subscription do you have?

Plus

### What platform is your computer?

Darwin 27.0.0 arm64 arm

macOS 27.0.1, build 26A434. Apple Silicon / ARM64.

Target: Unreal Editor 5.8.2, changelist 56702186, Mac Metal.

### What issue are you seeing?

**A coordinate click requested on Unreal Editor's Outliner search field activates Tools, where the human left the physical cursor.** The Computer Use pointer is drawn over the requested search field, but the field does not gain focus. The call completes without a window-location error

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
gh issue comment 58167 --repo openai/codex --body-file outbound/drafts/2026-10-30/openai-codex-58167.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
