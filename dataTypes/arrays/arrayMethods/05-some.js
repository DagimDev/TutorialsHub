// JavaScript some() Method Explained with Examples
// The some() method tests whether at least one element in an array passes the test implemented by the provided callback function. It's essentially the opposite of every().
// Checks if any element satisfies a condition.
// How some() Works
// Basic Syntax

const hasPassingElement = array.some(callbackFunction);
// Callback Function Structure

function callback(currentValue, index, array) {
  // Return true to pass, false to fail
}
// Key Behavior
// Returns true if any callback returns true

// Returns false if all callbacks return false (or array is empty)

// Short-circuits (stops at first true found)

// Simple Example: Checking for Even Numbers

const numbers = [1, 3, 5, 8, 9];
const hasEven = numbers.some(num => num % 2 === 0);

console.log(hasEven); // true (because of 8)
// Practical Use Cases
// 1. Checking User Permissions

const userPermissions = ["read", "write", "delete"];
const canEdit = userPermissions.some(perm => perm === "write");

console.log(canEdit); // true
// 2. Inventory Check

const products = [
  { id: 1, inStock: false },
  { id: 2, inStock: true },
  { id: 3, inStock: false }
];

const isAvailable = products.some(product => product.inStock);
console.log(isAvailable); // true (product #2 is in stock)
// 3. Form Validation

const formInputs = ["", "John", "", "Doe"];
const isEmpty = formInputs.some(input => input.trim() === "");

console.log(isEmpty); // true (empty strings exist)
// Advanced Examples
// 1. Using Index Parameter

const numbers1 = [10, 20, 30, 40];
const hasMatch = numbers1.some((num, index) => num === index * 10);

console.log(hasMatch); // true (20 at index 1, 30 at index 2, etc.)
// 2. Complex Object Search

const employees = [
  { name: "Alice", department: "HR", remote: true },
  { name: "Bob", department: "Engineering", remote: false },
  { name: "Charlie", department: "Engineering", remote: true }
];

const hasRemoteEngineers = employees.some(emp => 
  emp.department === "Engineering" && emp.remote
);

console.log(hasRemoteEngineers); // true (Charlie)
// Common Mistakes
// ❌ Forgetting Return Value

// Wrong - missing return
[1, 2, 3].some(num => { num > 2 }); // false (returns undefined)

// Correct
[1, 2, 3].some(num => num > 2); // true
// ❌ Confusing some() with includes()

// For primitive values, includes() is simpler
[1, 2, 3].includes(2); // true

// some() is needed for complex checks
products.some(p => p.price > 100); // Correct for objects
// Performance Considerations
// Best Case: O(1) (finds match immediately)

// Worst Case: O(n) (checks all elements)

// Optimization: Place most likely matches early in array

// When to Use some()
// ✅ Checking if any element meets a condition
// ✅ Validating if at least one item exists
// ✅ Permission/feature flag checks
// ✅ Early exit scenarios

// Browser Compatibility
// Works in all modern browsers and IE9+. For legacy support:


if (!Array.prototype.some) {
  Array.prototype.some = function(callback) {
    // Polyfill implementation
  };
}
// Real-World Example: Shopping Cart

const cart = [
  { id: 1, price: 25, onSale: false },
  { id: 2, price: 35, onSale: true },
  { id: 3, price: 45, onSale: false }
];

function showDiscountBanner() {
  return cart.some(item => item.onSale);
}

if (showDiscountBanner()) {
  console.log("Special discount available!");
}