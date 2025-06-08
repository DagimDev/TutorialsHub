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


join()
// 5. join(separator)
// Converts the array into a string, joined by the separator.

let words = ['hello', 'world'];
console.log(words.join(' ')); // "hello world"
console.log(words.join('-')); // "hello-world"


find()
// 6. find(callback)
// Returns the first element that satisfies the condition in the callback.

let nums = [3, 6, 9, 12];
let result = nums.find(n => n > 5);
console.log(result); // 6 (first match)

findIndex(callback)
// Returns the index of the first element that matches the condition.


let nums1 = [3, 6, 9, 12];
let idx = nums1.findIndex(n => n > 10);
console.log(idx); // 3 (index of 12)


flat(depth = 1)
// Flattens nested arrays into a single array.

let nested = [1, [2, 3], [4, [5]]];
console.log(nested.flat()); // [1, 2, 3, 4, [5]]
console.log(nested.flat(2)); // [1, 2, 3, 4, 5]

at(index)
// Access an element at a specific positive or negative index.

let arr2 = [10, 20, 30, 40];
console.log(arr2.at(1));  // 20
console.log(arr2.at(-1)); // 40 (last item)


toReversed() (New in ES2023)
// Returns a reversed copy of the array without changing the original.

let arr15 = [1, 2, 3];
let rev = arr15.toReversed();
console.log(rev); // [3, 2, 1]
console.log(arr15); // [1, 2, 3]


toSorted() (New in ES2023)
// Returns a sorted copy (like sort(), but doesn’t mutate original).


let nums15 = [3, 1, 2];
let sorted = nums15.toSorted((a, b) => a - b);
console.log(sorted); // [1, 2, 3]
console.log(nums15);   // [3, 1, 2]

entries()
// Returns an iterator of key/value pairs (index and value) for each item.

let arr8 = ['a', 'b'];
for (let [index, value] of arr8.entries()) {
  console.log(index, value);
}
// 0 'a'
// 1 'b'

keys()
// Returns an iterator of the array's indices.

let arrk = ['x', 'y'];
for (let index of arrk.keys()) {
  console.log(index); // 0, 1
}

values()
// Returns an iterator of the values.

let arrv = ['apple', 'banana'];
for (let value of arrv.values()) {
  console.log(value); // 'apple', 'banana'
}

Array.isArray()
// Checks if a value is actually an array.

console.log(Array.isArray([1, 2, 3])); // true
console.log(Array.isArray('hello'));  // false

Array.from()
// Creates a new array from an array-like or iterable object.

let str = "hello";
let letters = Array.from(str);
console.log(letters); // ['h', 'e', 'l', 'l', 'o']