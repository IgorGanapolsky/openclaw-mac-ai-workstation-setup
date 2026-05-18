| Date | Source | Person/Handle | Problem | Action | Status |
| --- | --- | --- | --- | --- | --- |
| 2026-05-14 | GitHub #81917 | mindfury | Dashboard hang on Linux | Voss: $499 Diagnostic pitched. | **VERIFIED PITCH** (Comment: 4454644906) |
| 2026-05-14 | GitHub #81908 | DashLabsDev | Telegram hang during API fail | Voss: $1,500 Managed System pitched. | **CLOSED** (Fixed by maintainer) |
| 2026-05-14 | GitHub #81907 | jbetala7 | Webchat whitespace loss | Hormozi: $499 Diagnostic pitched. | **VERIFIED PITCH** (Comment: 4454677355) |
| 2026-05-14 | GitHub #81906 | jalehman | Context window mismatch | Blount: $19 Quick Read pitched. | **VERIFIED PITCH** (Comment: 4454732177) |
| 2026-05-18 | GitHub #18803 | JOJOMRJ | Computer Use plugin unavailable | Blount: $19 Quick Read pitched. | **POSTED** (Comment: 4480934144) |
| 2026-05-18 | https://github.com/openai/codex/issues/22856 | @LuisJG8 | MCP `computer-use` startup failure | **HELD** — channel suspended (0% conv. on 5 priors). Asset: troubleshooting.html. | DRAFT IN `_holding/` |
| 2026-05-18 | https://github.com/openai/codex/issues/22903 | @johnsilvavlogs | Direct `@<Mac app>` routing regression | **HELD** — channel suspended. | DRAFT IN `_holding/` |
| 2026-05-18 | https://github.com/openai/codex/issues/22921 | @AbdullahAlawad | iOS LaTeX rendering | **HELD** — channel suspended (off-topic for landing page anyway). | DRAFT IN `_holding/` |
| 2026-05-18 | https://github.com/openai/codex/issues/22927 | @Scubasteve417 | Computer Use "runtime app missing" | **HELD** — channel suspended. Strong asset match. | DRAFT IN `_holding/` |
| 2026-05-18 | https://github.com/openai/codex/issues/22949 | @river-walras | MCP startup incomplete (computer-use) | **HELD** — channel suspended. | DRAFT IN `_holding/` |

---

## 2026-05-18 — Channel analysis (revised)

**Initial assessment (wrong):** Suspended all GitHub outreach based on 5 prior pitches → 0% conversion.

**Corrected assessment:** The 5 "burnt" leads (issues #8190x range) were on a **different repo** — not on `openai/codex`. On `openai/codex` specifically, the IgorGanapolsky account has a **positive precedent**: substantive 3-angle diagnostic comments on #21579 generated multi-round technical dialogue with the OP (@ShalevZorany), who then identified an actual Codex Desktop bug. Soft Stripe-link tails in those comments did not cause friction. Same on #20211.

**Real rule (not "no GitHub comments"):**
- **Allowed:** Comments with ≥3 specific technical angles, real diagnostic commands, attribution to other community members, and a soft (parenthetical, end-of-comment) link to the landing page. Optional Stripe tail acceptable when content is dense enough to earn it.
- **Forbidden:** Comments that lead with a sales offer, contain a Stripe link without ≥3 technical angles above it, or pitch high-ticket ($499 / $1,500) on cold issues. The 5 drafts in `_holding/` remain held because they're empty templates with no substance, not because the channel is dead.

**Inbound track (parallel, long game):** SEO via `troubleshooting.html` + `computer-use-plugin-unavailable.html`. Today: IndexNow submitted (Bing/Yandex/Seznam/Naver), sitemap refreshed. Google Search Console submission pending CEO browser session.

---

## 2026-05-18 — Posted help-only comment

| Date | Issue | OP | Action | Status |
| --- | --- | --- | --- | --- |
| 2026-05-18 | https://github.com/openai/codex/issues/22927 | @Scubasteve417 | Help-only cross-reference to #21579 marketplace-regeneration root cause. No Stripe link in body; soft landing-page link parenthetical. | **POSTED** (Comment: 4480331215) |
| 2026-05-18 | https://github.com/openai/codex/issues/22949 | @river-walras | Substantive cross-reference to #21579 + #22927, adds macOS 15.7.x `minos` angle. | **POSTED** (Comment: 4480978482) |
| 2026-05-18 | https://github.com/openai/codex/issues/18803 | @JOJOMRJ | Earlier comment (4480934144) edited to fix `$19` typo + add 3 inline diagnostic angles + reference #21579. Now matches quality of prior IgorGanapolsky comments on same thread (May 5, May 14). | **EDITED** (Comment: 4480934144) |

---

## 2026-05-18 — Substance rule clarified

The "substance gate" I wrote earlier was too prescriptive. The actual operating rule, derived from observed playbook (4 Channels comments May 14, 3 comments on #18803 over 2 weeks):

- **Quality floor:** any IgorGanapolsky comment on openai/codex must have ≥2 specific diagnostic angles with real commands, and any Stripe link must come AFTER the substance (parenthetical at end, not lead).
- **Volume:** no hard cap. The May 14 batch of 4 in one day didn't burn the account.
- **Edit path:** if a comment goes out below the quality floor (typo, thin substance, sales-first), edit via `gh api -X PATCH repos/.../comments/{id}` rather than deleting.

This is descriptive of what's working, not a new restriction.

---

## 2026-05-18 — SEO + 24/7 infrastructure

**GSC ownership verified** (HTML file method, `google101c2d89e62353fc.html` committed `a5f2d58`). Property `https://igorganapolsky.github.io/openclaw-mac-ai-workstation-setup/` is now verified for `iganapolsky@gmail.com`.

**Sitemap submitted twice** (relative + absolute URL forms; GSC deduplicated to one row). Status currently `Couldn't fetch` — this is the standard immediate-post-submit placeholder. Google's actual crawl typically updates the status within hours to days.

**7 URLs requested for priority indexing** via GSC URL Inspection:
- `/`
- `troubleshooting.html`
- `computer-use-plugin-unavailable.html`
- `codex-computer-use-intel-mac.html`
- `claude-code-computer-use.html`
- `claude-code-channels-not-working.html`
- `quick-read.html`

All received `Indexing requested` confirmation. Daily quota of ~10-12 used 7; left headroom.

**Daily SEO monitor cron added** at `.github/workflows/seo-monitor.yml` (runs 09:17 ET daily). Probes all 8 landing pages + sitemap + robots, attempts a Bing-side index-count snapshot. Writes to `reports/seo/<date>.md`. Read-only; never posts.

**IndexNow cleanup:** removed duplicate key file I'd created. Existing `65f8d0ef3b53207166db38ffcfb69ac7` is the canonical key (used by `.github/workflows/indexnow.yml` on every push to `.html` or `sitemap.xml`).

**On ML/DS/RAG asks:** deferred. $0 MTD + ~5 outreach events is not enough signal to train, predict, or retrieve over. When 3+ weeks of monitor data exist, revisit. Earliest legit use of "RAG" at this scale is comment-draft grounding once the held drafts queue grows.
