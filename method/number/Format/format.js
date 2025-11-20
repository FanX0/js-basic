// toFixed(digits) → fixed decimal places
console.log((3.14159).toFixed(2))
// toPrecision(n) → total significant digits
console.log((12345.6789).toPrecision(4))
// toLocaleString(locale?, options?) → localized formatting
console.log((1000).toLocaleString())
// toLocaleString(locale, { style: 'currency', currency }) → currency
console.log((12500).toLocaleString("id-ID", { style: "currency", currency: "IDR" }))
// toString(radix) → base conversion (2..36)
console.log((255).toString(16))