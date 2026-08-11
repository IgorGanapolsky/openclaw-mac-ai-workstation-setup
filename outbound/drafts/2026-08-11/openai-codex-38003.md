# Draft for openai/codex#38003

- OP: @gpxsrz
- Title: Intel macOS: Computer Use startup fails after 26.803.61601 (250 ms native-pipe timeout; managed helper absent)
- Created: 2026-08-11T13:08:26Z
- URL: https://github.com/openai/codex/issues/38003
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

### OpenAI feedback thread

`019ff0ed-18c7-7983-a939-09d9e861e0ec` (submitted with no diagnostic-log upload)

### What version of the Codex App are you using?

ChatGPT/Codex desktop `26.803.61601` (build `6396`), with a valid OpenAI Developer ID signature.

Bundled runtime:

- `@oai/sky 0.6.6`
- `cua_node` Node `24.14.0`
- target `darwin-x64`

### What subscription do you have?

Not included in this public report.

### What platform is your computer?

macOS 14.8.8 (23J620), Intel x86_64.

### What issue are you seeing?

Computer Use could not initialize after the desktop update.

The app log reported:

```text
Failed to reconcile managed Computer Use service
Failed to spawn managed Computer Use service
```

Two direct calls through the currently bundled package:

```js
await (await import(

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
gh issue comment 38003 --repo openai/codex --body-file outbound/drafts/2026-08-11/openai-codex-38003.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
