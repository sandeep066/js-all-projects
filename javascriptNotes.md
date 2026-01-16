
🔐 localStorage vs sessionStorage

Both are Web Storage APIs(in string both) used to store key–value data in the browser .

| Feature                 | Cookies                           | sessionStorage        | localStorage           | IndexedDB      | Cache API          |
| ----------------------- | --------------------------------- | --------------------- | ---------------------- | -------------- | ------------------ |
| Primary purpose         | Server ↔ client state             | Temporary UI state    | Persistent preferences | App database   | Network caching    |
| Scope                   | Same origin (+ path/domain rules) | Same origin + **tab** | Same origin            | Same origin    | Same origin        |
| Lifetime                | Configurable (expires/max-age)    | Until tab close       | Until cleared          | Until cleared  | Until cleared      |
| Sent with HTTP requests | ✅ **Yes (auto)**                  | ❌ No                  | ❌ No                   | ❌ No           | ❌ No               |
| JavaScript accessible   | ⚠️ Yes / ❌ (HttpOnly)             | ✅ Yes                 | ✅ Yes                  | ✅ Yes          | ✅ Yes              |
| Data type               | String                            | String                | String                 | Objects, blobs | Request / Response |
| Size limit              | ~4 KB                             | ~5 MB                 | ~5–10 MB               | 100s of MB     | Large              |
| API type                | Sync                              | Sync                  | Sync                   | Async          | Async              |
| UI blocking             | Yes                               | Yes                   | Yes                    | ❌ No           | ❌ No               |
| Query support           | ❌ No                              | ❌ No                  | ❌ No                   | ✅ Yes          | ❌ No               |
| Offline support         | ❌                                 | ❌                     | ❌                      | ✅              | ✅                  |

✅ When to Use WHAT (Golden Rule)
Use Cookies when:

Server needs data automatically

Authentication / session handling

Security matters

Examples

Session ID

Refresh token (HttpOnly)

CSRF token

Use sessionStorage when:

Data is temporary

Must die on tab close

Per-tab isolation required

Examples

Checkout steps

Unsaved form data

One-time UI state

Use localStorage when:

Data is small

Simple preferences

Needs persistence across tabs

Examples

Dark / light mode

Language preference

Sidebar collapsed state

Use IndexedDB when:

Large or complex data

Offline-first apps

Needs querying & performance

Examples

Offline notes app

Chat history

Image / video storage

Use Cache API when:

Caching network responses

PWA / offline support

Faster reloads

Examples

JS / CSS / images

API GET responses

App shell caching

🔐 Security Notes (Critical)

❌ Never store secrets in:

localStorage

sessionStorage

IndexedDB

Cache API

✅ Use HttpOnly cookies for auth tokens

Cookies are the only storage auto-sent to server

🎯 Interview One-Liners (Perfect)

Cookies → server-controlled, auto-sent with requests

sessionStorage → temporary, per-tab storage

localStorage → small persistent preferences

IndexedDB → async browser database

Cache API → network request/response cache
