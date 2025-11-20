// Array creation → literal with elements
const arr = [1, 2, 3]
console.log(arr.length) // 3

// push(item) → add to end
arr.push(4)
console.log(arr) // [1,2,3,4]

// pop() → remove from end, returns item
console.log(arr.pop()) // 4
console.log(arr) // [1,2,3]

// unshift(item) → add to start
arr.unshift(0)
console.log(arr) // [0,1,2,3]

// shift() → remove from start
console.log(arr.shift()) // 0
console.log(arr) // [1,2,3]

// slice(start, end?) → non-destructive subarray
console.log(arr.slice(1, 3)) // [2,3]

// splice(start, deleteCount, ...items?) → destructive edit
console.log(arr.splice(1, 1)) // [2]
console.log(arr) // [1,3]

// map(callback) → transform values
console.log([1,2,3].map(x => x * 2)) // [2,4,6]

// filter(callback) → keep values matching predicate
console.log([1,2,3].filter(x => x % 2 === 1)) // [1,3]

// reduce(callback, initial) → fold to single value
console.log([1,2,3].reduce((a,b) => a + b, 0)) // 6