# Durable Agent Workflows

Cloudflare Dynamic Workflows shows the useful platform pattern: each tenant or agent can have its own durable plan, and every step can retry, sleep, wait for approval, and resume later.

This repo does not need Cloudflare-specific code to benefit from the pattern. The high-ROI move is to define agent apps as durable plans.

## Durable Plan Shape

Every agent app should declare:

- tenant or buyer
- workflow name
- trigger
- steps
- approval waits
- retry budget
- timeout
- resume behavior
- failure notification
- proof artifact

## Example

```json
{
  "tenant": "buyer",
  "workflow": "daily-owner-briefing",
  "trigger": "07:00 local time",
  "steps": [
    "load_sources",
    "summarize",
    "risk_check",
    "wait_for_approval_if_external_send",
    "deliver_briefing",
    "write_proof"
  ],
  "retry_budget": 3,
  "approval_wait": "indefinite",
  "proof": "run log plus delivered briefing"
}
```

## Delivery Checklist

- [ ] Workflow has a named trigger
- [ ] Each external action is its own step
- [ ] Human approval waits are explicit
- [ ] Retry budget is documented
- [ ] Long waits do not require a foreground terminal
- [ ] Resume behavior is documented
- [ ] Proof artifact is written after completion

## Product Angle

Use this language in proposals:

> I will build this as a durable agent workflow: each step is logged, retryable, approval-gated where needed, and resumable if the process restarts.
