<!--
STATUS: HELD — do not post until #22927 (posted 2026-05-18 as comment 4480331215) has either:
  (a) received OP engagement, confirming the pattern works, OR
  (b) been sitting silent for 3+ days, signaling we should diversify channels

Reason: posting this and #22927 on the same day from the same account, both cross-referencing #21579,
makes the engagement pattern visible and risks reading as templated outreach rather than community help.
Space them out. The #21579 author isn't going anywhere; the cross-reference will still be valid.

This draft IS substantive (real cross-references, real OS-specific diagnostic, no Stripe link) — the hold
is about timing, not content quality.
-->

@river-walras — the `MCP startup incomplete (failed: computer-use)` error on `26.513.20950` / macOS 15.7.3 looks like the same downstream symptom as the bundled-marketplace regeneration bug @ShalevZorany identified in #21579 (and which surfaces slightly differently for @Scubasteve417 in #22927 as `runtime app is missing`).

Quickest diagnostic — grep your Codex Desktop logs right after a relaunch:

```
bundled_plugins_runtime_marketplace_written pluginCount=2 pluginNames=["browser","latex"]
bundled_plugin_uninstall_requested pluginId=computer-use@openai-bundled
```

If both lines appear on every startup, the cache / codesign / LaunchServices state aren't the issue — Codex Desktop is regenerating the bundled marketplace as `browser` + `latex` only, and removing `computer-use` with `reason=not_in_bundled_marketplace_plugin_names`. That's why MCP startup never completes for `computer-use`: the plugin gets uninstalled before the runtime can complete the handshake.

One thing specific to macOS 15.7.3 worth checking: `LC_BUILD_VERSION` on the bundled SkyComputerUseClient. If the bundled binary was built targeting macOS 15.0+ and you've stayed on a 15.7.x patch, that's fine — but if you upgraded *down* from a 15.8+ build at some point, there can be a Mach-O `minos` mismatch that surfaces as the same `MCP startup incomplete` symptom but is actually a separate cause:

```
/usr/bin/otool -l "/Applications/Codex.app/Contents/Resources/plugins/openai-bundled/computer-use/"*/SkyComputerUseClient | grep -A 2 LC_BUILD_VERSION
```

If `minos` is higher than your current macOS, that's the gap and the marketplace-regeneration log lines won't help — you need a Codex build whose bundled client targets your OS.

Until OpenAI fixes the marketplace-regeneration path, the workaround documented in #21579 is to restore `openai-bundled` from `/Applications/Codex.app/Contents/Resources/plugins/openai-bundled` after each launch. Not great, but it gets you a working Computer Use.

(Longer write-up of the runtime / cache / marketplace distinctions for this error class: https://igorganapolsky.github.io/openclaw-mac-ai-workstation-setup/computer-use-plugin-unavailable.html)
