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