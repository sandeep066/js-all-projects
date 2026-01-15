# React Router – Passing Data Between Pages (Complete Cheat Sheet)

---

## Method 1 — Route State (`useLocation`)
**Best for:** Temporary data (like form submissions) that you don't want visible in the URL.

### Send
```jsx
// Programmatic navigation
const navigate = useNavigate();

navigate("/result", {
  state: { name: "Sandeep", age: 30 }
});

// Using Link component
<Link to="/result" state={{ name: "Sandeep", age: 30 }}>View Result</Link>



