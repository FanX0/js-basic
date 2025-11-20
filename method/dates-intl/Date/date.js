// new Date(input?) → create date instance
const d = new Date('2020-01-02T03:04:05Z')
// toISOString() → ISO 8601 string in UTC
console.log(d.toISOString())
// getUTCFullYear() → year in UTC
console.log(d.getUTCFullYear())
// getMonth() → month index (0–11)
console.log(d.getMonth())
// getDate() → day of month (1–31)
console.log(d.getDate())
// getTime() → milliseconds since epoch
console.log(d.getTime())