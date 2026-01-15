# React Router – Passing Data Between Pages

This document explains **how to pass data between pages in React Router v6+**  
using clean **code snippets** and **minimal explanations**, suitable for interviews.
---
## Features Covered

- ✨ Route State (useLocation)
- 🔗 URL Params (useParams)
- 🔍 Query Params (useSearchParams)
- 🌐 Context / Redux
- 💾 localStorage / sessionStorage
- 🔐 Backend Fetch / Session
- 
---

## Method 1 — Route State (`useLocation`)

**Best for:** Temporary data such as form submissions that should not appear in the URL.

### Send Data

```jsx
import { useNavigate, Link } from "react-router-dom";

// Programmatic navigation (form submit)
const navigate = useNavigate();

navigate("/result", {
  state: { name: "Sandeep", age: 30 }
});

// OR using Link
<Link to="/result" state={{ name: "Sandeep", age: 30 }}>
  View Result
</Link>

```
### Receive Data
```
import { useLocation } from "react-router-dom";

const { state } = useLocation();

const name = state?.name;
const age = state?.age;

```

### ✅ Most common interview answer for form submit

## Method 2 — URL Params (useParams)

Best for: Resource identity (ID, slug) that must survive refresh and be sharable.
### Send Data
```

<Link to="/user/Sandeep/30" />

Route Definition
<Route path="/user/:name/:age" element={<User />} />

```
###  Receive Data
```
import { useParams } from "react-router-dom";

const { name, age } = useParams();
```

## Method 3 — Query Params (useSearchParams)

Best for: Filters, sorting, pagination, tabs.
###  Send Data
```

<Link to="/result?name=Sandeep&age=30" />
```
###  Receive Data
```

import { useSearchParams } from "react-router-dom";

const [params] = useSearchParams();

const name = params.get("name");
const age = params.get("age");

```

## Method 4 — Context / Redux

Best for: Global UI state such as user info, theme, sidebar.

###  Store Data
```
setUser({ name: "Sandeep", age: 31 });
```

###  Receive Data
```
import { useContext } from "react";

const { user } = useContext(UserContext);

const name = user?.name;
const age = user?.age;

```


## Method 5 — localStorage / sessionStorage

Best for: Non-sensitive persistence such as preferences or drafts.

###  Store Data
```
localStorage.setItem(
  "user",
  JSON.stringify({ name: "Sandeep", age: 32 })
);
```
###  Receive Data
```
const raw = localStorage.getItem("user");
const user = raw ? JSON.parse(raw) : null;

const name = user?.name;
const age = user?.age;
```


## Method 6 — Backend Fetch / Session

Best for: Secure, authenticated, production data.
###  Send Data
```

/result/123
```
###  Receive Data
```

import { useParams } from "react-router-dom";

const { id } = useParams();

fetch(`/api/result/${id}`, { credentials: "include" })
  .then(res => res.json())
  .then(data => {
    const name = data.name;
    const age = data.age;
  });
```
