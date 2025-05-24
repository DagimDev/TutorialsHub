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
