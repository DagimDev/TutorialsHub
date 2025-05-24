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


// Function arguments: Arguments are the actual value of the parameter passed to
// and received by the function. Arguments are values we supply when we
// call/use/invoke a function.
// • Example: When we invoke the myFunction function above, we will need
// to pass an argument like this
myFunction ("Hello world")// prints Hello world


// The different forms of variable scoping in JavaScript
// ▪ Function scope:
// • Each JavaScript function creates a new scope. Variables declared within a
// JavaScript function become LOCAL to the function, meaning variables
// within a function are only recognized in that function. That is why function
// parameters are always local to that function.
// • Variables declared with var, let and const are quite similar when declared
// inside a function

function myCar () {
var firstCar = "Toyota"; // has function Scope
let secondCar = "Honda"; // has function Scope
var thirdCar = "Volvo"; // has function Scope
 }
//console.log(myCar(firstCar));;// prints “firstCar is
// not defined” because variables declared within a
// function are only accessible in the function only.


// Global scope: The global scope is the outermost scope. Variables declared
// globally (outside any function), are recognized by everyone and accessible from
// any inner (local) scope.
let firstName = 2;
function myFirstName() {
firstName += 10; 
return firstName
}

console.log(myFirstName())