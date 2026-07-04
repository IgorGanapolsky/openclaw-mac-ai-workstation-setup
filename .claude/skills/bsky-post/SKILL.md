---
name: bsky-post
description: Post to Bluesky via the atproto API (owned posts, replies, threads). Works from cloud sessions — bsky.social is reachable. Use whenever the CEO asks to post/engage on Bluesky.
---

# Bluesky Posting

## Credentials
Read `BSKY_ID` and `BSKY_PW` from environment variables. NEVER hardcode, echo, or
persist credentials to any file. If env vars are missing, tell the CEO to add them
to the Claude environment settings (claude.ai/code → environment → env vars),
preferably a Bluesky App Password (Settings → Privacy & Security → App Passwords).

## How to post
Run `scripts/bsky-post.mjs` from the repo root:

```bash
# Owned post (text from stdin, ≤300 graphemes, URLs auto-faceted as links)
echo "post text" | BSKY_ID=... BSKY_PW=... node scripts/bsky-post.mjs

# Reply to an existing post
echo "reply text" | BSKY_ID=... BSKY_PW=... node scripts/bsky-post.mjs \
  --reply-to "https://bsky.app/profile/<handle>/post/<rkey>"
```

The script prints the live `bsky.app` URL on success. ALWAYS include that URL in
your report to the CEO as proof of posting.

## Rules (from lead-log.md quality floor)
- ≤300 graphemes — check with `[...text].length` BEFORE posting.
- Substance before any link. Soft link at end, never lead with a pitch.
- Replies to other builders: peer tone, ≥1 specific technical angle, end with a question.
- Use the public API (`public.api.bsky.app`) for reading threads — no auth needed.
- Log every post to `lead-log.md` with the live URL.
