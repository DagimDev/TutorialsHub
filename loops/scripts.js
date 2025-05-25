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

//    2. Batch Processing:
  
   let batchesRemaining = 5;
   while (batchesRemaining > 0) {
     for (let i = 0; i < 10; i++) {
       processItem(batchesRemaining * 10 + i);
     }
     batchesRemaining--;
   }

//    Game Loops:
  
   let gameActive = true;
   while (gameActive) {
     for (let frame = 0; frame < 60; frame++) {
       updateGameState();
       renderFrame();
     }
     gameActive = checkGameOver();
   }
   
// ## Performance Considerations

// - Each while iteration triggers a complete for loop execution
// - Avoid infinite loops by ensuring while condition eventually becomes false
// - Complex nested loops can impact performance with large iterations

// Example: Counting Down and Printing Numbers

let countDown = 3;  // Initialize our while loop counter

while (countDown > 0) {  // While condition
  console.log(`--- Countdown: ${countDown} ---`);
  
  // For loop that runs completely each while iteration
  for (let number = 1; number <= countDown; number++) {
    console.log(`Printing number ${number}`);
  }
  
  countDown--;  // Decrement while counter
  console.log('');  // Empty line for spacing
}
// ### Output:
// --- Countdown: 3 ---
// Printing number 1
// Printing number 2
// Printing number 3

// --- Countdown: 2 ---
// Printing number 1
// Printing number 2

// --- Countdown: 1 ---
// Printing number 1
// ## Step-by-Step Execution:

// 1. First While Loop (countDown = 3)
//    - Prints "--- Countdown: 3 ---"
//    - For loop runs 3 times (1, 2, 3)
//    - Decrements countDown to 2

// 2. Second While Loop (countDown = 2)
//    - Prints "--- Countdown: 2 ---"
//    - For loop runs 2 times (1, 2)
//    - Decrements countDown to 1

// 3. Third While Loop (countDown = 1)
//    - Prints "--- Countdown: 1 ---"
//    - For loop runs 1 time (1)
//    - Decrements countDown to 0

// 4. Loop Ends because countDown (0) is no longer > 0

// ## Key Points:
// - The while loop controls how many times we repeat the entire process
// - The for loop runs completely each time the while loop runs
// - The for loop's condition can even depend on the while counter (as in this example)
// - Each time the while loop runs again, the for loop starts fresh from its initial value

// This structure is useful when you need to:
// - Repeat a multi-step process
// - Process data in batches
// - Run something until a condition is met, with internal repetitions each time

// How Matrices Work with Nested For Loops in JavaScript

// Matrices (2D arrays) are perfectly suited for nested loops because they have both rows and columns that need to be processed. Let me explain how this works with clear examples.

// ## Basic Matrix Structure

// A matrix in JavaScript is simply an array of arrays:

const matrix1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
// ## Accessing Matrix Elements with Nested Loops

// ### 1. Row-Major Traversal (Left to Right, Top to Bottom)

for (let row = 0; row < matrix.length; row++) {
  for (let col = 0; col < matrix[row].length; col++) {
    console.log(`matrix[${row}][${col}] = ${matrix[row][col]}`);
  }
}
// Output:
// matrix1[0][0] = 1
// matrix1[0][1] = 2
// matrix1[0][2] = 3
// matrix1[1][0] = 4
// matrix1[1][1] = 5
// matrix1[1][2] = 6
// matrix1[2][0] = 7
// matrix1[2][1] = 8
// matrix1[2][2] = 9

//  2. Column-Major Traversal (Top to Bottom, Left to Right)

for (let col = 0; col < matrix[0].length; col++) {
  for (let row = 0; row < matrix.length; row++) {
    console.log(`matrix[${row}][${col}] = ${matrix[row][col]}`);
  }
}
// Output:
// matrix[0][0] = 1
// matrix[1][0] = 4
// matrix[2][0] = 7
// matrix[0][1] = 2
// matrix[1][1] = 5
// matrix[2][1] = 8
// matrix[0][2] = 3
// matrix[1][2] = 6
// matrix[2][2] = 9

// Practical Matrix Operations

// ### 1. Matrix Transposition (Swapping Rows and Columns)

const transposed = [];
for (let col = 0; col < matrix[0].length; col++) {
  transposed[col] = [];
  for (let row = 0; row < matrix.length; row++) {
    transposed[col][row] = matrix[row][col];
  }
}
console.log(transposed);


// 2. Matrix Summation

let sum = 0;
for (let row = 0; row < matrix.length; row++) {
  for (let col = 0; col < matrix[row].length; col++) {
    sum += matrix[row][col];
  }
}
console.log(`Total sum: ${sum}`);

// 3. Finding Maximum Value

let max = matrix[0][0];
for (let row = 0; row < matrix.length; row++) {
  for (let col = 0; col < matrix[row].length; col++) {
    if (matrix[row][col] > max) {
      max = matrix[row][col];
    }
  }
}
console.log(`Maximum value: ${max}`);
// ## Key Concepts to Remember

// 1. Outer Loop Controls Rows: Typically, the first loop index represents rows
// 2. Inner Loop Controls Columns: The nested loop index represents columns
// 3. matrix[row][col]: This is how you access individual elements
// 4. matrix.length: Gives number of rows
// 5. matrix[row].length: Gives number of columns in that row (for jagged arrays)


// Special Case: Jagged Matrices

// Matrices don't have to be perfect rectangles - rows can have different lengths:

const jaggedMatrix = [
  [1, 2, 3],
  [4, 5],
  [6, 7, 8, 9]
];

for (let row = 0; row < jaggedMatrix.length; row++) {
  for (let col = 0; col < jaggedMatrix[row].length; col++) {
    console.log(jaggedMatrix[row][col]);
  }
}
// This flexibility makes nested loops essential for working with real-world matrix data that might not 
// be perfectly rectangular.