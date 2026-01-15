# React Router – Passing Data Between Pages (Minimal Cheat Sheet)

---

## Method 1 — Route State (`useLocation`)

### Send
```js
navigate("/result", {
  state: { name: "Sandeep", age: 30 }
});
or

jsx
Copy code
<Link to="/result" state={{ name: "Sandeep", age: 30 }} />
Receive
js
Copy code
import { useLocation } from "react-router-dom";

const { state } = useLocation();
const name = state?.name;
const age = state?.age;
Method 2 — URL Params (useParams)
Route
jsx
Copy code
<Route path="/user/:name/:age" element={<User />} />
Send (URL)
txt
Copy code
/user/Sandeep/30
Receive
js
Copy code
import { useParams } from "react-router-dom";

const { name, age } = useParams();
Method 3 — Query Params (useSearchParams)
Send (URL)
txt
Copy code
/result?name=Sandeep&age=30
Receive
js
Copy code
import { useSearchParams } from "react-router-dom";

const [params] = useSearchParams();
const name = params.get("name");
const age = params.get("age");
Method 4 — Context / Redux
Store
js
Copy code
setUser({ name: "Sandeep", age: 31 });
Receive
js
Copy code
import { useContext } from "react";

const { user } = useContext(UserContext);
const name = user?.name;
const age = user?.age;
Method 5 — localStorage / sessionStorage
Store
js
Copy code
localStorage.setItem(
  "user",
  JSON.stringify({ name: "Sandeep", age: 32 })
);
Receive
js
Copy code
const raw = localStorage.getItem("user");
const user = raw ? JSON.parse(raw) : null;

const name = user?.name;
const age = user?.age;
Method 6 — Backend Fetch / Session
Send (URL)
txt
Copy code
/result/123
Receive
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
Decision Rule
txt
Copy code
WHO → URL Params
HOW → Query Params
TEMP → Route State
GLOBAL → Context / Redux
PERSIST → localStorage
SECURE → Backend
Interview One-Liner
txt
Copy code
Form submit → useNavigate + route state
Refresh / security → params or backend
yaml
Copy code

---

### ✅ This version is:
- Clean
- Minimal
- Markdown-safe
- Easy to revise later
- Perfect as **personal notes or interview cheat sheet**

If you want next:
- 🔹 ultra-compact 1-page version  
- 🔹 diagram version  
- 🔹 Next.js comparison






