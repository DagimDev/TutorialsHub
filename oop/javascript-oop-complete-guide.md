Four Pillars of OOP
1. Data Encapsulation
Definition: Wrapping data and methods within an object, exposing only selected information

Purpose: Protective shield preventing external code from accessing internal data directly

Implementation: Using private properties/methods and public interfaces

2. Data Abstraction
Definition: Exposing only essential characteristics while hiding implementation details

Purpose: Simplify complex systems by showing only relevant features

Example: Using high-level public methods accessible across classes

3. Data Polymorphism
Definition: Ability of objects to take different forms (from Greek: "poly" = many, "morphism" = forms)

Types:

Compile-time: Method overloading

Runtime: Method overriding

Example: Shape class with circle, square, rectangle subclasses

4. Data Inheritance
Definition: Child classes inheriting properties and methods from parent classes

Benefits: Code reusability, hierarchical organization

Traditional Prototypal Inheritance
Prototype Concept
Every JavaScript object has an internal [[Prototype]] property

Accessed via Object.getPrototypeOf() method

Enables property/method sharing across objects

Constructor Functions with Prototype
javascript
// Basic Constructor Function
function Student(name, gender) {
    this.name = name;
    this.gender = gender;
}

// Adding prototype method
Student.prototype.grade = 5;
Student.prototype.getDetails = function() {
    return `${this.name} - Grade: ${this.grade}`;
};

// Usage
const student1 = new Student("Alice", "Female");
console.log(student1.grade); // 5
console.log(student1.getDetails()); // "Alice - Grade: 5"

Advanced Prototype Inheritance
javascript
// Parent Constructor
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Parent Prototype Method
Person.prototype.showAge = function() {
    return this.age;
};

// Child Constructor
function Student(grade, name, age) {
    this.grade = grade;
    // Inherit parent properties
    Person.call(this, name, age);
}

// Set up prototype chain
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

// Child-specific method
Student.prototype.showGrade = function() {
    return this.grade;
};

// Usage
const student = new Student("A", "Bob", 20);
console.log(student.showAge()); // 20 (inherited)
console.log(student.showGrade()); // "A" (own method)
Key Methods
Object.create(): Creates new object with specified prototype

Constructor.call(): Inherits parent properties in child context