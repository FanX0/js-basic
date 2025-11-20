// new URL(input) → parse/manipulate full URLs
const u = new URL("https://example.com:8080/path/name?x=1#hash");
// protocol/hostname/port/pathname/search/hash → URL components
console.log(u.protocol);
console.log(u.hostname);
console.log(u.port);
console.log(u.pathname);
console.log(u.search);
console.log(u.hash);
// searchParams.set/append → modify query
u.searchParams.set("x", "42");
u.searchParams.append("y", "ok");
// toString() → full URL string
console.log(u.toString());
