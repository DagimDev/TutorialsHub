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
