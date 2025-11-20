// for(initialization; condition; update) → classic loop
for (let i = 0; i < 3; i++) {
  console.log('for', i) // for 0, for 1, for 2
}

// for...of → iterate values of iterable
for (const v of ['a', 'b']) {
  console.log('of', v) // of a, of b
}

// for...in → iterate keys of object
const obj = { a: 1, b: 2 }
for (const k in obj) {
  console.log('in', k) // in a, in b
}

// while(condition) → loop while condition true
let n = 0
while (n < 2) {
  console.log('while', n) // while 0, while 1
  n++
}

// do...while → execute first, then check condition
let m = 0
do {
  console.log('do', m) // do 0, do 1
  m++
} while (m < 2)

// break → exit loop; continue → skip iteration
for (let i = 0; i < 10; i++) {
  if (i === 1) continue
  if (i === 8) break
  console.log('ctrl', i) // ctrl 0 ctrl 0 ctrl 2 ctrl 3 ctrl 4 ctrl 5 ctrl 6 ctrl 7
}