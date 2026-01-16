
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

When to Use WHAT (Golden Rule) – Table Format
| Storage            | When to Use                                                                              | Typical Examples                                                    |
| ------------------ | ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| **Cookies**        | Server needs data automatically<br>Authentication / session handling<br>Security matters | Session ID<br>Refresh token (HttpOnly)<br>CSRF token                |
| **sessionStorage** | Data is temporary<br>Must die on tab close<br>Per-tab isolation required                 | Checkout steps<br>Unsaved form data<br>One-time UI state            |
| **localStorage**   | Data is small<br>Simple preferences<br>Needs persistence across tabs                     | Dark / light mode<br>Language preference<br>Sidebar collapsed state |
| **IndexedDB**      | Large or complex data<br>Offline-first apps<br>Needs querying & performance              | Offline notes app<br>Chat history<br>Image / video storage          |
| **Cache API**      | Caching network responses<br>PWA / offline support<br>Faster reloads                     | JS / CSS / images<br>API GET responses<br>App shell caching         |


🔐 Security Notes (Critical) – Table
| Rule                     | Details                                                  |
| ------------------------ | -------------------------------------------------------- |
| ❌ Never store secrets in | localStorage<br>sessionStorage<br>IndexedDB<br>Cache API |
| ✅ Recommended for auth   | HttpOnly cookies                                         |
| Auto-sent to server      | **Cookies only**                                         |


🎯 Interview One-Liners – Table
| Storage            | One-Liner                                                   |
| ------------------ | ----------------------------------------------------------- |
| **Cookies**        | Server-controlled storage, automatically sent with requests |
| **sessionStorage** | Temporary, per-tab browser storage                          |
| **localStorage**   | Small persistent user preferences                           |
| **IndexedDB**      | Asynchronous browser database for large data                |
| **Cache API**      | Network request/response cache for offline support          |
