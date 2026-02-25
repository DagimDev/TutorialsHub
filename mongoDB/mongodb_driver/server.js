const express = require("express");
const { MongoClient } = require("mongodb");
require("dotenv").config();

const port = process.env.PORT || 3000;
const app = express();

// Database connection
console.log("🚀 Server starting...");

async function connectToDatabase() {
  const uri = process.env.MONGODB_URI;
  const dbName = process.env.DB_NAME || "myFirstDatabase";
  const client = new MongoClient(uri);
  try {
    const response = await client.connect();
    console.log("✅ Connected to MongoDB");
  } catch (error) {
    console.log("❌ Connection failed:", error.message);
  }
}


// Start server only after database connects
async function startServer() {
  await connectToDatabase();
  app.listen(port, () => {
    console.log(`Server is listening in: ${port}`);
  });
}

startServer()