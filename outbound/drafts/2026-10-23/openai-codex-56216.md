# Draft for openai/codex#56216

- OP: @Gitsamx
- Title: [macOS][Computer Use] Thunderbird coordinate input fails after closing startup integration dialog
- Created: 2026-10-22T16:50:23Z
- URL: https://github.com/openai/codex/issues/56216
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

# Native macOS Computer Use: window resolution fails after startup dialog closes

## Environment
- macOS 27.0.1.
- Desktop app: 26.1016.61520 (build 21421).
- Native Computer Use helper: 26.1015.1001540 (build 1001540).
- Application under test: Thunderbird for macOS, with configured IMAP accounts.
- Subscription: not included in this sanitized technical report.

## Reproduction confirmed on 22 October 2026
1. Enable Thunderbird's “Always check to see if Thunderbird is the default email app when opened”. Quit Thunderbird completely.
2. Bind/launch Thunderbird with the documented `cua.getApp` API. Its selected window is the standalone “System settings” startup dialog.
3. Click “Omitir integración” (Skip Integration). Do not set Thunderbird as the default application.
4. Obtain fresh accessi

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
gh issue comment 56216 --repo openai/codex --body-file outbound/drafts/2026-10-23/openai-codex-56216.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
