// Deep Explanation of forEach() – Iteration Without a New Array
// Let’s break down forEach() in a simple way so you fully understand how it works, when to use it, and how it differs from other array methods like map() or for loops.

// What is forEach()?
// It’s a method that executes a function once for each element in an array.

// It does not return anything (undefined).

// It does not create a new array (unlike map() or filter()).

// It cannot be stopped early (unlike for or for...of loops).

// How forEach() Works (Step-by-Step)
// 1. Basic Syntax
array.forEach(function(currentValue, index, array) {
  // Do something with each element
});
// currentValue → The current element being processed.

// index (optional) → The index of the current element.

// array (optional) → The original array being traversed.

// 2. Simple Example
const numbers1 = [1, 2, 3];

numbers1.forEach((num) => {
  console.log(num * 2);
});
// Output:
// 2
// 4
// 6
// It loops through each number, applies the function (num * 2), and logs it.

// No new array is created—just side effects (like console.log).

// How forEach() Differs from Other Methods
// Method	      Returns a New Array?	        Can Modify Original?	                        Use Case
// forEach()	    ❌ No (undefined)	          ✅ Yes (if you mutate)	Side effects          (logging, DOM updates)
// map()	        ✅ Yes	                      ❌ No	                                       Transforming data into a new array
// for loop	      ❌ No	                       ✅ Yes	                                      When you need break or continue
// When Should You Use forEach()?
// ✅ Use forEach() when:

// You want to do something with each item (e.g., log it, update the DOM).

// You don’t need a new array (unlike map() or filter()).

// ❌ Avoid forEach() when:

// You need to return a new array (use map() or filter() instead).

// You need to break out of the loop early (use for or for...of).

// Common Use Cases
// 1. Logging Each Element
["Alice", "Bob", "Charlie"].forEach((name) => {
  console.log(`Hello, ${name}!`);
});
Output:
// Hello, Alice!
// Hello, Bob!
// Hello, Charlie!
// 2. Modifying the Original Array (Carefully!)
const numbers2 = [1, 2, 3];
numbers.forEach((num, index, arr) => {
  arr[index] = num * 2; // Directly modifies the original array
});
console.log(numbers2); // [2, 4, 6] (original array changed!)
// ⚠️ Warning: This mutates the original array (not always recommended).

// 3. Updating the DOM
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log("Button clicked!");
  });
});
// This attaches a click event to each button without creating a new array.

// What forEach() //CANNOT Do
// Cannot break or return early
// (Unlike for loops, you can’t exit early.)

// ❌ This won't work!
[1, 2, 3].forEach(num => {
  if (num === 2) {return "break"}; // SyntaxError!
});
// Solution: Use for...of instead:


for (const num of [1, 2, 3]) {
  if (num === 2) break; // Works!
}
// Does Not Return Anything
// (If you try to store forEach() in a variable, you get undefined.)

const result3 = [1, 2, 3].forEach(num => num * 2);
console.log(result3); // undefined
// Solution: Use map() if you need a new array:

const doubled = [1, 2, 3].map(num => num * 2); // [2, 4, 6]
// How forEach() Works Under the Hood
// If JavaScript didn’t have forEach(), you could write it like this:

function forEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i, array);
  }
}

// Usage:
forEach([1, 2, 3], (num) => console.log(num));
// This is exactly what forEach() does internally.

// Line-by-Line Execution of forEach()
// Let's break down exactly how forEach() works step by step, simulating how JavaScript processes it internally.

// Example Code
const numbers3 = [10, 20, 30];
let sum1 = 0;

numbers3.forEach((number, index) => {
  sum1 += number;
  console.log(`Processed ${number} at index ${index}`);
});

console.log("Total sum:", sum1);


// Step-by-Step Execution
// 1. JavaScript Reads the Array and Callback

const numbers = [10, 20, 30];  // Array is defined
let sum = 0;                   // Variable to store sum
// numbers is initialized as [10, 20, 30].

// sum starts at 0.

// 2. forEach() Begins Execution
// When you call:

// numbers.forEach((number, index) => { ... });
// JavaScript does the following internally:

// Pseudocode of How forEach() Works Inside JavaScript
// javascript
// This is roughly how JavaScript implements forEach()
function forEach(callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);  // Calls the function for each element
  }
}
// It loops through each element (this[i]).

// For each element, it calls your callback function with:

// number (current element value)

// index (current position)

// this (the original array)

// 3. First Iteration (i = 0)
// numbers[0] = 10, index = 0
callback(10, 0, [10, 20, 30]); 
// Inside the callback:

sum += 10;           // sum = 0 + 10 → sum is now 10
console.log(`Processed 10 at index 0`);
// Output:

// Processed 10 at index 0
// 4. Second Iteration (i = 1)

// numbers[1] = 20, index = 1
callback(20, 1, [10, 20, 30]);
// Inside the callback:

sum += 20;           // sum = 10 + 20 → sum is now 30
console.log(`Processed 20 at index 1`);
// Output:
// Processed 20 at index 1
// 5. Third Iteration (i = 2)

// numbers[2] = 30, index = 2
callback(30, 2, [10, 20, 30]);
// Inside the callback:


sum += 30;           // sum = 30 + 30 → sum is now 60
console.log(`Processed 30 at index 2`);
// Output:


// Processed 30 at index 2
// 6. Loop Ends (No More Elements)
// Since i = 3 and numbers.length = 3, the loop stops.

