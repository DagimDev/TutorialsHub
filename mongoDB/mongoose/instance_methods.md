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