<details>
<summary><strong>📌 Books Data + Helper Functions</strong></summary>

```js
const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}
```
</details>

---
### Destructring old and new way- Objects and array
<img width="773" height="325" alt="image" src="https://github.com/user-attachments/assets/dd4f29f7-fb33-4424-bcd3-2fd5dbd46e0d" />

---

### Rest operator at end for array

<img width="826" height="135" alt="image" src="https://github.com/user-attachments/assets/9e3c58af-0793-4c49-a057-2fd1df9924e4" />

---

<img width="1187" height="315" alt="image" src="https://github.com/user-attachments/assets/426fed44-6917-4098-94f1-67411fe42f2f" />

---

### Spread operator on Array

<img width="642" height="85" alt="image" src="https://github.com/user-attachments/assets/14a5a6a9-0f19-4856-a004-d6eafec9a64c" />

---
### Spread operator on Object [add new porpety by spreading individual specific object]

<img width="573" height="76" alt="image" src="https://github.com/user-attachments/assets/89fda3d4-cbd9-4d28-9f66-e02e143b939f" />

---
### Update existing property in object using spread operator ( should be at end)
<img width="330" height="109" alt="image" src="https://github.com/user-attachments/assets/f3a001c5-b164-4cd0-a95c-8c1f6d5f1001" />

---
1️⃣ Spread operator (...) → EXPANDS
Used when?

- Function call
- Array literal
- Object literal
- 
Example
```
const arr = [1, 2, 3];
console.log(...arr); // 1 2 3

Array copy
const copy = [...arr];

Object copy
const obj = { a: 1 };
const copy = { ...obj };
```
2️⃣ Rest operator (...) → COLLECTS

Used when?

- Function parameters
- Destructuring (array / object)

  
 Example
 ```
Function example
function sum(...nums) {
  return nums.reduce((a, b) => a + b);
}

Destructuring example
const [a, ...rest] = [1, 2, 3];
// a = 1, rest = [2, 3]

```

Rest vs arguments (classic)
```
// Rest parameters ...args (modern, real array)
function test(...args) {
  console.log(args);
}

test(1, 2, 3);
---
Key points
✅ Real array
✅ All array methods available
✅ Works in arrow functions
✅ Clean & predictable

args.map(x => x * 2); // ✅ works


// arguments (old, array-like)
function test() {
  console.log(arguments);
}

test(1, 2, 3);

Key points

❌ Not a real array
❌ No map, filter, reduce
❌ Does NOT work in arrow functions
❌ Harder to read / legacy

arguments.map(x => x); // ❌ error


```

| Feature         | `arguments`       | `...args` (rest) |
| --------------- | ----------------- | ---------------- |
| Type            | Array-like object | Real array       |
| Array methods   | ❌                 | ✅                |
| Arrow functions | ❌                 | ✅                |
| ES version      | Old (ES5)         | Modern (ES6)     |
| Readability     | Poor              | Clean            |
| Recommended     | ❌                 | ✅                |

---

| Feature      | Spread          | Rest                  |
| ------------ | --------------- | --------------------- |
| Purpose      | Expand          | Collect               |
| Position     | RHS             | LHS                   |
| Used in      | Calls, literals | Params, destructuring |
| Syntax       | `...value`      | `...name`             |
| Must be last | ❌               | ✅                     |

