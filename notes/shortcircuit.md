🔹 JavaScript Data Types — Complete Guide

1️⃣ Primitive vs Non-Primitive (Overview)

| Category          | Count            | Stored As | Mutable |
| ----------------- | ---------------- | --------- | ------- |
| **Primitive**     | **7**            | Value     | ❌ No    |
| **Non-Primitive** | **1 (`object`)** | Reference | ✅ Yes   |
---

2️⃣ Primitive Data Types (7)
> Primitives are immutable and stored by value

| Type        | Example        |
| ----------- | -------------- |
| `string`    | `"hello"`      |
| `number`    | `10`, `3.14`   |
| `bigint`    | `100n`         |
| `boolean`   | `true`         |
| `undefined` | `undefined`    |
| `null`      | `null`         |
| `symbol`    | `Symbol("id")` |

Example:

```
let a = 10;
let b = a;
b = 20;
console.log(a); // 10 (unchanged)

```
---

3️⃣ Non-Primitive Data Type (Object)
JavaScript has only ONE non-primitive type: object

Everything below is an object internally:
```
    {} Object
    [] Array
    function(){}
    new Date()
    new Map()
    new Set()
    RegExp
    WeakMap, 
    WeakSet
```
Exmaple:
```
let obj1 = { x: 1 };
let obj2 = obj1;
obj2.x = 2;
console.log(obj1.x); // 2 (changed)
```
---

4️⃣ typeof — Tricky Interview Cases

| Value          | typeof                    |
| -------------- | ------------------------- |
| `"hello"`      | `"string"`                |
| `10`           | `"number"`                |
| `true`         | `"boolean"`               |
| `undefined`    | `"undefined"`             |
| `null`         | `"object"` ❗ (legacy bug) |
| `{}`           | `"object"`                |
| `[]`           | `"object"`                |
| `function(){}` | `"function"`              |

---
📌 Interview Note
> typeof null === "object" is a historical bug and still exists for backward compatibility.

Stack vs Heap

| Type      | Stored In                 |
| --------- | ------------------------- |
| Primitive | Stack                     |
| Object    | Heap (reference in stack) |

```
let a = 5;          // stack
let obj = { x: 1 } // heap

```
---

Primitive vs Object :

| Feature     | Primitive | Object    |
| ----------- | --------- | --------- |
| Stored as   | Value     | Reference |
| Mutable     | ❌ No      | ✅ Yes     |
| Compared by | Value     | Reference |
| Copied by   | Value     | Reference |

---

Falsy Values (for reference)

```
    false
    0
    -0
    0n        // BigInt zero
    ""        // empty string
    null
    undefined
    NaN
```
Everything is truthy except the falsy values above flsy values
```
    true
    1
    -1
    "0"
    "false"
    " "
    []
    {}
    function(){}
    Infinity
    - Infinity

```
---
## `&&, ||, ?? Short-Circuiting (Interview Gold)`

**The `&&` operator acts like an `if`:**
- If the first operand is **true**, evaluate and return the second.
- If the first operand is **false**, stop and return it.

<img width="622" height="158" alt="image" src="https://github.com/user-attachments/assets/1698daa8-54cd-46ce-b390-3a95ade3bdd5" />



### && (AND)

```
false && "hello" // false
true && "hello"  // "hello"
```
### || (OR)

**The `||` operator acts like an `if-else`:**
- If the first operand is **truthy**, return it.
- Else, return the second.
  
```
false || "hi"  // "hi"
true || "hi"   // true
```
---
## 🔍 Code Translation to if

### && example
```
isLoggedIn && showDashboard();
```

Equivalent if:
```
if (isLoggedIn) {
  showDashboard();
}
```

👉 No else branch

---

### || example
```
const name = inputName || "Guest";
```

Equivalent if-else:
```
let name;
if (inputName) {
  name = inputName;
} else {
  name = "Guest";
}
```

🧠 Why || feels like if-else but && does not
| Operator | Has fallback? | Stops early? | Common use            |       |                |
| -------- | ------------- | ------------ | --------------------- | ----- | -------------- |
| `&&`     | ❌ No          | ✅ Yes        | Conditional execution |       |                |
| `        |               | `            | ✅ Yes                 | ✅ Yes | Default values |

👉 Always returns one of the two
?? (Nullish Coalescing)

```
null ?? "default"     // "default"
0 ?? "default"
```

---
