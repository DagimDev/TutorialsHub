// Node.js-Only Functions
// 1. Module Handling
require() // (CommonJS imports)

const fs = require("fs");

// setImmediate() (Runs after current event loop)

setImmediate(() => console.log("Runs soon"));

process.nextTick() // (Runs before the next event loop)

process.nextTick(() => console.log("Runs immediately"));

// Buffer Methods

// Handle binary data.

Buffer.from("hello"); // <Buffer 68 65 6c 6c 6f>