// localStorage.setItem/getItem/removeItem → persist strings in browser
if (typeof localStorage !== 'undefined') {
  localStorage.setItem('name', 'Farid')
  console.log(localStorage.getItem('name'))
  localStorage.removeItem('name')
  console.log(localStorage.getItem('name'))
} else {
  console.log('localStorage not available')
}