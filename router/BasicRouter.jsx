//  "react-router-dom": "^6"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Home() {
  return (
    <>
      <h2>Home Page</h2>
      <Link to="/about">Go to About</Link>
    </>
  );
}

function About() {
  return (
    <>
      <h2>About Page</h2>
      <Link to="/">Back to Home</Link>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
