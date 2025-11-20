// Object.is(a, b) → SameValue equality semantics
console.log(Object.is(NaN, NaN))
// +0 and -0 are different under Object.is
console.log(Object.is(+0, -0))
// Primitives equal when exactly same value
console.log(Object.is(1, 1))