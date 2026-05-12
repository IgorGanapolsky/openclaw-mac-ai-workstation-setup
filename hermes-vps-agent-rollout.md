# Hermes VPS Agent Rollout

Hermes is useful as an on-the-go personal assistant and scheduled-task agent. OpenClaw/Codex remains the main coding workstation. The high-ROI pattern is focused agents with separate permissions, memory, schedules, and keys.

## Role Split

- **OpenClaw/Codex:** deep coding, repo changes, PRs, CI, local Mac automation.
- **Hermes CLI:** VPS admin, transparent setup, memory inspection, skill maintenance.
- **Hermes Telegram:** low-risk on-the-go tasks, crons, reminders, summaries, approved drafts.

## Agent Inventory

Track each VPS/container in a private meta-project:

- agent name
- role
- VPS host/IP
- install style: Docker or root
- admin URL
- GitHub backup repo
- env file location
- allowed tools
- forbidden tools
- cron list
- security notes

Do not put tokens, root passwords, or personal account credentials in public repos.

## Recommended Agents

### Main COO Hermes

- Role: scheduled summaries, reminders, coordination.
- Channels: Telegram, CLI.
- Keys: low-risk research and notification keys.
- Forbidden: finance writes, public posting, deletion, personal email send.

### Content Hermes

- Role: YouTube/social comment drafting, content research, posting drafts.
- Channels: Telegram, GitHub backup.
- Keys: content-only accounts.
- Forbidden: finance, production infrastructure, customer data.

### Ops/Security Hermes

- Role: weekly VPS hardening check, open port review, backup status, cron health.
- Channels: CLI first, Telegram summary.
- Keys: read-only monitoring where possible.
- Forbidden: firewall changes without approval unless pre-approved in runbook.

## Nightly GitHub Sync Skill

Every Hermes should have a private repo backup and a nightly sync skill:

```text
Create a skill named nightly_github_sync that commits and pushes this agent's skills, memory, soul, config templates, and runbooks to the private backup repo. Run it nightly at local midnight using an hourly cron that checks local time.
```

## Security Rules

- Separate `.env` per agent/container.
- Separate keys per role.
- Least privilege for every API key.
- Telegram bot whitelisted to the owner's user ID.
- GitHub token stored via CLI/config command, not chat.
- Weekly security audit skill checks open ports, suspicious services, backup freshness, and cron health.

## Done Criteria

- `/start` and `hello` work in Telegram.
- Gateway restart process is documented.
- Private GitHub backup repo exists.
- Nightly sync cron exists and is listed.
- Weekly security audit cron exists and is listed.
- Agent memory/user/soul files contain accurate role boundaries.
