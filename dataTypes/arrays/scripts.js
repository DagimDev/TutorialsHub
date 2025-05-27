console.log("Arrays")

// Array (definition): It is the most used data type from the nonprimitive data structures. An
// array is a special variable, which can hold more than one value. The values in an array are
// referred with a name and an index. Please note that an array can hold values that are of
// different data type.

// Declaring/creating an array: An array can hold many values under a single name and the
// below examples show how one can create an array and add values into the array.
// Sytax to declare an array: var arrayName = [ ];
// Example: 
var gradeResults = [ ];

// Populating/adding values to an array: You can populate an array by assigning values to
// its elements. Let’s add values to the example array we declared above:
// Sytax to add value into an array: arrayName = [item1, item2, ...];
// Example: gradeResults = [55, 99, 73];
// ▪ Declaring and adding value to an array at the same time is also possible:
var myCar = ["“BMW”", "“Honda”", "“Ford”"];
var x = ["TV", 99, "“phone”"];

// Accessing array elements: You access an array element by referring to the index number.
// Index is basically the location of an element of an array. In JavaScript, the first element of
// an array is at index 0.
// Example:
var myCar = ["BMW", "Honda", "Ford"];
MyCar[0] // output will be BMW
// [0] is the first element/ BMW
// [1] is the second element/ Honda
// [2] is the third element/ Ford