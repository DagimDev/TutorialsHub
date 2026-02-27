## What are Instance Methods?

# Instance methods are functions that belong to each individual document.

Simple Analogy:
Every person (document) has their own way of introducing themselves

    - john.introduce() might say "Hi, I'm John"
    - jane.introduce() might say "Hello, I'm Jane"

- Step-by-Step Example:

```js
// STEP 1: Define the schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

// STEP 2: Add an instance method
userSchema.methods.sayHello = function () {
  // 'this' refers to the specific user document
  return `Hello, my name is ${this.name}!`;
};

// STEP 3: Create the model
const User = mongoose.model("User", userSchema);

// STEP 4: Create a document (actual user)
const john = new User({
  name: "John",
  email: "john@example.com",
  age: 25,
});

// STEP 5: Use the instance method
console.log(john.sayHello());
// Output: "Hello, my name is John!"
```

# Another Instance Method Example:

```js
// Add multiple methods
userSchema.methods = {
  getFullInfo: function () {
    return `${this.name} (${this.email}) - Age: ${this.age}`;
  },

  isAdult: function () {
    return this.age >= 18;
  },

  updateEmail: function (newEmail) {
    this.email = newEmail;
    return this.save(); // Save to database
  },
};

// Using the methods
const jane = await User.findOne({ name: "Jane" });

console.log(jane.getFullInfo()); // "Jane (jane@email.com) - Age: 22"
console.log(jane.isAdult() ? "Adult" : "Minor"); // "Adult"

await jane.updateEmail("jane.new@email.com");
console.log("Email updated!");
```

## Step 3: Real-World Instance Method Example

- practical example with a user authentication system:

```js
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  lastLogin: Date,
  loginAttempts: { type: Number, default: 0 },
  isActive: { type: Boolean, default: true },
});

// Method 1: Check password
userSchema.methods.checkPassword = async function (candidatePassword) {
  // Compare provided password with stored password
  return await bcrypt.compare(candidatePassword, this.password);
};

// Method 2: Update last login
userSchema.methods.recordLogin = function () {
  this.lastLogin = new Date();
  this.loginAttempts = 0; // Reset failed attempts
  return this.save();
};

// Method 3: Increment failed login attempts
userSchema.methods.failedLogin = function () {
  this.loginAttempts += 1;
  return this.save();
};

// Method 4: Get public profile (hide sensitive data)
userSchema.methods.getPublicProfile = function () {
  return {
    name: this.name,
    email: this.email,
    lastLogin: this.lastLogin,
    // password NOT included!
  };
};

// USING THE METHODS
async function loginUser(email, password) {
  // Find the user
  const user = await User.findOne({ email });

  if (!user) {
    return { success: false, message: "User not found" };
  }

  // Check password using instance method
  const isValid = await user.checkPassword(password);

  if (isValid) {
    await user.recordLogin(); // Update last login
    return {
      success: true,
      user: user.getPublicProfile(), // Return safe data
    };
  } else {
    await user.failedLogin(); // Increment attempts
    return { success: false, message: "Wrong password" };
  }
}
```
