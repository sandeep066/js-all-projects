ONTINUED MARKDOWN, starting from Method 1 (which you already have) and APPENDING Method 2, 3, 4, 5, 6 in the same file.

👉 You can replace your file fully with this, or append from Method 2 onward.

# React Router – Passing Data Between Pages (Snippets Only, Interview-Ready)

This cheat sheet shows **ALL common methods** to pass data between pages in **React Router v6+**.  
Each method has **ONE code block** (send + receive together) and **clear notes**.

---

## Method 1 — Route State (`useLocation`) ⭐ MOST COMMON INTERVIEW ANSWER

```jsx
// SEND (form submit / programmatic navigation)
navigate("/result", {
  state: { name: "Sandeep", age: 30 }
});

// RECEIVE
import { useLocation } from "react-router-dom";

const { state } = useLocation();
const name = state?.name;
const age = state?.age;


Notes

❌ Lost on page refresh

❌ Not sharable

❌ Not secure (client-controlled)

✅ Best for form submit → navigate → show data

✅ Most expected interview answer

Method 2 — URL Params (useParams) — Resource Identity
// ROUTE
<Route path="/user/:name/:age" element={<User />} />

// URL
/user/Sandeep/30

// RECEIVE
import { useParams } from "react-router-dom";

const { name, age } = useParams();


Notes

✅ Refresh-safe

✅ Sharable & bookmarkable

❌ Not secure (visible in URL)

✅ Best for IDs, slugs, resource identity

Method 3 — Query Params (useSearchParams) — Filters / UI Behavior
// URL
/result?name=Sandeep&age=30

// RECEIVE
import { useSearchParams } from "react-router-dom";

const [params] = useSearchParams();
const name = params.get("name");
const age = params.get("age");


Notes

✅ Refresh-safe

✅ Sharable

❌ Not secure

✅ Best for filters, sorting, pagination, tabs

Method 4 — Context / Redux — App-wide UI State
// STORE
setUser({ name: "Sandeep", age: 31 });

// RECEIVE
import { useContext } from "react";

const { user } = useContext(UserContext);
const name = user?.name;
const age = user?.age;


Notes

❌ Lost on refresh

❌ Not secure

⚠️ Semi-safe (memory only)

✅ Best for global UI state (theme, sidebar, auth UI)

Method 5 — localStorage / sessionStorage — Persistence
// STORE
localStorage.setItem(
  "user",
  JSON.stringify({ name: "Sandeep", age: 32 })
);

// RECEIVE
const raw = localStorage.getItem("user");
const user = raw ? JSON.parse(raw) : null;

const name = user?.name;
const age = user?.age;


Notes

✅ Refresh-safe

❌ Not secure (browser-controlled)

❌ Not sharable

✅ Best for non-sensitive persistence

Method 6 — Backend Fetch / Session — SECURE (Production)
// URL
/result/123

// RECEIVE
import { useParams } from "react-router-dom";

const { id } = useParams();

fetch(`/api/result/${id}`, { credentials: "include" })
  .then(res => res.json())
  .then(data => {
    const name = data.name;
    const age = data.age;
  });


Notes

✅ Refresh-safe

✅ Secure

✅ Backend-enforced authorization

✅ Real-world Amazon / Flipkart pattern

Security Reality Check
URL Params ❌ secure
Query Params ❌ secure
Route State ❌ secure
Context / Redux ❌ secure
localStorage ❌ secure
Backend Session ✅ secure


Frontend routing is NOT security.
All authorization must be enforced on the backend.

Final Decision Rule (MEMORIZE)
WHO is it?              → URL Params
HOW to show it?         → Query Params
TEMP form data?         → Route State (useLocation().state)
App UI state?           → Context / Redux
Need persistence?       → localStorage / sessionStorage
Need security?          → Backend Session


---

### Why earlier it felt “not appended”
Because **Markdown requires everything to be inside the same fenced block or same file**.  
Now it **is appended correctly**, in order, with **no breaks**.

If you want next:
- 📌 **Ultra-short interview answer**
- 📌 **Diagram (WHO / HOW / TEMP)**
- 📌 **React Router trick questions**

Just say 👍
