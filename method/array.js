// Create & Check
// Array.isArray(value) → is value an array
console.log(Array.isArray([1, 2, 3])) // true
// Array.of(...items) → create array from items
console.log(Array.of(1, 2, 3)) // [1, 2, 3]
// Array.from(iterable, mapFn?) → from iterable or array-like
console.log(Array.from("abc")) // ["a", "b", "c"]

// Add / Remove
const a1 = [1]
// push(item) → add to end
a1.push(2)
console.log(a1) // [1, 2]
// pop() → remove from end, returns item
console.log(a1.pop()) // 2
console.log(a1) // [1]
const a2 = [2]
// unshift(item) → add to start
a2.unshift(1)
console.log(a2) // [1, 2]
// shift() → remove from start
console.log(a2.shift()) // 1
console.log(a2) // [2]
const a3 = [1, 2, 3]
// splice(start, deleteCount, ...items?) → change array contents
console.log(a3.splice(1, 1)) // [2]
console.log(a3) // [1, 3]

// Iterate / Transform
const nums = [1, 2, 3]
// forEach(callback) → iterate without return
nums.forEach(x => process.stdout.write(String(x)))
process.stdout.write("\n")
// map(callback) → transform to new array
console.log(nums.map(x => x * 2)) // [2, 4, 6]
// filter(callback) → keep items matching predicate
console.log(nums.filter(x => x % 2 === 1)) // [1, 3]
// reduce(callback, initial) → fold to single value
console.log(nums.reduce((sum, x) => sum + x, 0)) // 6
// reduceRight(callback, initial?) → fold from right
console.log([1, 2].reduceRight((acc, x) => acc - x)) // -1

// Search
const fruits = ["apple", "banana", "cherry", "banana"]
// indexOf(value, fromIndex?) → first index
console.log(fruits.indexOf("banana")) // 1
// lastIndexOf(value, fromIndex?) → last index
console.log(fruits.lastIndexOf("banana")) // 3
// includes(value, fromIndex?) → presence
console.log(fruits.includes("cherry")) // true
// find(callback) → first matching item
console.log(fruits.find(f => f.startsWith("b"))) // "banana"
// findIndex(callback) → index of first match
console.log(fruits.findIndex(f => f.startsWith("c"))) // 2

// Sort & Order
// sort(compareFn?) → in-place sort
console.log([3, 1, 2].sort()) // [1, 2, 3]
// reverse() → reverse in place
console.log(["b", "a"].reverse()) // ["a", "b"]

// Slice & Concat & Flat
// slice(start, end?) → shallow copy range
console.log([1, 2, 3].slice(1, 3)) // [2, 3]
// concat(...arrays) → join arrays
console.log([1].concat([2, 3])) // [1, 2, 3]
// flat(depth=1) → flatten nested arrays
console.log([1, [2, [3]]].flat(2)) // [1, 2, 3]
// flatMap(callback) → map then flatten one level
console.log([1, 2, 3].flatMap(x => [x, x * 10])) // [1, 10, 2, 20, 3, 30]

// Join & String
// join(separator) → join into string
console.log(["a", "b", "c"].join("-")) // "a-b-c"
// toString() → comma-separated string
console.log([1, 2, 3].toString()) // "1,2,3"
// toLocaleString() → localized numbers
console.log([1000].toLocaleString()) // "1,000"

// Modify In Place
// copyWithin(target, start, end?) → copy part to target
console.log([1, 2, 3, 4].copyWithin(1, 2)) // [1, 3, 4, 4]
// fill(value, start?, end?) → fill with value
console.log(new Array(3).fill(0)) // [0, 0, 0]

// Check All / Any
// every(callback) → all items match?
console.log([2, 4, 6].every(x => x % 2 === 0)) // true
// some(callback) → any item matches?
console.log([1, 2, 3].some(x => x > 2)) // true

// Iterators
// keys() → indices iterator
console.log(Array.from([10, 20].keys())) // [0, 1]
// values() → values iterator
console.log(Array.from([10, 20].values())) // [10, 20]
// entries() → [index, value] iterator
console.log(Array.from([10, 20].entries())) // [[0,10],[1,20]]