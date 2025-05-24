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

// Switch statements
// • Definition: instead of using this long if else statement, you might choose to go with an
// easier to read switch statement. The switch statement starts with a variable called the switch
// value. Each case in “switch statement” indicates the possible value and if there is a match
// when comparing the input value with values of a case, the code associated with the match
// will run.
// Syntax:
switch(expression) {
case x:
// the code you want to be executed if expression
// matches value of the case
break;
case y:
// the code you want to be executed if expression
// matches value of the case
break;
default:
// the code you want to be executed if expression
// matches value of the case
}

// Notes on how “switch statements” work
// • The expression in a “switch statement” is evaluated only once with each
// case
// • In a “switch statement”, the comparison is between the expression and the
// values under each case
// • If there is a match between the expression and the value of any of the cases,
// the code block associated will be the one to be executed
// • If multiple cases match a case value, the first case is selected.
// • If there is no match while comparing the expression and the value of each
// case, the default code will be executed
// Example for “switch statements”:
var greetings; 
var timeOfDay; timeOfDay =
"afternoon";
switch (timeOfDay) {
case "morning":
greetings = "Good morning";
break;
case "afternoon":
greetings = "Good afternoon";
break;
case "evening":
greetings = "Good evening";
break;
default:
greetings = "Hi there";
break;
}
console.log(greetings); //
// ▪ This prints in the console "Good afternoon" after comparing the expression value
// in the switch statement (value of timeOfDay) with each case. We see that there is
// a match when the case is “afternoon”. Therefore, the code in that associated with
// the matching case has executed