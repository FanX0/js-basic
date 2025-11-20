// Map(key→value) → keyed collection with any type keys
const m = new Map()
m.set('a', 1)
m.set({ x: 1 }, 2)
console.log(m.get('a')) // 1

// Set(values) → unique values
const s = new Set([1,2,2,3])
console.log(s.size) // 3