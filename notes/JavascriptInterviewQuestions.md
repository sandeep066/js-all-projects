# JavaScript Interview Questions – Complete Master List

---

## 🟢 A. JavaScript Fundamentals (1–30)

1. What are JavaScript data types?
2. Difference between primitive and non-primitive types
3. Difference between `null` and `undefined`
4. Difference between `==` and `===`
5. Difference between `var`, `let`, and `const`
6. What is hoisting?
7. What is the Temporal Dead Zone (TDZ)?
8. Is JavaScript statically typed or dynamically typed?
9. What is `NaN`?
10. How do you check if a value is `NaN`?
11. What are `typeof` operator edge cases?
12. Why does `typeof null === "object"`?
13. What is strict mode?
14. What are truthy and falsy values?
15. Difference between `Object.is()` and `===`
16. Pass by value vs pass by reference
17. What is immutability?
18. What is a shallow copy?
19. What is a deep copy?
20. Difference between shallow and deep copy
21. Ways to clone objects in JavaScript
22. What is `structuredClone()`?
23. Limitations of `JSON.parse(JSON.stringify())`
24. What is type coercion?
25. Explicit vs implicit coercion
26. What is boxing and unboxing?
27. What is `Symbol` and why is it used?
28. What is `BigInt`?
29. What is optional chaining?
30. What is nullish coalescing (`??`)?

---

## 🟡 B. Functions, Scope & Closures (31–60)

31. What is a function declaration?
32. Function declaration vs function expression
33. Arrow function vs normal function
34. What are arrow function limitations?
35. What is lexical scope?
36. What is scope chain?
37. What is a closure?
38. Why are closures useful?
39. Real-world use cases of closures
40. What is an IIFE?
41. Why were IIFEs used before ES6?
42. What is currying?
43. Difference between currying and partial application
44. What is a higher-order function?
45. What is a pure function?
46. What is an impure function?
47. What is function composition?
48. What are default parameters?
49. What are rest parameters?
50. What is the spread operator?
51. Difference between rest and spread
52. What is recursion?
53. What is tail recursion?
54. Named vs anonymous functions
55. Can arrow functions be constructors?
56. Why arrow functions don’t have `arguments`?
57. How do closures cause memory leaks?
58. How to prevent closure memory leaks?
59. What is function memoization?
60. What is `use strict` effect on functions?

---

## 🟠 C. `this`, Objects & Prototypes (61–95)

61. What is `this` in JavaScript?
62. How is `this` determined?
63. `this` in global scope
64. `this` in normal functions
65. `this` in arrow functions
66. `this` inside callbacks
67. `call`, `apply`, and `bind`
68. Difference between call, apply, and bind
69. Explicit binding vs implicit binding
70. What is the prototype chain?
71. What is prototypal inheritance?
72. Difference between `__proto__` and `prototype`
73. What does `Object.create()` do?
74. ES5 inheritance vs ES6 classes
75. What is a constructor function?
76. What happens internally when `new` is used?
77. What is `instanceof`?
78. Difference between `Object.freeze()` and `Object.seal()`
79. What does `Object.preventExtensions()` do?
80. How do you check own properties?
81. Difference between `in` and `hasOwnProperty`
82. How are objects stored in memory?
83. Difference between `Object` and `Map`
84. Difference between `Map` and `WeakMap`
85. Difference between `Set` and `WeakSet`
86. When should you use `Map` over `Object`?
87. What are computed property names?
88. What are getters and setters?
89. What is object destructuring?
90. Nested destructuring examples
91. How to merge objects safely?
92. Object reference comparison pitfalls
93. What is deep equality check?
94. How to freeze nested objects?
95. What are private fields in classes?

---

## 🔵 D. Arrays & Strings (96–135)

96. Difference between `map()` and `forEach()`
97. Difference between `filter()` and `find()`
98. Difference between `some()` and `every()`
99. Difference between `reduce()` and loops
100. Common use cases of `reduce()`
101. Difference between `findIndex()` and `indexOf()`
102. How do you flatten a nested array?
103. Difference between `flat()` and recursion
104. How do you remove duplicates from an array?
105. How do you sort numbers correctly?
106. Stable vs unstable sorting
107. Time complexity of array methods
108. Are strings immutable?
109. How do you reverse a string?
110. How do you check a palindrome?
111. How do you check an anagram?
112. How do you find the longest word?
113. Longest substring without repeating characters
114. Sliding window technique
115. How do you count character frequency?
116. String compression problem
117. Difference between `split`, `slice`, and `substring`
118. What are template literals?
119. Tagged template literals
120. How to capitalize first letter of each word?
121. Remove falsy values from array
122. Chunk an array into groups
123. Rotate an array by K steps
124. Merge two sorted arrays
125. Find max/min in array
126. Find second largest element
127. Remove specific element from array
128. Check if array is sorted
129. Group array of objects by key
130. Convert array to object
131. Convert object to array
132. Deduplicate array of objects
133. Flatten object keys
134. Compare two arrays deeply
135. Find intersection & difference of arrays

---

## 🟣 E. Asynchronous JavaScript (136–180)

