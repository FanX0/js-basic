// setTimeout(fn, ms) → schedule once
setTimeout(() => console.log('timeout'), 0)
// setInterval(fn, ms) → schedule repeated; clearInterval(id) stops
const id = setInterval(() => { console.log('interval'); clearInterval(id) }, 0)
// Promise.resolve(value) / Promise.reject(error) → settled promises
Promise.resolve(5).then(v => console.log(v))
Promise.reject(new Error('x')).catch(e => console.log('caught'))