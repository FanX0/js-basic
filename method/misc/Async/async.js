// setTimeout → once
setTimeout(() => console.log("timeout fired"), 0);          // timeout fired

// setInterval → repeat then stop
const intervalId = setInterval(() => {
  console.log("interval fired");                            // interval fired
  clearInterval(intervalId);
}, 0);

// resolved promise
Promise.resolve(5)
  .then(v => console.log("resolved:", v));                  // resolved: 5

// rejected promise
Promise.reject("x")
  .catch(e => console.log("caught:", e));                   // caught: x

// async/await
async function runAsync() {
  const v = await Promise.resolve("awaited");
  console.log(v);                                           // awaited

  try {
    await Promise.reject("err");
  } catch (e) {
    console.log("caught await:", e);                        // caught await: err
  }
}
runAsync();
