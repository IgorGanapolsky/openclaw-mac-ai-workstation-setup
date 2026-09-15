# Draft for openai/codex#45437

- OP: @phillipdrewthornton
- Title: Native Computer Use unavailable on macOS; documented plugin and “Any App” control missing
- Created: 2026-09-14T14:45:42Z
- URL: https://github.com/openai/codex/issues/45437
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

<img width="579" height="652" alt="Image" src="https://github.com/user-attachments/assets/56e757d5-5315-4116-a284-f94e769983a8" />

I’m using the desktop app’s Codex mode on macOS. I want Codex to work in my already-open native Microsoft Teams and Outlook apps, but native app control is unavailable.

**Observed September 14, 2026:**

- Settings → Computer use shows Google Chrome and Microsoft Excel enabled, Locked use disabled, and “Always-allowed apps: None yet.”
- The documented “Any App” control is absent.
- Searching Plugins for “computer use” does not show the official Computer Use plugin. The visible results are Vera and Grok Bot Control.
- Repeated checks in the task return an empty native-app list.
- The computer-use runtime reports `typeof cua.getApp === "undefined"` and `typeof c

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
gh issue comment 45437 --repo openai/codex --body-file outbound/drafts/2026-09-15/openai-codex-45437.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
