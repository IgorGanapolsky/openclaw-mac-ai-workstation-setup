# Draft for openai/codex#53989

- OP: @hanakannzashi
- Title: [macOS][Computer Use] Stage Manager captures tilted Chrome thumbnail and errors when the sidebar auto-hides
- Created: 2026-10-14T14:07:49Z
- URL: https://github.com/openai/codex/issues/53989
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

### What version of the Codex App are you using (From “About Codex” dialog)?

Installed desktop app version at filing: **26.1007.71326 (build 20398)**, read from the app bundle metadata.

Codex surface in ChatGPT.app, bundle identifier `com.openai.codex`.

### What subscription do you have?

Not specified in this report.

### What platform is your computer?

- macOS **27.0.1 (26A434)**, Apple Silicon
- `uname -mprs`: `Darwin 27.0.0 arm64 arm`
- Google Chrome **155.0.8059.80**
- macOS **Stage Manager enabled**
- Codex and Chrome are on the **same macOS desktop Space**
- Native Computer Use through `cua_repl`

### What issue are you seeing?

With Stage Manager enabled, Computer Use captures Chrome's small, tilted preview in the left recent-app strip instead of a normal browser-window image.


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
gh issue comment 53989 --repo openai/codex --body-file outbound/drafts/2026-10-14/openai-codex-53989.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
