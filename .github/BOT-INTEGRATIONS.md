# Bot Integrations

This repo uses a small ThumbGate-style automation layer sized for a static paid-offer site.

## Active Automation

- `CI`: validates HTML metadata, local links, secret patterns, and release manifest generation.
- `Deploy GitHub Pages`: publishes the static site from `main`.
- `CodeQL`: scans JavaScript automation scripts weekly and on PRs.
- `Release`: packages the offer/fulfillment bundle on `v*` tags or manual dispatch.
- `Dependabot`: opens npm and GitHub Actions update PRs weekly.
- `Dependabot Auto-Merge`: approves Dependabot PRs and enables auto-merge after required checks.

## Operating Rules

- Never store pasted credentials or PATs in this repo.
- Use PRs for behavior changes.
- Merge only after CI and CodeQL finish successfully.
- Keep outreach evidence in `lead-log.md`; do not claim revenue until Stripe confirms it.
