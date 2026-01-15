//RouterDataPassingDemo.jsx
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
  useParams,
  useSearchParams,
  useNavigate,
} from "react-router-dom";

/** ---------------------------
 * HOME (links to all demos)
 * --------------------------*/
function Home() {
  return (
    <>
      <h2>Home</h2>

      <h3>Method 1: Route State (Link → useLocation)</h3>
      <Link to="/about-state" state={{ name: "Sandeep", age: 30 }}>
        Go to About (state via Link)
      </Link>

      <h3>Method 2: URL Params (useParams)</h3>
      <br />
      <Link to="/user/Sandeep/30">Go to User (params)</Link>

      <h3>Method 3: Query Params (useSearchParams)</h3>
      <br />
      <Link to="/search?name=Sandeep&age=30">Go to Search (query)</Link>

      <h3>Method 4: useNavigate + state</h3>
      <br />
      <Link to="/go-navigate">Go to Navigate Page</Link>

      <h3>Method 6: localStorage (refresh-safe)</h3>
      <br />
      <Link to="/save-storage">Go to Storage Page</Link>
    </>
  );
}

/** ---------------------------
 * METHOD 1: Route State
 * Link state={{...}}  → useLocation().state
 * --------------------------*/
function AboutState() {
  const { state } = useLocation();

  return (
    <>
      <h2>Method 1: Route State</h2>
      <p>(Refresh this page → state will be lost)</p>

      <p>Name: {state?.name ?? "No state"}</p>
      <p>Age: {state?.age ?? "No state"}</p>

      <Link to="/">Back</Link>
    </>
  );
}

/** ---------------------------
 * METHOD 2: URL Params
 * /user/:name/:age → useParams()
 * --------------------------*/
function UserParams() {
  const { name, age } = useParams();

  return (
    <>
      <h2>Method 2: URL Params</h2>
      <p>(Refresh-safe, sharable)</p>

      <p>Name: {name}</p>
      <p>Age: {age}</p>

      <Link to="/">Back</Link>
    </>
  );
}

/** ---------------------------
 * METHOD 3: Query Params
 * /search?name=...&age=... → useSearchParams()
 * --------------------------*/
function SearchQuery() {
  const [sp] = useSearchParams();
  const name = sp.get("name");
  const age = sp.get("age");

  return (
    <>
      <h2>Method 3: Query Params</h2>
      <p>(Refresh-safe, sharable)</p>

      <p>Name: {name ?? "missing"}</p>
      <p>Age: {age ?? "missing"}</p>

      <Link to="/">Back</Link>
    </>
  );
}

/** ---------------------------
 * METHOD 4: useNavigate + state
 * navigate("/about-state", { state: {...} })
 * --------------------------*/
function GoNavigate() {
  const navigate = useNavigate();

  return (
    <>
      <h2>Method 4: useNavigate + state</h2>

      <button
        onClick={() =>
          navigate("/about-state", {
            state: { name: "Sandeep (from navigate)", age: 31 },
          })
        }
      >
        Navigate to About with state
      </button>

      <br />
      <br />
      <Link to="/">Back</Link>
    </>
  );
}

/** ---------------------------
 * METHOD 6: localStorage
 * Set on one page → read on another (refresh-safe)
 * --------------------------*/
function SaveStorage() {
  const navigate = useNavigate();

  const save = () => {
    localStorage.setItem(
      "demoUser",
      JSON.stringify({ name: "Sandeep (storage)", age: 32 })
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

/** ---------------------------
 * APP ROUTES
 * --------------------------*/
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Method 1 + Method 4 target */}
        <Route path="/about-state" element={<AboutState />} />

        {/* Method 2 */}
        <Route path="/user/:name/:age" element={<UserParams />} />

        {/* Method 3 */}
        <Route path="/search" element={<SearchQuery />} />

        {/* Method 4 */}
        <Route path="/go-navigate" element={<GoNavigate />} />

        {/* Method 6 */}
        <Route path="/save-storage" element={<SaveStorage />} />
        <Route path="/read-storage" element={<ReadStorage />} />

        {/* 404 */}
        <Route path="*" element={<h2>404 Not Found</h2>} />
      </Routes>
    </BrowserRouter>
  );
}

