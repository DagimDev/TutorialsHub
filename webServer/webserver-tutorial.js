// Initialize Node.js HTTP server
const http = require('http');

// Create basic server instance
const server = http.createServer((req, res) => {
  res.end('Hello World');
});