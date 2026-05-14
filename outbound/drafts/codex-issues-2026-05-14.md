# Staged GitHub Issue Comments — 2026-05-14

Drafts only. Each comment maps an open Codex Computer Use issue to one of the six
documented root causes and references the free `scripts/self-diagnose.mjs` tool.
Nothing has been posted. Approve individual comments to post via:

```
gh issue comment <num> --repo openai/codex --body-file outbound/drafts/<num>.md
```

After posting, append the comment URL to `lead-log.md` with status `Posted`.

Boundary: no revenue claims, no "guaranteed fix" language, redact API keys before
attaching logs. Each draft closes with a single $19 quick-read CTA.

---

## codex#19932 — kwj903 — Intel macOS, bundled plugin missing

Maps to: Symptom 1 (cache not pointed at active Codex home) + Intel x86_64 binary check.

```
Hit this same class of failure on Intel; the bundled plugin path exists but
the cache that Codex actually reads is in your user dir, and on Intel the
SkyComputerUseClient binary may be arm64-only.

Two checks that usually surface the real cause:

  codex mcp list
  ls -la ~/.codex/plugins/cache/openai-bundled/computer-use/*/.codex-plugin/plugin.json
  file /Applications/Codex.app/Contents/Resources/plugins/openai-bundled/computer-use/*/SkyComputerUseClient

If `file` doesn't include `x86_64`, no amount of reinstall fixes it — the
client is arm64-only and you need a Rosetta path or the x86_64 build.

I wrote up the full diagnostic walkthrough for this and 5 other root causes
(TCC mismatch, multiple CODEX_HOMEs, session reuse, etc.), plus a free
read-only script that bundles all the checks with redaction:
https://igorganapolsky.github.io/openclaw-mac-ai-workstation-setup/troubleshooting.html

If the output of those three commands doesn't surface a clear cause, the $19
quick read on that page reads the bundle and names the root cause.
```

---

## codex#20683 — NewCoffee7477 — Crashes when inspecting Outlook

Maps to: Symptom 4 (child-process TCC posture).

```
The "crashes on Outlook specifically" pattern is usually not Outlook itself —
it's the AppleScript / Apple Events permission for the parent process that's
launching SkyComputerUseService. macOS tracks Automation permission by the
*sending* bundle, and if Codex was launched from a host (Warp, cmux, iTerm,
Zed terminal) that lacks Automation permission for Outlook, you get a crash
with no clear stderr instead of a permission prompt.

Worth confirming the parent chain:

  ps -o ppid=,command= -p $$
  # Then: System Settings > Privacy & Security > Automation
  # Verify the parent terminal has Outlook checked.

Full walkthrough of this and 5 other Computer-Use-on-macOS root causes, plus a
free script that captures the parent chain + TCC posture into a redacted bundle:
https://igorganapolsky.github.io/openclaw-mac-ai-workstation-setup/troubleshooting.html

If the bundle doesn't clearly show which Symptom matches, the $19 quick read
names the root cause from the captured output.
```

---

## codex#18803 — JOJOMRJ — "plugin unavailable" but bundled plugin exists

Maps to: Symptom 1.

```
This is almost always the bundled plugin path being correct but the active
Codex home not having registered it — the cache that Codex reads lives in
your user directory and the install never hydrates it.

  codex mcp list
  ls -la ~/.codex/plugins/cache/openai-bundled/computer-use/*/.mcp.json
  # If absent:
  codex plugin marketplace add /Applications/Codex.app/Contents/Resources/plugins/openai-bundled
  codex mcp list

If `computer-use` is still missing after that, you have a second Codex home
(see Symptom 5 in the walkthrough — stale CODEX_HOME from a shell rc that
exported one path while the installer wrote to another).

Walkthrough with all 6 root causes:
https://igorganapolsky.github.io/openclaw-mac-ai-workstation-setup/troubleshooting.html

Free local script that runs all checks and redacts secrets:
clone the repo and run `node scripts/self-diagnose.mjs` — writes a bundle to
your Desktop you can review or paste into the $19 quick read for a confirmed
root cause.
```

---

## codex#18258 — hhushhas — Same "plugin unavailable" symptom

Maps to: Symptom 1.

```
Three commands usually surface the actual cause for this exact error:

  codex mcp list
  ls -la ~/.codex/plugins/cache/openai-bundled/computer-use/*/.mcp.json
  printenv | grep -i codex

The third one matters more than people expect: if you have an old shell rc
that exported a different CODEX_HOME, the runtime that's responding to text
is a different runtime than the one that owns the Computer Use plugin.

I documented the six real causes that produce this error (plugin cache
miss, TCC bundle-ID mismatch, route fallback inheritance, child-process
Apple Events posture, multiple Codex homes, session reuse) at:
https://igorganapolsky.github.io/openclaw-mac-ai-workstation-setup/troubleshooting.html

There's also a free read-only script in the repo that bundles all the
checks with secret redaction. Run it, review the output, or paste into the
$19 quick read for a confirmed root cause.
```

