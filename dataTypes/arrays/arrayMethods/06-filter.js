// Deep Dive into JavaScript’s filter() Method
//  
// The filter() method is one of JavaScript’s most useful array operations. Let me break it down completely with a practical example.

// Creates a new array with only the elements that pass a condition.
// How filter() Works Internally1. The Basic SyntaxSyntax
// Const newArray = originalArray.filter(callbackFunction);

// 2. The Callback Function Structure
// The callback accepts three parameters (like forEach):
// Function callback(currentValue, index, originalArray) {
//   // Return true to keep, false to discard
// }

// 3. What Happens Step-by-Step
// 1. Creates a new empty array
// 2. Loops through original array
// 3. For each item, runs callback
// 4. If callback returns true, keeps the item
// 5. If callback returns false, skips the item
// 6. Returns new array withPractical Example: Filtering Productsering Products**
//  
const products = [
  { id: 1, name: "Laptop", price: 999, inStock: true },
  { id: 2, name: "Phone",  price: 699, inStock: false },
  { id: 3, name: "Tablet",  price: 499, inStock: true },
  { id: 4, name: "Monitor", price: 299, inStock: false }
];
 
// Filter only in-stock products
const availableProducts = products.filter(product => product.inStock);
 
Console.log(availableProducts);
Output:
[
  { id: 1, name: "“Laptop”", price: 999, inStock: true },
  { id: 3, name: "“Tablet”", price: 499, inStock: true }
]

// Key Characteristics of filter()
//  
// 1. Non-Destructive: OriginalReturns New Arrayged
// 2. Returns New Array: AlCondition-Basedarray
// 3. Condition-Based**: Only keeps elements wheChainableeturns true
// 4. Chainable: Can be combined wAdvanced Usage Examples Adv1. Filtering Numbers1. Filtering Numbers
// Const numbers = [1, 2, 3, 4, 5, 6];
// Const evens = numbers.filter(n => n % 2 === 0);
// // [2, 4, 6]
// 2. Filtering with Index
// Const items = [‘a’, ‘b’, ‘c’, ‘d’];
// Const filtered = items.filter((item, index) => index % 2 === 0);
// // [‘a’, ‘c’]
// 3. Complex Object Filtering
// Const users = [
//   { name: “Alice”, age: 25, active: true },
//   { name: “Bob”, age: 30, active: false },
//   { name: “Charlie”, age: 35, active: true }
// ];
//  
// Const activeAdults = users.filter(user => 
//   User.active && user.age >= 18
// );

// Common Mistakes to Avoid
 
// ❌ Forgetting to Return a Boolean
// Wrong – returns price number, not true/false
Products.filter(p => p.price > 500); // Still works (truthy/falsy)
// Better:
Products.filter(p => p.price > 500 ? true : false);
// ❌ Modifying Original Array in Callback
// Avoid – causes side effects
Products.filter(p => {
  p.price += 100; // Mutates original!
  //Return p.inStock;
});

// Performance Considerations
//  
// -Memory Usagety: O(n) – must check every elementAlternativese: Creates new array (can be large)
// - Alternatives: For simple checks, for loop might be faster for huge arrays
//  
// When to Use filter()
//  
// ✅ When you need a subset of an array  
// ✅ When working with immutable data patterns  
// ✅Browser Compatibilityods (e.g., map after filter)  


// Browser Compatibility
//  
// Works in all modern browsers and IE9+. For older support, use polyfill:
// If (!Array.prototype.filter) {
//   Array.prototype.filter = function(fun) {
//     // Polyfill implementation
//   };
// }
// The filter() method is essential for clean, functional JavaScript programming. It helps write more declarative code by focusing on what data you want rather than how to loop through it.