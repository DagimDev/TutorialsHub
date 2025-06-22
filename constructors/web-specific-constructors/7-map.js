// Map
// Definition:
// Collection of key-value pairs with better key flexibility than Objects.

// Detailed Explanation:

// javascript
// const map = new Map();
// map.set('name', 'Alice');
// map.set({ id: 1 }, 'Complex key');
// Key Features:

// Keys can be any value (including objects)

// Maintains insertion order

// Performance benefits for frequent additions/removals

// Methods:

// set() - Adds key-value pair

// get() - Retrieves value by key

// has() - Checks for key

// delete() - Removes key-value pair

// clear() - Removes all pairs

// Iteration:

// keys(), values(), entries() methods

// forEach() method

// Works with for...of

// Use Cases:

// When keys are unknown until runtime

// When keys need to be objects

// When insertion order matters

// When frequent additions/removals occur