[How Browser works?](https://www.youtube.com/watch?v=5rLFYtXHo9s&t=620s)

<img width="516" height="422" alt="image" src="https://github.com/user-attachments/assets/0dbc642e-c4bc-4373-843a-451e57125371" />

---

## Who Does This Work (DOM creation and updates)  — Browser Engine or Rendering Engine?

### Short Answer
- **Tokenization, parsing, DOM/CSSOM creation, render tree construction, layout, paint, and compositing are done by the _Rendering Engine_, which is a core part of the Browser Engine.**  

- They are **NOT** done by the JavaScript engine.

###  DOM Standard (WHATWG)

- **DOM is not part of JavaScript**
- Official spec:  
  https://dom.spec.whatwg.org/

> “The DOM defines a platform-neutral model for documents and events.”

- This specification is **implemented by browser rendering engines**, not by JavaScript engines.

---

### Browser Architecture (MDN)

- Official documentation:  
  https://developer.mozilla.org/en-US/docs/Web/Performance/How_browsers_work

MDN clearly shows that the following are part of the **rendering pipeline**:

- DOM construction
- DOM mutation handling
- Layout
- Paint  

---

## Clear Terminology (Interview-Safe)

| Term | What it is | Examples |
|---|---|---|
**Browser** | Full application | Chrome, Firefox, Safari |
**Browser Engine** | Orchestrates subsystems | Chromium, Gecko |
**Rendering Engine** | Parses HTML/CSS & renders pixels | Blink (Chrome), WebKit (Safari), Gecko |
**JavaScript Engine** | Executes JavaScript only | V8, SpiderMonkey, JavaScriptCore |

👉 The **Rendering Engine** handles the rendering pipeline.  
👉 The **JavaScript Engine** only executes JS.

---

## COMPLETE END-TO-END FLOW (CROSS-VERIFIED)  
### (Mapped to Responsible Component + Proof)

### 1️⃣ File (HTML / CSS / JS)
- **Browser + OS I/O**
- Files fetched from disk or network

---

### 2️⃣ Raw Bytes (010101…)
- **Browser**
- Data read as binary streams

---

### 3️⃣ Character Decoding (UTF-8, etc.)
- **Rendering Engine**
- Converts bytes → characters using encoding rules

**Proof:**  
https://html.spec.whatwg.org/multipage/parsing.html#character-encoding

---

### 4️⃣ Tokenization (Lexical Analysis)
- **Rendering Engine (HTML/CSS Tokenizers)**
- Characters → tokens

**Proof (Spec):**  
https://html.spec.whatwg.org/multipage/parsing.html#tokenization

**Real Browser Code:**  
- Chromium (Blink):  
  https://source.chromium.org/chromium/chromium/src/+/main:third_party/blink/renderer/core/html/parser/html_tokenizer.cc  
- Firefox (Gecko):  
  https://searchfox.org/mozilla-central/source/parser/html/nsHtml5Tokenizer.cpp

---

### 5️⃣ Parsing (Syntax Analysis)
- **Rendering Engine (Parser / Tree Builder)**
- Tokens → structured grammar

**Proof:**  
https://html.spec.whatwg.org/multipage/parsing.html#overview-of-the-parsing-model

---

### 6️⃣ Tree Model Created (DOM / CSSOM / AST)
- **Rendering Engine**
  - HTML → DOM
  - CSS → CSSOM
- **JavaScript Engine**
  - JS → AST

**Proof:**  
- DOM Standard: https://dom.spec.whatwg.org/  
- CSSOM Spec: https://drafts.csswg.org/cssom/

---

### 7️⃣ Render Tree Construction
- **Rendering Engine**
- Combines DOM + CSSOM
- Filters invisible nodes (`display:none`)

**Proof:**  
https://developer.mozilla.org/en-US/docs/Web/Performance/How_browsers_work#render-tree_construction

---

### 8️⃣ Layout (Math Calculations)
- **Rendering Engine**
- Calculates width, height, x/y positions (reflow)

**Proof:**  
https://developer.mozilla.org/en-US/docs/Web/Performance/How_browsers_work#layout

---

## 9️⃣ Paint (Pixels on Screen)

**Rendering Engine (often GPU-assisted)**  
Converts layout information → painted pixels (layers).

**Proof:**  
https://developer.mozilla.org/en-US/docs/Web/Performance/How_browsers_work#paint

---

### 🔟 Compositing (Layer Assembly)
- **Rendering Engine**
- Combines painted layers
- Optimizes scrolling, transforms, opacity

**Proof:**  
https://developer.mozilla.org/en-US/docs/Web/Performance/How_browsers_work#compositing

---

### 1️⃣1️⃣ JavaScript Interaction
- **JavaScript Engine executes JS**
- **Rendering Engine exposes DOM APIs**
- DOM/CSS mutations → trigger reflow/repaint/compositing

**Proof:**  
https://dom.spec.whatwg.org/

---

## One-Line Interview Answer

**HTML/CSS parsing, DOM/CSSOM creation, render tree, layout, paint, and compositing are handled by the browser’s rendering engine—not the JavaScript engine.**

---

## Memory Hook

> **JS engine runs code.  
Rendering engine builds, lays out, paints, and composites the page.**


---
## 1️⃣ File (HTML / CSS / JS)

**What it is**  
A plain text file stored on disk or received over network.

Example (`index.html`):
```html
<h1>Hello</h1>
<p>World</p>
```
---
## 2️⃣ Raw Bytes (010101…)

What happens ?
- The OS gives the browser a stream of bytes.

Example (simplified):

```
3C 68 31 3E 48 65 6C 6C 6F 3C 2F 68 31 3E
```

Why needed ?
> All files are stored as bytes, 
> CPU works on bytes, not text
---

## 3️⃣ Character Decoding (UTF-8 etc.)

What happens ?
- Browser converts bytes → characters using encoding rules.

Example:
```
3C → <
68 → h
31 → 1
```
Result
```
<h1>Hello</h1>

```
### Why Character Decoding Is Needed

- Without decoding, the browser can’t understand letters—only raw bytes.
- Bytes must be interpreted using an encoding to become readable characters.

**Encoding information comes from:**
- `<meta charset="utf-8">`
- HTTP response headers
- Browser default encoding

  ---

## 4️⃣ Tokenization (Lexical Analysis)

What happens
- Characters are scanned and converted into meaningful tokens.

Example input:
```
<h1>Hello</h1>
```

Tokenizer output (flat token stream, no structure yet)
```
StartTagToken("h1")
CharacterToken("Hello")
EndTagToken("h1")
```

Key points
- No parent/child yet
- No DOM yet
- Just a sequence of tokens

Why needed
> Parser can’t work with raw characters, 
> Tokens are meaningful units that the parser can understand
---
## 5️⃣ Parsing (Syntax Analysis)

What happens
Parser:
- Reads tokens
- Applies HTML grammar rules
- Builds relationships

Example logic:
```
StartTag(h1) → create element
Text(Hello) → attach to h1
EndTag(h1) → close element
```

Why needed
- To create hierarchy
- To validate structure
- To auto-fix invalid HTML
---
## 6️⃣ Tree Model (DOM / CSSOM / AST)
HTML → DOM
```
document.body.children[0].tagName // "H1"
```

DOM Tree:
```
Document
 └── html
     └── body
         └── h1
             └── "Hello"
```
CSS → CSSOM
```
h1 { color: red; }
```
CSSOM Tree:
```
css

StyleRule(h1 → color:red)
```
JS → AST
```
js

let x = 1 + 2;
```
AST:
```
VariableDeclaration
 └── BinaryExpression(+)
```

Why trees?
- Trees enable traversal
- Trees enable updates
- Trees enable rendering

- `document.querySelectorAll("h1")` → **NodeList**
- `document.getElementsByTagName("h1")` → **HTMLCollection**

---
## 7️⃣ Render Tree

What happens
- DOM + CSSOM are combined.

Example:
```
<h1 style="display:none">Hello</h1>
<p>World</p>
```

Render Tree:
```
p → visible
h1 → excluded
```

Rules
- `display:none → removed`
- `visibility:hidden → included (but invisible)`
---
## 8️⃣  Layout (Math Calculations)

What happens
Browser calculates:
- Width
- Height
- Position

Example:
```
p {
  width: 50%;
}
```

If viewport = 1000px
- `→ p.width = 500px`

Why expensive
- Requires math
- Affects siblings
- Triggers reflow
---
## 9️⃣ Paint (Pixels on Screen)

**What happens**
- Browser converts layout information into **painted layers (bitmaps)**.
- Each visual part is drawn separately, not yet merged into a final frame.

**Example**

```
(x=10,y=50,width=500,height=20,color=black)
```
**Paint operations**
- Text
- Backgrounds
- Borders
- Images

**Result of Paint**
- Visual content is **drawn into individual layers**
- These layers are **not yet the final screen image**

---

## 🔟 Compositing (Layer Assembly)

**What happens**
- Previously painted layers are **assembled into the final frame**.
- Layers are ordered, positioned, and merged based on stacking context.

**What it handles**
- Scrolling
- `transform`
- `opacity`
- `will-change`

**Key points**
- Often handled by the GPU
- Does **NOT** trigger repaint or reflow
- Works on already-painted layers only

**Why needed**
- Enables smooth animations and scrolling
- Avoids re-painting everything for simple visual changes

**Final result**
- The **final image is produced and displayed on the screen**


---
## 1️⃣1️⃣ JavaScript Interaction (Important Rules)
Script Blocking
- `<script>` pauses DOM parsing
- JS can mutate DOM & CSSOM

CSS blocks JS
- JS execution waits for CSSOM
- Browser must know styles before layout-affecting JS runs

Why defer / async exist
- Let HTML & CSS paint first
- JS loads later → better performance
---  
## 🔁 Repaints & Reflows (Important)

Change color → repaint

Change width → reflow + repaint

Example:
```
el.style.color = "red";    // repaint
el.style.width = "300px"; // reflow + repaint
```
---
FINAL MENTAL MODEL (INTERVIEW GOLD)

```
Browser never renders HTML directly
Everything becomes tokens first
Tokens become trees
Trees become pixels
DOM APIs expose node trees, not text
NodeList / HTMLCollection are just views of DOM
```
NodeList vs HTMLCollection (Corrected & Verified)
| API                       | Returns            |
| ------------------------- | ------------------ |
| `getElementsByTagName`    | **HTMLCollection** |
| `getElementsByClassName`  | **HTMLCollection** |
| `document.forms / images` | **HTMLCollection** |
| `querySelectorAll`        | **NodeList**       |
| `childNodes`              | **NodeList**       |

| Feature          | HTMLCollection     | NodeList                    |
| ---------------- | ------------------ | --------------------------- |
| What it contains | Element nodes only | Any node type               |
| Live updates     | ✅ Usually live     | `querySelectorAll` ❌ static |
| Older API        | Yes                | Newer                       |
| Iterable         | Partially          | Yes                         |

- `Both are just “views” into the same DOM tree`

| Component                 | Role               |
| ------------------------- | ------------------ |
| JS Engine (V8)            | Executes JS        |
| Browser Engine            | Rendering & layout |
| Runtime Environment       | Event loop, APIs   |
| DOM                       | In-memory model    |
| HTMLCollection / NodeList | Views into DOM     |
---
## Summary (Interview-Ready)

- `querySelectorAll()` is a **modern, standards-based API**
- It returns a **static `NodeList` by design**
- Static behavior is intentional for:
  - Predictability
  - Performance
  - Avoiding live-DOM mutation bugs
- **Live collections (`HTMLCollection`) exist mainly for backward compatibility**
- Modern JavaScript & frameworks prefer **static snapshots + explicit re-query**

👉 Static ≠ outdated  
👉 Static = safer & modern

---

## Why `NodeList` Is Considered Modern

- Uses **CSS selectors** (same syntax as modern CSS tooling)
- Defined and maintained in the **WHATWG DOM Standard**
- Actively used by **all modern browsers**
- Supported by **frameworks & libraries**
- Supports modern iteration (`forEach`)
- Avoids bugs caused by DOM changing during iteration

---

## Official Proof (Authoritative Sources)

### 1️⃣ WHATWG DOM Standard — `querySelectorAll`
- Spec defines it as returning a **static `NodeList`**  
  https://dom.spec.whatwg.org/#dom-parentnode-queryselectorall

> “The `querySelectorAll` method returns the **static result** of running selectors.”

---

### 2️⃣ MDN (Mozilla) — Modern Web Docs
- `querySelectorAll()`  
  https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll

> “The returned `NodeList` is **not live**.”

MDN status:
- ✅ Standard
- ✅ Widely supported
- ❌ Not deprecated

---

### 3️⃣ Older Model: `HTMLCollection`
- MDN:  
  https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection

> “An `HTMLCollection` is **live**.”

(Legacy behavior from early DOM APIs.)

---

## One-Line Interview Answer

**`querySelectorAll` is modern and standard; it returns a static `NodeList` by design to ensure predictable behavior and avoid live-DOM mutation bugs.**

Example problem with live collections:

```
const els = document.getElementsByTagName("div");
for (let el of els) {
  document.body.appendChild(document.createElement("div"));
}
// ⚠️ Can loop forever
```
Why “legacy updates realtime” but modern doesn’t
- Early DOM APIs favored automatic syncing
- Modern APIs favor explicit control + performance
- Today’s rule: “Re-query when you want updates”
```
// Modern pattern
let nodes = document.querySelectorAll("div");
// DOM changes
nodes = document.querySelectorAll("div"); // explicit refresh
```
---

```
## OFFICIAL PROOF LINKS (AUTHORITATIVE)

- **[HTML Tokenization – WHATWG HTML Living Standard]**  
  https://html.spec.whatwg.org/multipage/parsing.html#tokenization

- **[Start Tag Token Definition]**  
  https://html.spec.whatwg.org/multipage/parsing.html#start-tag-token

- **[Tokenizer → Tree Builder Separation (Parsing Model)]**  
  https://html.spec.whatwg.org/multipage/parsing.html#overview-of-the-parsing-model

- **[DOM Standard (Node, NodeList, HTMLCollection)]**  
  https://dom.spec.whatwg.org/

- **[Chromium HTML Tokenizer Source (Real Browser Code)]**  
  https://source.chromium.org/chromium/chromium/src/+/main:third_party/blink/renderer/core/html/parser/html_tokenizer.cc

- **[Firefox HTML Tokenizer Source]**  
  https://searchfox.org/mozilla-central/source/parser/html/nsHtml5Tokenizer.cpp



```



