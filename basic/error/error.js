// try/catch/finally → handle exceptions
try {
  // throw new Error(message) → raise exception
  throw new Error('failed')
} catch (e) {
  console.log(e.message) // failed
} finally {
  console.log('cleanup') // cleanup
}

// custom error type → extend Error
class AppError extends Error {
  // constructor(message) delegates to Error
  constructor(message) { super(message); this.name = 'AppError' }
}
console.log(new AppError('bad').name) // AppError