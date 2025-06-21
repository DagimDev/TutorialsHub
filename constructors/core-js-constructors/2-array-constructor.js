// 2. Array Constructor
// Definition:
// Creates a new Array object with the given elements or length.

// Detailed Explanation:

// javascript
const arr1 = new Array(1, 2, 3);  // [1, 2, 3]
const arr2 = new Array(3);        // [empty × 3] (length 3 but no elements)
// Prototype Chain: arr → Array.prototype → Object.prototype → null

// Key Methods:

// push()/pop() - Add/remove from end

// shift()/unshift() - Add/remove from start

// map()/filter()/reduce() - Transformation methods

// find()/includes() - Search methods

// Special Behaviors:

// Sparse arrays (holes)

// Length property is mutable

// Use Cases:

// Creating arrays with dynamic length

// When array size is known in advance (performance optimization)

// Creating arrays from non-array iterables