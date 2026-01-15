// App.jsx
import React, { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  useLocation,
  Navigate,
} from "react-router-dom";

/* ---------- FORM PAGE ---------- */

function FormPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    age: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/result", { state: formData });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Form</h2>

      <label htmlFor="name">Name</label>
      <input
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />

      <br />

      <label htmlFor="age">Age</label>
      <input
        id="age"
        name="age"
        value={formData.age}
        onChange={handleChange}
      />

      <br />

      <button type="submit">Submit</button>
    </form>
  );
}

/* ---------- RESULT PAGE ---------- */

function ResultPage() {
  const { state } = useLocation();

  // if refreshed or opened directly
  if (!state) return <Navigate to="/" replace />;

  return (
    <div>
      <h2>Result</h2>
      <p>Name: {state.name}</p>
      <p>Age: {state.age}</p>
    </div>
  );
}

/* ---------- APP ---------- */

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FormPage />} />
        <Route path="/result" element={<ResultPage />} />
      </Routes>
    </BrowserRouter>
  );
}
