@Scubasteve417 — the `runtime app is missing` error here looks like the same downstream symptom as #21579, where @ShalevZorany dug into the Codex Desktop logs and found a concrete root cause that's worth checking before chasing reinstall paths:

On every Codex Desktop launch, the `BundledPluginsMarketplace` regenerates the runtime bundled marketplace with **only `browser` and `latex`**, and then explicitly uninstalls `chrome` and `computer-use` with `reason=not_in_bundled_marketplace_plugin_names`. Once that happens, the helper bundle still exists on disk but the runtime can't reach it — which surfaces exactly as `Computer Use could not start because its runtime app is missing` from `list_apps` / `get_app_state`, even after a clean reinstall.

Quickest way to confirm you're hitting the same bug — grep your Codex Desktop logs for these strings right after a relaunch:

```
bundled_plugins_runtime_marketplace_written pluginCount=2 pluginNames=["browser","latex"]
bundled_plugin_uninstall_requested pluginId=computer-use@openai-bundled
```

If both lines appear on every startup, your cache, codesign, LaunchServices state, and Chrome native-host manifest are not the gap — Codex Desktop itself is regenerating the bundled marketplace without `computer-use` and removing it. In that case reinstalling the runtime can't help (Codex removes it again on next launch); the workaround until OpenAI ships a fix is to restore the marketplace from `/Applications/Codex.app/Contents/Resources/plugins/openai-bundled` after each launch, which is what @ShalevZorany ended up doing in #21579.

If those log lines don't appear, then it's not the marketplace-regeneration bug and the diagnostic forks are different — happy to dig in.

(Longer write-up of the runtime-vs-cache-vs-marketplace distinctions for this error: https://igorganapolsky.github.io/openclaw-mac-ai-workstation-setup/computer-use-plugin-unavailable.html)
