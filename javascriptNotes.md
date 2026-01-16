
🔐 localStorage vs sessionStorage

Both are Web Storage APIs used to store key–value data in the browser.

| Feature            | localStorage           | sessionStorage      |
| ------------------ | ---------------------- | ------------------- |
| Lifetime           | Until manually cleared | Until tab is closed |
| Shared across tabs | ✅ Yes                 | ❌ No                |
| Page reload        | ✅ Survives            | ✅ Survives          |
| Browser restart    | ✅ Survives            | ❌ Lost              |
| Max size           | ~5–10 MB               | ~5 MB               |
| Scope              | Same origin            | Same origin + tab   |
