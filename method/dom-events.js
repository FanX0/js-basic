// document.createElement(tag) → create DOM element
// addEventListener(type, listener) → listen to events
// removeEventListener(type, listener) → stop listening
// CustomEvent(name, { detail }) → custom event with data
// dispatchEvent(event) → trigger event programmatically
if (typeof document === 'undefined') {
  console.log('DOM not available')
} else {
  const btn = document.createElement('button')
  btn.textContent = 'Click'
  document.body.appendChild(btn)
  const handler = () => console.log('clicked')
  btn.addEventListener('click', handler)
  btn.click()
  btn.removeEventListener('click', handler)
  const ev = new CustomEvent('hello', { detail: 1 })
  btn.addEventListener('hello', e => console.log(e.detail))
  btn.dispatchEvent(ev)
}