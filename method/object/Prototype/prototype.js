function C() {}
C.prototype.greet = function () { return "hi" }
const inst = new C()
// getPrototypeOf(obj) → object's prototype
console.log(Object.getPrototypeOf(inst) === C.prototype)
const p = { hello() { return "world" } }
const objP = Object.create(p)
// Object.create(proto) → set prototype
console.log(objP.hello())