// Custom Constructors
// Class Syntax (ES6)
// Definition:
// Syntactic sugar over JavaScript's prototype-based inheritance.

// Detailed Explanation:

// javascript
// class Person {
//   constructor(name) {
//     this.name = name;
//   }
  
//   greet() {
//     return `Hello, ${this.name}`;
//   }
  
//   static createAnonymous() {
//     return new Person('Anonymous');
//   }
// }

// class Employee extends Person {
//   constructor(name, title) {
//     super(name);
//     this.title = title;
//   }
// }
// Components:

// constructor - Initialization method

// Instance methods - Added to prototype

// Static methods - Called on class itself

// extends - Inheritance

// super - Access parent class

// Under the Hood:

// Still uses prototypal inheritance

// More readable than ES5 constructor functions

// Features:

// Getters/setters

// Private fields (with # prefix)

// Static initialization blocks

// Use Cases:

// Object-oriented programming

// Creating hierarchies of objects

// Encapsulation and data hiding