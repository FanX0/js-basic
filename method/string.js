const strTrim = " Hello Farid "
const str = "farid"
const strSplit = "farid azhari"
const strNormalize = "farid é"

// Cleanup
console.log(strTrim.trim()) // "Hello Farid"
console.log(strTrim.trimStart()) // "Hello Farid "
console.log(strTrim.trimEnd()) // " Hello Farid"
console.log(strNormalize.normalize() === "farid e\u0301".normalize()) // true

// Padding
console.log("9".padStart(4, "0")) // "0009"
console.log(str.padStart(9, "kun")) // "kunkfarid"

// Modify
console.log("Hello World".replace("World", "Farid")) // "Hello Farid"
console.log("ha ha ha".replaceAll("ha", "ho")) // "ho ho ho"
console.log("Mixed Case".toLowerCase()) // "mixed case"
console.log("Mixed Case".toUpperCase()) // "MIXED CASE"

// Check
console.log(str.startsWith("fa")) // true
console.log(str.endsWith("rid")) // true
console.log(str.includes("ari")) // true
console.log(str.includes("aid")) // false

// Search
console.log(str.indexOf("rid")) // 2
console.log("banana".lastIndexOf("a")) // 5

// Split
console.log(strSplit.split(" ")) // ["farid", "azhari"]

// Characters
console.log(str.at(2)) // "r"
console.log(str.charAt(2)) // "r"
console.log(str.charCodeAt(0)) // 102
console.log("😀".codePointAt(0)) // 128512

// Extract
console.log(str.slice(2, 5)) // "rid"
console.log("abcdef".substring(1, 4)) // "bcd"
