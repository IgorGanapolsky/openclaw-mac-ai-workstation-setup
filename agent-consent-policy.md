# Agent Consent Policy

Agents should work with humans, not instead of them. This policy model makes permissions granular, scoped, time-bounded, revocable, and checked on every action.

## Action Matrix

Examples:

- `read_email`
- `draft_email`
- `send_email`
- `delete_email`
- `read_calendar`
- `modify_calendar`
- `read_crm`
- `write_crm`
- `read_finance`
- `create_invoice`
- `issue_refund`
- `post_public`
- `send_dm`
- `run_shell`
- `deploy_code`

## Consent Record

```json
{
  "consent_id": "consent_001",
  "user_id": "user_igor",
  "agent_id": "agent_content_hermes",
  "allowed_actions": ["read_calendar", "draft_email"],
  "denied_actions": ["send_email", "delete_email", "issue_refund"],
  "resources": ["calendar:primary", "email:inbox"],
  "reason": "daily briefing demo",
  "expires_at": "2026-05-12T22:00:00Z",
  "max_uses": 10,
  "uses": 0,
  "revoked": false
}
```

## Policy Decision Inputs

Every action check evaluates:

- user identity
- agent identity
- tool identity
- action
- resource
- consent
- risk level
- transaction token
- timestamp

## Risk Levels

- **Low:** read status, classify, summarize, draft.
- **Medium:** modify calendar, update CRM, create task.
- **High:** send external message, post publicly, deploy code, run shell.
- **Critical:** transfer money, refund, delete records, change security settings.

## Just-In-Time Prompt

When the policy is missing or the action is sensitive, ask:

- Agent:
- User:
- Requested action:
- Resource:
- Reason:
- Risk:
- Approve once, approve with policy, or deny:

## Revocation

Consent must be checked on every action. Do not cache long-term decisions. Revoked or expired consent fails immediately.

## Operator Command

```bash
npm run consent:demo
```

The demo evaluates allowed, expired, over-limit, revoked, and sensitive actions.
