# Draft for openai/codex#25243

- OP: @guidedways
- Title: `Too many files opened` system error due to **Locked use** in Codex.app
- Created: 2026-05-30T08:38:58Z
- URL: https://github.com/openai/codex/issues/25243
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

### What version of the Codex App are you using (From “About Codex” dialog)?

Version 26.527.31326 (3390)

### What subscription do you have?

Pro

### What platform is your computer?

macOS

### What issue are you seeing?

`syspolicyd` is seeing one `/Applications/Codex.app/Contents/MacOS/Codex` process opening every 1 second, and the entire system freezes up after a little while, nothing opens with `Too many files opened` errors. I've tried killing every codex process, killing `syspolicyd`, rebooting etc, it starts to spam `syspolicyd` the moment I launch Codex.app

```
/
/usr/libexec/syspolicyd
/usr/lib/dyld
/Library/Preferences/Logging/.plist-cache.1EfNczv9
/private/var/db/SystemPolicyConfiguration/Tickets-shm
/private/var/db/analyticsd/events.allowlist
/private/var/db/timezone/tz/2026

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
gh issue comment 25243 --repo openai/codex --body-file outbound/drafts/2026-05-31/openai-codex-25243.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
