// var → function-scoped; can be re-declared
var a = 1
var a = 2
console.log(a) // 2

// let → block-scoped; cannot be re-declared in same block
let b = 1
// let b = 2 // would throw if uncommented
b = 2
console.log(b) // 2

// const → block-scoped; must be initialized; cannot be reassigned
const c = 1
// c = 2 // TypeError if uncommented
console.log(c) // 1

// Scope demo → block vs function
function scopeDemo() {
  // function scope for var
  var x = 1
  if (true) {
    // block scope for let/const
    let y = 2
    const z = 3
    console.log(x, y, z) // 1 2 3
  }
  console.log(x) // 1
}
scopeDemo()