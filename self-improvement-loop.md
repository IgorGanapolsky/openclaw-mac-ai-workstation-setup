# Self-Improvement Loop

Hermes-style agents are winning mindshare because they turn completed work into reusable procedural memory. OpenClaw can keep its transparent file-based style while adding a simple reflection loop.

## Loop

After each meaningful task:

1. Record the goal.
2. Record what worked.
3. Record what failed or was risky.
4. Extract a reusable pattern.
5. Decide whether it becomes a checklist, offer asset, script, or skill.
6. Run validation before promoting it.

## Reflection Template

```md
# Reflection

Goal:

What worked:

What failed:

Reusable pattern:

Promotion target:

Validation:
```

## Promotion Targets

- `agent-app-catalog.md` for sellable workflows
- `upwork-proposal-bank.md` for marketplace wording
- `agent-governance-standard.md` for delivery controls
- `ai-agent-security-audit.md` for security patterns
- scripts for repeatable checks

## Guardrails

- Do not write secrets into reflections.
- Do not promote unverified claims.
- Do not treat activity as revenue.
- Do not turn one-off hacks into reusable delivery promises.

## Operator Command

```bash
npm run reflect:demo
```

This creates a local reflection artifact under `dist/reflections/`.
