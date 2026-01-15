# React Router – How Each Data Passing Method Is CREATED & USED

---

## ✅ Method 1 — Route State (MOST COMMON for form submit)

### When to use
- Form submit
- Temporary SPA navigation data
- No refresh needed

### How it is created
React Router allows passing a `state` object during navigation.

### How to SEND data
```js
navigate("/result", {
  state: { name: "Sandeep", age: 30 }
});
or

jsx
Copy code
<Link to="/result" state={{ name: "Sandeep", age: 30 }} />
How to RECEIVE data
js
Copy code
import { useLocation } from "react-router-dom";

const { state } = useLocation();
const name = state?.name;
const age = state?.age;
Key notes
❌ Lost on refresh

❌ Not sharable

❌ Not secure

✅ Best interview answer for “form submit → navigate → show data”

✅ Method 2 — URL Params (WHO is the resource)
When to use
Resource identity (ID, slug)

Page must work on refresh

Sharable URLs

How it is created
Define params in the route path.

How to SEND data
jsx
Copy code
<Link to="/user/Sandeep/30" />
Route definition
jsx
Copy code
<Route path="/user/:name/:age" element={<User />} />
How to RECEIVE data
js
Copy code
import { useParams } from "react-router-dom";

const { name, age } = useParams();
Key notes
✅ Refresh-safe

✅ Sharable

❌ Not secure (visible in URL)

✅ Method 3 — Query Params (HOW to show the page)
When to use
Filters

Sorting

Pagination

Tabs

How it is created
Append data after ? in the URL.

How to SEND data
jsx
Copy code
<Link to="/result?name=Sandeep&age=30" />
How to RECEIVE data
js
Copy code
import { useSearchParams } from "react-router-dom";

const [params] = useSearchParams();
const name = params.get("name");
const age = params.get("age");
Key notes
✅ Refresh-safe

✅ Sharable

❌ Not secure

✅ Best for UI behavior control

✅ Method 4 — Context / Redux (Global UI State)
When to use
Logged-in user UI

Theme

Sidebar state

How it is created
Store data in Context / Redux store.

How to SEND (store) data
js
Copy code
setUser({ name: "Sandeep", age: 31 });
How to RECEIVE data
js
Copy code
import { useContext } from "react";

const { user } = useContext(UserContext);
const name = user?.name;
const age = user?.age;
Key notes
❌ Lost on refresh

❌ Not secure

⚠️ Semi-safe (memory only)

✅ Method 5 — localStorage / sessionStorage (Persistence)
When to use
Remember user preferences

Draft forms

Non-sensitive data

How to SEND (store) data
js
Copy code
localStorage.setItem(
  "user",
  JSON.stringify({ name: "Sandeep", age: 32 })
);
How to RECEIVE data
js
Copy code
const raw = localStorage.getItem("user");
const user = raw ? JSON.parse(raw) : null;

const name = user?.name;
const age = user?.age;
Key notes
✅ Refresh-safe

❌ Not secure

❌ Not sharable

✅ Method 6 — Backend Fetch / Session (SECURE)
When to use
Authenticated data

Sensitive data

Real production apps

How it is created
Backend stores session or validates token.

How to SEND data
txt
Copy code
/result/123
How to RECEIVE data
js
Copy code
import { useParams } from "react-router-dom";

const { id } = useParams();

fetch(`/api/result/${id}`, { credentials: "include" })
  .then(res => res.json())
  .then(data => {
    const name = data.name;
    const age = data.age;
  });
Key notes
✅ Secure

✅ Refresh-safe

✅ Backend-enforced authorization

🎯 Interview Golden Rule (Memorize)
txt
Copy code
WHO is it?         → URL Params
HOW to show it?   → Query Params
TEMP data?        → Route State
App UI state?     → Context / Redux
Need persistence? → localStorage
Need security?    → Backend Session
Final Interview Tip
If asked “form submit → show data on next page”, answer:
