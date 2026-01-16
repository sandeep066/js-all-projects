
🔐 localStorage vs sessionStorage

Both are Web Storage APIs(in string both) used to store key–value data in the browser .

| Feature            | localStorage           | sessionStorage      |
| ------------------ | ---------------------- | ------------------- |
| Lifetime           | Until manually cleared | Until tab is closed |
| Shared across tabs | ✅ Yes                 | ❌ No                |
| Page reload        | ✅ Survives            | ✅ Survives          |
| Browser restart    | ✅ Survives            | ❌ Lost              |
| Max size           | ~5–10 MB               | ~5 MB               |
| Scope              | Same origin            | Same origin (protocol+host+port) + tab   |

| Data type          | Where to store            |
| ------------------ | ------------------------- |
| Theme (dark/light) | `localStorage` ✅          |
| Language           | `localStorage` ✅          |
| Sidebar open/close | `localStorage` (optional) |
| Form step          | `sessionStorage`          |
| Temporary filters  | `sessionStorage`          |