---

## codex#20211 — alexander-k-1 — Codex updated under different macOS user

Maps to: Symptom 5 directly.

```
This is the cleanest case of Symptom 5: an installer wrote to a per-user
Codex home while the runtime that's actually answering uses a different
$CODEX_HOME from your shell rc. The Computer Use plugin is in one home; the
running process is reading the other.

  printenv | grep -i codex
  ls -la ~/.codex ~/Library/Application\ Support/Codex 2>/dev/null
  # Then pick one canonical CODEX_HOME, remove the other from every shell rc,
  # and re-run `codex plugin marketplace add /Applications/Codex.app/Contents/Resources/plugins/openai-bundled`

Full walkthrough with the other 5 root causes that produce similar symptoms:
https://igorganapolsky.github.io/openclaw-mac-ai-workstation-setup/troubleshooting.html

Free script in the repo captures both homes + your env into a redacted bundle.
If you want the bundle reviewed and the root cause confirmed in writing, $19
quick read is on the same page.
```

---

## codex#20183 — xowenx — macOS 14.8.1, bundled client requires macOS 15

Maps to: minimum-OS variant of Symptom 1 (documented on computer-use-plugin-unavailable.html).

```
If the bundled SkyComputerUseClient was built for macOS 15, it won't run on
14.8.1. Confirmable with:

  /usr/bin/otool -l /Applications/Codex.app/Contents/Resources/plugins/openai-bundled/computer-use/*/SkyComputerUseClient \
    | grep -A3 LC_BUILD_VERSION

Look for `minos`. If it's 15.x, you need either an older Codex version that
shipped a 14-compatible client, or an OS upgrade — no reinstall will fix it.

Full breakdown of the macOS-version-mismatch case and 5 other root causes
for "Computer Use unavailable":
https://igorganapolsky.github.io/openclaw-mac-ai-workstation-setup/computer-use-plugin-unavailable.html

If you want me to confirm from your `otool` output whether it's the OS gate
or a different cause, the $19 quick read on that page handles it same-day.
```

---

## codex#21846 — kmufti7 — Code-signing invalid helper on macOS 26.4.1

Maps to: Symptom 2 (TCC bundle-ID / codesign mismatch).

```
"Code-signing invalid helper" with permissions already granted is almost
always a bundle-ID mismatch — macOS recorded TCC approval for one signed
bundle, but the helper that's running has a different Team ID or Identifier.
Confirmable with:

  codesign -dv --verbose=2 /Applications/Codex.app 2>&1 | grep -E "Identifier|TeamIdentifier"
  ps -axo pid,comm | grep -i codex
  # And compare against the TCC.db approved client (requires FDA):
  sqlite3 ~/Library/Application\ Support/com.apple.TCC/TCC.db \
    "SELECT client, auth_value FROM access WHERE service='kTCCServiceScreenCapture';"

If the running bundle ID and the TCC-approved bundle ID differ, the fix is
to remove the old/unsigned copy and re-grant against the canonical bundle.

I wrote up the full TCC bundle-ID failure mode plus 5 other root causes at:
https://igorganapolsky.github.io/openclaw-mac-ai-workstation-setup/troubleshooting.html

Free script in the repo (scripts/self-diagnose.mjs) captures both sides of
the codesign/TCC comparison into a redacted bundle. $19 quick read on the
same page reviews the bundle and names the root cause.
```

---

## codex#20556 — larryisthere — Screenshot freeze after enabling permissions

Maps to: Symptom 4 (Apple Events / TCC posture for child process).

```
Screenshot freezing right after enabling Screen Recording + Accessibility,
without an error, is the classic AppleScript-error-1743 ("Not allowed to
send Apple events") presented as a hang — the Computer Use helper *did*
get screen permission, but is silently blocked on the AppleScript bridge
because the parent process lacks Automation permission.

  ps -o ppid=,command= -p $$
  # Grant Automation to the actual parent (Warp / cmux / iTerm / Zed)
  # in System Settings > Privacy & Security > Automation,
  # then restart that parent process.

Full walkthrough with this and 5 other Computer-Use-on-macOS root causes:
https://igorganapolsky.github.io/openclaw-mac-ai-workstation-setup/troubleshooting.html

Free local script (scripts/self-diagnose.mjs) captures the parent chain +
TCC posture. If the bundle doesn't make the cause obvious, $19 quick read
confirms the root cause and the next command.
```
