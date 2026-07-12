# Draft for anthropics/claude-code#76789

- OP: @greghughespdx
- Title: Subagent spawns inherit enabledPlugins with no per-spawn exclusion; each spawn's copy of a single-consumer channel plugin takes over the resource and the parent session's plugin is never respawned
- Created: 2026-07-11T23:52:37Z
- URL: https://github.com/anthropics/claude-code/issues/76789
- Suggested landing page: `claude-code-channels-not-working.html`

## Bug report excerpt (first 800 chars)

## Summary

For plugins that hold a single-consumer external resource (Telegram's one-`getUpdates`-
poller-per-token is the canonical case), the current settings-inheritance model makes
subagent use and channel use mutually destructive: every Agent-tool subagent or teammate
spawned in the project loads the plugin, the plugin's own startup logic takes over the
single resource (SIGTERM to the incumbent poller, by design - see plugin server.ts
stale-PID handling), and when the subagent exits, its poller exits with it. The parent
session's poller was already killed at spawn time and is never respawned, so the channel
goes silently deaf. The user sees nothing until messages stop arriving.

This is NOT the 409/competing-poller symptom as filed in earlier reports: since telegram
plugin v0.0.6 the

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
gh issue comment 76789 --repo anthropics/claude-code --body-file outbound/drafts/2026-07-12/anthropics-claude-code-76789.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
