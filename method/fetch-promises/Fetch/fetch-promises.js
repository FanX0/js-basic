// fetch(url).then(res => res.json()) → fetch with Promises
if (typeof fetch !== 'function') {
  console.log('fetch not available')
} else {
  fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(r => r.json())
    .then(j => console.log(j.id))
    .catch(e => console.log('error', e.message))
}