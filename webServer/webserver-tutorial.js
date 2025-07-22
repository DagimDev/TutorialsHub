// Initialize Node.js HTTP server
const http = require('http');

// Create basic server instance
const server = http.createServer((req, res) => {
  res.end('Hello World');
});

// Add server listening on port 3000
server.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});

// Implement request method handling
if (req.method === 'GET') {
  res.end('GET request received');
} else if (req.method === 'POST') {
  res.end('POST request received');
}
