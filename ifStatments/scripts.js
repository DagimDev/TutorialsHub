console.log("If Statments")

// if statements
// • Definition: An “if” statement is a programming conditional statement that we use to
// specify a block
// • Syntax: We start by using the key word "if", put the conditions within a bracket. Note that
// if is in lowercase letters. Uppercase letters (If or IF) will generate a JavaScript error.
// Syntax 1:
if (condition) {
// write the code you want to be executed if
// the condition is true
}
Example:
var pass = 50;
var score = 17;
if (score >= pass) {
console.log("Hey you passed");
}
if (score <= pass) {
console.log("You failed");
}

// The “else” statement
// ▪ Definition: We use the “else” statement to specify a block of code to be executed
// when the condition under the “if” statement is false.
// Syntax: 
if (condition) {
// write the code you want to be executed if the
// condition is true
} else {
// write the code you want to be executed if
// condition is false
}

// The “else … if” statement
// ▪ Definition: There will be times where you want to test multiple conditions. That
// is where the else if block comes in. When the “if” statement (the first statement) is
// false, the computer will move onto the “else if” statement and executes it.
// Syntax 1: 
 if (true) {
    // condition 1 is true
// code is executed
} else if (true) {
    // condition2 is true
// code is executed
} else {
// code is executed
}