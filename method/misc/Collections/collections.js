// Map → key/value store
const m = new Map([["a", 1], ["b", 2]]);
console.log(m.get("a"));                 // 1

// Set → unique values
const s = new Set([1, 2, 2, 3]);
console.log(s.size);                     // 3

// WeakMap → object keys only
const wm = new WeakMap();
const o = {};
wm.set(o, 1);
console.log(wm.get(o));                  // 1
console.log(wm.has(o));                  // true
