// Named export → export multiple bindings
export const add = (a, b) => a + b
export const mul = (a, b) => a * b

// Default export → single primary export
const greet = name => `Hello ${name}`
export default greet