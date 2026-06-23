# Draft for openai/codex#29574

- OP: @stevencowell
- Title: Computer Use missing from macOS Intel Codex app 26.616.71553
- Created: 2026-06-23T07:06:14Z
- URL: https://github.com/openai/codex/issues/29574
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

## Summary

Computer Use / Record & Replay is unavailable after a clean reinstall of the Codex macOS Intel build. The app logs show that the managed Computer Use service fails to spawn, and the expected Computer Use helper bundle appears to be absent from the installed app bundle.

## Environment

- Codex app version: `26.616.71553`
- Codex bundle version: `4265`
- macOS: `14.7.7`
- Architecture: Intel `x86_64`
- Region: Australia
- Install path: `/Applications/Codex.app`

## What I expected

Computer Use should be available in Codex settings, and Record & Replay should be available as described in the docs once Computer Use is enabled.

## What happened

Computer Use does not appear in the app UI / plugins, even after a clean reinstall.

Today’s logs include:

```text
Failed to reconcile 

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
gh issue comment 29574 --repo openai/codex --body-file outbound/drafts/2026-06-23/openai-codex-29574.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
