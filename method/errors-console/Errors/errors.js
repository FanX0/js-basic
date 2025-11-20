// throw new Error(message) → create and throw errors
// try/catch → handle exceptions
try {
  throw new Error('boom')
} catch (e) {
  console.log(e.message)
  console.log(typeof e.stack === 'string')
}