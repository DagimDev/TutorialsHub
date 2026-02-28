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


# Real-World Example - Password Hashing
* This is the most common use of pre middleware:
```js
const bcrypt = require('bcrypt');
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    role: { type: String, default: 'user' }
});

// PRE-SAVE: Hash password before saving
userSchema.pre('save', async function(next) {
    console.log('🔐 Checking password...');
    
    // Only hash if password was modified (not on every save)
    if (!this.isModified('password')) {
        console.log('📝 Password not changed, skipping hash');
        return next();
    }
    
    try {
        console.log('🔨 Hashing password...');
        
        // Generate salt and hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(this.password, salt);
        
        // Replace plain password with hashed one
        this.password = hashedPassword;
        
        console.log('✅ Password hashed successfully!');
        next();
    } catch (error) {
        console.log('❌ Error hashing password:', error);
        next(error);
    }
});

const User = mongoose.model('User', userSchema);

// When creating a new user
const user = new User({
    name: "Dagim",
    email: "dagim@test.com",
    password: "mypassword123" // Plain text
});

await user.save();
// Output:
// 🔐 Checking password...
// 🔨 Hashing password...
// ✅ Password hashed successfully!
// (User saved with hashed password)

// When updating something else (not password)
user.name = "Dagim Updated";
await user.save();
// Output:
// 🔐 Checking password...
// 📝 Password not changed, skipping hash
// (Name updated, password remains hashed)
```

# Multiple Pre Hooks
* You can have multiple pre hooks - they run in order:
```js
userSchema.pre('save', function(next) {
    console.log('1️⃣ First pre-save hook');
    this.lastModified = new Date();
    next();
});

userSchema.pre('save', function(next) {
    console.log('2️⃣ Second pre-save hook');
    if (!this.username && this.email) {
        this.username = this.email.split('@')[0];
    }
    next();
});

userSchema.pre('save', function(next) {
    console.log('3️⃣ Third pre-save hook');
    this.apiCalls = this.apiCalls || 0;
    next();
});

// When you save:
await user.save();
// Output:
// 1️⃣ First pre-save hook
// 2️⃣ Second pre-save hook
// 3️⃣ Third pre-save hook
// (Then document is saved)
```


# Post Middleware (After)
* Post hooks run AFTER an operation completes.
```js
schema.post('operation', function(doc, next) {
    // Do something after the operation
    next(); // Continue
});
```

# Simple Example - Logging
```js
userSchema.post('save', function(doc, next) {
    console.log(`✅ User saved successfully! ID: ${doc._id}`);
    console.log(`📧 Email: ${doc.email}`);
    
    // You could send a welcome email here
    sendWelcomeEmail(doc.email);
    
    next();
});

userSchema.post('findOne', function(doc, next) {
    if (doc) {
        console.log(`🔍 User found: ${doc.name}`);
        // Track who viewed what
        analytics.track('user.viewed', { userId: doc._id });
    } else {
        console.log('🔍 User not found');
    }
    next();
});

const User = mongoose.model('User', userSchema);

// When you save:
const user = await User.create({ name: "Dagim", email: "dagim@test.com" });
// Output:
// ✅ User saved successfully! ID: 65f1a2b3c4d5e6f7a8b9c0d1
// 📧 Email: dagim@test.com
// (Welcome email sent in background)

// When you find:
const found = await User.findOne({ name: "Dagim" });
// Output:
// 🔍 User found: Dagim
```

# Query Middleware
* Pre and post hooks also work on queries like find, findOne, updateOne, etc.
```js
// PRE-FIND hook - runs BEFORE any find operation
userSchema.pre('find', function(next) {
    console.log('🔍 About to search for users...');
    
    // Automatically exclude deleted users from all finds
    this.where({ isDeleted: { $ne: true } });
    
    console.log('📋 Filter applied: exclude deleted');
    next();
});

// PRE-FINDONE hook
userSchema.pre('findOne', function(next) {
    console.log('🔍 About to find one user...');
    
    // Populate references automatically
    this.populate('posts');
    
    next();
});

// POST-FIND hook
userSchema.post('find', function(docs, next) {
    console.log(`📊 Found ${docs.length} users`);
    
    docs.forEach(doc => {
        console.log(`   - ${doc.name}`);
    });
    
    next();
});

const User = mongoose.model('User', userSchema);

// When you run any find:
const users = await User.find({ age: { $gt: 18 } });
// Output:
// 🔍 About to search for users...
// 📋 Filter applied: exclude deleted
// 📊 Found 5 users
//    - Dagim
//    - Alice
//    - Bob
```