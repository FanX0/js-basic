// stringify → JSON string
const obj = { a: 1, b: 2 };
console.log(obj)                                                 //{ a: 1, b: 2 }
const s = JSON.stringify(obj);
console.log(typeof s === "string");                              // true
console.log(s)                                                   //{"a":1,"b":2}

// parse → JSON string to object
const obj2 = JSON.parse(s);                                     //{ a: 1, b: 2 }
console.log(obj2)
console.log(obj2.a);                                            // 1

// replacer → transform values
const s2 = JSON.stringify({ a: 1 }, (k, v) => (k === "a" ? v * 10 : v));
console.log(s2);                                                // {"a":10}

// reviver → transform parsed values
const revived = JSON.parse(
  '{"date":"2020-01-02T00:00:00.000Z"}',
  (k, v) => (k === "date" ? new Date(v) : v)
);
console.log(revived.date instanceof Date);                      // true

// parse error handling
try {
  JSON.parse("{bad json}");
} catch (e) {
  console.log("error");                                         // error
}
