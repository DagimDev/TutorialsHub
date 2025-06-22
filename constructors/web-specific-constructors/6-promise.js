// 12. Promise
// Definition:
// Represents the eventual completion (or failure) of an asynchronous operation.

// Detailed Explanation:

// javascript
// const promise = new Promise((resolve, reject) => {
//   // Async operation
//   if (success) {
//     resolve(value);
//   } else {
//     reject(error);
//   }
// });

// promise.then(value => {
//   // Handle success
// }).catch(error => {
//   // Handle error
// });
// States:

// Pending - Initial state

// Fulfilled - Operation completed successfully

// Rejected - Operation failed

// Methods:

// then() - Handles fulfillment

// catch() - Handles rejection

// finally() - Handles completion

// Static Methods:

// Promise.all() - Waits for all promises

// Promise.race() - Returns first settled promise

// Promise.resolve()/reject() - Creates resolved/rejected promise

// Use Cases:

// Any asynchronous operation

// API calls

// Timers

// File operations