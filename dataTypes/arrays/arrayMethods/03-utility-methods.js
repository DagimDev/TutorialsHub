// Utility (Non-Mutating) Array Methods
// These methods do NOT change the original array — they return a new value (array, element, or string).

// 1. concat()
// Merges two or more arrays into a new array.

// let a = [1, 2];
// let b = [3, 4];
// let result = a.concat(b);
// console.log(result); // [1, 2, 3, 4]
// console.log(a); // [1, 2] → original unchanged

// 2. slice(start, end)
// Returns a shallow copy of a portion of the array.

// start: index to begin (inclusive)

// end: index to end (exclusive)

let arr = [10, 20, 30, 40];
let part = arr.slice(1, 3);
console.log(part); // [20, 30]
console.log(arr);  // [10, 20, 30, 40]


indexOf()
// 3. indexOf(value)
// Returns the first index where the value appears, or -1 if not found.


let items = ['a', 'b', 'c'];
console.log(items.indexOf('b')); // 1
console.log(items.indexOf('z')); // -1

includes()
// 4. includes(value)
// Returns true if the array contains the value.

let arr1 = [1, 2, 3];
console.log(arr1.includes(2)); // true
console.log(arr1.includes(5)); // false