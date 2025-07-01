// Node.js-Only Functions
// 1. Module Handling
require() // (CommonJS imports)

const fs = require("fs");

// setImmediate() (Runs after current event loop)

setImmediate(() => console.log("Runs soon"));

process.nextTick() // (Runs before the next event loop)

process.nextTick(() => console.log("Runs immediately"));