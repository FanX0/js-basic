// JSON.parse(text, reviver?) → parse JSON string
const s = JSON.stringify({ x: 1 })
const o = JSON.parse(s)
console.log(o.x)

// try/catch parse errors
try { JSON.parse('{bad}') } catch (e) { console.log('error') }