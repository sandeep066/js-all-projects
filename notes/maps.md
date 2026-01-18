
maps:
Array map()

<img width="735" height="436" alt="image" src="https://github.com/user-attachments/assets/d5a2a798-f2c7-48d6-8b42-f75b4ee98c3f" />

wrap in small brackets by reoving {retun} for multiline and it works same

<img width="392" height="142" alt="image" src="https://github.com/user-attachments/assets/8f0615fb-9d8f-4331-85cd-06802f4eb0b9" />

Mutating Objects(CRUD)

<img width="1260" height="613" alt="image" src="https://github.com/user-attachments/assets/31b1a109-7a32-400f-a545-114c46ed020c" />

| Operation                | Spread works?              |
| ------------------------ | -------------------------- |
| Add new item to array    | ✅                          |
| Remove item from array   | ✅                          |
| Update top-level field   | ✅                          |
| Update nested object     | ⚠️ manual spreading needed |
| Deep clone automatically | ❌                          |


```
const updatedBook =
  book.id === 1
    ? {
        ...book,
        meta: {
          ...book.meta,
          publisher: {
            ...book.meta.publisher,
            name: "Penguin"
          }
        }
      }
    : book;

```
```
...object → copy shell only
nested objects → still shared

```
```
const original = {
  name: "Book",
  meta: {
    pages: 100
  }
};

const copy = { ...original };

```
```
copy !== original            // ✅ new object
copy.name === original.name  // ✅ copied value
copy.meta === original.meta  // ❌ SAME reference

```
```
copy.meta.pages = 200;

console.log(original.meta.pages); // 200 😮

```
Deep clone methods comparison

| Feature                 | `structuredClone` | `JSON.parse(JSON.stringify())` | `cloneDeep` (lodash) |
| ----------------------- | ----------------- | ------------------------------ | -------------------- |
| Deep copy               | ✅                 | ⚠️ partial                     | ✅                    |
| Handles nested objects  | ✅                 | ✅                              | ✅                    |
| Preserves `Date`        | ✅                 | ❌ (stringified)                | ✅                    |
| Preserves `Map` / `Set` | ✅                 | ❌                              | ✅                    |
| Preserves `undefined`   | ✅                 | ❌                              | ✅                    |
| Handles circular refs   | ✅                 | ❌ crash                        | ✅                    |
| Functions               | ❌                 | ❌                              | ❌                    |
| Performance             | ⚠️ medium         | ✅ fast                         | ⚠️ slower            |
| Built-in                | ✅                 | ✅                              | ❌ (library)          |


- **Normalize state**: store entities by ID to avoid deep nesting.
- **Split state by domain**: keep Cart, Products, Orders, and User separate.
- **Shallow updates**: smaller slices make updates simple and predictable.
- **Use Immer**: write mutating-looking code with immutable results.
- **Backend as source of truth**: replace data instead of editing deeply.
- **Avoid manual deep spreads**: they’re error-prone and hard to maintain.
- **Use `structuredClone` sparingly**: only for rare, isolated deep copies.
- **Result**: scalable, readable, production-ready state management.

