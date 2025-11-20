const a1 = [1]
// push(item) → add to end
a1.push(2)
console.log(a1)
// pop() → remove from end, returns item
console.log(a1.pop())
console.log(a1)

const a2 = [2]
// unshift(item) → add to start
a2.unshift(1)
console.log(a2)
// shift() → remove from start
console.log(a2.shift())
console.log(a2)

const a3 = [1, 2, 3]
// splice(start, deleteCount, ...items?) → change array
console.log(a3.splice(1, 1))
console.log(a3)