// CustomEvent(name, { detail }) → custom event with arbitrary data
// dispatchEvent(event) → trigger custom event
if (typeof document === 'undefined') {
  console.log('DOM not available')
} else {
  const div = document.createElement('div')
  document.body.appendChild(div)
  const ev = new CustomEvent('hello', { detail: { x: 1 } })
  div.addEventListener('hello', e => console.log(e.detail.x))
  div.dispatchEvent(ev)
}