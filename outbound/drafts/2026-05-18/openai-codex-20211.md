# Draft for openai/codex#20211

- OP: @alexander-k-1
- Title: Computer Use unavailable when Codex is updated under a different macOS user
- Created: 2026-04-29T13:55:10Z
- URL: https://github.com/openai/codex/issues/20211
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

### What version of the Codex App are you using?

26.422.71525

### What platform is your computer?

macOS, Apple Silicon

### What issue are you seeing?

Computer Use showed as unavailable after Codex was updated while logged in as a different local macOS user account than the one later using Codex.

This appears to be a per-user bundled marketplace/cache sync issue. The installed app bundle contained the `computer-use` plugin, but the active user's `~/.codex` bundled marketplace/cache did not.

### Local evidence

The installed app bundle contained:

```text
/Applications/Codex.app/Contents/Resources/plugins/openai-bundled/plugins/computer-use
```

But the active user's per-user bundled marketplace/cache only had:

```text
browser-use
latex-tectonic
```

The active user's generated bundl

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
- End with the $19 quick-read CTA: https://igorganapolsky.github.io/openclaw-mac-ai-workstation-setup/speed-to-lead.html
  and a refund clause.
- Cap length at ~2000 chars.
-->

(write here)

---

## Post command (when reviewed and edited)

```
gh issue comment 20211 --repo openai/codex --body-file outbound/drafts/2026-05-18/openai-codex-20211.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
