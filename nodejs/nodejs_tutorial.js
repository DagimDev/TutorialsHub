/*
* Node.js Mastery Tutorial - One-File Learning Path
* Usage: Run sections with `node nodejs_tutorial.js`
* Commit commands assume Git repository setup
*/

// 1: "Initialize Node.js project" =====
// Run: npm init -y
console.log("Project initialized");

// 2: "Add basic HTTP server" =====
const http = require('http');
const server = http.createServer((req, res) => {
  res.end('Hello World\n');
});
server.listen(3000, () => console.log('Server running on port 3000'));

// ===== 3: "Implement Express framework" =====
const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('Express works!'));
// Run: npm install express

// ===== 4: "Add middleware support" =====
app.use(express.json());
app.use((req, res, next) => {
  console.log(`Request at ${new Date()}`);
  next();
});