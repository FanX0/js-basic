// Default parameters → fallback when argument omitted
function greet(name = 'world') { return 'hello ' + name }
console.log(greet())

// Rest parameters → collect remaining args into array
function sum(...nums) { return nums.reduce((a, b) => a + b, 0) }
console.log(sum(1, 2, 3))