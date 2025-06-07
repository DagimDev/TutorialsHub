push()
// ➤ What it does:
// Adds one or more elements to the end of an array.

// ➤ Syntax:

// array.push(element1, element2, ...);
// ➤ Returns:
// The new length of the array.

// ➤ Mutates original array? ✅ Yes
// ➤ Example:

let colors = ['red', 'green'];
colors.push('blue');

console.log(colors); // ['red', 'green', 'blue']

pop()
// ➤ What it does:
// Removes the last element from an array.

// ➤ Syntax:

array.pop();
// ➤ Returns:
// The removed element.

// ➤ Mutates original array? ✅ Yes
// ➤ Example:

let colorsPop = ['red', 'green', 'blue'];
let last = colors.pop();

console.log(last);   // 'blue'
console.log(colorsPop); // ['red', 'green']

shift()
// ➤ What it does:
// Removes the first element from an array.

// ➤ Syntax:

array.shift();
// ➤ Returns:
// The removed element.

// ➤ Mutates original array? ✅ Yes
// ➤ Example:
let numbers = [10, 20, 30];
let first = numbers.shift();

console.log(first);   // 10
console.log(numbers); // [20, 30]

 unshift()
// ➤ What it does:
// Adds one or more elements to the beginning of an array.

// ➤ Syntax:
// array.unshift(element1, element2, ...);
// ➤ Returns:
// The new length of the array.

// ➤ Mutates original array? ✅ Yes
// ➤ Example:

let number = [20, 30];
numbers.unshift(10);

console.log(number); // [10, 20, 30]


splice()
// ➤ What it does:
// Adds, removes, or replaces items at a specific index in the array.

// ➤ Syntax:

array.splice(start, deleteCount, item1, item2,) //...;
// start: index to start changes

// deleteCount: number of items to remove

// item1...: elements to insert

// ➤ Returns:
// An array of removed elements.

// ➤ Mutates original array? ✅ Yes

// ➤ Examples:
// ➤ Remove items:
let fruits = ['apple', 'banana', 'cherry'];
let removed = fruits.splice(1, 1);

console.log(removed); // ['banana']
console.log(fruits);  // ['apple', 'cherry']

// ➤ Add items:
let fruits1 = ['apple', 'cherry'];
fruits1.splice(1, 0, 'banana');

console.log(fruits2); // ['apple', 'banana', 'cherry']

// Example 1: Inserting with splice()

let fruits11 = ['apple', 'cherry'];
fruits11.splice(1, 0, 'banana');
console.log(fruits1); // ['apple', 'banana', 'cherry']
// ✅ What it means:
// fruits1.splice(1, 0, 'banana')
//          ↑   ↑    ↑
//       index 0   item to insert
// 1: Start at index 1 (right before 'cherry')

// 0: Remove 0 elements

// 'banana': Insert this item at index 1

// 🧠 Result:
// 'banana' is inserted between 'apple' and 'cherry'.

// So:

// ['apple', 'cherry'] → ['apple', 'banana', 'cherry']


// ➤ Replace items:

let fruits3 = ['apple', 'banana', 'cherry'];
fruits3.splice(1, 1, 'orange');

console.log(fruits3); // ['apple', 'orange', 'cherry']

// Example 2: Replacing with splice()

// let fruits = ['apple', 'banana', 'cherry'];
// fruits.splice(1, 1, 'orange');
// console.log(fruits); // ['apple', 'orange', 'cherry']
// ✅ What it means:

// fruits.splice(1, 1, 'orange')
//          ↑   ↑    ↑
//       index 1   item to insert
// 1: Start at index 1 (which is 'banana')

// 1: Remove 1 element (removes 'banana')

// 'orange': Insert this in place of what was removed

// 🧠 Result:
// 'banana' is removed

// 'orange' is added at the same position (index 1)

// So:

// ['apple', 'banana', 'cherry'] → ['apple', 'orange', 'cherry']


sort()
// ➤ What it does:
// Sorts the elements as strings by default. You can pass a function for custom sorting.

// ➤ Syntax:

array.sort([compareFunction]);
// ➤ Returns:
// The sorted array (same reference).

// ➤ Mutates original array? ✅ Yes
// ➤ Examples:
// ➤ Default (lexicographical sort):

let nums = [100, 25, 5];
nums.sort();
console.log(nums); // [100, 25, 5] → incorrect numerically
// ➤ Numeric sort:

nums.sort((a, b) => a - b);
console.log(nums); // [5, 25, 100]

// Array.prototype.sort() Overview
// ✅ Default behavior:
// By default, JavaScript's sort() method converts elements to strings and compares their UTF-16 character codes — not their actual numeric values.

// 🔍 So yes:
 sort() // works on arrays, but it treats the elements as strings unless you give it a custom sorting function.

// 🔸 Example 1: Default (string-based) sorting

// let nums = [100, 25, 5];
// nums.sort();
// console.log(nums); // [100, 25, 5]
// 💡 Why is this wrong?
// It’s comparing them as:

// "100", "25", "5"
// So:

// "100" comes before "25" because '1' is less than '2'

// This is not numeric sorting!

// 🔸 Example 2: Numeric sort (correct way)

nums.sort((a, b) => a - b);
console.log(nums); // [5, 25, 100]
// 🧠 Explanation:
// a - b → if result is negative, a comes before b

// So this sorts numerically from smallest to largest

// For descending order:


nums.sort((a, b) => b - a);
console.log(nums); // [100, 25, 5]
// 🔸 Sorting Strings (default works as expected)

let fruits5 = ['banana', 'apple', 'cherry'];
fruits.sort();
console.log(fruits5); // ['apple', 'banana', 'cherry']
// This works correctly because string comparison is intended.

// 🔸 Summary Table
// Type of Elements	      Default Sort Works?	       Need Custom Function?
// Strings	                ✅ Yes	                    ❌ No
// Numbers	                ❌ No	                    ✅ Yes (a - b)
// Mixed types	            ❌ Unreliable	            ✅ Use custom logic


reverse()
// ➤ What it does:
// Reverses the order of elements in place.

// ➤ Syntax:

array.reverse();
// ➤ Returns:
// The reversed array (same reference).

// ➤ Mutates original array? ✅ Yes
// ➤ Example:

let letters = ['a', 'b', 'c'];
letters.reverse();

console.log(letters); // ['c', 'b', 'a']

fill()
// fill(value, start?, end?)
// Fills parts of the array with a static value.

let arr = [1, 2, 3, 4];
arr.fill(0, 1, 3); // fill with 0 from index 1 to 2
console.log(arr); // [1, 0, 0, 4]

copyWithin()
copyWithin (target, start, end)//?)
// Copies part of the array to another index.

let arr1 = [1, 2, 3, 4, 5];
arr.copyWithin(0, 3); // copy from index 3 to start (index 0)
console.log(arr1); // [4, 5, 3, 4, 5]