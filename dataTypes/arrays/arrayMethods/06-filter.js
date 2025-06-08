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