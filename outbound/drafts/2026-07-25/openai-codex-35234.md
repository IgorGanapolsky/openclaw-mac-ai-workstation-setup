# Draft for openai/codex#35234

- OP: @Pape45
- Title: Computer Use native pipe rejects signed in-app sender as unauthenticated on macOS 26.5.2
- Created: 2026-07-24T18:57:21Z
- URL: https://github.com/openai/codex/issues/35234
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

### What happened?

Computer Use is installed and enabled in the official macOS desktop app, but even the read-only `list_apps` call fails after the native Computer Use service starts.

After a full app quit and relaunch, the tool reports:

```text
Sky Computer Use native pipe startup failed
Caused by: Sky Computer Use native pipe is unavailable:
Sky Computer Use native pipe closed before response
```

The freshly started `SkyComputerUseService` process remains running, but its unified logs repeat:

```text
[com.apple.securityd:security_exception] MacOS error: -67062
[inc.software.app:Computer Use] Sender process is not authenticated
```

macOS resolves `-67062` as:

```text
code object is not signed at all
```

However, the app, Computer Use helper, packaged Node runtime, and `node_repl` 

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
gh issue comment 35234 --repo openai/codex --body-file outbound/drafts/2026-07-25/openai-codex-35234.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
