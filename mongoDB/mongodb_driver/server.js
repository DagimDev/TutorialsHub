const { MongoClient } = require("mongodb");
require("dotenv").config();

console.log("🚀 Server starting...");

async function connectToDatabase() {
  const uri = process.env.MONGODB_URI;
  const dbName = process.env.DB_NAME || "myFirstDatabase";
  const client = new MongoClient(uri);
  try {
    await client.connect();
    console.log("✅ Connected to MongoDB");

  } catch (error) {
    console.log("❌ Connection failed:", error.message);
  }
}

async function startSerever() {
  await connectToDatabase();
}

startSerever()