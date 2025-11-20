// localStorage.setItem(key, value) → persist string
// localStorage.getItem(key) → read string
// localStorage.removeItem(key) → delete entry
if (typeof localStorage !== 'undefined') {
  localStorage.setItem('k', 'v')
  console.log(localStorage.getItem('k'))
  localStorage.removeItem('k')
  console.log(localStorage.getItem('k'))
}
// sessionStorage.setItem/getItem/clear() → per-session storage
if (typeof sessionStorage !== 'undefined') {
  sessionStorage.setItem('s', '1')
  console.log(sessionStorage.getItem('s'))
  sessionStorage.clear()
  console.log(sessionStorage.getItem('s'))
}
// Guard non-browser environments
if (typeof localStorage === 'undefined' && typeof sessionStorage === 'undefined') {
  console.log('web storage not available in this runtime')
}