// URLSearchParams(query) → parse/manage query strings
const p = new URLSearchParams("x=1&y=2&x=3");
// has(name) → check presence
console.log(p.has("x")); //true
// get(name) → first value; getAll(name) → all values
console.log(p.get("y")); // 2
console.log(p.getAll("x")); // [1, 3]
// append(name, value) / set(name, value) → add/replace values
console.log(p.append("z", "9") )
console.log(p.set("y", "20"))
// delete(name) → remove
console.log(p.delete("x"))
// toString() → serialize back to query string
console.log(p.toString());
