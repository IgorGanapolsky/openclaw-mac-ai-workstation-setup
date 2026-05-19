# Phone Script — 6 Broward Gyms Without Public Owner Email

Use for Phase 2 (call after the 4 email-channel gyms have had 48 hours to reply).

## Universal opener (3 sec, says ALL the time)

> "Hey, this is Igor. I'm not selling memberships — quick question for the owner about your trial-class inquiries. 30 seconds OK?"

Wait for permission. If "yes" or "sure", proceed. If "no", "what is this", or you get a desk person:

## If gatekeeper (front desk, instructor on shift)

> "Got it — what's the best time to reach [Roberto / Sergio / John / Matt / Junior / one of the coaches] for 2 minutes about lead-response automation? I'll call back."

Get a callback window. Hang up. Try the window.

## If owner answers

> "Quick context: when someone fills out your trial-class form after 8 PM, how fast does a reply usually go out? — Most Broward gyms run 2-12 hours, and 60% of those leads convert with whichever gym replied in 5 minutes."

Pause. Let them respond. Possible replies:

**"We're pretty fast."**
> "Great, I'll keep this short then. If 'pretty fast' ever slips to next-morning during a busy week, I built a Claude-based agent that catches the form + IG DM + missed call and replies in 30 seconds with a booking link. Want me to email you a 90-second writeup?"

**"Honestly, we're slow."**
> "That's exactly the pattern I'd want to fix. $500 setup, refund if it doesn't recover 3 missed trial conversions in 30 days, you keep the automations either way. Want me to email the details?"

**"What do you mean by 'agent'?"**
> "30-second version: AI replies on your behalf the moment a trial form / DM / missed call comes in — warm intro, qualifies them, books the class against your existing scheduler. You see it after it's booked, not before. Closes the after-hours and class-time gap. Want the email writeup?"

## Get the email, end the call

> "What's the best email to send the writeup to?"

Write it down. Repeat back for accuracy. Then:

> "I'll send it in the next hour. If it looks useful, just reply. If not, no follow-up. Thanks for the 30 seconds."

Hang up.

---

## The 6 to call (rotate cold and busy time-of-day)

| Gym | Owner | Phone | Best window (Mon-Fri unless noted) |
|---|---|---|---|
| Gordo Jiu Jitsu Academy | Roberto Correa | +1 954-600-7874 | 10:30-11:30 AM (before evening rush, school day) |
| Gracie Barra Coral Springs | Sergio Da Costa | (954) 913-4786 | 10-11 AM or 2-3 PM (avoid kids' classes ~4-7 PM) |
| 10th Planet Pompano BJJ | Matt Walsh | 415.307.0948 | 11 AM - 1 PM (10th Planet adult schedule is evenings) |
| Athlas Training Team | Junior Fernandes | 954-600-3077 | 10-11 AM (Junior owns + coaches; afternoon is teaching) |
| Level Up Boxing and Fitness | (front-desk, ask for an owner) | (954) 280-5122 | 10-11 AM (boxing eves are class-heavy) |
| John Wai Martial Arts | John Wai | (use site form — `levelupboxingandfitness@gmail.com` is wrong here; their site contact form is the route) | submit via site form before 6 PM |

## If voicemail

> "Hey, this is Igor — calling about your trial-class inquiry response time, specifically the after-hours gap. Quick question about whether you'd want a 90-second writeup. Call back at [number] or my email's ops@igorganapolsky.com. Thanks."

## What to log after each call

Append to `outbound/martial-arts-broward-2026-05-18/phone-log.md`:

```
| YYYY-MM-DD HH:MM | gym_slug | outcome (owner/voicemail/gatekeeper/refused) | next_step | email_collected |
```

Outcomes:
- `owner_yes_email`: spoke to owner, got email → send the writeup
- `owner_no`: spoke to owner, declined → suppress, move on
- `voicemail`: left message → callback in 48h
- `gatekeeper`: got callback window → call at that window
- `refused`: front desk refused to route → suppress
