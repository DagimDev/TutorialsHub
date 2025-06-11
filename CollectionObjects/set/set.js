// Set in JavaScript
// A Set is a built-in JavaScript object that stores unique values of any type, whether primitive values or object references. It's similar to an array, but with some key differences that make it very useful for certain operations.

// Key Characteristics of Sets
// Unique Values: A Set can only contain unique values - no duplicates are allowed.

// Value Equality: Uses "same-value-zero" equality (similar to === but considers NaN equal to NaN).

// Order Preservation: Maintains insertion order of elements.

// Performance: Offers faster lookups than arrays for checking if a value exists.

// How to Create a Set
// Empty Set
const mySet = new Set();

// Set with initial values
const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
const hell = "hello";

console.log(vowels)


// Summary of Everything Set Offers
// Feature	                    Details
// Unique values	            Only stores unique elements.
// Any type	                Supports primitives and objects.
// Iterable	                Can loop with for...of, forEach, etc.
// No key-value pairs	        Unlike Map, Set only stores values.
// Conversion-friendly	        Easy to convert to/from arrays.
// Useful for	                Removing duplicates, checking presence, simple set logic.