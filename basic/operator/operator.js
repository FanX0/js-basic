// Arithmetic operators → + - * / % **
console.log(1 + 2) // 3
console.log(5 - 3) // 2
console.log(2 * 3) // 6
console.log(6 / 2) // 3
console.log(7 % 3) // 1
console.log(2 ** 3) // 8

// Comparison operators → === !== > < >= <=
console.log(1 === 1) // true
console.log(1 !== 2) // true
console.log(3 > 2) // true
console.log(2 < 3) // true
console.log(3 >= 3) // true
console.log(2 <= 3) // true

// Logical operators → && || !
console.log(true && false) // false
console.log(true || false) // true
console.log(!true) // false

// Nullish coalescing → a ?? b (use b when a is null/undefined)
console.log(null ?? 'fallback') // 'fallback'

// Optional chaining → obj?.prop (safe access)
console.log(({ a: { b: 1 } }).a?.b) // 1
console.log(({}).a?.b) // undefined