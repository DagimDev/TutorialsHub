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