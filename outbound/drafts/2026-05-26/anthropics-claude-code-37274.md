# Draft for anthropics/claude-code#37274

- OP: @xavierdurawa
- Title: [Feature Request] --channels / plugin support for Bedrock (CLAUDE_CODE_USE_BEDROCK) users
- Created: 2026-03-21T23:25:30Z
- URL: https://github.com/anthropics/claude-code/issues/37274
- Suggested landing page: `claude-code-channels-not-working.html`

## Bug report excerpt (first 800 chars)

## Summary

The `--channels` flag (e.g., `plugin:discord@claude-plugins-official`) is hard-blocked for users on AWS Bedrock. The CLI outputs:

```
--channels ignored (plugin:discord@claude-plugins-official)
Channels are not currently available
```

## Root Cause

The channels feature is gated behind the `tengu_harbor` feature flag, which is resolved via GrowthBook. For Bedrock users (`CLAUDE_CODE_USE_BEDROCK=1`), the feature flag system is bypassed entirely — `l8()` returns the default value (`false`) when `ed()` is false, which it is for all non-first-party API providers (Bedrock, Vertex, Foundry).

Additionally, the channel initialization requires a claude.ai access token (`hA()?.accessToken`), which Bedrock users don't have.

Relevant code path:
```
Ho6() → l8("tengu_harbor", false)
l8(

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
gh issue comment 37274 --repo anthropics/claude-code --body-file outbound/drafts/2026-05-26/anthropics-claude-code-37274.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
