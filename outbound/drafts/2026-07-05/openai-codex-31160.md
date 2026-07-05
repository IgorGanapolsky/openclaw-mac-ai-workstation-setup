# Draft for openai/codex#31160

- OP: @wushijie7866
- Title: Computer Use unavailable on Intel macOS: x64 package lacks macOS service app
- Created: 2026-07-05T09:17:14Z
- URL: https://github.com/openai/codex/issues/31160
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

### What version of the Codex App are you using (From “About Codex” dialog)?

Codex app 26.623.101652, build 4674

### What subscription do you have?

Personal account

### What platform is your computer?

Darwin 22.6.0 x86_64 i386; macOS 13.7.8 (22H730); MacBook Pro 13-inch 2020 Intel Core i5

### What issue are you seeing?

Computer Use and Record & Replay are documented as available in the Codex app on macOS in supported regions, but they are unavailable on this Intel Mac.

The installed official x64 Codex app package does not include the macOS Computer Use plugin/service bundle. The Apple Silicon packages do include the plugin/service, but the service executable is arm64-only, not universal, so it cannot run on Intel macOS.

Observed locally:
- Settings does not provide a usable Comput

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
gh issue comment 31160 --repo openai/codex --body-file outbound/drafts/2026-07-05/openai-codex-31160.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
