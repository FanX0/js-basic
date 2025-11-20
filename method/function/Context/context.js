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