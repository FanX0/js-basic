const strNormalize= "farid é"

// string.normalize(form?) → normalize Unicode (forms: 'NFC', 'NFD', 'NFKC', 'NFKD')
console.log(strNormalize.normalize() === "farid e\u0301".normalize()) //true