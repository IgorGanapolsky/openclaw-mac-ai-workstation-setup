# Draft for openai/codex#37036

- OP: @igor-markin
- Title: [macOS] Chrome and Computer Use tools missing only in project threads after Desktop 26.730.61639 update
- Created: 2026-08-05T06:17:21Z
- URL: https://github.com/openai/codex/issues/37036
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

## Summary

After updating and fully restarting Codex Desktop on macOS on 2026-08-05, the bundled Chrome and Computer Use plugins remain installed and enabled, but their shared `node_repl` tool is not provisioned consistently into project-backed threads.

The same installation can use Chrome and Computer Use successfully in a projectless thread. In affected project threads, the plugin skills may be visible, but `mcp__node_repl__js` is either absent from the tool set or advertised but not callable.

This is a regression after the Desktop update, not a Chrome extension installation problem, a macOS app permission problem, or a user project deletion/recreation problem.

Related general report: #30026. This issue adds a current-build macOS reproduction and local root-cause evidence about Deskt

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
gh issue comment 37036 --repo openai/codex --body-file outbound/drafts/2026-08-05/openai-codex-37036.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
