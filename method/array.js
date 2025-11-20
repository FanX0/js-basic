// Create & Check
console.log(Array.isArray([1, 2, 3]));                      // true
console.log(Array.of(1, 2, 3));                             // [1, 2, 3]
console.log(Array.from("abc"));                             // ["a","b","c"]

// Add / Remove
const a1 = [1];
a1.push(2);
console.log(a1);                                            // [1, 2]
console.log(a1.pop());                                      // 2
console.log(a1);                                            // [1]

const a2 = [2];
a2.unshift(1);
console.log(a2);                                            // [1, 2]
console.log(a2.shift());                                    // 1
console.log(a2);                                            // [2]

const a3 = [1, 2, 3];
console.log(a3.splice(1, 1));                               // [2]
console.log(a3);                                            // [1, 3]

// Iterate / Transform
const nums = [1, 2, 3];
nums.forEach(x => process.stdout.write(String(x)));         // 123
process.stdout.write("\n");
console.log(nums.map(x => x * 2));                          // [2,4,6]
console.log(nums.filter(x => x % 2 === 1));                 // [1,3]
console.log(nums.reduce((sum, x) => sum + x, 0));           // 6
console.log([1, 2].reduceRight((acc, x) => acc - x));       // -1

// Search
const fruits = ["apple", "banana", "cherry", "banana"];
console.log(fruits.indexOf("banana"));                      // 1
console.log(fruits.lastIndexOf("banana"));                  // 3
console.log(fruits.includes("cherry"));                     // true
console.log(fruits.find(f => f.startsWith("b")));           // "banana"
console.log(fruits.findIndex(f => f.startsWith("c")));      // 2

// Sort & Order
console.log([3, 1, 2].sort());                              // [1,2,3]
console.log(["b", "a"].reverse());                          // ["a","b"]

// Slice, Concat, Flat
console.log([1, 2, 3].slice(1, 3));                         // [2,3]
console.log([1].concat([2, 3]));                            // [1,2,3]
console.log([1, [2, [3]]].flat(2));                         // [1,2,3]
console.log([1, 2, 3].flatMap(x => [x, x * 10]));           // [1,10,2,20,3,30]

// Join & String
console.log(["a", "b", "c"].join("-"));                     // "a-b-c"
console.log([1, 2, 3].toString());                          // "1,2,3"
console.log([1000].toLocaleString());                       // "1,000"

// Modify In Place
console.log([1, 2, 3, 4].copyWithin(1, 2));                 // [1,3,4,4]
console.log(new Array(3).fill(0));                          // [0,0,0]

// Check All / Any
console.log([2, 4, 6].every(x => x % 2 === 0));             // true
console.log([1, 2, 3].some(x => x > 2));                    // true

// Iterators
console.log(Array.from([10, 20].keys()));                   // [0,1]
console.log(Array.from([10, 20].values()));                 // [10,20]
console.log(Array.from([10, 20].entries()));                // [[0,10],[1,20]]
