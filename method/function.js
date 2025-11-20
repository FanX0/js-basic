// Function declaration → hoisted
function add(a, b) { return a + b }
console.log(add(2, 3))

// Function expression → not hoisted
const mul = function (a, b) { return a * b }
console.log(mul(2, 3))

// Arrow function → concise function syntax
const inc = x => x + 1
console.log(inc(5))

// Default parameters → use fallback when argument omitted
function greet(name = 'world') { return 'hello ' + name }
console.log(greet())

// Rest parameters → collect remaining args into array
function sum(...nums) { return nums.reduce((a, b) => a + b, 0) }
console.log(sum(1, 2, 3))

// call/apply/bind → control 'this' context
const obj = { x: 1, getX() { return this.x } }
const getX = obj.getX
// call(thisArg, ...args) → invoke with context
console.log(getX.call(obj))
const bound = getX.bind(obj)
// bind(thisArg) → returns new function with bound context
console.log(bound())
// apply(thisArg, argsArray) → invoke with args array
console.log(getX.apply(obj))

// Closure → inner function capturing outer scope
function outer() { let c = 0; return function () { c++; return c } }
const incC = outer()
console.log(incC())
console.log(incC())