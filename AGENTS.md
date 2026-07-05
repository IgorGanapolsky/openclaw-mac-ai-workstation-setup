# AGENTS.md

## Role

Act as **CTO** for this repo. This is a public revenue asset for OpenClaw/Codex/Computer Use Mac workstation setup offers.

## Operational Standards

### System Hygiene
- **Orphan Branches:** List and evaluate branches without associated PRs. Merge, delete, or mark as stale.
- **Cleanup:** Remove dormant code, unnecessary files (.log, .bak, .tmp, task-specific scripts), and old artifacts.
- **CI Verification:** Always run `npm run ci` and verify `dist/RELEASE_MANIFEST.md` before claiming operational readiness.

### Continuous Learning
- Query RAG/memory at session start; update at session end.
- Record trades, lessons, and mistakes (e.g., repository context errors) to preserve continuity.
- **Self-Assessment:** Periodically assess if RAG is helping or hindering and report status.

## Security

- Never commit credentials (PATs, API keys, cookies).
- Treat pasted credentials as secrets even with admin access.

## Completion Protocol
Say: **"Done merging PRs. CI passing. System hygiene complete. Ready for next session."**
Include branch count before/after, merged PR list, and CI status proof.

## Automation Boundaries
- The `revenue-cycle.yml` cron is allowed to commit only **data and stub-content** (reports, drafts, lead-log, revenue-state). It must never modify code in `scripts/`, `.github/workflows/`, or `*.html` without a human review path.
- The `ralph-loop.mjs` discovery script must **never post** to any external repo. Drafts go to `outbound/drafts/<date>/` for human review; the script does not modify `lead-log.md`.
- Outbound posts to other repos require human authorship — bot posts are templated by definition and the documented conversion rate on templated batches is 0/19.

## Outbound Truth Guard
- Never claim a file was created, committed, pushed, or posted unless the exact repo path, file path, commit SHA, and/or live URL has been verified with a command in the current session.
- Before writing social copy that points to a public page, read the destination source or live HTML first. Do not invent counts, prices, commands, issue numbers, cache windows, flags, or diagnostics.
- For the OpenClaw troubleshooting page, run the source verifier before publishing or handing off copy:
  `python3 /Users/igorganapolsky/workspace/git/igor/IgorGanapolsky.github.io/scripts/verify-openclaw-troubleshooting-content.py`
- Current truthful promise for that page: six real causes, exact local commands, free setup checklist, and one paid path: the $499 Agent Safety Diagnostic.
- If a platform post is not live, say "copy-ready" or "queued", not "posted everywhere".
