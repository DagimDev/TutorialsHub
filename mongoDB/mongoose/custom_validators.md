1️⃣ Custom Validators
What they do: Custom validation logic beyond built-in validators (required, min, max).

Example: Validate email domain and password strength
```js
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        validate: {
            validator: function(email) {
                // Only allow @gmail.com emails
                return email.endsWith('@gmail.com');
            },
            message: 'Email must be from @gmail.com domain!'
        }
    },
    password: {
        type: String,
        required: true,
        validate: {
            validator: function(password) {
                // Must have at least 8 chars, 1 number, 1 uppercase
                const hasNumber = /\d/.test(password);
                const hasUppercase = /[A-Z]/.test(password);
                return password.length >= 8 && hasNumber && hasUppercase;
            },
            message: 'Password must be 8+ chars with 1 number and 1 uppercase'
        }
    },
    age: {
        type: Number,
        validate: {
            validator: Number.isInteger,
            message: 'Age must be a whole number'
        }
    }
});

// Test it
const user = new User({
    email: "dagim@yahoo.com",  // ❌ Fails: not @gmail.com
    password: "pass",           // ❌ Fails: too weak
    age: 22.5                   // ❌ Fails: not integer
});

await user.save(); // Throws validation error!
```