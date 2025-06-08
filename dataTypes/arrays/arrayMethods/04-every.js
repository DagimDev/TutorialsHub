// The every() method is a powerful array function that checks if all elements in an array pass a test implemented by the provided callback function. Let's explore it thoroughly.

// How every() Works
// 1. Basic Syntax

// const allPass = array.every(callbackFunction);
// 2. Callback Function Structure
// The callback accepts three parameters:


function callback(currentValue, index, originalArray) {
  // Return true/false for each element
}
// 3. Execution Flow
// Starts with first element

// Runs callback for each element

// If any callback returns false, immediately stops and returns false

// If all callbacks return true, returns true

// Returns true for empty arrays (vacuously true)

// Practical Example: Validation Check

const ages = [18, 22, 25, 30];

// Check if all users are adults (18+)
const allAdults = ages.every(age => age >= 18);

console.log(allAdults); // true
// Key Characteristics
// Short-circuiting: Stops at first false (like && operator)

// Empty Arrays: Returns true (mathematical convention)

// Non-mutating: Doesn't change original array

// Deterministic: Always returns boolean (true/false)

// Advanced Usage Examples
// 1. Object Property Validation

const users = [
  { name: "Alice", active: true },
  { name: "Bob", active: true },
  { name: "Charlie", active: false }
];

const allActive = users.every(user => user.active);
// false (Charlie is inactive)
// 2. Complex Conditions

const products = [
  { id: 1, price: 100, inStock: true },
  { id: 2, price: 200, inStock: true },
  { id: 3, price: 300, inStock: false }
];

const allAffordableInStock = products.every(p => 
  p.price < 500 && p.inStock
);
// false (product #3 fails both conditions)
// 3. Using Index Parameter

const numbers = [10, 20, 30, 40];

// Check if each number is > its index
const check = numbers.every((num, index) => num > index);
// true (10>0, 20>1, 30>2, 40>3)
// Common Mistakes
// ❌ Confusing every() with some()

// every(): All must pass

// some(): At least one must pass

// ❌ Forgetting Return Value

// Wrong - missing return
[1, 2, 3].every(num => { num > 0 }); // Returns false (no explicit return)

// Correct
[1, 2, 3].every(num => num > 0); // true
// ❌ Modifying Array During Iteration

const arr = [1, 2, 3];
arr.every((num, i) => {
  arr.pop(); // Mutates array during iteration!
  return true;
});
// Unreliable behavior
// Performance Considerations
// Best Case: O(1) (fails on first element)

// Worst Case: O(n) (passes all elements)

// Optimization: Place most likely-to-fail conditions first in callback

// When to Use every()
// ✅ Validating form inputs
// ✅ Checking permissions/access rights
// ✅ Verifying dataset consistency
// ✅ Pre-condition checks before operations

// Browser Compatibility
// Works in all modern browsers and IE9+. For legacy environments:


if (!Array.prototype.every) {
  Array.prototype.every = function(callback) {
    // Polyfill implementation
  };
}
// Real-World Use Case: Shopping Cart Validation

const cart = [
  { id: 1, price: 25, available: true },
  { id: 2, price: 35, available: true },
  { id: 3, price: 45, available: false }
];

function validateCart() {
  const allAvailable = cart.every(item => item.available);
  const allUnder100 = cart.every(item => item.price < 100);
  
  return allAvailable && allUnder100;
}

if (!validateCart()) {
  alert("Some items unavailable or over price limit!");
}