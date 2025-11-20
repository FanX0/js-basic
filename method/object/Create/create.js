// Plain object literal
console.log({ a: 1, b: 2 })
const o2 = Object.create(null)
o2.x = 1
// Object.create(null) → no prototype
console.log(o2)
// Object.fromEntries(entries) → build object from pairs
console.log(Object.fromEntries([["k", 3], ["z", 4]]))