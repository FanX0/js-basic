const d = {}
// defineProperty(obj, key, descriptor) → control property behavior
Object.defineProperty(d, "hidden", { value: 123, writable: false, enumerable: false, configurable: false })
// getOwnPropertyDescriptor(obj, key) → descriptor info
console.log(Object.getOwnPropertyDescriptor(d, "hidden").enumerable)
// defineProperties(obj, descriptors) → multiple properties
Object.defineProperties(d, { a: { value: 1 }, b: { value: 2 } })
// getOwnPropertyDescriptors(obj) → all descriptors
console.log(Object.getOwnPropertyDescriptors(d).a.value)