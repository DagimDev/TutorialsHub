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


// Syntax 2 (conditional or ternary operator/ alternative for if ... else): The
// conditional (ternary) operator is the only JavaScript operator that takes three
// operands: a condition followed by a question mark (?), then an expression to
// execute if the condition is truthy followed by a colon (:), and finally the expression
// to execute if the condition is falsy. This operator is frequently used as alternative
// to an if...else statement.
condition ? expressionIfTrue: expressionIfTrue
Example: var age = 43;
// var theDrink= “ ”;
theDrink = (age >= 18) ? "Alcohol is allowed" :
"Only juice or water";
console.log(theDrink); // "Alcohol is allowed”
// prints because 43 >= 18