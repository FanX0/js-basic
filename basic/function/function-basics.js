// Function declaration → hoisted
function greet(name) { return 'Hello ' + name }
console.log(greet('Farid')) // Hello Farid

// Function expression → assigned to variable
const add = function (a, b) { return a + b }
console.log(add(2, 3)) // 5

// Arrow function → concise syntax
const inc = x => x + 1
console.log(inc(5)) // 6

// Default parameters → fallback values
function hello(name = 'world') { return 'Hi ' + name }
console.log(hello()) // Hi world

// Rest parameters → variable arguments
function sum(...nums) { return nums.reduce((a,b) => a + b, 0) }
console.log(sum(1,2,3)) // 6

// Callback → pass function as argument
function applyTwice(f, x) { return f(f(x)) }
console.log(applyTwice(inc, 2)) // 4