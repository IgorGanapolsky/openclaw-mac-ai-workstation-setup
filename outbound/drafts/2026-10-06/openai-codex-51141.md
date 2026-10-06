# Draft for openai/codex#51141

- OP: @tarekeal
- Title: [macOS Computer Use] Cmd+A sends Cmd+Q on Belgian AZERTY and quits target apps
- Created: 2026-10-05T17:37:13Z
- URL: https://github.com/openai/codex/issues/51141
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

### What version of the Codex App are you using (From “About Codex” dialog)?

Installed ChatGPT/Codex desktop bundle: **26.930.51102 (build 13100)**, read from the installed app's Info.plist. The About dialog was not inspected.

Computer-use JavaScript package: **`@oai/sky` 0.7.5**. Tool surface: **`mcp__cua_repl.js`**, using native macOS app input.

### What subscription do you have?

Not included.

### What platform is your computer?

**macOS 26.6.2 (build 25G83), Apple Silicon (arm64)**.

`uname -mprs`: `Darwin 25.6.0 arm64 arm`.

Active user keyboard input source reported by macOS preferences: **`com.apple.keylayout.Belgian`** (Belgian AZERTY).

### What issue are you seeing?

Native Computer Use sends **Command+Q (Quit)** when an agent requests **Command+A (Select All)** using the doc

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
gh issue comment 51141 --repo openai/codex --body-file outbound/drafts/2026-10-06/openai-codex-51141.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
