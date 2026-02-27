## What are Static Methods?
* Static methods are functions that belong to the Model itself, not individual documents.

- Simple Analogy:
    - Instance method = "John, how old are you?" (asks one person)
    - Static method = "Find all people over 18" (asks the entire population)

# Step-by-Step Example:
```js
// STEP 1: Define schema
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
    city: String
});

// STEP 2: Add static methods
userSchema.statics.findByCity = function(city) {
    // 'this' refers to the User Model
    return this.find({ city: city });
};

userSchema.statics.findAdults = function() {
    return this.find({ age: { $gte: 18 } });
};

userSchema.statics.getStats = async function() {
    const total = await this.countDocuments();
    const averageAge = await this.aggregate([
        { $group: { _id: null, avgAge: { $avg: "$age" } } }
    ]);
    
    return {
        totalUsers: total,
        averageAge: averageAge[0]?.avgAge || 0
    };
};

// STEP 3: Create the model
const User = mongoose.model('User', userSchema);

// STEP 4: Use static methods (NO need to create a user first!)
const newYorkers = await User.findByCity("New York");
console.log(`Found ${newYorkers.length} people in NYC`);

const adults = await User.findAdults();
console.log(`Found ${adults.length} adults`);

const stats = await User.getStats();
console.log(stats);
// Output: { totalUsers: 150, averageAge: 32.5 }
```