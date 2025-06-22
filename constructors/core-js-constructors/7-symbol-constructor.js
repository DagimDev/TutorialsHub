// Symbol Constructor
// Definition:
// Creates unique primitive values that can be used as object property keys.

// Deep Dive:

const sym1 = Symbol('description');
const sym2 = Symbol('description');
console.log(sym1 === sym2); // false - each Symbol is unique

// Global Symbol registry
const globalSym = Symbol.for('key'); // Creates or retrieves
Symbol.keyFor(globalSym); // "key"
// Characteristics:

// Primitive value (not an object)

// Guaranteed to be unique (even with same description)

// Not enumerable in for...in loops

// Use Cases:

// Creating non-colliding object properties

// Defining well-known symbols (Symbol.iterator, Symbol.toStringTag)

// Implementing meta-programming protocols