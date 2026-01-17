[How Browser works?](https://www.youtube.com/watch?v=5rLFYtXHo9s&t=620s)

<img width="516" height="422" alt="image" src="https://github.com/user-attachments/assets/0dbc642e-c4bc-4373-843a-451e57125371" />

---

## COMPLETE END-TO-END FLOW (CROSS-VERIFIED)

1️⃣ **File (HTML / CSS / JS)**  
Source files written by the developer or fetched from the network.

2️⃣ **Raw Bytes (010101…)**  
Files are read by the browser as binary data.

3️⃣ **Character Decoding (UTF-8, etc.)**  
Bytes are converted into readable characters using encoding rules.

4️⃣ **Tokenization (Lexical Analysis)**  
Characters are grouped into meaningful tokens (tags, text, symbols).

5️⃣ **Parsing (Syntax Analysis)**  
Tokens are analyzed and structured according to language grammar.

6️⃣ **Tree Model Created (DOM / CSSOM / AST)**  
Structured trees are built in memory for HTML, CSS, and JavaScript.

7️⃣ **Render Tree Construction**  
DOM and CSSOM are combined to determine visible elements.

8️⃣ **Layout (Math Calculations)**  
Exact size and position of each visible element is calculated.


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

What happens
The OS gives the browser a stream of bytes.

Example (simplified):

```
3C 68 31 3E 48 65 6C 6C 6F 3C 2F 68 31 3E
```

Why needed ?
> All files are stored as bytes, 
> CPU works on bytes, not text
---

## 3️⃣ Character Decoding (UTF-8 etc.)

What happens
Browser converts bytes → characters using encoding rules.

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
- Characters are scanned and converted into tokens.

Example input:
```
<h1>Hello</h1>
```

Tokenizer output (flat, no structure):
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
> Tokens are meaningful units
---
## 5️⃣ Flat Token Stream

What it is
- A queue / stream of tokens waiting to be parsed.

Example:
```
[ StartTag(h1), Text(Hello), EndTag(h1) ]
```

Why “flat”?
- Order exists
- Structure does NOT
---
## 6️⃣ Parsing (Syntax Analysis)

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
## 7️⃣ Tree Model (DOM / CSSOM / AST)
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
## 8️⃣ Render Tree

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
## 9️⃣ Layout (Math Calculations)

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
## 🔟 Paint (Pixels on Screen)

What happens
- Browser converts layout info → pixels.

Example:
```
(x=10,y=50,width=500,height=20,color=black)
```

Paint operations:
- Text
- Backgrounds
- Borders

Images

Final result
- You see actual content on screen.
---
1️⃣1️⃣ JavaScript Interaction (Important Rules)
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



