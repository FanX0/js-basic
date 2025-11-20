const nums = [1, 2, 3]
// forEach(callback) → iterate without return
nums.forEach(x => process.stdout.write(String(x)))
process.stdout.write("\n")
// map(callback) → transform to new array
console.log(nums.map(x => x * 2))
// filter(callback) → keep items matching predicate
console.log(nums.filter(x => x % 2 === 1))
// reduce(callback, initial) → fold to single value
console.log(nums.reduce((sum, x) => sum + x, 0))
// reduceRight(callback, initial?) → fold from right
console.log([1, 2].reduceRight((acc, x) => acc - x))