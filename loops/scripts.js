console.log("JavaScript Loops")

// JavaScript For Loop
// ▪ For loops are commonly used to count a certain number of iterations to repeat a
// block of code. Meaning, we use for loop when we want to execute the code for a
// SPECIFIED amount of time
// ▪ For loop Syntax:
 for (initialization; condition; post/finalexpression) {
// // statements (code block to be executed)
 }

 // 2 (Loop scope): If you use the var keyword to declare the
// counter variable, the variable will have either function or global
// scope. In other words, you can reference the counter variable after
// the loop ends. However, if you use the let keyword to declare the
// counter variable, the variable will have a blocked scope, which is
// only accessible inside the loop. See the example below:
for (let counter = 1; counter < 5; counter++)
{
console.log(counter); // prints numbers 1 to 4
}
 console.log(counter); //prints “ReferenceError:
// counter is not defined” because we used let
// to define counter

// the codition is optional
for (let counter = 1;; counter ++) {
console.log(counter);
if (counter >= 10) {
break;
}
}

// While loop
while (expression) {
// statement (code block to beexecuted)
}

// The while loop evaluates the expression before each iteration, therefore, the
// while loop is known as a pretest loop. For this reason, it is possible that the
// statement inside the while loop is never executed.

var f = 0;
while (f < 3) {
console.log(f); // prints the numbers 0 to 2
f++;
}

// Nested For Loops in JavaScript

// Nested for loops are a fundamental concept in JavaScript (and programming in general) where one for loop is placed inside another for loop. This allows you to iterate over multi-dimensional data structures or perform complex repetitive tasks.

// ## Basic Structure

// Here's the basic syntax of a nested for loop:

for (let i = 0; i < outerLength; i++) {
  for (let j = 0; j < innerLength; j++) {
    // Code to be executed
  }
}
// ## How It Works

// 1. The outer loop starts first and runs its initialization (let i = 0).
// 2. The outer loop checks its condition (i < outerLength).
// 3. If true, it enters the loop body where it encounters the inner loop.
// 4. The inner loop runs completely (initialization, condition checking, and iteration) for each iteration of the outer loop.
// 5. After the inner loop completes all its iterations, the outer loop increments (i++) and checks its condition again.
// 6. This process repeats until the outer loop's condition becomes false.

// ## Practical Example

// ### Printing a Multiplication Table

for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
  console.log('----------'); // separator between tables
}


// Working with 2D Arrays

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

for (let row = 0; row < matrix.length; row++) {
  for (let col = 0; col < matrix[row].length; col++) {
    console.log(`Element at [${row}][${col}] is ${matrix[row][col]}`);
  }
}
// ## Performance Considerations

// - Nested loops have O(n²) time complexity in worst-case scenarios
// - Be cautious with large datasets as performance can degrade quickly
// - Consider alternatives like map, reduce, or forEach when appropriate

// ## Common Use Cases

// 1. Processing multi-dimensional arrays
// 2. Generating combinations or permutations
// 3. Implementing sorting algorithms
// 4. Working with grid-based systems
// 5. Creating patterns or matrices

// Remember that each level of nesting adds complexity to your code, so use nested loops judiciously 
// and consider if there are simpler alternatives for your specific use case.

// Nested Loop Example with Detailed 
// Outer loop (rows)
for (let row = 1; row <= 3; row++) {
  console.log(`--- Outer loop: row = ${row} ---`);
  
  // Inner loop (columns)
  for (let col = 1; col <= 3; col++) {
    console.log(`Row ${row}, Column ${col}: Printing *`);
  }
  
  console.log("End of row " + row + "\n");
}
// ---

// ### Console Output:
// --- Outer loop: row = 1 ---
// Row 1, Column 1: Printing *
// Row 1, Column 2: Printing *
// Row 1, Column 3: Printing *
// End of row 1

// --- Outer loop: row = 2 ---
// Row 2, Column 1: Printing *
// Row 2, Column 2: Printing *
// Row 2, Column 3: Printing *
// End of row 2

// --- Outer loop: row = 3 ---
// Row 3, Column 1: Printing *
// Row 3, Column 2: Printing *
// Row 3, Column 3: Printing *
// End of row 3
// ---

// ### Key Observations:
// 1. Outer Loop Runs First (row = 1), then the inner loop runs completely (col = 1, 2, 3).  
// 2. After the inner loop finishes, the outer loop moves to the next iteration (row = 2).  
// 3. The inner loop restarts from scratch (col = 1 again) for each new row.  
// 4. This continues until the outer loop condition (row <= 3) becomes false.

// ---

// ### When to Use Nested Loops?
// - Grids/Tables (e.g., printing a multiplication table)
// - 2D Arrays (e.g., accessing matrix[i][j])
// - Pattern Printing (e.g., stars, numbers in a pyramid shape)
// - Combinations (e.g., pairing elements from two lists)


// How For Loops Work Inside While Loops in JavaScript

// Combining for loops inside while loops creates a powerful control flow structure where the while loop controls the outer repetition and the for loop handles inner iterations. Here's how they work together:

// ## Basic Structure

while (condition) {
  // While loop body
  for (initialization; condition; update) {
    // For loop body
  }
  // More while loop code
}
// ## How It Works

// 1. While loop evaluates its condition first
//    - If true, enters the while loop body
//    - If false, skips the entire block

// 2. For loop executes completely on each while iteration:
//    - Initialization runs
//    - Condition checked
//    - Body executes
//    - Update occurs
//    - Repeats until for condition is false

// 3. Control returns to while loop after for loop completes
//    - While loop can update variables
//    - While condition re-evaluated

// ## Practical Example

let outerCount = 0;
while (outerCount < 3) {
  console.log(`While loop iteration ${outerCount + 1}`);
  
  for (let innerCount = 0; innerCount < 2; innerCount++) {
    console.log(`  For loop iteration ${innerCount + 1}`);
  }
  
  outerCount++;
  console.log("---");
}
// ### Output:
// While loop iteration 1
//   For loop iteration 1
//   For loop iteration 2
// ---
// While loop iteration 2
//   For loop iteration 1
//   For loop iteration 2
// ---
// While loop iteration 3
//   For loop iteration 1
//   For loop iteration 2
// ---
// ## Key Characteristics

// 1. Complete Execution: The inner for loop runs to completion on each while iteration
// 2. Variable Scope: 
//    - while variables persist between for executions
//    - for variables are recreated each for loop start
// 3. Flow Control:
//    - break in for only exits the for loop
//    - break in while exits both loops

// Common Use Cases

// 1. Menu Systems:
  
   let programRunning = true;
   while (programRunning) {
     for (let i = 0; i < menuOptions.length; i++) {
       console.log(`${i + 1}. ${menuOptions[i]}`);
     }
     // Handle user input
   }