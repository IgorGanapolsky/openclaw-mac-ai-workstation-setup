# Draft for openai/codex#39732

- OP: @TahitianBlue
- Title: [macOS] CODEX_HOME symlink triggers unbounded computer-use worker leak and V8 OOM in ~90s
- Created: 2026-08-20T15:42:59Z
- URL: https://github.com/openai/codex/issues/39732
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

# ChatGPT desktop (macOS) aborts ~90 s after every launch: unbounded `computer-use` worker-thread leak when `CODEX_HOME` is reached through a symlink

Related reports with the same worker-leak/OOM symptom but without this symlink-vs-real-path isolation: #38813, #39110, #38769.

## Summary

If `CODEX_HOME` is given as a path that traverses a symlink, the app leaks Node `worker_threads` named `computer-use` at roughly 4/s from startup. None are ever released. At ~320 total threads V8 can no longer obtain memory and calls `node::OOMErrorHandler()`, aborting the whole process. This happens with no user interaction — the app dies before it is usable.

Passing the **resolved real path** for the exact same directory makes the app completely stable. The data is identical; only the string differs.


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
gh issue comment 39732 --repo openai/codex --body-file outbound/drafts/2026-08-21/openai-codex-39732.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
