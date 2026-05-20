# Draft for openai/codex#18258

- OP: @hhushhas
- Title: Codex app on macOS shows 'Computer Use plugin unavailable'
- Created: 2026-04-17T03:40:30Z
- URL: https://github.com/openai/codex/issues/18258
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

## Edit (Workaround, for people landing here)

Potential local workaround that may help some users while waiting for an official fix:

1. Ensure `features.apps = true` in `~/.codex/config.toml`.
2. If logs show missing `computer-use@openai-bundled`, repair the cache path under `~/.codex/plugins/cache/openai-bundled/computer-use` so it points to the bundled plugin at `/Applications/Codex.app/Contents/Resources/plugins/openai-bundled/plugins/computer-use`.
3. Install/launch the helper app once from the bundle into `~/Applications/Codex Computer Use.app`.
4. Confirm helper registration with: `defaults read com.openai.sky.CUAService`.

This is a user-side workaround, not an official root-cause fix.

Region note: Computer Use is currently unavailable at launch in EEA/UK/Switzerland.

## Summary

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
gh issue comment 18258 --repo openai/codex --body-file outbound/drafts/2026-05-20/openai-codex-18258.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
