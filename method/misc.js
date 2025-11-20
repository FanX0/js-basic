// setTimeout(fn, ms) → schedule once
setTimeout(() => console.log('timeout'), 0)
// setInterval(fn, ms) → schedule repeated; clearInterval(id) stops
const id = setInterval(() => { console.log('interval'); clearInterval(id) }, 0)
// Promise.resolve(value) / Promise.reject(error) → settled promises
Promise.resolve(5).then(v => console.log(v))
Promise.reject(new Error('x')).catch(e => console.log('caught'))

// Map(key→value) → keyed collections
const m = new Map([['a', 1], ['b', 2]])
console.log(m.get('a'))
// Set(values) → unique values
const s = new Set([1, 2, 2, 3])
console.log(s.size)
// WeakMap(object→value) → keys must be objects; not enumerable
const wm = new WeakMap(); const o = {}; wm.set(o, 1); console.log(wm.has(o))
// Date.now() → current time in ms
console.log(Date.now() > 0)