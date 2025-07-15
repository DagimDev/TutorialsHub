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