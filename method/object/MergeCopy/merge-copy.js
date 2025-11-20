// Object.assign(target, ...sources) → copy properties
console.log(Object.assign({}, { a: 1 }, { b: 2 }))
// Spread syntax → shallow merge
console.log({ ...{ a: 1 }, ...{ b: 2 } })