// Intl.DateTimeFormat(locale, options) → format date/time
const d = new Date('2020-01-02T03:04:05Z')
const df = new Intl.DateTimeFormat('en-US', { dateStyle: 'medium', timeStyle: 'short', timeZone: 'UTC' })
console.log(df.format(d))

// Intl.NumberFormat(locale, { style: 'currency', currency }) → format numbers
const nf = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' })
console.log(nf.format(12500))

// Intl.RelativeTimeFormat(locale, options) → human-friendly relative time
const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' })
// format(value, unit) → "yesterday", "in 2 hours", etc.
console.log(rtf.format(-1, 'day'))
console.log(rtf.format(2, 'hour'))