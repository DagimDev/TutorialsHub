console.log("Function")
// Function declaration: Syntax for defining function with declaration
function myFirstFunction (number1, number2) {
return number1 + number2;
}

console.log(myFirstFunction(22, 3)) 

// Function expressions: Syntax for defining function with declaration
const x = function (number3, number4){
return number3 + number4
};

// After a function expression has been stored in a variable, the variable can
// be used as a function. Functions stored in variables are anonymous or do
// not need function names. They are always invoked (called) using the
// variable name
// • You can call/invoke function x above like this:
// ▪ x (9, 11) // this will return 20, because of 9 + 11

// Function parameters are the names/variables given inputs when we define/create the function

function myFunction (a) {
console.log (a);
}

// n the above example, “a” is the input/parameter that we gave for the
// function called, myFunction
// • JavaScript function definitions do not specify data types for parameters.
// • Note: Functions can be declared wihtout parametes as well
function mySecondFunction () {
console.log ("Hello World!");// prints Hello world
}