136. Is JavaScript single-threaded?
137. What is the event loop?
138. What is the call stack?
139. What are Web APIs?
140. What is the task (macrotask) queue?
141. What is the microtask queue?
142. Order of execution: sync vs async
143. Promise lifecycle
144. Difference between callbacks and promises
145. What is callback hell?
146. How do promises solve callback hell?
147. `then` vs `catch` vs `finally`
148. What is promise chaining?
149. `Promise.all()` behavior and use cases
150. `Promise.allSettled()` use cases
151. `Promise.race()` use cases
152. `Promise.any()` use cases
153. Difference between `Promise.all` and `Promise.allSettled`
154. Difference between `async/await` and promises
155. How does `async/await` work internally?
156. Error handling with async/await
157. What happens when await fails?
158. `setTimeout` minimum delay issue
159. Why `setTimeout(fn, 0)` is not immediate
160. What is `setInterval` drift?
161. How to stop `setInterval` safely?
162. Blocking the main thread
163. How to offload heavy computation?
164. What are Web Workers?
165. How browsers handle async JS
166. What is requestAnimationFrame?
167. Debounce vs throttle in async context
168. Async iteration (`for await...of`)
169. What is `AbortController`?
170. Canceling fetch requests
171. Race condition in async code
172. Sequential vs parallel async execution
173. Retry logic in promises
174. Timeout wrapper for promises
175. Async queue implementation
176. Concurrency control
177. Microtask starvation
178. Infinite promise loop issue
179. Async memory leaks
180. Event loop interview output questions

---

## 🔴 F. Performance, Memory & Advanced (181–210)

181. What is debouncing?
182. What is throttling?
183. Difference between debounce and throttle
184. Real-world debounce use cases
185. Real-world throttle use cases
186. What is memoization?
187. Garbage collection in JavaScript
188. Mark-and-sweep algorithm
189. What causes memory leaks?
190. How to detect memory leaks?
191. Tree shaking
192. Code splitting
193. Lazy loading
194. Dynamic imports
195. Polyfills
196. Transpilers (Babel)
197. Event delegation
198. Event bubbling vs capturing
199. Preventing unnecessary re-renders
200. Virtual DOM vs real DOM
201. Reflow vs repaint
202. Layout thrashing
203. Time complexity vs space complexity
204. Big-O notation basics
205. Optimizing loops
206. Optimizing DOM access
207. Shadow DOM basics
208. Custom elements
209. Service Workers basics
210. Caching strategies

---

## ⚡ G. MOST-ASKED CODING & LODASH-STYLE QUESTIONS (211–260)

211. Implement `debounce()`
212. Implement `throttle()`
213. Implement `once(fn)`
214. Implement `memoize(fn)`
215. Implement `flatten(array)`
216. Implement `flattenDeep(array)`
217. Implement `chunk(array, size)`
218. Implement `compact(array)`
219. Implement `uniq(array)`
220. Implement `uniqBy(array, key)`
221. Implement `difference(arr1, arr2)`
222. Implement `intersection(arr1, arr2)`
223. Implement `groupBy(array, key)`
224. Implement `countBy(array, key)`
225. Implement `pick(object, keys)`
226. Implement `omit(object, keys)`
227. Implement `range(start, end, step)`
228. Implement `zip(...arrays)`
229. Implement `unzip(array)`
230. Implement `_.get(object, path, defaultValue)`
231. Implement `_.set(object, path, value)`
232. Deep clone object (with circular refs)
233. Implement custom `Promise.all()`
234. Implement custom `Promise.any()`
235. Implement custom `map()`
236. Implement custom `filter()`
237. Implement custom `reduce()`
238. Implement event emitter
239. Implement pub-sub pattern
240. Implement LRU cache
241. Implement deep equality check
242. Implement retry promise
243. Implement timeout promise
244. Implement async queue
245. Implement rate limiter
246. Implement sleep function
247. Implement cancellable promise
248. Implement currying utility
249. Implement partial utility
250. Implement compose()
251. Implement pipe()
252. Implement debounce with immediate option
253. Implement throttle with trailing option
254. Implement deep freeze
255. Implement flatten object keys
256. Implement merge objects deeply
257. Implement binary search
258. Implement sliding window example
259. Implement missing number finder
260. Implement longest substring algorithm

---

## 🔥 H. OUTPUT / TRICK / PREDICT QUESTIONS (261–300)

261. Predict output: `var` in loop with `setTimeout`
262. Predict output: `let` in loop with `setTimeout`
263. Predict output: closure inside loop
264. Predict output: arrow function `this`
265. Predict output: normal function `this`
266. Predict output: promise + setTimeout
267. Predict output: nested promises
268. Predict output: async/await ordering
269. Predict output: hoisting with functions
270. Predict output: hoisting with `var`
271. Predict output: TDZ example
272. Predict output: `this` with bind
273. Predict output: `this` with arrow + bind
274. Predict output: object mutation
275. Predict output: shallow copy bug
276. Predict output: deep copy fix
277. Predict output: coercion tricks
278. Predict output: `+` vs `-` operators
279. Predict output: `[] + {}`
280. Predict output: `{}` + []
281. Predict output: `==` edge cases
282. Predict output: `Object.is` edge cases
283. Predict output: promise rejection chain
284. Predict output: `finally` return behavior
285. Predict output: async function return
286. Predict output: `await` inside loop
287. Predict output: microtask starvation
288. Predict output: event delegation
289. Predict output: prototype lookup
290. Predict output: class inheritance
291. Predict output: private fields
292. Predict output: spread operator
293. Predict output: rest operator
294. Predict output: destructuring default
295. Predict output: optional chaining
296. Predict output: nullish coalescing
297. Predict output: delete operator
298. Predict output: freeze vs seal
299. Predict output: map vs forEach
300. Predict output: reduce trick question
