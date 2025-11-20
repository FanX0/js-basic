// fetch(url).then(res => res.json()) → fetch with Promises
// Promise.resolve(value) → fulfilled promise
// Promise.all([...]) → wait for all to fulfill
// Promise.race([...]) → first settled wins
if (typeof fetch !== 'function') {
  console.log('fetch not available')
} else {
  fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(r => r.json())
    .then(j => console.log(j.id))
    .catch(e => console.log('error', e.message))

  const p1 = Promise.resolve(1)
  const p2 = Promise.resolve(2)
  Promise.all([p1, p2]).then(vals => console.log(vals.reduce((a, b) => a + b)))
  Promise.race([Promise.resolve('a'), new Promise(res => setTimeout(() => res('b'), 10))]).then(v => console.log(v))
}