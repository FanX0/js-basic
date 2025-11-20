// slice(start, end?) → shallow copy range
console.log([1, 2, 3].slice(1, 3))
// concat(...arrays) → join arrays
console.log([1].concat([2, 3]))
// flat(depth=1) → flatten nested arrays
console.log([1, [2, [3]]].flat(2))
// flatMap(callback) → map then flatten one level
console.log([1, 2, 3].flatMap(x => [x, x * 10]))