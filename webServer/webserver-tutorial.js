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

// Add URL routing
if (req.url === '/') {
  res.end('Home page');
} else if (req.url === '/about') {
  res.end('About page');
}

// Set response headers
res.writeHead(200, {
  'Content-Type': 'text/plain',
  'X-Custom-Header': 'MyValue'
});

// Implement error handling
if (req.url === '/error') {
  res.writeHead(500);
  res.end('Server error');
}

// Add request logging middleware
console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);

// Parse query parameters
const url = require('url');
const query = url.parse(req.url, true).query;
res.end(`Hello ${query.name || 'Anonymous'}`);