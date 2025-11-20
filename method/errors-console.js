// console.log/info/warn/error → standard logging
console.log('log')
console.info('info')
console.warn('warn')
console.error('error')
// console.table(array|object) → formatted table output
console.table([{ a: 1 }, { a: 2 }])

// throw new Error(message) → create and throw errors
// try/catch → handle exceptions
try {
  throw new Error('boom')
} catch (e) {
  console.log(e.message)
  console.log(typeof e.stack === 'string')
}