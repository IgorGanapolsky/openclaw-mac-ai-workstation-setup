# Daily Engagement Report — 2026-05-18

## Replies needing follow-up

No new replies in the last 7 days.

_(Reason: Lead-log contains 5 rows dated 2026-05-14, but all have Status **VERIFIED PITCH** — none match the required Status values of `Posted` or `Follow-up posted`. Additionally, none of the Source fields contain a `github.com/openai/codex/issues/` URL, so zero issues were eligible for reply-scanning.)_

## New on-target open issues (not yet commented)

| # | createdAt | @author | title (first 100 chars) | likely-symptom-match |
|---|-----------|---------|-------------------------|----------------------|
| #23298 | 2026-05-18T12:26:55Z | @guidedways | Pinned summary does not show when right panel is showing | UI/panel rendering |
| #23294 | 2026-05-18T12:05:58Z | @sentience | "Keep this Mac awake" doesn't prevent Mac connected to power from sleeping | macOS power/sleep management |
| #23292 | 2026-05-18T11:43:13Z | @andrewsohrabi | Codex Desktop main thread can stay stuck thinking when a sub-agent remains active | macOS Desktop hang/freeze |
| #23290 | 2026-05-18T11:08:42Z | @djalmirmariano | Codex Mobile restores stale revoked Mac connection and fails with 403 | macOS remote connection |
| #23289 | 2026-05-18T11:00:14Z | @jackymo97321-commits | Pairing stuck on "Waiting for desktop" after QR scan — all client-side resets exhausted | macOS Desktop pairing |
| #23285 | 2026-05-18T10:56:07Z | @Accademia | Our current Codex task appears to have been incorrectly classified as destructive network-attack beh | Security false-positive |
| #23282 | 2026-05-18T10:46:13Z | @Accademia | Security Heuristics Regression: Excessive False Positives in version 5.5 xhigh | Security regression |
| #23281 | 2026-05-18T10:28:01Z | @stargif | Codex Desktop pet becomes oversized and clips the running status bubble | macOS Desktop UI |
| #23272 | 2026-05-18T08:17:19Z | @soueldi | Codex Desktop custom pet active animations play once, then fall back to idle | macOS Desktop UI |
| #23267 | 2026-05-18T07:47:04Z | @WineChord | Codex App main process SIGSEGV after Browser Use IAB sidebar teardown | macOS crash / Computer Use |
| #23266 | 2026-05-18T07:41:35Z | @BravoNiceCatch | [Bug] VS Code Codex extension host stays above 300% CPU on macOS | macOS CPU/performance |
| #23264 | 2026-05-18T07:19:25Z | @Xueziq | macOS Codex Desktop Settings show "Unable to save" for sandbox/approval config writes due to configV | macOS Desktop settings |
| #23262 | 2026-05-18T07:11:38Z | @imkebe | No chrome plugin despite docs content - MacOS | macOS plugin/install |
| #23258 | 2026-05-18T06:57:12Z | @nannestad | Codex stuck at "You're out of Codex messages" | quota/billing |
| #23248 | 2026-05-18T06:07:32Z | @rockmandash | IME composition Enter is not guarded on macOS desktop app | macOS Desktop input |
| #23245 | 2026-05-18T05:00:17Z | @thughy | Codex Desktop conversation output vertically jitters while reading results | macOS Desktop UI |
| #23240 | 2026-05-18T04:06:55Z | @ceddybi | Codex Cloud Web UI shows an error page when attaching an image file | file attach / Computer Use |
| #23195 | 2026-05-17T21:09:55Z | @JoanR112 | Mac OS could not open codex because it's malware | macOS Gatekeeper/install |
| #23183 | 2026-05-17T19:14:38Z | @andrei-assa | Long worktree names cause clipping of worktree dropdown menu in "Handoff to Worktree" Dialog | macOS Desktop UI |
| #23169 | 2026-05-17T16:25:51Z | @gnicox | Codex Desktop macOS Intel does not persist approval_policy / sandbox settings from UI | macOS Intel settings |
| #23152 | 2026-05-17T13:12:45Z | @ljs1592 | Mobile remote connection misses Mac Codex App threads in project list | macOS remote/mobile |
| #23131 | 2026-05-17T08:39:53Z | @bongsu-rapportlabs | TypeScript SDK fails to parse item.completed for large Figma MCP tool result | SDK / MCP tooling |
| #23122 | 2026-05-17T07:26:56Z | @pinotao | Codex Mobile setup QR on Android resolves to unhandled https://com.openai.chat link | mobile setup |
| #23120 | 2026-05-17T07:05:24Z | @MisterZhouZhou | Plugins interface rendering anomaly / fails to load | plugin rendering |
| #23119 | 2026-05-17T06:57:49Z | @twhoff | codex_models_manager::manager: failed to refresh available models: timeout waiting for child process | model refresh timeout |
| #23114 | 2026-05-17T05:55:56Z | @Krishnamurthy-sfdx | Codex mobile app popup not showing in iOS | iOS mobile |
| #23111 | 2026-05-17T04:43:39Z | @jyxjjj | Codex Git commit prompt does not work when using ChatGPT for iOS remote control on macOS | macOS + iOS remote |
| #23109 | 2026-05-17T04:08:14Z | @marsbdigital | Codex 0.129.0-alpha.9 breaks Xcode Coding Assistant with decode error | macOS Xcode integration |
| #23100 | 2026-05-17T01:34:14Z | @guidedways | Queueing does not work when project is not in focus in the Codex app | macOS Desktop focus |
| #23078 | 2026-05-16T21:12:35Z | @emanueledenaro | Codex mobile remote connection cannot be paired again after removing device on Mac | macOS remote pairing |

## Posted rows scanned

**0 issues checked** (no rows in lead-log.md matched Status `Posted` or `Follow-up posted` with a `github.com/openai/codex/issues/` URL).

Lead-log rows present (all Status = VERIFIED PITCH, none eligible):
- #81917 (2026-05-14) — mindfury
- #81908 (2026-05-14) — DashLabsDev
- #81907 (2026-05-14) — jbetala7
- #81906 (2026-05-14) — jalehman
- #81912 (2026-05-14) — 1231CheGites

## Errors

- **`gh` CLI unavailable** (`gh: command not found`). Step 3 reply-scanning and Step 4 candidate listing fell back to GitHub MCP server tools (`mcp__github__search_issues`). Reply-scanning (Step 3) was moot as there were zero eligible "Posted" rows; Step 4 new-candidate search succeeded via MCP.
- **Issue numbers in lead-log do not reference `openai/codex`**: Source column uses bare `GitHub #NNNNN` without a repo URL, so no cross-repo deduplication was possible beyond numeric exclusion (81906, 81907, 81908, 81912, 81917 — none overlapped with returned results in the 23xxx range).
