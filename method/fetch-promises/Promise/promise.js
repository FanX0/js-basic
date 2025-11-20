// new Promise(executor) → create promise; resolve to fulfill
const p = new Promise((resolve) => setTimeout(() => resolve(42), 10))
// then(onFulfilled) / catch(onRejected) → handle result
p.then(v => console.log(v)).catch(e => console.log('error', e.message))

// Promise.all([...]) → wait for all to fulfill
Promise.all([Promise.resolve(1), Promise.resolve(2)]).then(v => console.log(v.reduce((a, b) => a + b)))
// Promise.race([...]) → first settled wins
Promise.race([new Promise(res => setTimeout(() => res('x'), 5)), Promise.resolve('y')]).then(v => console.log(v))
// Promise.allSettled([...]) → get results for all (fulfilled/rejected)
Promise.allSettled([Promise.resolve(1), Promise.reject(new Error('no'))]).then(r => console.log(r.length))