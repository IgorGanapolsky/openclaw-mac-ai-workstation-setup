# Agent App Demo Spec

The demo is the simulator. It proves the workflow before live accounts are connected.

## Demo Contract

Input:

- static sample data
- no live send permissions
- no customer secrets
- no irreversible actions

Output:

- structured result
- reasoning summary
- next action
- risk flag
- approval state

## Example: WhatsApp Lead Responder

Input:

```json
{
  "message": "Hi, can you set up an AI agent for WhatsApp and ClickUp this week?",
  "source": "whatsapp",
  "received_at": "2026-05-12T09:15:00-04:00"
}
```

Output:

```json
{
  "lead_score": 88,
  "intent": "setup_request",
  "urgency": "this_week",
  "draft_reply": "Yes. I can map the WhatsApp to ClickUp workflow first, then connect the approved flow. What tools are already connected and who should own new leads?",
  "next_action": "ask_for_current_stack",
  "requires_approval_before_sending": true
}
```

## Example: Daily Owner Briefing

Input:

```json
{
  "new_leads": 7,
  "stale_deals": 3,
  "urgent_messages": 2,
  "calendar_events_today": 4
}
```

Output:

```json
{
  "briefing": "You have 7 new leads, 3 stale deals, 2 urgent messages, and 4 calendar events today. First priority: respond to the 2 urgent messages, then assign owners to the stale deals.",
  "risk_flags": ["stale_deals"],
  "next_action": "assign deal owners"
}
```

## Acceptance Criteria

- The demo output matches the buyer's workflow.
- The buyer approves the output format.
- External actions remain disabled until explicitly approved.
- The implementation has a visible disable path.
- The app has a governance checklist before live access.
- Any security testing is authorized and scoped.
