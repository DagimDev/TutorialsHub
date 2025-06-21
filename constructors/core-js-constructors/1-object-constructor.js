// 1. Object Constructor
// Definition:
// The Object constructor creates an object wrapper for the given value or a new empty object if no value is provided.

// Detailed Explanation:

const obj = new Object();  // Same as const obj = {}
const objWithProps = new Object({ name: 'Alice', age: 30 });
// Prototype Chain: obj → Object.prototype → null

// Methods from Object.prototype:

// hasOwnProperty() - Checks if property exists directly on object

// toString() - Returns string representation

// valueOf() - Returns primitive value of object

// Static Methods:

Object.keys() // Returns array of own property names

Object.assign()// - Copies properties between objects

Object.freeze()// - Makes object immutable

// Use Cases:

// Creating plain objects when dynamic property names are needed

// Converting primitive values to objects (rarely needed)

// As base for inheritance patterns