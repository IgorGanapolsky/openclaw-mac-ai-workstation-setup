#!/usr/bin/env node
// Post to Bluesky. Text from stdin. Credentials from env (BSKY_ID, BSKY_PW) — never hardcoded.
// Usage: echo "text" | node scripts/bsky-post.mjs [--reply-to <bsky.app post URL>]
const PDS = 'https://bsky.social';
const PUB = 'https://public.api.bsky.app';
const id = process.env.BSKY_ID, pw = process.env.BSKY_PW;
if (!id || !pw) { console.error('Set BSKY_ID and BSKY_PW env vars (use an App Password).'); process.exit(1); }

const text = (await new Promise(r => { let d = ''; process.stdin.on('data', c => d += c); process.stdin.on('end', () => r(d)); })).trim();
if (!text) { console.error('No post text on stdin.'); process.exit(1); }
const graphemes = [...text].length;
if (graphemes > 300) { console.error(`Too long: ${graphemes} graphemes (max 300).`); process.exit(1); }

const replyArg = process.argv.indexOf('--reply-to');
const replyUrl = replyArg > -1 ? process.argv[replyArg + 1] : null;

async function api(base, path, opts = {}) {
  const res = await fetch(`${base}/xrpc/${path}`, opts);
  const body = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(`${path}: ${res.status} ${JSON.stringify(body).slice(0, 150)}`);
  return body;
}

const s = await api(PDS, 'com.atproto.server.createSession', {
  method: 'POST', headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ identifier: id, password: pw }),
});
const auth = { Authorization: `Bearer ${s.accessJwt}`, 'Content-Type': 'application/json' };

function facets(t) {
  const f = [], e = new TextEncoder(), re = /https?:\/\/[^\s]+/g; let m;
  while ((m = re.exec(t)) !== null) {
    const a = e.encode(t.slice(0, m.index)).length;
    f.push({ index: { byteStart: a, byteEnd: a + e.encode(m[0]).length }, features: [{ $type: 'app.bsky.richtext.facet#link', uri: m[0] }] });
  }
  return f;
}

const record = { $type: 'app.bsky.feed.post', text, facets: facets(text), createdAt: new Date().toISOString() };

if (replyUrl) {
  const m = replyUrl.match(/profile\/([^/]+)\/post\/([^/?]+)/);
  if (!m) { console.error('Bad --reply-to URL.'); process.exit(1); }
  const atUri = `at://${m[1]}/app.bsky.feed.post/${m[2]}`;
  const th = await api(PUB, `app.bsky.feed.getPostThread?uri=${encodeURIComponent(atUri)}&depth=0`);
  const t = th.thread.post;
  const parent = { uri: t.uri, cid: t.cid };
  const root = t.record?.reply?.root ?? parent;
  record.reply = { root, parent };
}

const r = await api(PDS, 'com.atproto.repo.createRecord', {
  method: 'POST', headers: auth,
  body: JSON.stringify({ repo: s.did, collection: 'app.bsky.feed.post', record }),
});
console.log(`https://bsky.app/profile/${s.handle}/post/${r.uri.split('/').pop()}`);
