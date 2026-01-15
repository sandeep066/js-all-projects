# React Router – Data Passing, Routing & Security Cheat Sheet

This document summarizes **URL Params, Query Params, Navigation State, and Backend Sessions** in React Router (v6+), with clear use cases, security implications, and interview-ready mental models.

---

## 1️⃣ Conceptual Purpose (WHAT to use & WHY)

| Mechanism | Answers | Purpose |
|----------|--------|---------|
| **URL Params** | **WHO** | Identify the resource |
| **Query Params** | **HOW** | Control filters / UI behavior |
| **Navigation State** | **TEMP** | Temporary SPA navigation data |
| **Backend Session** | **AUTH / DATA** | Secure user-specific data |

---

## 2️⃣ URL Params vs Query Params (Routing Semantics)

| Feature | URL Params | Query Params |
|-------|-----------|-------------|
| Position | Path (`/users/12`) | After `?` |
| Mandatory | ✅ Yes (usually) | ❌ Optional |
| Defines identity | ✅ | ❌ |
| Defines behavior | ❌ | ✅ |
| Page valid without it | ❌ | ✅ |
| URL cleanliness | ✅ Clean / semantic | ❌ Noisy |
| SEO | ✅ Better | ⚠️ OK |
| Refresh safe | ✅ | ✅ |
| Sharable | ✅ | ✅ |
| Read API | `useParams()` | `useSearchParams()` |
| Typical use | ID, slug | page, sort, tab |

**Key takeaway:**  
> Params define *what* the page is about, query params define *how* it behaves.

---

## 3️⃣ Data Passing, Persistence & Security (Authoritative Comparison)

| Method | Visible in URL | Refresh safe | Secure? | Correct use |
|------|---------------|-------------|--------|-------------|
| **URL Params** | ✅ | ✅ | ❌ | Resource identifiers |
| **Query Params** | ✅ | ✅ | ❌ | Filters, pagination |
| **Navigation State** | ❌ | ❌ | ⚠️ Semi | Temporary SPA data |
| **Context / Redux** | ❌ | ❌ | ⚠️ Semi | App-wide UI state |
| **localStorage** | ❌ | ✅ | ❌ | Non-sensitive persistence |
| **Backend Session** | ❌ | ✅ | ✅ | Auth & protected data |

---

## 4️⃣ React Router API Mapping

| API | Mechanism |
|---|----------|
| `useParams()` | URL Params |
| `useSearchParams()` | Query Params |
| `useLocation().state` | Navigation State |
| Context / Redux | In-memory global state |
| Backend API / Session | Server-side security |

---

## 5️⃣ Security Reality Check (IMPORTANT)

```txt
URL Params ❌ secure
Query Params ❌ secure
Navigation State ❌ secure
Context / Redux ❌ secure
localStorage ❌ secure
Backend Session ✅ secure

Final Decision Rule (Memorize)

WHO is it?         → URL Params
HOW to show it?   → Query Params
TEMP data?        → Navigation State
App UI state?     → Context / Redux
Need persistence? → localStorage
Need security?    → Backend Session
