## What are Instance Methods?
 # Instance methods are functions that belong to each individual document.

Simple Analogy:
    Every person (document) has their own way of introducing themselves

    - john.introduce() might say "Hi, I'm John"
    - jane.introduce() might say "Hello, I'm Jane"
* Step-by-Step Example:
```js
// STEP 1: Define the schema
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
});

// STEP 2: Add an instance method
userSchema.methods.sayHello = function() {
    // 'this' refers to the specific user document
    return `Hello, my name is ${this.name}!`;
};

// STEP 3: Create the model
const User = mongoose.model('User', userSchema);

// STEP 4: Create a document (actual user)
const john = new User({
    name: "John",
    email: "john@example.com",
    age: 25
});

// STEP 5: Use the instance method
console.log(john.sayHello()); 
// Output: "Hello, my name is John!"
```

# Another Instance Method Example:
```js
// Add multiple methods
userSchema.methods = {
    getFullInfo: function() {
        return `${this.name} (${this.email}) - Age: ${this.age}`;
    },
    
    isAdult: function() {
        return this.age >= 18;
    },
    
    updateEmail: function(newEmail) {
        this.email = newEmail;
        return this.save(); // Save to database
    }
};

// Using the methods
const jane = await User.findOne({ name: "Jane" });

console.log(jane.getFullInfo()); // "Jane (jane@email.com) - Age: 22"
console.log(jane.isAdult() ? "Adult" : "Minor"); // "Adult"

await jane.updateEmail("jane.new@email.com");
console.log("Email updated!");
```