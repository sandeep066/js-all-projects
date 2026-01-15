arkdown# React Router – Passing Data Between Pages (Minimal Cheat Sheet)

---

## Method 1 — Route State (`useLocation`)

### Send
```jsx
// Programmatic
navigate("/result", {
  state: { name: "Sandeep", age: 30 }
});

// Declarative
<Link to="/result" state={{ name: "Sandeep", age: 30 }}>View Result</Link>
ReceiveJavaScriptimport { useLocation } from "react-router-dom";

const { state } = useLocation();
const name = state?.name;
const age = state?.age;
Method 2 — URL Params (useParams)Route DefinitionJavaScript<Route path="/user/:name/:age" element={<User />} />
Send (URL)GET /user/Sandeep/30ReceiveJavaScriptimport { useParams } from "react-router-dom";

const { name, age } = useParams();
Method 3 — Query Params (useSearchParams)Send (URL)GET /result?name=Sandeep&age=30ReceiveJavaScriptimport { useSearchParams } from "react-router-dom";

const [params] = useSearchParams();
const name = params.get("name");
const age = params.get("age");
Method 4 — Context / ReduxStoreJavaScriptsetUser({ name: "Sandeep", age: 31 });
ReceiveJavaScriptimport { useContext } from "react";
import { UserContext } from "./UserContext";

const { user } = useContext(UserContext);
const name = user?.name;
const age = user?.age;
Method 5 — localStorage / sessionStorageStoreJavaScriptlocalStorage.setItem(
  "user",
  JSON.stringify({ name: "Sandeep", age: 32 })
);
ReceiveJavaScriptconst raw = localStorage.getItem("user");
const user = raw ? JSON.parse(raw) : null;

const name = user?.name;
const age = user?.age;
Method 6 — Backend Fetch / SessionSend (URL)GET /result/123ReceiveJavaScriptimport { useParams } from "react-router-dom";

const { id } = useParams();

fetch(`/api/result/${id}`, { credentials: "include" })
  .then(res => res.json())
  .then(data => {
    const name = data.name;
    const age = data.age;
  });
Decision Rule (Quick Reference)GoalMethodWHO is it?URL ParamsHOW to show it? (Filters)Query ParamsTEMP form data?Route StateGLOBAL UI state?Context / ReduxPERSIST on restart?localStorageSECURE sensitive data?Backend / API
