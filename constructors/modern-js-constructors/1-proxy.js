// Proxy
// Definition:
// Creates a proxy object that can intercept fundamental operations.

// Detailed Explanation:

// javascript
// const target = {};
// const handler = {
//   get(target, prop) {
//     return prop in target ? target[prop] : 'default';
//   }
// };
// const proxy = new Proxy(target, handler);
// Handler Traps:

// get - Property access

// set - Property assignment

// apply - Function invocation

// construct - new operator

// And many more (13 total traps)

// Use Cases:

// Validation

// Property lookup modification

// Revocable references

// Profiling/logging