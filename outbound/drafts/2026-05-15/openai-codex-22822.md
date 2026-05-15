# Draft for openai/codex#22822

- OP: @ba0gu0
- Title: Computer Use MCP fails on macOS 15.7.x because bundled SkyComputerUseClient 1.0.791 requires a newer Swift runtime
- Created: 2026-05-15T11:09:58Z
- URL: https://github.com/openai/codex/issues/22822
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)


## Summary

On macOS 15.7.x, Codex Desktop can fail to expose the `Computer Use` MCP tools even when the plugin is enabled in `~/.codex/config.toml`.

In my environment, the root cause is that the current bundled Computer Use plugin (`1.0.791`) crashes at startup with a missing Swift Concurrency runtime symbol:

```text
dyld: Symbol not found: _swift_task_addPriorityEscalationHandler
Referenced from: SkyComputerUseClient
Expected in: /usr/lib/swift/libswift_Concurrency.dylib
```

As a result:

- `mcp__computer_use__` does not appear in the model tool list.
- No usable `SkyComputerUseClient mcp` process stays alive.
- Other MCP tools such as browser/playwright/node/pencil can still work.

## Environment

```text
macOS: 15.7.7 (24G720)
Codex Desktop current version: 26.513.20950
Broken Comp

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
gh issue comment 22822 --repo openai/codex --body-file outbound/drafts/2026-05-15/openai-codex-22822.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
