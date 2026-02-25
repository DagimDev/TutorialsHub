MongoDB is a NoSQL database that stores data in flexible, JSON-like documents instead of traditional tables.
Simple Analogy:
SQL Database (like MySQL) = Spreadsheet with strict columns/rows

MongoDB = Filing cabinet with folders - each folder can have different papers

How MongoDB Stores Data:
```js
// In MongoDB, data looks like this (BSON/JSON):
{
  "_id": "65f1a2b3c4d5e6f7a8b9c0d1",
  "name": "Dagim",
  "age": 22,
  "email": "dagim@example.com",
  "skills": ["JavaScript", "MongoDB"],  // Arrays!
  "address": {                           // Nested objects!
    "city": "Addis Ababa",
    "country": "Ethiopia"
  }
}
```