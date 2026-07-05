# Draft comment — openai/codex#30846 (@johnsilvavlogs, SCStreamErrorDomain -3811)

**Status:** READY. Blocked from posting this session (GitHub scope limited to own repo).
Post from any session with openai/codex in scope, or paste manually.
**Quality floor check:** 3 technical angles ✅, no Stripe link ✅, soft landing link at end ✅.
**Context:** OP is a return visitor — also filed #22903 (May, direct @-routing regression).

---

Seeing SCStreamErrorDomain -3811 at stream start usually narrows to one of three states, in order of frequency:

**1. Entitlement present but permission revoked after grant.** macOS can silently invalidate Screen Recording consent when the app bundle changes (update, reinstall, or translocation). Check what the OS actually has on file:

```
tccutil dump | grep -i screencapture
codesign -dv --entitlements - /Applications/Codex.app
```

If the bundle ID appears with `denied` or is absent entirely, remove and re-add Codex under System Settings → Privacy & Security → Screen Recording, then fully quit (Cmd+Q) and relaunch. The re-grant only takes effect on a fresh process.

**2. A concurrent process holding the SCStream.** ScreenCaptureKit allows a limited number of simultaneous capture sessions; -3811 shows up when stream creation loses that race. Worth checking before relaunch:

```
lsof | grep -i replayd
pgrep -fl "screencapture|loom|zoom|obs"
```

If another capture app grabbed the stream first, enabling Computer Use *before* launching it avoids the collision.

**3. The marketplace-regeneration path from #21579.** If the plugin was recently (re)installed, the stale-listing behavior discussed there can leave a half-registered plugin that requests the stream with an outdated bundle reference — same -3811 surface. Settings → Extensions → Force Refresh, then retry, rules this out in ~30 seconds.

If none of those move it, posting the first ~20 lines of `--computer-use-debug` output here would help — the SCStream init log line differs between the entitlement case and the collision case.

(I keep a longer symptom→command matrix for these failure classes here, if useful: https://igorganapolsky.com/openclaw-mac-ai-workstation-setup/troubleshooting.html)
