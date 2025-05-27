console.log("Data Type");

// What is data structure and why do we need to structure data?
//  • Data structure: It is a particular way of storing, organizing and processing
// data/information in a computer so that it can be retrieved and used most productively.
//  ▪ The concept of data types is important in programming. That is why learning
// programing language starts by understanding what data is and how it is structured
// for effective use. To be able to operate on variables, it is important to know
// something about the data type.
//  ▪ Data structures are the building blocks of algorithms and computer programs. It is
// a key topic when it comes to Software Engineering interview questions. Hence as
// developers, we must have good knowledge about data structures

// Data structure types: There are two types of data structure available for the programming
// purpose, primitive data structure and non-primitive data structure. 



// Primitive data structure (data types) in JavaScript: These data structures are the ones
// that are predefined by almost all programing languages. Whether it is JavaScript, Python
// or any other programing language, they know what these data types are. They know what
// to do with them. Ex: If you tell a programing language to add two integer values, it knows
// what to do with the integers. Primitive data types include:
// ▪ Number/integer: which stores a range on mathematical integers
// ▪ String: Strings are useful for holding data that can be represented in text form.
// Strings are written with quotes. You can use single or double quotes.
// ▪ Boolean: stores logical values that are either true or false.
// ▪ Undefined: The undefined datatype, whose value is undefined is used to denote
// an absence of a meaningful value. Do you remember when we said the datatype of
// a variable that has no value assigned is 'undefined', that is what we mean by
// undefined data type.
// ▪ Symbol: was introduced in ECMAScript 2015, so just a few years ago. It's a very
// peculiar data type. Once you create a symbol, its value is kept private and for
// internal use. Symbol can be created using the factory function Symbol () which 
// returns a Symbol. Every time you call the factory function, a new and unique
// symbol is created.
// ▪ Null: JavaScript defines that null is an empty object value. Null represents the
// intentional absence of any object value. It is one of JavaScript's primitive values
// and is treated as falsy for Boolean operations.
// ▪ BigInt: Bigint value represent integers with arbitrary precision. provides a way to
// represent whole numbers larger than 253
// -1. So, it means, with BigInts, you can
// safely store and operate on large integers even beyond the safe integer limit for
// Numbers.



// Non-primitive data structure: These are structures created by grouping primitive data
// together. Non-primitive data structure is a type of data structure that can store the data of
// more than one type. The way they are grouped together varies depending on the kind of
// task we are trying to accomplish

// Linear data structures: If the non-primitive data are grouped in a sequential
// order, they are called Linear. Example:
// • Array: An array stores a collection of items in a manner that the position
// of each element can be calculated or retrieved easily by an index.
// • Stack: A stack stores a collection of items in the linear order that
// operations are applied. This structure is named as “stack” because it
// resembles a real-world stack — a stack of plates.
// • Queue: A queue stores a collection of items like a stack; however, the
// operation order can only be first in, first out. This structure is named as
// “queue” because it resembles a real-world queue — people waiting in a
// queue.
// • Linked List: A linked list stores a collection of items in a linear/sequential
// order. Hence, you must access data sequentially and random access is not
// possible.

// Nonlinear data structure: If the non-primitive data aren’t grouped in a sequential
// order, they are called Nonlinear. Example:
// • Tree: A tree is a hierarchical structure where data is organized
// hierarchically and are linked together.
// • Graph: A graph stores a collection of items in a nonlinear fashion. Graphs
// are made up vertices, and lines that connect them, also known as edges.
// These are useful for representing real-world systems such as computer
// networks.
// • Hash table: A hash table, also known as a hash map, stores a collection of
// items in an associative array that plots keys to values. A hash table uses a
// hash function to convert an index into an array of buckets that contain the
// desired data item.


// Operators: arithmetic operators and assignment operators
// • Operators and Operands:
// o Operands: The numbers (in an arithmetic operation) are called operands
// o Operator: Operator defines the operation that will be performed between the two
// operands
// o Example: 20 + 50 (20 and 50 are operands whereas (+) is the operator)

// Assignment operator ( = ): It is used to assign value or change value of a variable.
// o Example: var x = 10;

// Addition assignment operator (+=): This operator adds the value of the right operand to
// a variable and assigns the result to the variable.
// o The syntax for (+=) operator is: x += y this means x = x + y
// Example:
let a = 2;
let b = 'hello';
a += 3; // means a = a +3, means a = 2+3. So, awill be 5
b+= 'world'; // concatenation this means b= b +“world”, means b= “hello” + “world”, so b will be
// “hello world”

// Subtraction assignment operator (-=): This operator subtracts the value of the right
// operand from a variable and assigns the result to the variable.
// o The syntax for (-=) operator is: x -= y this means x = x - y
// Example:
let aa = 2;
aa -= 3; // means a = a - 3, means a = 2 - 3. So, awill be -1

// Arithmetic operators ( + ), ( - ), ( * ), ( / ), (%) (++), (--) : Arithmetic operators perform
// arithmetic on numbers, meaning, they work in a similar way we use them in math.
// o The addition operator (+): adds numbers.
// Example:
var x = 10;
var y = 5;
var z = x + y;
z = 15;


// The subtraction operator (-): subtracts one number from another.
// Example:
var x = 10;
var y = 5;
var z = x - y;
z = 5;
// o The multiplication operator (*): multiplies numbers.
// Example:
var x = 10;
var y = 5;
var z = x * y;
z = 50;
// o The division operator (/): divides a number by another one.
// Example:
var x = 10;
var y = 5;
var z = x/ y;
z = 2;

// The modulus (remainder) operator (%): returns the remaining amount after
// dividing one operand by a second operand.
// Example:
var x = 10;
var y = 4;
var z = x % y;
z = 2; // remainder is 2 because 10 = (4 * 2) + 2


// Comparison operators: Comparison operators are used in logical statements to determine
// equality or difference between variables or values. Comparison operators always return a
// Boolean value of true or false.
// • (==) Equals to: This operator measures(checks) whether its two operands are
// equal, returning Boolean result .
// Example:
var x = 5;
var y = "5";
x == y; // true, because (==) it converts data type
// to number and compares only values and both values are
// equal here


// (===) identity/strict equality: This operator always checks the value and type of
// the two operands are the same or different, returning Boolean result.
// Example:
var m = 5;
var n = "5";
m === n; //false, because (===) compares both value
// and data type and the data type is not equal here

// (! =) Not equal/ Inequality: This operator tests inequality, to determine whether
// the values on either side of the operator are not equal. This operator is basically
// saying the two values on the left and right are not even loosely equal in value
// • (! ==) not identity/ Strictly unequal to with no type conversion: This operator
// evaluates a strict inequality, which considers both the value and the type of the
// operands on either side of the operator. This operator is basically saying the two
// values are not equal in value or not equal in data type

// Operators: logical operators
// • Logical operators:
// ▪ Logical operators are used to determine the logic between variables or values.
// ▪ We use these operators when we want to write conditional statements. We will
// learn about conditional statements later. For now, let's just focus on the operators.


// There are three logical operators in JavaScript:
// ▪ Logical AND (&&): This returns true if both operands are true. Meaning, if either
// one of the variables were initialized as false, the && expression would evaluate to
// false.
    // true && true = true
    // true && false = false
    // false && false = false
    // false && true = false
// (1==1 && 2==2 && 3==7) // returns False 


// Logical OR (| |): The OR operator, represented by two pipes, returns true if one
// operand is true
// true || true = true
// true || false = true
// false || false = false

// Logical not (!): This returns true if operand is false and vice versa.
// ! False = True
// ! True = False
// ! (1==1 || 3==2) // returns False 