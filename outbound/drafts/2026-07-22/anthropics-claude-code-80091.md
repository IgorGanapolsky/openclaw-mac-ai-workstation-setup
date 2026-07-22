# Draft for anthropics/claude-code#80091

- OP: @margastasian
- Title: --channels host mode uses stored Keychain OAuth credentials instead of valid CLAUDE_CODE_OAUTH_TOKEN (precedence inverted vs docs)
- Created: 2026-07-22T08:23:25Z
- URL: https://github.com/anthropics/claude-code/issues/80091
- Suggested landing page: `claude-code-channels-not-working.html`

## Bug report excerpt (first 800 chars)

## Summary

In channel host mode (`claude --channels plugin:discord@claude-plugins-official`, long-running headless process under launchd via a `pty.spawn` wrapper), Claude Code authenticates with the **stored Keychain OAuth session** (`Claude Code-credentials`) even when a **valid** `CLAUDE_CODE_OAUTH_TOKEN` (long-lived `sk-ant-oat01` from `claude setup-token`) is present in the process environment.

Per the documented precedence (https://code.claude.com/docs/en/authentication.md), `CLAUDE_CODE_OAUTH_TOKEN` (tier 5) should win over stored subscription OAuth credentials (tier 6). Interactive mode and headless `-p` mode both honor this; channel host mode appears not to.

Because the stored access token has a ~8h TTL and is not refreshed in headless/pty contexts (see #50743, #28827), the hos

---

## Draft comment

<!--
HUMAN REVIEW REQUIRED. Write a personalized diagnostic below.

Rules:
- DO NOT fabricate diagnostic commands, log labels, or internal behaviors
  you cannot verify in the actual source repo or the OP's bug report.
- Lead with one specific detail from the OP's report (proves you read it).
- Name one verified check or workaround.
- Link to https://igorganapolsky.github.io/openclaw-mac-ai-workstation-setup/claude-code-channels-not-working.html
  with UTM tag ?utm_source=channels-issue&utm_medium=funnel&utm_campaign=qr-2026.
- End with the $19 quick-read CTA: https://buy.stripe.com/aFaeVd3Ug3n05pLfSH3sI0u?utm_source=channels-issue&utm_medium=funnel&utm_campaign=qr-2026
  and a refund clause.
- Cap length at ~2000 chars.
-->

(write here)

---

## Post command (when reviewed and edited)

```
gh issue comment 80091 --repo anthropics/claude-code --body-file outbound/drafts/2026-07-22/anthropics-claude-code-80091.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
