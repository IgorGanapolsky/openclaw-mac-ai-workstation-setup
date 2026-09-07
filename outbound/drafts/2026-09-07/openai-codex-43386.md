# Draft for openai/codex#43386

- OP: @yu2001-s
- Title: [macOS] Computer Use times out after ~5 seconds when accessing Xcode 27 Device Hub (-10005: timeoutReached)
- Created: 2026-09-07T07:43:43Z
- URL: https://github.com/openai/codex/issues/43386
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

## Summary

Computer Use cannot access Xcode 27's Device Hub (`com.apple.dt.Devices`). Calling `cua.getApp("com.apple.dt.Devices")` fails after approximately five seconds with:

```text
Computer Use server error -10005: timeoutReached
```

Finder can be read successfully both before and immediately after the Device Hub timeout in the same Computer Use session. This blocks using Computer Use to inspect and interact with Device Hub during iOS development.

## Environment

- ChatGPT desktop app, Codex task: `26.901.51231` (build `8109`, bundle ID `com.openai.codex`)
- Unified Computer Use plugin installed: `26.901.51231`
- Computer Use plugin installed: `1.0.1000926`
- macOS: `27.0` (build `26A5425a`), Apple Silicon / arm64
- Selected Xcode: `27.0` (build `27A5252f`, Xcode-beta.app)
- Device 

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
gh issue comment 43386 --repo openai/codex --body-file outbound/drafts/2026-09-07/openai-codex-43386.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
