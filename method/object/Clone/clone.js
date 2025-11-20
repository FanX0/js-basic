const src = { a: 1, nested: { x: 10 } }
const shallow = { ...src }
// Shallow copy shares nested references
console.log(shallow.nested === src.nested)
const deep = typeof structuredClone === "function" ? structuredClone(src) : JSON.parse(JSON.stringify(src))
// Deep copy does not share nested references
console.log(deep.nested === src.nested)