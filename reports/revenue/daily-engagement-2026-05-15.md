# Daily Engagement Report — 2026-05-15

## Replies needing follow-up

No new replies in the last 7 days.

> **Reason:** `lead-log.md` contains 5 rows, all with status `VERIFIED PITCH`. None have status `Posted` or `Follow-up posted`, and none reference a `github.com/openai/codex/issues/` URL. Zero issues were eligible for reply-scanning.

## New on-target open issues (not yet commented)

| # | createdAt | author | title (first 100 chars) | likely symptom match |
|---|-----------|--------|-------------------------|----------------------|
| #22822 | 2026-05-15T11:09:58Z | @ba0gu0 | Computer Use MCP fails on macOS 15.7.x because bundled SkyComputerUseClient 1.0.791 requires a newer | macOS version mismatch / plugin unavailable |
| #22811 | 2026-05-15T09:31:32Z | @tunarob | Codex Desktop macOS plugin UI broken for installed plugins | plugin unavailable / UI regression |
| #22805 | 2026-05-15T08:27:05Z | @trukhinyuri | Codex Desktop regression: @Computer / Computer Use disappears from mention completion after Any App | feature regression / Computer Use missing |
| #22694 | 2026-05-14T21:01:05Z | @lattwood | Computer Use has an undocumented hard requirement on macOS 26.0 | undocumented OS requirement |
| #22628 | 2026-05-14T09:25:45Z | @aleksei666777 | Codex Desktop: spawned subagents with Computer Use receive image omitted while parent thread receive | subagent / image omission bug |
| #21987 | 2026-05-10T00:34:58Z | @Bughunter-Geek | Codex Beta main process spins at ~290% CPU after large Computer Use thread | CPU hang / performance |
| #21846 | 2026-05-08T23:26:39Z | @kmufti7 | Codex Computer Use fails on macOS 26.4.1 with code-signing invalid helper | code-signing / helper crash |
| #21668 | 2026-05-08T05:34:29Z | @GGBondBlueWhale | Privacy/security risk: Codex Computer Use captures wrong macOS Space/window instead of target app | wrong window capture |
| #21610 | 2026-05-07T23:17:41Z | @mzanm | Computer Use and chrome plugins and tabs not visible on macOS in Saudi Arabia | region / visibility issue |
| #21579 | 2026-05-07T20:01:44Z | @ShalevZorany | Computer Use does not appear in Settings despite plugin and helper existing | plugin unavailable in Settings |
| #21068 | 2026-05-04T19:50:48Z | @johnsilvavlogs | Computer Use fallback after Browser Use failure should preserve requested browser/session preference | fallback/preference bug |
| #20852 | 2026-05-03T07:14:26Z | @its-DeFine | Feature request: parallel Computer Use sessions for multiple Codex agents | feature request |
| #20851 | 2026-05-03T07:14:03Z | @its-DeFine | Feature request: first-class Computer Use support from the Codex CLI | feature request |
| #20683 | 2026-05-01T20:49:14Z | @NewCoffee7477 | Computer Use crashes SkyComputerUseService when inspecting Outlook on macOS | service crash / Outlook |
| #20556 | 2026-05-01T03:59:34Z | @larryisthere | macOS: Screenshot freeze/stuck after enabling Codex Computer Use screen/audio recording permissions | permission freeze / screenshot hang |
| #20353 | 2026-04-30T08:41:35Z | @Four1996 | Codex Computer Use helper crashes on macOS 14.x: SkyComputerUseClient built with minos 15.0 | macOS 14.x binary incompatibility |
| #20211 | 2026-04-29T13:55:10Z | @alexander-k-1 | Computer Use unavailable when Codex is updated under a different macOS user | multi-user / update bug |
| #20183 | 2026-04-29T09:43:34Z | @xowenx | Computer Use MCP fails to start on macOS 14.8.1 because bundled client requires macOS 15 | macOS version mismatch |
| #19932 | 2026-04-28T05:39:55Z | @kwj903 | Intel macOS: Computer Use unavailable because computer-use bundled plugin is missing | Intel / plugin missing |
| #19641 | 2026-04-26T06:05:42Z | @kzpromo | Crash on macOS 14.5 – binary built for macOS 15 (SkyComputerUseClient) | macOS 14.x binary incompatibility |
| #19544 | 2026-04-25T09:18:28Z | @mattleong | Homebrew Codex CLI cannot use Computer Use, while Codex.app-bundled CLI works | Homebrew / CLI packaging |
| #19305 | 2026-04-24T07:01:55Z | @htazq | Feature request: Full Computer Use support for Codex Desktop on Windows | feature request (Windows) |
| #19077 | 2026-04-23T04:09:34Z | @todayslibera-dev | Computer Use MCP denies Chrome approval after TCC reset and app restart | TCC / Chrome approval |
| #18896 | 2026-04-21T21:51:21Z | @james-beep-boop | Codex Desktop macOS: Computer Use approval denied via MCP elicitation for every app even after reins | approval denied loop |
| #18803 | 2026-04-21T03:25:05Z | @JOJOMRJ | macOS desktop shows "Computer Use plugin unavailable" even though bundled computer-use plugin exists | plugin unavailable |
| #18755 | 2026-04-20T22:11:23Z | @ianfoo | macOS packaging error: SkyComputerUseClient built for macOS 15.0 crashes on macOS 14.x | macOS 14.x binary incompatibility |
| #18555 | 2026-04-19T10:35:27Z | @davidjpramsay | macOS desktop: bundled Computer Use fails when CODEX_HOME path contains @; settings stays unavailabl | special-char path bug |
| #18522 | 2026-04-19T01:57:50Z | @smartlau83 | Codex Desktop: Computer Use approval denied in old/resumed threads after restart, while new threads | approval denied in resumed threads |
| #18404 | 2026-04-17T22:28:04Z | @liyuyu0505 | [Bug] Computer Use plugin remains "unavailable" on macOS Intel (x86_64) despite MCP server showing a | Intel / plugin unavailable |
| #18258 | 2026-04-17T03:40:30Z | @hhushhas | Codex app on macOS shows 'Computer Use plugin unavailable' | plugin unavailable |

## Posted rows scanned

0 rows scanned — no `lead-log.md` entries have status `Posted` or `Follow-up posted` with a `github.com/openai/codex/issues/` URL.

## Errors

- `gh` CLI is not available in this environment. GitHub issue data was retrieved via the GitHub MCP server (`mcp__github__search_issues`) instead.
- Reply-scan (step 3) was skipped: zero eligible rows in `lead-log.md` met the `Posted`/`Follow-up posted` + `openai/codex` URL criteria.
