// RouterDataPassingDemo.jsx
// React Router v6 demo: Method 1,2,3,4,5,6 + 403/404
import React, { createContext, useContext, useMemo, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
  useParams,
  useSearchParams,
  useNavigate,
  Navigate,
} from "react-router-dom";

/* ---------------------------
   METHOD 5: Context (global state)
---------------------------- */
const DemoContext = createContext(null);

function DemoProvider({ children }) {
  const [demoUser, setDemoUser] = useState(null);

  const value = useMemo(() => ({ demoUser, setDemoUser }), [demoUser]);
  return <DemoContext.Provider value={value}>{children}</DemoContext.Provider>;
}

function useDemo() {
  const ctx = useContext(DemoContext);
  if (!ctx) throw new Error("useDemo must be used inside <DemoProvider />");
  return ctx;
}

/* ---------------------------
   HOME
---------------------------- */
function Home() {
  const { setDemoUser } = useDemo();

  return (
    <>
      <h2>Home</h2>

      <h3>Method 1: Route State (Link → useLocation)</h3>
      <Link to="/route-state" state={{ name: "Sandeep (Link)", age: 30 }}>
        Go via Link (Method 1)
      </Link>

      <h3>Method 2: URL Params (useParams)</h3>
      <br />
      <Link to="/user/Sandeep/30">Go to /user/:name/:age</Link>

      <h3>Method 3: Query Params (useSearchParams)</h3>
      <br />
      <Link to="/search?name=Sandeep&age=30">Go to /search?name=&age=</Link>

      <h3>Method 4: useNavigate + state (read with useLocation)</h3>
      <br />
      <Link to="/go-navigate">Open Navigate Sender Page</Link>

      <h3>Method 5: Context (global state)</h3>
      <button
        onClick={() => {
          setDemoUser({ name: "Sandeep (Context)", age: 33 });
        }}
      >
        Set Context User (Method 5)
      </button>
      <br />
      <Link to="/context-view">Go to Context Viewer</Link>

      <h3>Method 6: localStorage (refresh-safe)</h3>
      <br />
      <Link to="/save-storage">Open Storage Sender Page</Link>

      <hr />
      <h3>Extras</h3>
      <Link to="/protected">Protected Page (403 demo)</Link>
      <br />
      <Link to="/something-does-not-exist">Go to 404</Link>
    </>
  );
}

/* ---------------------------
   METHOD 1 (and Method 4 target):
   Route State Viewer (reads useLocation().state)
---------------------------- */
function RouteStateViewer() {
  const { state } = useLocation();

  return (
    <>
      <h2>Route State Viewer (Method 1 & 4)</h2>
      <p>(Refresh this page → state is lost)</p>

      <p>Name: {state?.name ?? "No state received"}</p>
      <p>Age: {state?.age ?? "No state received"}</p>

      <Link to="/">Back</Link>
    </>
  );
}

/* ---------------------------
   METHOD 2: URL Params
---------------------------- */
function UserParams() {
  const { name, age } = useParams();

  return (
    <>
      <h2>Method 2: URL Params</h2>
      <p>(Refresh-safe & sharable)</p>

      <p>Name: {name}</p>
      <p>Age: {age}</p>

      <Link to="/">Back</Link>
    </>
  );
}

/* ---------------------------
   METHOD 3: Query Params
---------------------------- */
function SearchQuery() {
  const [sp] = useSearchParams();
  const name = sp.get("name");
  const age = sp.get("age");

  return (
    <>
      <h2>Method 3: Query Params</h2>
      <p>(Refresh-safe & sharable)</p>

      <p>Name: {name ?? "missing"}</p>
      <p>Age: {age ?? "missing"}</p>

      <Link to="/">Back</Link>
    </>
  );
}

