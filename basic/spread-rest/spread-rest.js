// Array spread → expand into new array
const arr = [1,2]
const arr2 = [...arr, 3]
console.log(arr2) // [1,2,3]

// Object spread → shallow copy/merge objects
const a = { x: 1 }
const b = { y: 2 }
const c = { ...a, ...b }
console.log(c) // { x:1, y:2 }

// Rest parameters → gather remaining args
function sum(...nums) { return nums.reduce((a,b) => a + b, 0) }
console.log(sum(1,2,3)) // 6

// Destructuring rest → gather leftover properties
const obj = { p: 1, q: 2, r: 3 }
const { p, ...rest } = obj
console.log(p, rest) // 1 { q: 2, r: 3 }