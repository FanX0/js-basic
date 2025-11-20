// sessionStorage.setItem/getItem/clear → session-only browser storage
if (typeof sessionStorage !== 'undefined') {
  sessionStorage.setItem('token', 'abc')
  console.log(sessionStorage.getItem('token'))
  sessionStorage.clear()
  console.log(sessionStorage.getItem('token'))
  sessionStorage.setItem("name","asep")
  console.log(sessionStorage.getItem("asep"))
} else {
  console.log('sessionStorage not available')
}