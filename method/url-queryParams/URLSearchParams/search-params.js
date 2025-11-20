// URLSearchParams(query) → parse/manage query strings
const p = new URLSearchParams('x=1&y=2&x=3')
// has(name) → check presence
console.log(p.has('x'))
// get(name) → first value; getAll(name) → all values
console.log(p.get('y'))
console.log(p.getAll('x'))
// append(name, value) / set(name, value) → add/replace values
p.append('z', '9')
p.set('y', '20')
// delete(name) → remove
p.delete('x')
// toString() → serialize back to query string
console.log(p.toString())