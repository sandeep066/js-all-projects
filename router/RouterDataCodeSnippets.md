You can copy–paste once and it will look clean in GitHub / VS Code preview.

# React Router – How Each Data Passing Method Is Created & Used

This document explains **how each React Router data-passing method works**,  
including **when to use it**, **how to send data**, **how to receive data**,  
and **important interview notes**.

---

## ✅ Method 1 — Route State (`useLocation`)
**(Most common interview answer for form submit)**

### When to use
- Form submit
- Temporary SPA navigation data
- No refresh required

### How it is created
React Router allows passing a `state` object during navigation.

### How to send data
```js
navigate("/result", {
  state: { name: "Sandeep", age: 30 }
});


or

<Link to="/result" state={{ name: "Sandeep", age: 30 }} />

How to receive data
import { useLocation } from "react-router-dom";

const { state } = useLocation();
const name = state?.name;
const age = state?.age;

Notes

❌ Lost on refresh

❌ Not sharable

❌ Not secure (client-controlled)

✅ Best answer for “form submit → navigate → show data”

✅ Method 2 — URL Params (useParams)

(WHO is the resource)

When to use

Resource identity (ID, slug)

Page must work on refresh

Sharable URLs

How it is created

Define params directly in the route path.

How to send data
<Link to="/user/Sandeep/30" />

Route definition
<Route path="/user/:name/:age" element={<User />} />

How to receive data
import { useParams } from "react-router-dom";

const { name, age } = useParams();

Notes

✅ Refresh-safe

✅ Sharable & bookmarkable

❌ Not secure (visible in URL)

✅ Method 3 — Query Params (useSearchParams)

(HOW to show the page)

When to use

Filters

Sorting

Pagination

Tabs

How it is created

Append data after ? in the URL.

How to send data
<Link to="/result?name=Sandeep&age=30" />

How to receive data
import { useSearchParams } from "react-router-dom";

const [params] = useSearchParams();
const name = params.get("name");
const age = params.get("age");

Notes

✅ Refresh-safe

✅ Sharable

❌ Not secure

✅ Best for UI behavior control

✅ Method 4 — Context / Redux

(Global UI state)

When to use

Logged-in user UI

Theme

Sidebar state

How it is created

Store data in Context or Redux store.

How to store data
setUser({ name: "Sandeep", age: 31 });

How to receive data
import { useContext } from "react";

const { user } = useContext(UserContext);
const name = user?.name;
const age = user?.age;

Notes

❌ Lost on refresh

❌ Not secure

⚠️ Semi-safe (in-memory only)

✅ Method 5 — localStorage / sessionStorage

(Persistence for non-sensitive data)

When to use

Remember user preferences

Draft forms

Non-sensitive data

How to store data
localStorage.setItem(
  "user",
  JSON.stringify({ name: "Sandeep", age: 32 })
);

How to receive data
const raw = localStorage.getItem("user");
const user = raw ? JSON.parse(raw) : null;

const name = user?.name;
const age = user?.age;

Notes

✅ Refresh-safe

❌ Not secure

❌ Not sharable

✅ Method 6 — Backend Fetch / Session

(Secure, production-ready approach)

When to use

Authenticated data

Sensitive data

Real-world applications

How it is created

Backend stores session or validates JWT/token.

How to send data
/result/123

How to receive data
import { useParams } from "react-router-dom";

const { id } = useParams();

fetch(`/api/result/${id}`, { credentials: "include" })
  .then(res => res.json())
  .then(data => {
    const name = data.name;
    const age = data.age;
  });

Notes

✅ Secure

✅ Refresh-safe

✅ Backend-enforced authorization

🎯 Interview Golden Rule (Memorize)
WHO is it?         → URL Params
HOW to show it?   → Query Params
TEMP data?        → Route State
App UI state?     → Context / Redux
Need persistence? → localStorage
Need security?    → Backend Session

Final Interview Tip

If asked “form submit → show data on next page”, answer:

“I use useNavigate with route state and read it using useLocation().state.
If refresh or security is required, I switch to URL params or backend fetch.”


---

### ✅ This version will:
- Render cleanly in **GitHub**
- Render cleanly in **VS Code Markdown Preview**
- Be **interview-ready**
- Avoid mixed text/code confusion

If you want next:
- ✔ Ultra-short 30-second interview answer  
- ✔ Diagram version (WHO / HOW / TEMP)  
- ✔ React Router vs Next.js routing comparison
