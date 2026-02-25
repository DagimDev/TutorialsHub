const express = require("express");
const { MongoClient } = require("mongodb");
const cors = require("cors");
require("dotenv").config();

const port = process.env.PORT || 3000;
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Global database reference
let db;
let client;

// Database connection
console.log("🚀 Server starting...");

async function connectToDatabase() {
  const uri = process.env.MONGODB_URI;
  const dbName = process.env.DB_NAME || "myFirstDatabase";
  client = new MongoClient(uri);
  try {
    await client.connect();
    console.log("✅ Connected to MongoDB");

    db = client.db(dbName);
    console.log(`📁 Using database: ${dbName}`);
    return db;
  } catch (error) {
    console.log("❌ Connection failed:", error.message);
  }
}

// ============= API ROUTES =============

// GET all items
app.get("/api/items", async (req, res) => {
  try {
    const collection = db.collection(
      process.env.COLLECTION_NAME || "myFirstCollection",
    );

    // Find all documents
    const items = await collection.find({}).toArray();

    console.log(`📊 Found ${items.length} items`);
    res.json({
      success: true,
      count: items.length,
      data: items,
    });
  } catch (error) {
    console.error("❌ Error fetching items:", error);
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});
// ============= POST ENDPOINT =============
// Insert into database
app.post("/api/items", async (req, res) => {
  try {
    const collection = db.collection(
      process.env.COLLECTION_NAME || "myFirstCollection",
    );
    // Get data from request body
    const newItem = {
      ...req.body,
      createdAt: new Date(),
    };

    // Insert into database
    const result = await collection.insertOne(newItem);

    // Fetch the created document to return it
    const createdItem = await collection.findOne({
      _id: result.insertedId,
    });

    res.status(201).json({
      success: true,
      data: createdItem,
    });
  } catch (error) {
    console.error("❌ Error creating item:", error);
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
});

// Start server only after database connects
async function startServer() {
  await connectToDatabase();
  app.listen(port, () => {
    console.log(`Server is listening in: ${port}`);
  });
}

startServer();
