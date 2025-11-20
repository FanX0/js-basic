// JSON.stringify(value, replacer?, space?) → serialize to JSON string
const obj = { a: 1, b: 2 }
const s = JSON.stringify(obj)
console.log(typeof s === 'string')
// JSON.parse(text, reviver?) → parse JSON string to object
const obj2 = JSON.parse(s)
console.log(obj2.a)

// replacer(key, value) → transform values during stringify
const s2 = JSON.stringify({ a: 1 }, (k, v) => (k === 'a' ? v * 10 : v))
console.log(s2)

// reviver(key, value) → transform parsed values (e.g., to Date)
const revived = JSON.parse('{"date":"2020-01-02T00:00:00.000Z"}', (k, v) => (k === 'date' ? new Date(v) : v))
console.log(revived.date instanceof Date)

// try/catch parse errors
try { JSON.parse('{bad json}') } catch (e) { console.log('error') }