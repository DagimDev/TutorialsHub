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