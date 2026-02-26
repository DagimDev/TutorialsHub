## 🚀 What Is Mongoose?

# Mongoose is a library that:

    - Connects Node.js to MongoDB
    - Provides schemas
    - Adds validation
    - Makes working with data easier
    - Gives structure to your database

    - MongoDB alone is flexible (no structure).
    - Mongoose adds structure.

## 🧠 Why Use Mongoose?

- MongoDB is schema-less.

That means you can insert:
```js
{ name: "Dagim" }

// And also:

{ name: "Dagim", age: 22, country: "Ethiopia", hobby: "football" }
```

- No restrictions.
* But in real applications, we want:

    - Required fields
    - Data types
    - Validation
    - Clean structure

That’s where Mongoose helps.

## 🔌 1️⃣ Connecting Mongoose to MongoDB

* First install:
```bash
npm install mongoose
```
* Then connect:
```js
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/mydatabase")
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.log(err));
```
- If using MongoDB Atlas, the connection string will be different.

## 📦 2️⃣ What Is a Schema?

- A schema defines the structure of your data.

Example:
```js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String
});
```
This means:

    - name must be a String
    - age must be a Number
    - email must be a String