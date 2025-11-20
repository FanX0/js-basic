// new URL(input) → parse and manipulate URLs
const url = new URL('https://example.com/page?foo=1')
// url.searchParams.get(name) → read param
console.log(url.searchParams.get('foo'))
// set(name, value) → set/replace param
url.searchParams.set('bar', '2')
// append(name, value) → add new param entry
url.searchParams.append('list', 'a')
url.searchParams.append('list', 'b')
// delete(name) → remove param(s)
url.searchParams.delete('foo')
// toString() → full URL string
console.log(url.toString())

// URLSearchParams(query) → work with query strings
const params = new URLSearchParams('a=1&b=2&a=3')
// get(name) → first value; getAll(name) → all values
console.log(params.get('a'))
console.log(params.getAll('a'))
// set(name, value) → replace; delete(name) → remove
params.set('c', 'x')
params.delete('b')
// toString() → serialize back to query string
console.log(params.toString())