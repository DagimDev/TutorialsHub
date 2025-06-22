// WeakMap and WeakSet
// Definition:
// Collections that don't prevent their keys from being garbage collected.

// Detailed Explanation:

// javascript
// const weakMap = new WeakMap();
// const key = {};
// weakMap.set(key, 'private data');

// const weakSet = new WeakSet();
// weakSet.add(document.body);
// Key Differences from Map/Set:

// Keys must be objects

// Not enumerable (can't list keys)

// No size property

// Automatically clean up when keys are garbage collected

// Use Cases:

// Storing private data for objects

// Tracking objects without preventing garbage collection

// DOM element metadata