/* ---------------------------
   METHOD 4: useNavigate + state (sender)
---------------------------- */
function GoNavigate() {
  const navigate = useNavigate();

  return (
    <>
      <h2>Method 4: useNavigate + state (Sender)</h2>

      <button
        onClick={() =>
          navigate("/route-state", {
            state: { name: "Sandeep (Navigate)", age: 31 },
          })
        }
      >
        Navigate to Route State Viewer with state
      </button>

      <br />
      <br />
      <Link to="/">Back</Link>
    </>
  );
}

/* ---------------------------
   METHOD 5: Context (viewer)
---------------------------- */
function ContextViewer() {
  const { demoUser, setDemoUser } = useDemo();

  return (
    <>
      <h2>Method 5: Context Viewer</h2>
      <p>(Refresh → context resets unless you persist it)</p>

      <p>Name: {demoUser?.name ?? "No context data"}</p>
      <p>Age: {demoUser?.age ?? "No context data"}</p>

      <button onClick={() => setDemoUser(null)}>Clear Context</button>

      <br />
      <br />
      <Link to="/">Back</Link>
    </>
  );
}

/* ---------------------------
   METHOD 6: localStorage (sender + reader)
---------------------------- */
function SaveStorage() {
  const navigate = useNavigate();

  const save = () => {
    localStorage.setItem(
      "demoUser",
      JSON.stringify({ name: "Sandeep (localStorage)", age: 32 })
    );
    navigate("/read-storage");
  };

  return (
    <>
      <h2>Method 6: localStorage (Save)</h2>

      <button onClick={save}>Save to localStorage & Go Read</button>

      <br />
      <br />
      <Link to="/">Back</Link>
    </>
  );
}

function ReadStorage() {
  const raw = localStorage.getItem("demoUser");
  const user = raw ? JSON.parse(raw) : null;

  return (
    <>
      <h2>Method 6: localStorage (Read)</h2>
      <p>(Refresh-safe)</p>

      <p>Name: {user?.name ?? "No data"}</p>
      <p>Age: {user?.age ?? "No data"}</p>

      <button onClick={() => localStorage.removeItem("demoUser")}>
        Clear localStorage
      </button>

      <br />
      <br />
      <Link to="/">Back</Link>
    </>
  );
}

/* ---------------------------
   403 demo (authorization)
---------------------------- */
function ProtectedPage() {
  // fake auth/permission; flip this to true to allow
  const hasAccess = false;

  if (!hasAccess) return <Navigate to="/403" replace />;

  return (
    <>
      <h2>Protected Page</h2>
      <p>You are allowed ✅</p>
      <Link to="/">Back</Link>
    </>
  );
}

function Forbidden403() {
  return (
    <>
      <h2>403 Forbidden</h2>
      <p>You don't have permission.</p>
      <Link to="/">Back</Link>
    </>
  );
}

/* ---------------------------
   404
---------------------------- */
function NotFound404() {
  return (
    <>
      <h2>404 Not Found</h2>
      <Link to="/">Back</Link>
    </>
  );
}

/* ---------------------------
   APP
---------------------------- */
export default function App() {
  return (
    <DemoProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          {/* Method 1 (and Method 4 target) */}
          <Route path="/route-state" element={<RouteStateViewer />} />

          {/* Method 2 */}
          <Route path="/user/:name/:age" element={<UserParams />} />

          {/* Method 3 */}
          <Route path="/search" element={<SearchQuery />} />

          {/* Method 4 */}
          <Route path="/go-navigate" element={<GoNavigate />} />

          {/* Method 5 */}
          <Route path="/context-view" element={<ContextViewer />} />

          {/* Method 6 */}
          <Route path="/save-storage" element={<SaveStorage />} />
          <Route path="/read-storage" element={<ReadStorage />} />

          {/* 403 demo */}
          <Route path="/protected" element={<ProtectedPage />} />
          <Route path="/403" element={<Forbidden403 />} />

          {/* 404 */}
          <Route path="*" element={<NotFound404 />} />
        </Routes>
      </BrowserRouter>
    </DemoProvider>
  );
}
