// typeof value → primitive type string
console.log(typeof 1) // 'number'
console.log(typeof 'a') // 'string'
console.log(typeof true) // 'boolean'
console.log(typeof undefined) // 'undefined'
console.log(typeof Symbol('x')) // 'symbol'
console.log(typeof 1n) // 'bigint'

// typeof null → historical quirk
console.log(typeof null) // 'object'

// Array.isArray(value) → array check
console.log(Array.isArray([1])) // true

// value instanceof Constructor → instance check
console.log(new Date() instanceof Date) // true

// Object vs primitive
console.log(typeof {}) // 'object'