const n = 42
const f = 3.14159
const hex = 255
const big = 1000

// Convert & Check
// Number(value) → convert a value to number
console.log(Number("42")) // 42
// parseInt(string, radix?) → parse integer from string
console.log(parseInt("42")) // 42
// parseFloat(string) → parse floating number from string
console.log(parseFloat("3.14")) // 3.14
// isNaN(value) → loose NaN check (coerces)
console.log(isNaN("foo")) // true
// Number.isNaN(value) → strict NaN check (no coercion)
console.log(Number.isNaN(NaN)) // true
// isFinite(value) → loose finite check (coerces)
console.log(isFinite("10")) // true
// Number.isFinite(value) → strict finite check
console.log(Number.isFinite(10)) // true
// Number.isInteger(value) → is value an integer
console.log(Number.isInteger(5)) // true
// Number.isSafeInteger(value) → within IEEE-754 safe range
console.log(Number.isSafeInteger(2 ** 53 - 1)) // true

// Format
// toFixed(digits) → fixed decimal places, returns string
console.log(f.toFixed(2)) // "3.14"
// toPrecision(n) → total significant digits, returns string
console.log(f.toPrecision(4)) // "3.142"
// toLocaleString(locale?, options?) → localized formatting
console.log(big.toLocaleString()) // "1,000"
// toString(radix) → convert number to base (2..36)
console.log(hex.toString(16)) // "ff"

// Rounding
// Math.round(x) → nearest integer
console.log(Math.round(4.4)) // 4
// Math.ceil(x) → round up
console.log(Math.ceil(4.1)) // 5
// Math.floor(x) → round down
console.log(Math.floor(4.9)) // 4
// Math.trunc(x) → remove fractional part
console.log(Math.trunc(4.7)) // 4

// Basic Math
// Math.abs(x) → absolute value
console.log(Math.abs(-5)) // 5
// Math.max(...values) → largest value
console.log(Math.max(1, 8, 2)) // 8
// Math.min(...values) → smallest value
console.log(Math.min(1, 8, 2)) // 1
// Math.pow(base, exp) → exponentiation
console.log(Math.pow(2, 3)) // 8
// Math.sqrt(x) → square root
console.log(Math.sqrt(25)) // 5
// Math.cbrt(x) → cube root
console.log(Math.cbrt(27)) // 3

// Logs & Exp
// Math.exp(x) → e^x
console.log(Math.exp(1)) // 2.718281828...
// Math.expm1(x) → e^x - 1
console.log(Math.expm1(1)) // 1.718281828...
// Math.log(x) → natural log (ln)
console.log(Math.log(Math.E)) // 1
// Math.log10(x) → base-10 log
console.log(Math.log10(1000)) // 3
// Math.log2(x) → base-2 log
console.log(Math.log2(8)) // 3
// Math.hypot(a, b, ...) → sqrt(a^2 + b^2 + ...)
console.log(Math.hypot(3, 4)) // 5

// Random patterns
function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
// Math.random() → pseudo-random in [0,1)
console.log(Math.random()) // 0–1
// random integer between min & max (inclusive)
console.log(rand(1, 10)) // 1–10
// random boolean by threshold
console.log(Math.random() < 0.5) // true/false

// Trigonometry
// Math.sin(x) → sine (x in radians)
console.log(Math.sin(Math.PI / 2)) // 1
// Math.cos(x) → cosine
console.log(Math.cos(0)) // 1
// Math.tan(x) → tangent
console.log(Math.tan(Math.PI / 4)) // ~1
// Math.asin(x) → arcsine, returns radians
console.log(Math.asin(1)) // 1.5707963267...
// Math.acos(x) → arccosine
console.log(Math.acos(1)) // 0
// Math.atan(x) → arctangent
console.log(Math.atan(1)) // 0.7853981633...
// Math.atan2(y, x) → angle from coordinates
console.log(Math.atan2(1, 1)) // 0.7853981633...

// Constants
// Math.PI → π
console.log(Math.PI) // 3.1415926535...
// Math.E → Euler’s number
console.log(Math.E) // 2.718281828...
// Math.SQRT2 → √2
console.log(Math.SQRT2) // 1.4142135623...
// Math.SQRT1_2 → 1/√2
console.log(Math.SQRT1_2) // 0.7071067811...
// Math.LN2 → ln(2)
console.log(Math.LN2) // 0.6931471805...
// Math.LN10 → ln(10)
console.log(Math.LN10) // 2.3025850929...
// Math.LOG2E → log2(e)
console.log(Math.LOG2E) // 1.4426950408...
// Math.LOG10E → log10(e)
console.log(Math.LOG10E) // 0.4342944819...