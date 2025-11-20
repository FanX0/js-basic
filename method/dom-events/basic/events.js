// addEventListener(type, listener) → listen to events on DOM nodes
// removeEventListener(type, listener) → detach listener
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
}