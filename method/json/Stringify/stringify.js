// JSON.stringify(value, replacer?, space?) → serialize to JSON string
const o = { a: 1, b: 2 }
const s = JSON.stringify(o)
console.log(typeof s === 'string')

// replacer transforms values; space adds indentation
const s2 = JSON.stringify({ a: 1 }, (k, v) => (k === 'a' ? v * 10 : v), 2)
console.log(s2.includes('\n'))