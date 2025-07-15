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


// ===== 5: "Create REST API endpoints" =====
let todos = [];
app.get('/api/todos', (req, res) => res.json(todos));
app.post('/api/todos', (req, res) => {
  todos.push(req.body);
  res.status(201).send();
});

// ===== 6: "Implement error handling" =====
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// ===== 7: "Add database connection" =====
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/todos', { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
});
// Run: npm install mongoose

// ===== 8: "Create Mongoose model" =====
const Todo = mongoose.model('Todo', new mongoose.Schema({
  title: String,
  completed: Boolean
}));

// ===== 9: "Implement CRUD operations" =====
app.get('/api/db/todos', async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
});

// ===== 10: "Add authentication" =====
const jwt = require('jsonwebtoken');
app.post('/api/login', (req, res) => {
  const token = jwt.sign({ user: 'test' }, 'secret');
  res.json({ token });
});
// Run: npm install jsonwebtoken

// ===== 11: "Implement auth middleware" =====
function authenticate(req, res, next) {
  const token = req.headers.authorization;
  try {
    req.user = jwt.verify(token, 'secret');
    next();
  } catch (err) {
    res.status(401).send('Invalid token');
  }
}

// ===== 12: "Add config management" =====
require('dotenv').config();
console.log('Environment:', process.env.NODE_ENV);
// Run: npm install dotenv

// ===== 13: "Implement testing" =====
const assert = require('assert');
assert.strictEqual(1 + 1, 2);
console.log('Tests passed!');

// ===== 14: "Add file system operations" =====
const fs = require('fs');
fs.writeFileSync('test.txt', 'Node.js file system works!');
console.log(fs.readFileSync('test.txt', 'utf8'));

// ===== 15: "Create child processes" =====
const { exec } = require('child_process');
exec('dir', (error, stdout) => {
  if (error) throw error;
  console.log('Child process output:', stdout.slice(0, 50));
});

// ===== 16: "Implement streams" =====
const readStream = fs.createReadStream(__filename);
readStream.on('data', chunk => console.log(`Received ${chunk.length} bytes`));

// ===== 17: "Add WebSocket support" =====
const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });
wss.on('connection', ws => {
  ws.send('WebSocket connected!');
});
// Run: npm install ws


// ===== 18: "Implement clustering" =====
const cluster = require('cluster');
if (cluster.isMaster) {
  cluster.fork();
  console.log('Worker started');
}

// =====  19: "Add performance hooks" =====
const { performance } = require('perf_hooks');
const start = performance.now();
setTimeout(() => {
  console.log(`Execution took ${performance.now() - start}ms`);
}, 100);

// ===== 20: "Implement TypeScript" =====
// (Requires ts-node: npm install -D typescript ts-node)
// Run: npx ts-node nodejs_tutorial.ts
console.log('TypeScript ready');

// ===== 21: "Add Docker support" =====
/*
# Dockerfile example:
FROM node:14
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 3000
CMD ["node", "nodejs_tutorial.js"]
*/

// ===== 22: "Implement CI/CD example" =====
/*
# .github/workflows/node.js.yml example:
name: Node.js CI
on: [push]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - run: npm install && npm test
*/

// Start the server if not in test mode
if (!module.parent) {
  app.listen(3001, () => console.log('Advanced server running on port 3001'));
}