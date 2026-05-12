# MCP Security Gate

GitHub's MCP security scanning signal is directly relevant to OpenClaw delivery: agent workflows now need security checks before code reaches a repository, not only after CI runs.

## High-ROI Implementation

Every agent app or workstation setup should include a pre-commit/pre-PR security gate:

- secret scan before commit or PR
- dependency scan before commit or PR
- local redaction check for generated artifacts
- MCP tool inventory review
- write/destructive/financial tool classification
- documented bypass policy

## Delivery Checklist

- [ ] Repository has GitHub secret scanning or equivalent enabled where available
- [ ] Agent-generated files are scanned before commit
- [ ] `.env`, local config, and generated logs are excluded from public commits
- [ ] MCP tools are categorized as read, write, execute, destructive, financial, or messaging
- [ ] High-risk tools require explicit approval
- [ ] Findings are fixed or documented before merge

## Local Fallback

If GitHub MCP security scanning is unavailable in the buyer environment, use local checks:

```bash
npm run security:local
```

This checks for common token patterns in tracked text files and reports high-risk MCP/tool language in delivery docs.

## Marketplace Positioning

Title:

> I will add a security gate for your AI coding agent and MCP tools

First milestone:

> Audit one repo plus agent/MCP tool setup for secrets, risky tools, and missing approval boundaries.
