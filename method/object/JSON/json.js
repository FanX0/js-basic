// JSON.stringify(value, replacer?, space?) → string
const jsonStr = JSON.stringify({ a: 1, b: 2 }, null, 2)
// typeof result is 'string'
console.log(typeof jsonStr === "string")
// JSON.parse(text) → object from JSON string
console.log(JSON.parse("{" + "\"a\":1}" ).a)