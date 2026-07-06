# Daily Engagement Report — 2026-07-06

## Replies needing follow-up

No new replies in the last 7 days.

> **Note:** Two Posted rows exist in `lead-log.md` for `openai/codex` (issues #22927 and #22949), both dated 2026-05-18 — outside the 7-day lookback window (2026-06-29 → 2026-07-06). Reply-checking was also blocked by a tooling constraint (see Errors section). Any replies on those older threads are not captured here.

---

## New on-target open issues (not yet commented)

Search: `Computer Use macOS repo:openai/codex state:open` — 30 results, all new (none overlap with lead-log.md known numbers: 22856, 22903, 22921, 22927, 22949).

Issues flagged as **strong symptom matches** (Computer Use / Intel Mac / Remote Control failures) are marked `⭐`.

| # | createdAt | Author | Title (first 100 chars) | Symptom match |
|---|---|---|---|---|
| #31231 | 2026-07-06 | @jiangxu0826 | After going to Settings → Connections → Control This Mac, the page immediately jumps back | ⭐ Computer Use / Control This Mac failure |
| #31180 | 2026-07-05 | @wenwenyu | Locked Computer Use cannot be enabled on macOS 12.5.1 Intel: sky.node fails to dlopen due to missing | ⭐ Computer Use locked on Intel macOS — sky.node dlopen failure (exact match to prior #22949 pattern) |
| #31161 | 2026-07-05 | @zhiwangsh | Intel Mac regression: Remote Control authorization fails before QR generation and App Snapshot alway | ⭐ Remote Control / Computer Use Intel Mac regression |
| #31160 | 2026-07-05 | @wushijie7866 | Computer Use unavailable on Intel macOS: x64 package lacks macOS service app | ⭐ Computer Use Intel Mac — x64 service app missing (exact match to #22927 / #22949 thread) |
| #31110 | 2026-07-04 | @valentinveyron | Remote Control fails with error " couldn't check security requirements " due to Cloudflare-HTML-chal | ⭐ Remote Control / Computer Use security-check failure |
| #31040 | 2026-07-03 | @chyewon | macOS: compaction checkpoints re-embed screenshots until rollout hits 3.9 GB; ingestion then uses 10 | macOS screenshot pipeline runaway (Computer Use adjacent) |
| #30927 | 2026-07-02 | @covifranklin | Codex CLI 0.142.5 crashes with zsh: trace trap / SIGTRAP on macOS 12.6.3 x86_64, MacBookAir9,1. | Intel macOS crash on CLI launch |
| #31238 | 2026-07-06 | @j-nary | Codex Chrome extension stays Disconnected on macOS: native pipe rejects signed host as untrusted-cod | macOS extension connectivity |
| #31237 | 2026-07-06 | @WaterWhisperer | Codex App file preview fails to render small TypeScript files above ~739 lines | — |
| #31224 | 2026-07-06 | @xc1427 | Codex App chat search should match emoji in thread titles | — |
| #31202 | 2026-07-06 | @HyunCho-5 | Codex Desktop 26.623.101652 shows selected model capacity error despite available usage | — |
| #31186 | 2026-07-05 | @svan71 | Codex macOS Dock icon setting does not update app launcher / notification icon surfaces | macOS Dock / launcher |
| #31123 | 2026-07-04 | @skyofdust | Hitting codex quota block although quota limit is not met | — |
| #31112 | 2026-07-04 | @TidalPaladin | Codex macOS app crops image previews, showing only the top portion | macOS image preview |
| #31107 | 2026-07-04 | @Robin-Cartier | Codex Desktop: @ tool/plugin picker is very slow with many installed tools and plugins | — |
| #31090 | 2026-07-04 | @malikdraz | Codex Desktop renderer crashes after subagent wait with React #185 and unknown conversation state | — |
| #31047 | 2026-07-03 | @raforomeroh | Existing threads remain blank, new threads work, intermittent SIGKILL crashes | — |
| #31020 | 2026-07-03 | @arturmarkelov | Codex Desktop: "Failed to attach large pasted text" / Russian UI: "Не удалось прикрепить большой фра | — |
| #31018 | 2026-07-03 | @mounteee | macOS Codex desktop app: window controls are overlapped at 100% zoom | macOS UI layout |
| #31003 | 2026-07-03 | @zanllp | VS Code extension diff opening feels slower than native VS Code diff | — |
| #30991 | 2026-07-03 | @fortytwode | iOS Codex Mobile permanently renders only the streamed tail (~20-30 lines) of a long assistant messa | — |
| #30968 | 2026-07-03 | @Nekokir | Chrome plugin domSnapshot fails because bundled InjectedScript lacks incrementalAriaSnapshot | — |
| #30957 | 2026-07-02 | @dkhokhlov | SQLite WAL journal mode corrupts runtime DBs (logs_2, state_5, …) when CODEX_HOME is on a network fi | — |
| #30951 | 2026-07-02 | @JavierPiedra | Device options invisible in Dimensions dropdown | — |
| #30950 | 2026-07-02 | @kandamuniasamy2016 | Unrecoverable error doing Codex session. with gpt-5.5-cyber-preview | — |
| #30945 | 2026-07-02 | @bingo-soft | Codex Desktop marks in-progress commentary as task_complete while plan is incomplete, silently endin | — |
| #30944 | 2026-07-02 | @coltonfoley | Codex App project thread creation tools are missing | — |
| #30928 | 2026-07-02 | @NightGlowww | Codex Desktop 26.623.81905 crashes with CrBrowserMain EXC_BREAKPOINT/SIGTRAP and app-server memory s | macOS crash |
| #30921 | 2026-07-02 | @736773174 | Custom GPT endpoint cannot use Imagen (The built-in image_gen tool described by the skill is not exp | — |
| #30920 | 2026-07-02 | @hauomu | Codex Desktop ARM64 Windows idles at ~10% CPU in main process | — |

**Top priority for engagement:** #31160, #31180 — both are direct "Computer Use unavailable on Intel macOS" issues and match the exact symptom pattern of the existing #22927/#22949 thread where prior IgorGanapolsky comments generated technical dialogue.

---

## Posted rows scanned

**2 rows** in `lead-log.md` have Status `POSTED` and URL containing `github.com/openai/codex/issues/`:

- #22927 (2026-05-18) — @Scubasteve417 — "Computer Use runtime app missing"
- #22949 (2026-05-18) — @river-walras — "MCP startup incomplete (computer-use)"

Both dates fall outside the 7-day lookback window (cutoff: 2026-06-29), so neither appears in the "Replies needing follow-up" section. Reply status for these two issues could not be verified due to tooling constraints (see Errors).

---

## Errors

1. **Reply-checking blocked (Step 3):** The GitHub MCP server for this session is scoped exclusively to `igorganapolsky/openclaw-mac-ai-workstation-setup`. Attempts to call `issue_read` on `openai/codex` issues #22927 and #22949 returned `Access denied: repository "openai/codex" is not configured for this session`. The `gh` CLI is also not installed in this environment (`gh: command not found`). Replies on the two Posted issues could not be retrieved. To check manually: visit https://github.com/openai/codex/issues/22927 and https://github.com/openai/codex/issues/22949 and scan for comments after 2026-05-18 not authored by IgorGanapolsky.

2. **`createdAt` missing from some search results:** The MCP search response for most issues omitted the `createdAt` field at the top level; dates shown above were read from the `createdAt` field where present and confirmed as accurate for all 30 results returned.
