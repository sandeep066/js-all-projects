
[Event Loop – JavaScript Explained](https://www.youtube.com/watch?v=eiC58R16hb8)

<img width="815" height="697" alt="image" src="https://github.com/user-attachments/assets/96527e7b-273f-4509-aa15-38b1b1f4e1b3" />
<img width="1243" height="684" alt="image" src="https://github.com/user-attachments/assets/da811300-3477-4e6a-b51f-e63797a4aeb7" />
<img width="1238" height="707" alt="image" src="https://github.com/user-attachments/assets/561ceda6-46fc-4dbb-9d8e-7a671330c826" />


### The Event Loop

**The event loop** is a runtime scheduler that moves callbacks from task queues to the call stack when it is empty, prioritizing microtasks over tasks.

---

### JavaScript is Single-Threaded

JavaScript is single-threaded, so:

- Only one function runs at a time (call stack)
- Asynchronous work is handled outside the engine
- The event loop decides when results of async work can run

---

### Important Note

- The event loop is **NOT** part of the JavaScript engine
- It belongs to the **runtime environment** (Browser / Node.js)

---

| JavaScript Engine (V8, etc.) | Runtime Environment (Browser / Node) |
| ---------------------------- | ------------------------------------ |
| Call stack                   | Event loop                           |
| Memory heap                  | Task queue                           |
| Execution contexts           | Microtask queue                      |
| Garbage collector            | Web APIs / Node APIs                 |
| JIT compiler                 | Timers, DOM, Fetch, FS               |

---

| Queue                  | What goes here                                                                           | Priority  |
| ---------------------- | ---------------------------------------------------------------------------------------- | --------- |
| Microtask Queue        | `Promise.then/catch/finally`, `await` continuation, `queueMicrotask`, `MutationObserver` | ⭐ Highest |
| Task Queue (Macrotask) | `setTimeout`, `setInterval`, DOM events, Web API callbacks                               | Lower     |

👉 Microtasks ALWAYS run before tasks

---

### Browser vs Node Event Loop (High-level)
| Aspect     | Browser            | Node.js             |
| ---------- | ------------------ | ------------------- |
| Owner      | Browser            | Node (libuv)        |
| APIs       | DOM, Fetch, Timers | FS, Network, Timers |
| Event loop | Browser managed    | libuv               |
| Concept    | Same               | Same                |

---


| Trap                             | Reality                    |
| -------------------------------- | -------------------------- |
| Event loop is part of JS engine  | ❌ Runtime feature          |
| Promises are async               | ❌ Promise creation is sync |
| `setTimeout(0)` runs immediately | ❌ Enters task queue        |
| Microtasks run after tasks       | ❌ Before tasks             |
| JS is multi-threaded             | ❌ Single-threaded          |

---

### Important Special / Edge Cases (Interview Gold)

#### 1️⃣ `setTimeout(fn, 0)` ≠ immediate

- Delay is the **minimum time to enter the Task Queue**
- Execution waits until:
  - the **call stack is empty**
  - **microtasks are fully drained**

---

<img width="682" height="628" alt="image" src="https://github.com/user-attachments/assets/c439f598-a9ca-499f-a75d-7568eff913c7" />
