// Closure → inner function capturing variables from outer scope
function outer() { let c = 0; return function () { c++; return c } }
const incC = outer()
console.log(incC())
console.log(incC())