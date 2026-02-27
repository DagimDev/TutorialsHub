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

## Static Methods (Model-level)

```js
// Definition
userSchema.statics.methodName = function() {
    // 'this' is the Model
    return this.find({...});
};

// Usage
await User.methodName();
```
