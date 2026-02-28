## 🎯 What is Middleware?

- Middleware (also called hooks) are functions that run at specific points in a document's lifecycle. Think of them as automatic actions that happen before or after certain operations.

- Simple Analogy:

* Imagine you're baking a cake:
* Pre-bake hook: Preheat the oven, grease the pan (things you do BEFORE baking)
* Post-bake hook: Let it cool, add frosting (things you do AFTER baking)
* The operation: Actually baking the cake

## 📋 Types of Middleware

Mongoose has 4 types of middleware:

1. Document middleware - Runs on init, validate, save, remove
2. Query middleware - Runs on count, find, findOne, updateOne, deleteOne
3. Aggregate middleware - Runs on aggregate
4. Model middleware - Runs on insertMany

## Pre Middleware (Before)

Pre hooks run BEFORE a certain operation happens.

```js
schema.pre("operation", async function (next) {
  // Do something before the operation
  next(); // Continue to the operation
});
```
# Simple Example - Timestamps
```js
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    createdAt: Date,
    updatedAt: Date
});

// PRE-SAVE hook - runs BEFORE saving
userSchema.pre('save', function(next) {
    console.log('⏳ About to save a user...');
    
    const now = new Date();
    
    // If it's a new user, set createdAt
    if (!this.createdAt) {
        this.createdAt = now;
    }
    
    // Always update the updatedAt timestamp
    this.updatedAt = now;
    
    console.log('✅ Timestamps set!');
    next(); // Now continue with the save operation
});

const User = mongoose.model('User', userSchema);

// When you save...
const user = new User({ name: "Dagim", email: "dagim@test.com" });
await user.save(); 
// Output:
// ⏳ About to save a user...
// ✅ Timestamps set!
// (Then the user is saved to database)
```