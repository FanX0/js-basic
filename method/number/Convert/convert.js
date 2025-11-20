// Number(value) → convert a value to number
console.log(Number("42"))
// parseInt(string, radix?) → parse integer from string
console.log(parseInt("42"))
// parseFloat(string) → parse floating number from string
console.log(parseFloat("3.14"))
// isNaN(value) → loose NaN check (coerces)
console.log(isNaN("foo"))
// Number.isNaN(value) → strict NaN check
console.log(Number.isNaN(NaN))
// isFinite(value) → loose finite check
console.log(isFinite("10"))
// Number.isFinite(value) → strict finite check
console.log(Number.isFinite(10))
// Number.isInteger(value) → integer?
console.log(Number.isInteger(5))
// Number.isInteger(value) → integer?
console.log(Number.isInteger(5.1))
// Number.isSafeInteger(value) → within IEEE-754 safe range
console.log(Number.isSafeInteger(2 ** 53 - 1))
// Number.isSafeInteger(value) → within IEEE-754 safe range
console.log(Number.isSafeInteger(2 ** 53))