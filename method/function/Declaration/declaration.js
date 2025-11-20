// Function declaration → hoisted
function add(a, b) { return a + b }
console.log(add(2, 3))

// Function expression → not hoisted
const mul = function (a, b) { return a * b }
console.log(mul(2, 3))

// Arrow function → concise function syntax
const inc = x => x + 1
console.log(inc(5))