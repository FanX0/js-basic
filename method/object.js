// Create & Basics
const o1 = { a: 1, b: 2 }
// Plain object literal
console.log(o1) // { a: 1, b: 2 }
const o2 = Object.create(null)
o2.x = 1
// Object.create(null) → no prototype
console.log(o2) // { x: 1 } without prototype
// Object.fromEntries(entries) → build object from [key,value] pairs
console.log(Object.fromEntries([["k", 3], ["z", 4]])) // { k: 3, z: 4 }

// Inspect
// Object.keys(obj) → array of own enumerable keys
console.log(Object.keys({ a: 1, b: 2 })) // ["a", "b"]
// Object.values(obj) → array of own enumerable values
console.log(Object.values({ a: 1, b: 2 })) // [1, 2]
// Object.entries(obj) → array of [key,value] pairs
console.log(Object.entries({ a: 1, b: 2 })) // [["a",1],["b",2]]
// Object.hasOwn(obj, key) → own property exists?
console.log(Object.hasOwn({ a: 1 }, "a")) // true
// obj.hasOwnProperty(key) → legacy own property check
console.log({ a: 1 }.hasOwnProperty("a")) // true
// key in obj → property exists in prototype chain too
console.log("a" in { a: 1 }) // true

// Merge & Copy
// Object.assign(target, ...sources) → copy properties
console.log(Object.assign({}, { a: 1 }, { b: 2 })) // { a: 1, b: 2 }
// Spread syntax → shallow merge
console.log({ ...{ a: 1 }, ...{ b: 2 } }) // { a: 1, b: 2 }

// Clone
const src = { a: 1, nested: { x: 10 } }
const shallow = { ...src }
// Shallow copy shares nested references
console.log(shallow.nested === src.nested) // true (shallow)
const deep = typeof structuredClone === "function" ? structuredClone(src) : JSON.parse(JSON.stringify(src))
// Deep clone does not share nested references
console.log(deep.nested === src.nested) // false (deep)

// Freeze / Seal / Extensibility
const f = { a: 1 }
Object.freeze(f)
// Object.isFrozen(obj) → object is frozen?
console.log(Object.isFrozen(f)) // true
const s = { a: 1 }
Object.seal(s)
// Object.isSealed(obj) → object is sealed?
console.log(Object.isSealed(s)) // true
const e = { a: 1 }
Object.preventExtensions(e)
// Object.isExtensible(obj) → can add properties?
console.log(Object.isExtensible(e)) // false

// Define Properties & Descriptors
const d = {}
// defineProperty(obj, key, descriptor) → control property behavior
Object.defineProperty(d, "hidden", { value: 123, writable: false, enumerable: false, configurable: false })
// getOwnPropertyDescriptor(obj, key) → descriptor info
console.log(Object.getOwnPropertyDescriptor(d, "hidden").enumerable) // false
// defineProperties(obj, descriptors) → define multiple props
Object.defineProperties(d, { a: { value: 1 }, b: { value: 2 } })
// getOwnPropertyDescriptors(obj) → all descriptors
console.log(Object.getOwnPropertyDescriptors(d).a.value) // 1

// Prototype
function C() {}
C.prototype.greet = function () { return "hi" }
const inst = new C()
// getPrototypeOf(obj) → object's prototype
console.log(Object.getPrototypeOf(inst) === C.prototype) // true
const p = { hello() { return "world" } }
const objP = Object.create(p)
// Object.create(proto) → set prototype
console.log(objP.hello()) // "world"

// Equality & Identity
// Object.is(a, b) → SameValue equality semantics
console.log(Object.is(NaN, NaN)) // true
console.log(Object.is(+0, -0)) // false
console.log(Object.is(1, 1)) // true

// JSON
const jsonStr = JSON.stringify({ a: 1, b: 2 }, null, 2)
// JSON.stringify(value, replacer?, space?) → string
console.log(typeof jsonStr === "string") // true
// JSON.parse(text) → object from JSON string
console.log(JSON.parse("{" + "\"a\":1}" ).a) // 1