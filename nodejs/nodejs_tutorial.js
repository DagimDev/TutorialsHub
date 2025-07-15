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