# React Router – Data Passing, Routing & Security Cheat Sheet

This document summarizes **URL Params, Query Params, Navigation State (Route State), and Backend Sessions** in React Router (v6+), with clear use cases, API mapping, security implications, and interview-ready mental models.

---

## 0️⃣ Methods to Pass Data Between Pages (Practical)

| Method | React Router API | Visible in URL | Refresh safe | Sharable | Best use case |
|---|---|---:|---:|---:|---|
| **Method 1: Route State** | `Link state` + `useLocation().state` (or `useNavigate({ state })`) | ❌ | ❌ | ❌ | Temporary SPA-only navigation data |
| **URL Params** | `useParams()` | ✅ | ✅ | ✅ | Resource identity (IDs/slugs) |
| **Query Params** | `useSearchParams()` | ✅ | ✅ | ✅ | Filters / tabs / sort / pagination |
| **Global State** | Context / Redux | ❌ | ❌ | ❌ | App-wide UI state during session |
| **Persistence** | `localStorage` / `sessionStorage` | ❌ | ✅ | ❌ | Non-sensitive persistence |
| **Secure Data** | Backend fetch / session | ❌ | ✅ | ✅ (via URL/id) | Server-verified data & authorization |

> **Method 1 (Route State)** is what you asked earlier: passing data using `state={{...}}` and reading via `useLocation()`.

---

## 1️⃣ Conceptual Purpose (WHAT to use & WHY)

| Mechanism | Answers | Purpose |
|---|---|---|
| **URL Params** | **WHO** | Identify the resource |
| **Query Params** | **HOW** | Control filters / UI behavior |
| **Navigation / Route State** | **TEMP** | Temporary SPA navigation data (`useLocation().state`) |
| **Backend Session** | **AUTH / DATA** | Secure user-specific data |

---

## 2️⃣ URL Params vs Query Params (Routing Semantics)

| Feature | URL Params | Query Params |
|---|---|---|
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
> Params define *what* the page is about; query params define *how* it behaves.

---

## 3️⃣ Data Passing, Persistence & Security (Authoritative Comparison)

| Method | Visible in URL | Refresh safe | Secure? | Correct use |
|---|---:|---:|---|---|
| **URL Params** | ✅ | ✅ | ❌ | Resource identifiers |
| **Query Params** | ✅ | ✅ | ❌ | Filters, pagination |
| **Navigation / Route State (Method 1)** | ❌ | ❌ | ⚠️ Semi | Temporary SPA data |
| **Context / Redux** | ❌ | ❌ | ⚠️ Semi | App-wide UI state |
| **localStorage** | ❌ | ✅ | ❌ | Non-sensitive persistence |
| **Backend Session** | ❌ | ✅ | ✅ | Auth & protected data |

---

## 4️⃣ React Router API Mapping

| API | Mechanism |
|---|---|
| `useParams()` | URL Params |
| `useSearchParams()` | Query Params |
| `useLocation().state` | Navigation / Route State (**Method 1**) |
| `useNavigate("/path", { state })` | Send Route State (**Method 1**) |
| Context / Redux | In-memory global state |
| Backend API / Session | Server-side security |

---

## 5️⃣ Security Reality Check (IMPORTANT)

```txt
URL Params ❌ secure
Query Params ❌ secure
Navigation / Route State ❌ secure
Context / Redux ❌ secure
localStorage ❌ secure
Backend Session ✅ secure

## 6️⃣ Final Decision Rule (Memorize) — **includes Method 1 explicitly**

```txt
WHO is it?              → URL Params (useParams)
HOW to show it?         → Query Params (useSearchParams)
TEMP data (Method 1)?   → Route State (Link state / useNavigate({ state }) → useLocation().state)
App UI state?           → Context / Redux
Need persistence?       → localStorage / sessionStorage (non-sensitive)
Need security?          → Backend Session + server-side authorization
