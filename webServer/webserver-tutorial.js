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

// Handle POST data
let body = '';
req.on('data', chunk => {
  body += chunk.toString();
});
req.on('end', () => {
  console.log('Received:', body);
});

// Serve static files
const fs = require('fs');
if (req.url === '/style.css') {
  fs.readFile('style.css', (err, data) => {
    res.writeHead(200, { 'Content-Type': 'text/css' });
    res.end(data);
  });
}

// Implement Express.js framework
const express = require('express');
const app = express();

// Add Express middleware
app.use(express.json());

// Create RESTful routes
app.get('/api/users', (req, res) => {
  res.json([{ id: 1, name: 'John' }]);
});

// Handle 404 routes
app.use((req, res) => {
  res.status(404).send('Not Found');
});

// Add error middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Server Error');
});

// Implement authentication
app.use((req, res, next) => {
  if (req.headers.authorization === 'secret') {
    next();
  } else {
    res.status(401).send('Unauthorized');
  }
});

// Add rate limiting
const rateLimit = require('express-rate-limit');
app.use(rateLimit({ windowMs: 15*60*1000, max: 100 }));

// Enable CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});