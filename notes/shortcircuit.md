🔹 JavaScript Data Types — Complete Guide

[Official data types proof link](https://tc39.es/ecma262/#sec-ecmascript-language-types)

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
| 1)`string`    | `"hello"`      |
| 2)`number`    | `10`, `3.14`   |
| 3)`bigint`    | `100n`         |
| 4)`boolean`   | `true`         |
| 5)`undefined` | `undefined`    |
| 6)`null`      | `null`         |
| 7)`symbol`    | `Symbol("id")` |


Example:

```
let a = 10;
let b = a;
b = 20;
console.log(a); // 10 (unchanged)

```
---

3️⃣ Non-Primitive Data Type (Object)
> JavaScript has only ONE non-primitive type: object

Everything below is an object internally:
```
    1) {} Object
    2) [] Array
    3) function(){}
    4) new Date()
    5) new Map()
    6) new Set()
    7) RegExp
    8) WeakMap, 
    9) WeakSet
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

5) Stack vs Heap

| Type      | Stored In                 |
| --------- | ------------------------- |
| Primitive | Stack                     |
| Object    | Heap (reference in stack) |

```
let a = 5;          // stack
let obj = { x: 1 } // heap

```
---

6) Primitive vs Object :

| Feature     | Primitive | Object    |
| ----------- | --------- | --------- |
| Stored as   | Value     | Reference |
| Mutable     | ❌ No      | ✅ Yes     |
| Compared by | Value     | Reference |
| Copied by   | Value     | Reference |

---

7) Falsy Values (8) (for reference)

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
8) Everything is truthy except above falsy values.

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
## 9) `&&, ||, ?? Short-Circuiting (Interview Gold)`

**The `&&` operator acts like an `if`:**
- If the first operand is **true**, evaluate and return the second.
- If the first operand is **false**, stop and return it.

<img width="622" height="158" alt="image" src="https://github.com/user-attachments/assets/1698daa8-54cd-46ce-b390-3a95ade3bdd5" />



### A) && (AND)

```
false && "hello" // false
true && "hello"  // "hello"
```
### B) || (OR)

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

| Operator | Has fallback? | Stops early? | Common use               |
| -------- | ------------- | ------------ | ------------------------ |
| `&&`     | ❌ No          | ✅ Yes        | Conditional execution    |
| `\|\|`     | ✅ Yes         | ✅ Yes        | Default / fallback value |



🎯 One-Line Interview Answer
> && is a conditional gate (like if without else), while || is a fallback selector (like if-else).

```
&& → do this ONLY IF condition is true  
|| → use this IF the first value fails

```
```
OR (||) → short-circuiting happens on TRUE
AND (&&) → short-circuiting happens on FALSE

```
---

👉 Always returns one of the two

### C) ?? (Nullish Coalescing)

**The `??` (nullish coalescing) operator acts like a safe default check:**  
- If the first operand is **`null` or `undefined`**, it returns the second value.  
- Otherwise, it returns the first value.

```
null ?? "default"     // "default"
0 ?? "default"
```

---
Summary:

```
&&  → checks for false
||  → checks for truthy
??  → checks only for null / undefined
```

```
false && "A"   // false
true  && "A"   // "A"

"JS" || "TS"   // "JS"
""   || "TS"   // "TS"

0    ?? 100    // 0
null ?? 100    // 100
```
```
&& and || use truthy/falsy checks, while ?? ignores falsy values and only checks for null or undefined.
```
---
## 10) Optional chaining:
> “Optional chaining (?.) safely accesses nested properties and short-circuits only on null or undefined, preventing runtime errors; it does not change truthy/falsy behavior—conditional execution is still controlled by &&.”


> “Optional chaining prevents crashes, not logic; && still decides truthy or falsy execution.”

🔹 What optional chaining DOES
```
✔ Prevents TypeError
✔ Removes repeated obj && checks
✔ Improves readability
```

🔹 What optional chaining DOES NOT do
```
❌ Does NOT treat 0 or false as true
❌ Does NOT change && logic
❌ Does NOT force function execution
```
Combine with nullish coalescing

```
const name = user?.profile?.name ?? "Guest";
```

🔹 What each operator is responsible for

| Operator | Purpose                              |
| -------- | ------------------------------------ |
| `?.`     | Safe access (prevents error)         |
| `&&`     | Conditional execution (truthy/falsy) |

---

| Feature           | `&&`  | `?.`                 |
| ----------------- | ----- | -------------------- |
| Stops on          | falsy | `null` / `undefined` |
| Safer for 0/false | ❌     | ✅                    |
| Readability       | 😐    | ✅                    |

### 🚨 Real problem optional chaining fixes
### Without optional chaining → ❌ crash
```
const obj = null;

obj.enabled && fn(); // 💥 TypeError
```

### With optional chaining → ✅ safe
```
const obj = null;

obj?.enabled && fn (); // no error, just stops
```
🧠 Key separation (THIS is the click moment)

Two DIFFERENT concern
| Concern                          | Solved by |
| -------------------------------- | --------- |
| Object might be null / undefined | `?.`      |
| Whether function should run      | `&&`      |
---


| `obj`       | `enabled` | `obj.enabled && fn()` | `obj && obj.enabled && fn()` | `obj?.enabled && fn()` | Why                |
| ----------- | --------- | --------------------- | ---------------------------- | ---------------------- | ------------------ |
| `{}`        | `true`    | ✅ called              | ✅ called                     | ✅ called               | truthy             |
| `{}`        | `false`   | ❌ not called          | ❌ not called                 | ❌ not called           | falsy              |
| `{}`        | `0`       | ❌ not called          | ❌ not called                 | ❌ not called           | `0` is falsy       |
| `{}`        | `""`      | ❌ not called          | ❌ not called                 | ❌ not called           | empty string falsy |
| `null`      | —         | 💥 **CRASH**          | ❌ safe stop                  | ❌ safe stop            | `?.` / `&&` guard  |
| `undefined` | —         | 💥 **CRASH**          | ❌ safe stop                  | ❌ safe stop            | `?.` / `&&` guard  |
---
