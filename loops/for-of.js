// The for...of loop is a modern iteration construct introduced in ES6 (ES2015) that provides a clean way to iterate over iterable objects.

// Key Characteristics
// Iterates over values (not keys/properties)

// Works with iterable objects (arrays, strings, maps, sets, etc.)

// Doesn't work with plain objects (unless they implement the iterable protocol)

// Guaranteed order of iteration

// Basic Syntax
// for (variable of iterable) {
//   // code to execute
// }

// 1. Arrays (Most Common)
const fruits = ['apple', 'banana', 'orange'];

for (const fruit of fruits) {
  console.log(fruit);
}
// Output:
// apple
// banana
// orange

// 2. Strings
const message = "Hello";

for (const char of message) {
  console.log(char);
}
// Output:
// H
// e
// l
// l
// o

// 3. Maps
const map = new Map();
map.set('name', 'Alice');
map.set('age', 30);

for (const [key, value] of map) {
  console.log(`${key}: ${value}`);
}
// Output:
// name: Alice
// age: 30
// H
// e
// l
// l
// o

// 4. Sets
const uniqueNumbers = new Set([1, 2, 2, 3]);

for (const num of uniqueNumbers) {
  console.log(num);
}
// Output:
// 1
// 2
// 3