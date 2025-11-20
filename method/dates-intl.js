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

// Intl.DateTimeFormat(locale, options) → format date/time
const df = new Intl.DateTimeFormat('en-US', { dateStyle: 'medium', timeStyle: 'short', timeZone: 'UTC' })
console.log(df.format(d))

// Intl.NumberFormat(locale, { style: 'currency', currency }) → format numbers
const nf = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' })
console.log(nf.format(12500))

// Intl.RelativeTimeFormat(locale, options) → human-friendly relative time
const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' })
// format(value, unit) → e.g., -1 day → "yesterday"
console.log(rtf.format(-1, 'day'))
console.log(rtf.format(2, 'hour'))