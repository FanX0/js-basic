// Pure function → no side effects, same input → same output
const double = x => x * 2
console.log(double(3)) // 6

// map/filter/reduce → functional transforms
const arr = [1,2,3]
console.log(arr.map(double)) // [2,4,6]
console.log(arr.filter(x => x % 2 === 1)) // [1,3]
console.log(arr.reduce((a,b) => a + b, 0)) // 6

// Immutability → create new structures instead of mutating
const arr2 = [...arr, 4]
console.log(arr2) // [1,2,3,4]

// Currying → split multi-arg into chain of single-arg
const add = a => b => a + b
console.log(add(2)(3)) // 5