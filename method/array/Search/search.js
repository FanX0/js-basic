const fruits = ["apple", "banana", "cherry", "banana"]
// indexOf(value, fromIndex?) → first index
console.log(fruits.indexOf("banana"))
// lastIndexOf(value, fromIndex?) → last index
console.log(fruits.lastIndexOf("banana"))
// includes(value, fromIndex?) → presence
console.log(fruits.includes("cherry"))
// find(callback) → first matching item
console.log(fruits.find(f => f.startsWith("b")))
// findIndex(callback) → index of first match
console.log(fruits.findIndex(f => f.startsWith("c")))