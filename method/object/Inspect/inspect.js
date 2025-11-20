// Object.keys(obj) → array of own enumerable keys
console.log(Object.keys({ a: 1, b: 2 }))
// Object.values(obj) → array of own enumerable values
console.log(Object.values({ a: 1, b: 2 }))
// Object.entries(obj) → array of [key,value] pairs
console.log(Object.entries({ a: 1, b: 2 }))
// Object.hasOwn(obj, key) → own property exists?
console.log(Object.hasOwn({ a: 1 }, "a"))
// obj.hasOwnProperty(key) → legacy own property check
console.log({ a: 1 }.hasOwnProperty("a"))
// key in obj → property exists in chain
console.log("a" in { a: 1 })