// The for...in loop in JavaScript is used to iterate over the enumerable properties of an object, including inherited enumerable properties.

// Basic Syntax
// for (variable in object) {
//   // code to be executed
// }
// How It Works
// Iterates over enumerable properties: It loops through all enumerable properties of an object, including those inherited through the prototype chain.

// Order is not guaranteed: The order of iteration is not consistent across JavaScript engines, especially for numeric properties.

// Only enumerable properties: It only accesses properties that have their enumerable attribute set to true.

// Example usage 
const person = {
  name: 'John',
  age: 30,
  occupation: 'Developer'
};

for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}
// Output:
// name: John
// age: 30
// occupation: Developer

// Important Considerations
// Arrays: While you can use for...in with arrays, it's generally not recommended because:

// It iterates over all enumerable properties, not just array elements

// The order is not guaranteed

// It includes properties from the prototype chain

const arr = ['a', 'b', 'c'];
arr.foo = 'bar';

for (let index in arr) {
  console.log(index); // 0, 1, 2, foo
}

// Checking own properties: To avoid iterating over inherited properties, use hasOwnProperty():

for (let key in person) {
  if (person.hasOwnProperty(key)) {
    console.log(`${key}: ${person[key]}`);
  }
}

// Main Use Case: Objects
// for...in is most commonly and appropriately used with plain objects:

const person1 = {name: 'Alice', age: 25, job: 'Engineer'};

for (let key in person1) {
  console.log(key, person1[key]); 
}
// Output:
// name Alice
// age 25
// job Engineer