## Cheat Sheet

# Instance Methods (Document-level)

```js
// Definition
userSchema.methods.methodName = function() {
    // 'this' is the document
    return something;
};

// Usage
const user = await User.findOne({...});
user.methodName();
```
