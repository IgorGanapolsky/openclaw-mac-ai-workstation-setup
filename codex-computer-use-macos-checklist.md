# Codex Computer Use Not Working On macOS: Practical Checklist

If Codex Computer Use says unavailable, refuses app access, or works in one runtime but not another, verify the active runtime, not just the files on disk.

## Checks

```bash
codex mcp list
codex plugin marketplace add /Applications/Codex.app/Contents/Resources/plugins/openai-bundled
codex mcp list

ls ~/.codex/plugins/cache/openai-bundled/computer-use/*/.codex-plugin/plugin.json
ls ~/.codex/plugins/cache/openai-bundled/computer-use/*/.mcp.json
```

## Common Failure Layers

- macOS Screen Recording is not granted.
- macOS Accessibility is not granted.
- The app bundle has `computer-use`, but the active Codex home/plugin cache does not.
- A stale OAuth profile or isolated Codex home prevents the app-server runtime from running.
- OpenClaw is answering through its normal coding runner instead of the Codex runtime that owns Computer Use.
- `list_apps` works, but actual app control fails because per-app approval or MCP elicitation is broken.

## Working Pattern

- Keep the normal coding/business agent on a token-smart route.
- Use a dedicated Codex-runtime agent for Computer Use.
- Prove it with an actual tool call, such as app listing or active UI inspection.

Paid done-for-you setup:
https://igorganapolsky.github.io/openclaw-mac-ai-workstation-setup/
