# Draft for openai/codex#27494

- OP: @johnsilvavlogs
- Title: Computer Use `type_text` strips PT-BR accents in Safari/web textareas on macOS
- Created: 2026-06-11T00:08:08Z
- URL: https://github.com/openai/codex/issues/27494
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

## Environment
- Codex Desktop: `26.608.12217` build `3722`
- macOS: `26.3` build `25D125`
- Computer Use plugin: `computer-use@openai-bundled` enabled
- Helper bundle: `~/.codex/plugins/cache/openai-bundled/computer-use/1.0.809/Codex Computer Use.app`
- Helper bundle signature: valid on disk and satisfies its Designated Requirement

## Summary
On this Mac, literal `type_text` into Safari/web textareas drops PT-BR accented vowels and mangles complaint text. The same text survives `set_value` and clipboard paste, so this appears to be a text-entry path bug rather than a rendering issue.

## Repro
1. Open a Safari textarea or a local probe page.
2. Call `mcp__computer_use.type_text` with:
   `ação, reclamação, não, já, própria, entrega física, às 19:51, R$ 322,66, NF-e, João`
3. Observe the 

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
gh issue comment 27494 --repo openai/codex --body-file outbound/drafts/2026-06-11/openai-codex-27494.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
