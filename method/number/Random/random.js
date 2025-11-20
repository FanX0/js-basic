function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
// Math.random() → pseudo-random in [0,1)
console.log(Math.random())
// Random integer between min & max (inclusive)
console.log(rand(1, 10))
// Random boolean by threshold
console.log(Math.random() < 0.5)