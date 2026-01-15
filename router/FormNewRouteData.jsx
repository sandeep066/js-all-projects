// App.jsx
// React + React Router v6+
// Accessible form (htmlFor + id), validation, submit → navigate with route state
// State update uses → name
// Label connection uses → id


import React, { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  useLocation,
  Navigate,
} from "react-router-dom";

/* -------------------- FORM PAGE -------------------- */

function FormPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    agree: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // clear error for that field
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const nextErrors = {};

    if (!formData.name.trim()) {
      nextErrors.name = "Name is required";
    }

    if (!formData.age) {
      nextErrors.age = "Age is required";
    } else if (Number(formData.age) <= 0) {
      nextErrors.age = "Age must be greater than 0";
    }

    if (!formData.gender) {
      nextErrors.gender = "Please select a gender";
    }

    if (!formData.agree) {
      nextErrors.agree = "You must agree to continue";
    }

    return nextErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    navigate("/result", {
      state: {
        ...formData,
        age: Number(formData.age),
      },
    });
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 400 }}>
      <h2>Registration Form</h2>

      {/* Name */}
      <div>
        <label htmlFor="name">Name</label>
        <br />
        <input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name..."
        />
        {errors.name && <div style={{ color: "red" }}>{errors.name}</div>}
      </div>

      <br />

      {/* Age */}
      <div>
        <label htmlFor="age">Age</label>
        <br />
        <input
          id="age"
          name="age"
          type="number"
          value={formData.age}
          onChange={handleChange}
          placeholder="Enter your age..."
        />
        {errors.age && <div style={{ color: "red" }}>{errors.age}</div>}
      </div>

      <br />

      {/* Gender */}
      <div>
        <label htmlFor="gender">Gender</label>
        <br />
        <select
          id="gender"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
        >
          <option value="">-- Select --</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        {errors.gender && <div style={{ color: "red" }}>{errors.gender}</div>}
      </div>

      <br />

      {/* Agree */}
      <div>
        <input
          id="agree"
          name="agree"
          type="checkbox"
          checked={formData.agree}
          onChange={handleChange}
        />
        <label htmlFor="agree"> I agree to the terms</label>
        {errors.agree && <div style={{ color: "red" }}>{errors.agree}</div>}
      </div>

      <br />

      <button type="submit">Submit</button>
    </form>
  );
}

/* -------------------- RESULT PAGE -------------------- */

function ResultPage() {
  const { state } = useLocation();

  // handle refresh / direct access
  if (!state) {
    return <Navigate to="/" replace />;
  }

  const { name, age, gender, agree } = state;

  return (
    <div style={{ maxWidth: 400 }}>
      <h2>Submitted Data</h2>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Age:</strong> {age}</p>
      <p><strong>Gender:</strong> {gender}</p>
      <p><strong>Agreed:</strong> {agree ? "Yes" : "No"}</p>
    </div>
  );
}

/* -------------------- APP -------------------- */

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
