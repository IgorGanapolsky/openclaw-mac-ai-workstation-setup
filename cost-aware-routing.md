# Cost-Aware LLM Routing

The NadirClaw routing pattern is useful because it classifies prompts locally before spending on a stronger model. The high-ROI version for this offer is simple: route cheap, escalate only when complexity or risk requires it, and log the decision.

## Routing Tiers

### Tier 1: Cheap/Fast

Use for:

- formatting
- short summaries
- checklist generation
- simple extraction
- low-risk drafts

### Tier 2: Standard

Use for:

- normal coding
- workflow design
- proposal customization
- support diagnostics

### Tier 3: Strong/Expensive

Use for:

- architecture decisions
- security analysis
- multi-file refactors
- high-risk external action planning
- ambiguous failures

## Escalation Triggers

- security, auth, payment, legal, or customer-data language
- multi-step code changes
- production incident
- unclear requirements
- tool execution or external messaging
- low classifier confidence

## Operator Command

```bash
npm run route:demo
```

The demo classifies representative prompts without making live model calls.

## Delivery Checklist

- [ ] Default model tier is documented
- [ ] Escalation triggers are documented
- [ ] Security/payment/customer-data prompts escalate
- [ ] Routing decisions are logged
- [ ] Buyer understands cost/performance tradeoff
