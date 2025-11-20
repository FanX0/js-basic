// if (...) { ... } else if (...) { ... } else { ... } → branching
const n = 5
if (n > 10) {
  console.log('big') // big
} else if (n > 3) {
  console.log('medium') // medium
} else {
  console.log('small') // small
}

// switch(value) { case ...: break; default: ... } → multi-branch
const day = 'Mon'
switch (day) {
  case 'Mon':
    console.log('start') // start
    break
  case 'Sun':
    console.log('rest') // rest
    break
  default:
    console.log('mid') // mid
}

// condition ? a : b → ternary expression
const isEven = n % 2 === 0 ? 'even' : 'odd'
console.log(isEven) // odd