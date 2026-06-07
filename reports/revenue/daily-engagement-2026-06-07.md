# Daily Engagement Report — 2026-06-07

## Replies needing follow-up

No new replies in the last 7 days.

> **Note:** The two POSTED openai/codex issues on record (#22927 and #22949) were both posted on 2026-05-18, which is 20 days before today and falls outside the 7-day scan window (2026-06-01 – 2026-06-07). No reply checks were performed for those issues under this run.

---

## New on-target open issues (not yet commented)

Issues returned by `gh issue list --repo openai/codex --search "Computer Use macOS" --state open --limit 30`, filtered to exclude already-tracked numbers (18803, 22856, 22903, 22921, 22927, 22949):

| # | createdAt | @author | title (first 100 chars) | likely-symptom-match |
|---|-----------|---------|-------------------------|----------------------|
| #18258 | 2026-04-17 | @hhushhas | Codex app on macOS shows 'Computer Use plugin unavailable' | plugin-unavailable; matches `computer-use-plugin-unavailable.html` |
| #18755 | 2026-04-20 | @ianfoo | macOS packaging error: SkyComputerUseClient built for macOS 15.0 crashes on macOS 14.x | Intel/version mismatch; matches `codex-computer-use-intel-mac.html` |
| #19932 | 2026-04-28 | @kwj903 | Intel macOS: Computer Use unavailable because computer-use bundled plugin is missing | Intel + plugin missing; strong match `codex-computer-use-intel-mac.html` |
| #20683 | 2026-05-01 | @NewCoffee7477 | Computer Use crashes SkyComputerUseService when inspecting Outlook on macOS | service crash; matches `troubleshooting.html` |
| #22694 | 2026-05-14 | @lattwood | Computer Use has an undocumented hard requirement on macOS 26.0 | undocumented OS floor; matches `troubleshooting.html` |
| #24000 | 2026-05-22 | @adrewtr | Codex Desktop: cannot enable Computer Use or Mobile Remote on macOS | plugin-unavailable; matches `computer-use-plugin-unavailable.html` |
| #24056 | 2026-05-22 | @fylucion | Codex App Appshots fail: Failed to spawn managed Computer Use service | service spawn fail; matches `troubleshooting.html` |
| #24252 | 2026-05-23 | @SultanAlsafran | macOS: Chrome and Computer Use disappear after restart; logout/login temporarily restores | restart persistence bug; matches `troubleshooting.html` |
| #24394 | 2026-05-25 | @jzthree | Codex Computer Use auth plugin breaks macOS lock-screen unlock | lock-screen regression; novel angle |
| #24437 | 2026-05-25 | @NightGlowww | Intel macOS x64 26.519.41501 still missing computer-use helper for Appshots and Locked | Intel x64 helper missing; strong match `codex-computer-use-intel-mac.html` |
| #25045 | 2026-05-29 | @lyfoppa | Codex Desktop x64 missing Computer Use installer, cannot enable locked-screen control | Intel x64 installer missing; matches `codex-computer-use-intel-mac.html` |
| #25788 | 2026-06-02 | @Co5mos | Locked Computer Use fallback typed into macOS login password field | lock-screen data leak; novel/high-severity angle |
| #25813 | 2026-06-02 | @ahmadmustafaanis | macOS Desktop filters computer-use out of bundled marketplace even though bundled plugin | marketplace filtering; matches `computer-use-plugin-unavailable.html` |
| #25815 | 2026-06-02 | @BeamoINT | Codex Computer Use Logs Taking Up My Entire Computer Storage | log runaway; matches `troubleshooting.html` |
| #25817 | 2026-06-02 | @Zh1406628191 | macOS: Codex Cannot Use App Snapshots or the Computer Use Plugin | Appshots + plugin combo; matches `computer-use-plugin-unavailable.html` |
| #26282 | 2026-06-04 | @wise-l | Codex Desktop: Computer Use / "Any application" option missing on macOS Intel | Intel + Any App missing; matches `codex-computer-use-intel-mac.html` |
| #26309 | 2026-06-04 | @abhaysk123 | macOS - Codex App Navigation / Usability Issue | general macOS; weak title match |
| #26319 | 2026-06-04 | @ahmedasmar | Codex Computer Use auth plugin adds 3-5s delay to macOS lock-screen unlock | lock-screen delay; novel angle |
| #26377 | 2026-06-04 | @michikaru | Computer Use plugin install does not persist after restart in Codex desktop | restart persistence; matches `troubleshooting.html` |
| #26451 | 2026-06-04 | @fatgingercats | Codex Desktop macOS: bundled Computer Use plugin skipped as missing after update | bundled plugin skipped; matches `computer-use-plugin-unavailable.html` |
| #26458 | 2026-06-04 | @jsduke246 | Codex desktop repeatedly crashes when using Computer Use | repeated crash; matches `troubleshooting.html` |
| #26536 | 2026-06-05 | @psybhan1 | Windows Codex app: Computer Use shows "Computer Use plugins unavailable" despite current | plugin-unavailable (Windows); off-platform for macOS assets |
| #26592 | 2026-06-05 | @1h20496138-source | Codex App on macOS repeatedly prompts to reinstall bundled computer-use plugin after eve | reinstall loop; matches `computer-use-plugin-unavailable.html` |
| #26738 | 2026-06-06 | @chenyh200807 | Codex Desktop Computer Use can trigger memory runaway to 172GB on macOS | memory runaway; matches `troubleshooting.html` |
| #26743 | 2026-06-06 | @be-student | Codex Desktop: Locked Computer Use stays on loginwindow; app GUI access returns cgWindo | lock-screen / loginwindow; novel high-signal angle |
| #26817 | 2026-06-06 | @Molozey | No launch on MacOS | vague; weak symptom match |
| #26842 | 2026-06-07 | @humanfy | Intel macOS x64 26.602.40724 still missing computer-use helper for Appshots and Locked | Intel x64 helper missing (TODAY); strong match `codex-computer-use-intel-mac.html` |

**Total new candidates: 27**

---

## Posted rows scanned

**0 issues scanned** — no `openai/codex` issues with status `Posted` or `Follow-up posted` have a Date within the 7-day window (2026-06-01 – 2026-06-07).

Previously posted issues on record (outside window):
- #22927 — posted 2026-05-18 (20 days ago)
- #22949 — posted 2026-05-18 (20 days ago)
