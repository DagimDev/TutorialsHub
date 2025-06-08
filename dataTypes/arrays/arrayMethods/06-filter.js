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