# Daily Engagement Report — 2026-07-07

## Replies needing follow-up

No new replies in the last 7 days.

> **Note:** Two Posted rows exist in `lead-log.md` for `openai/codex` (issues #22927 and #22949), both dated 2026-05-18 — outside the 7-day lookback window (2026-06-30 → 2026-07-07). No reply-checking was required or attempted for those issues. Any replies on those older threads are not captured here.

---

## New on-target open issues (not yet commented)

Search: `Computer Use macOS repo:openai/codex state:open` — 30 results, all new (none overlap with lead-log.md known numbers: 22856, 22903, 22921, 22927, 22949).

Issues flagged as **strong symptom matches** (Computer Use / Intel Mac / Remote Control failures) are marked `⭐`.

| # | createdAt | Author | Title (first 100 chars) | Symptom match |
|---|---|---|---|---|
| #31394 | 2026-07-07 | @cschanhniem | Codex computer-use auth plugin hijacks `system.login.screensaver`, locking user out of macOS at the | ⭐⭐ Computer Use auth plugin / macOS screensaver lockout — critical CU failure |
| #31364 | 2026-07-07 | @TimmyYu | Macos 27 beta3 cannot submit task | macOS 27 beta regression |
| #31354 | 2026-07-07 | @crazyi | `unsupported call: mcp__<server>__<tool>` for MCP tools when used with custom Responses API provider | — |
| #31378 | 2026-07-07 | @Sukhjeet-droid | Agent Hangs when spawning new sub-agents after a long session | — |
| #31373 | 2026-07-07 | @Johnny-xuan | Codex App crashes after typing `@` in the new-conversation composer | — |
| #31365 | 2026-07-07 | @NineSu | Codex app upgrade loses Superpowers plugin installed state | — |
| #31391 | 2026-07-07 | @michtesar | Desktop app should not litter ~/Documents/Codex automatically | macOS filesystem |
| #31389 | 2026-07-07 | @MrPiPidan | Codex Desktop Markdown preview does not render local images referenced by relative paths | — |
| #31384 | 2026-07-07 | @schickling-assistant | In-app Browser plugin works but tool discovery routes agents to standalone browser MCP sessions | — |
| #31397 | 2026-07-07 | @mauriciorubio2 | The minimise button on the Codex desktop app doesn't work when you Zoom In | — |
| #31398 | 2026-07-07 | @Perdolique | Can't disable plan mode in the remote connection on my Android phone | — |
| #31264 | 2026-07-06 | @shawnbutton-os | macOS seatbelt policy misses hw.cachelinesize sysctl (only _compat allowed) — mysqld segfaults insid | macOS sandbox / seatbelt policy |
| #31258 | 2026-07-06 | @sachasayan | Dragging a generated image out of Codex Desktop to Finder/Downloads on macOS causes hard crash / app | ⭐ macOS hard crash on image drag |
| #31250 | 2026-07-06 | @idirouhab | Managed Windows sandbox requirement emits misleading warning on macOS | macOS warning |
| #31238 | 2026-07-06 | @j-nary | Codex Chrome extension stays Disconnected on macOS: native pipe rejects signed host as untrusted-cod | ⭐ macOS extension connectivity / code-signing |
| #31231 | 2026-07-06 | @jiangxu0826 | After going to Settings → Connections → Control This Mac, the page immediately jumps back | ⭐⭐ Computer Use / Control This Mac settings regression |
| #31277 | 2026-07-06 | @3mdistal | Codex Desktop: project rename dialog closes when sidebar auto-hides in hover mode | — |
| #31237 | 2026-07-06 | @WaterWhisperer | Codex App file preview fails to render small TypeScript files above ~739 lines | — |
| #31224 | 2026-07-06 | @xc1427 | Codex App chat search should match emoji in thread titles | — |
| #31202 | 2026-07-06 | @HyunCho-5 | Codex Desktop 26.623.101652 shows selected model capacity error despite available usage | — |
| #31186 | 2026-07-05 | @svan71 | Codex macOS Dock icon setting does not update app launcher / notification icon surfaces | macOS Dock / launcher |
| #31180 | 2026-07-05 | @wenwenyu | Locked Computer Use cannot be enabled on macOS 12.5.1 Intel: sky.node fails to dlopen due to missing | ⭐⭐ Computer Use locked on Intel macOS — sky.node dlopen failure (exact match to #22949 pattern) |
| #31161 | 2026-07-05 | @zhiwangsh | Intel Mac regression: Remote Control authorization fails before QR generation and App Snapshot alway | ⭐⭐ Remote Control / Computer Use Intel Mac regression |
| #31160 | 2026-07-05 | @wushijie7866 | Computer Use unavailable on Intel macOS: x64 package lacks macOS service app | ⭐⭐ Computer Use Intel Mac — x64 service app missing (exact match to #22927/#22949) |
| #31123 | 2026-07-04 | @skyofdust | Hitting codex quota block although quota limit is not met | — |
| #31112 | 2026-07-04 | @TidalPaladin | Codex macOS app crops image previews, showing only the top portion | macOS image preview |
| #31110 | 2026-07-04 | @valentinveyron | Remote Control fails with error " couldn't check security requirements " due to Cloudflare-HTML-chal | ⭐⭐ Remote Control / Computer Use security-check failure |
| #31107 | 2026-07-04 | @Robin-Cartier | Codex Desktop: @ tool/plugin picker is very slow with many installed tools and plugins | — |
| #31090 | 2026-07-04 | @malikdraz | Codex Desktop renderer crashes after subagent wait with React #185 and unknown conversation state | — |
| #31047 | 2026-07-03 | @raforomeroh | Existing threads remain blank, new threads work, intermittent SIGKILL crashes | — |

**Top priority for engagement:** #31394, #31180, #31161, #31160, #31110, #31231 — all are direct Computer Use / Intel Mac / Remote Control failures matching the asset at `troubleshooting.html` and the existing #22927/#22949 comment thread pattern.

---

## Posted rows scanned

**2 rows** in `lead-log.md` have Status `POSTED` and URL containing `github.com/openai/codex/issues/`:

- #22927 (2026-05-18) — @Scubasteve417 — "Computer Use runtime app missing"
- #22949 (2026-05-18) — @river-walras — "MCP startup incomplete (computer-use)"

Both dates fall outside the 7-day lookback window (cutoff: 2026-06-30), so neither appears in the "Replies needing follow-up" section. Reply status for these two issues was not checked (out of scope per step 2 date filter).
