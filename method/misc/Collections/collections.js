// Map(key→value) → keyed collections
const m = new Map([['a', 1], ['b', 2]])
console.log(m.get('a'))
// Set(values) → unique values
const s = new Set([1, 2, 2, 3])
console.log(s.size)
// WeakMap(object→value) → keys must be objects; not enumerable
const wm = new WeakMap(); const o = {}; wm.set(o, 1); console.log(wm.has(o))