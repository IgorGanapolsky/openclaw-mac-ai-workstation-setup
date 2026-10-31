# Draft for openai/codex#58468

- OP: @rukshanp-ux
- Title: macOS browser computer use: file selection rejected citing earlier read-only hold after explicit upload authorization
- Created: 2026-10-31T01:52:28Z
- URL: https://github.com/openai/codex/issues/58468
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

### Summary

In a desktop assistant workflow on macOS using browser computer use, an approval reviewer rejected local video file selection for an upload after the owner had explicitly authorized uploading and publishing. The rejection referred to an earlier read-only inspection instruction.

This is a report of conflicting approval behavior, not a confirmed diagnosis of stale context or a request to bypass safeguards.

### Observed sequence

1. The owner initially limited the work to read-only inspection.
2. The owner later explicitly authorized uploading and publishing.
3. The assistant attempted to select the local video file in the browser upload workflow.
4. The reviewer rejected that file-selection action, referencing the earlier read-only hold.
5. The failure occurred before the uplo

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
gh issue comment 58468 --repo openai/codex --body-file outbound/drafts/2026-10-31/openai-codex-58468.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
