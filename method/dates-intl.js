// Date instance
const d = new Date("2020-01-02T03:04:05Z");
console.log(d.toISOString());                              // 2020-01-02T03:04:05.000Z
console.log(d.getUTCFullYear());                           // 2020
console.log(d.getMonth());                                 // 0   (January)
console.log(d.getDate());                                  // 2
console.log(d.getTime());                                  // 1577934245000

// Intl.DateTimeFormat
const df = new Intl.DateTimeFormat("en-US", { 
  dateStyle: "medium", 
  timeStyle: "short", 
  timeZone: "UTC" 
});
console.log(df.format(d));                                 // Jan 2, 2020, 3:04 AM

// Intl.NumberFormat (currency)
const nf = new Intl.NumberFormat("id-ID", { 
  style: "currency", 
  currency: "IDR" 
});
console.log(nf.format(12500));                             // Rp 12.500,00

// Intl.RelativeTimeFormat
const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });
console.log(rtf.format(-1, "day"));                        // yesterday
console.log(rtf.format(2, "hour"));                        // in 2 hours
