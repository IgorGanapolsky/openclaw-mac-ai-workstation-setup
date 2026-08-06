# Draft for openai/codex#37295

- OP: @vcz-Chan
- Title: [macOS 14.3] Computer Use PiP respawn loop leaks one zombie process every ~1.65 seconds
- Created: 2026-08-06T15:14:41Z
- URL: https://github.com/openai/codex/issues/37295
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

### What version of the Codex App are you using (From “About Codex” dialog)?

26.730.61639 (build 6234)

### What subscription do you have?

Pro

### What platform is your computer?

Darwin 23.3.0 arm64 arm
macOS 14.3 (23D2057), Apple Silicon

### What issue are you seeing?

On macOS 14.3, the ChatGPT/Codex desktop app continuously launches SkyComputerUseService for Computer Use picture-in-picture.

The helper declares macOS 14.4 as its minimum supported version in both:

- Info.plist: LSMinimumSystemVersion = 14.4
- Mach-O metadata: LC_BUILD_VERSION minos 14.4

SkyComputerUseService crashes approximately 0.1 seconds after each launch with:

- EXC_BAD_ACCESS
- SIGBUS
- KERN_PROTECTION_FAILURE
- libobjc.A.dylib: map_images_nolock

After each crash, the desktop app launches another instance 

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
gh issue comment 37295 --repo openai/codex --body-file outbound/drafts/2026-08-06/openai-codex-37295.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
