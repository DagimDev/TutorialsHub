// Timer Functions
// 1. setTimeout()
// Executes a function once after a specified delay (in milliseconds).
// Syntax:

// setTimeout(callback, delay, arg1, arg2, ...);

// Example:
setTimeout(() => {
  console.log("This runs after 2 seconds");
}, 2000);

// To cancel:
const timerId = setTimeout(() => {}, 1000);
clearTimeout(timerId); // Prevents execution

// 2. setInterval()
// Repeats a function repeatedly at a given interval.
// Syntax:

// setInterval(callback, interval, arg1, arg2, ...);

// Example:
let counter = 0;
const intervalId = setInterval(() => {
  counter++;
  console.log(`Tick ${counter}`);
  if (counter >= 5) clearInterval(intervalId); // Stops after 5 runs
}, 1000);

// To cancel:
clearInterval(intervalId);