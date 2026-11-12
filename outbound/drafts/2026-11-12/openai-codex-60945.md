# Draft for openai/codex#60945

- OP: @Mon0010-eng
- Title: Computer Use: “Any App” is missing from ChatGPT settings on macOS
- Created: 2026-11-12T00:38:17Z
- URL: https://github.com/openai/codex/issues/60945
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

Environment  
ChatGPT desktop app 26.1106.51428, macOS 26.0.1, Apple Silicon

Steps to reproduce

1. Open the ChatGPT desktop app on this Mac.
2. Go to Settings → Computer Use.
3. Check the options under Control.
(01a1cd0f-d6c4-7692-994a-93bcf13e0ba9)

Actual behavior
Google Chrome and Locked Use appear, but “Any App” is missing. Computer Use is also absent from the plugin list. A connection test in Codex returns `Trusted RPC service is not configured: sky`.

Expected behavior
“Any App” appears in Computer Use settings and can be enabled to control local Mac apps.

Additional context  
Computer Use works on another device with the same account. Rebuilding the bundled plugin catalog on this Mac did not resolve the issue.

Screenshot
<img width="1392" height="932" alt="ChatGPT 이미지 2026년

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
gh issue comment 60945 --repo openai/codex --body-file outbound/drafts/2026-11-12/openai-codex-60945.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
