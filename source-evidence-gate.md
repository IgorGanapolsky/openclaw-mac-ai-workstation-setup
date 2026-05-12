# Source Evidence Gate

Do not implement product changes from an article, post, screenshot, or social link unless the relevant content is verified.

## Evidence Levels

- **Verified primary:** official docs, changelog, source repository, vendor announcement.
- **Verified secondary:** reputable article with concrete details.
- **Partial:** metadata is available but body text is missing.
- **Unverified:** inaccessible, deleted, empty, or only engagement metrics available.

## Rule

Verified sources can drive implementation. Partial or unverified sources can only create a research task, not a product claim.

## X/Twitter Handling

If an X post fetch returns metadata but no text or media:

- record fetch status
- do not infer the claim
- do not quote missing content
- do not build a feature from the post alone

## Current Case

The post `https://x.com/trq212/status/2052809885763747935` returned HTTP 200 from FxTwitter with author and metrics, but no tweet text and no media. It is treated as partial evidence only.
