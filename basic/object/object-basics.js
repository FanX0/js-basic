// Object literal → create plain object
const user = { name: 'Farid', age: 30 }
console.log(user.name) // Farid

// Destructuring → pick properties into variables
const { name, age } = user
console.log(name, age) // Farid 30

// Shorthand method → define function on object
const calc = { add(a,b) { return a + b } }
console.log(calc.add(2,3)) // 5

// Object.keys(obj) → own enumerable keys
console.log(Object.keys(user)) // [ 'name', 'age' ]