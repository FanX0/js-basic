const f = { a: 1 }
Object.freeze(f)
// Object.isFrozen(obj) → object is frozen?
console.log(Object.isFrozen(f))
const s = { a: 1 }
Object.seal(s)
// Object.isSealed(obj) → object is sealed?
console.log(Object.isSealed(s))
const e = { a: 1 }
Object.preventExtensions(e)
// Object.isExtensible(obj) → can add properties?
console.log(Object.isExtensible(e))