// forEach() exits and returns undefined (but we don’t use the return value).

// 7. Final console.log Runs
// console.log("Total sum:", sum);  // sum = 60
// Output:

// Total sum: 60
// Key Takeaways
// forEach() does not return anything → It’s only for side effects (like modifying variables or logging).

// Execution order is guaranteed → Processes elements in order ([0], [1], [2], ...).

// Cannot break or return early → If you need to exit early, use a for loop or for...of.

// Visualization of the Process
// Iteration	i	numbers[i]	Action	sum Value
// 1	0	10	sum += 10, logs "Processed 10"	10
// 2	1	20	sum += 20, logs "Processed 20"	30
// 3	2	30	sum += 30, logs "Processed 30"	60
// Common Mistakes to Avoid
// ❌ Trying to return a value from forEach():

const result5 = [1, 2, 3].forEach(num => num * 2); // result = undefined
// ✅ Fix: Use map() if you need a new array:


const result = [1, 2, 3].map(num => num * 2); // [2, 4, 6]
// ❌ Expecting break or return to work:


[1, 2, 3].forEach(num => {
  if (num === 2) return  "break" //break; // ❌ SyntaxError!
});
// ✅ Fix: Use for...of:


for (const num of [1, 2, 3]) {
  if (num === 2) break; // ✅ Works!
}
// Final Answer
// forEach() is a sequential processor:

// Takes each element one by one.

// Runs your function on it.

// Ignores any return value.

// Moves to the next element until done.

// Use it for:

// Logging items.

// Modifying external variables (like sum in the example).

// Updating the DOM.

// Avoid it for:

// Transforming arrays (use map()).

// Early exits (use for or for...of).


// JavaScript Reads the Array and Callback what do you mean by callback
// What is a "Callback" in forEach()?
// A callback is simply a function passed as an argument to another function (like forEach()). 
// It gets executed later—in this case, for each item in the array.

// Breaking Down the Callback in forEach()
// 1. Basic Structure

array.forEach(function callback(currentValue, index, array) {
  // Your code here
});
// The callback is the function you define inside forEach().

// JavaScript automatically calls it for each element in the array.

// 2. How JavaScript Processes It
// Example Code
const fruits = ["Apple", "Banana", "Orange"];

fruits.forEach(function logFruit(fruit, index) {
  console.log(`${index + 1}. ${fruit}`);
});
// Output:

// 1. Apple
// 2. Banana
// 3. Orange
// Step-by-Step Execution
// What JavaScript Does Internally
// Takes your callback function:

function logFruit(fruit, index) {
  console.log(`${index + 1}. ${fruit}`);
}
// Loops through the array and calls logFruit for each item:


// First iteration (i = 0)
logFruit("Apple", 0);  // Output: "1. Apple"

// Second iteration (i = 1)
logFruit("Banana", 1); // Output: "2. Banana"

// Third iteration (i = 2)
logFruit("Orange", 2); // Output: "3. Orange"
// Callback Parameters Explained
// The callback in forEach() can take 3 parameters (all optional):

// Parameter	Description	Example Usage
// currentValue	The current array element.	fruit in logFruit(fruit, ...)
// index	The current element's index.	index in logFruit(..., index)
// array	The original array being processed.	Rarely used (e.g., array.length)

// When is the Callback Executed?
// Immediately for each element in order.

// After forEach() starts but before it finishes.

// Real-World Analogy
// Imagine a teacher (forEach) going through a list of students (array) and:

// Calling each student (invoking the callback).

// Asking them to do something (your function logic).

// Moving to the next student (repeats until done).

// Key Takeaways
// Callback = Function passed to forEach() (or other methods like map, filter).

// It runs once per array element.

// You define what happens inside it (e.g., console.log, calculations).

// JavaScript handles the looping—you just write the action.

// Common Mistakes
// ❌ Forgetting the function keyword (arrow vs. regular):

// Works:
fruits.forEach(function(fruit) { console.log(fruit) });

// Also works (arrow function):
fruits.forEach(fruit => console.log(fruit));

// ❌ ERROR (missing function):
// fruits.forEach(console.log(fruit)); // Throws "fruit is not defined"

// When Would You Use a Callback?
// ✅ Example 1: Logging Each Item

[1, 2, 3].forEach(num => console.log(num * 2));
// Output: 2, 4, 6
// ✅ Example 2: Modifying an External Variable

let total = 0;
[10, 20, 30].forEach(num => total += num);
console.log(total); // 60
// ✅ Example 3: DOM Manipulation

document.querySelectorAll("button").forEach(button => {
  button.addEventListener("click", () => alert("Clicked!"));
});
// Summary
// A callback is just a function you pass to forEach().

// JavaScript automatically calls it for each array item.

// You define what happens inside the callback.

// It’s not special syntax—just a normal function!

// Summary
// Key Point	Explanation
// Does not return a value	forEach() always returns undefined.
// No early termination	Cannot use break or return to stop early (use for...of instead).
// Best for side effects	Great for logging, DOM updates, or modifying external variables.
// Not for transformations	Use map() if you need a new array.
// Final Answer
// forEach() is a simple way to loop through an array and perform an action on each item, but it doesn’t 
// return a new array.

// Use it for: Side effects (like logging or DOM updates).

// Avoid it for: Data transformations (use map()) or when you need to break early (use for...of).
