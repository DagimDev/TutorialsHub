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

ES6 Class-Based Inheritance
Class Declaration Syntax
javascript
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    // Method
    getName() {
        return `${this.name}, ${this.age}`;
    }
    
    // Static method
    static describe() {
        return "This is a Person class";
    }
}
Class Inheritance with extends
javascript
class Student extends Person {
    constructor(name, age, grade) {
        super(name, age); // Call parent constructor
        this.grade = grade;
    }
    
    // Method overriding
    getName() {
        return `${this.name}, ${this.age}, Grade: ${this.grade}`;
    }
    
    // Child-specific method
    getGrade() {
        return this.grade;
    }
}

// Usage
const student = new Student("Charlie", 18, "B");
console.log(student.getName()); // "Charlie, 18, Grade: B"
console.log(Person.describe()); // "This is a Person class"

Complete Shape Example (Polymorphism)
javascript
// Base class
class Shape {
    constructor(name) {
        this.name = name;
    }
    
    // Abstract method (to be overridden)
    calculatePerimeter() {
        throw new Error("Method 'calculatePerimeter()' must be implemented.");
    }
    
    describe() {
        return `This is a ${this.name}`;
    }
}

// Derived classes
class Circle extends Shape {
    constructor(radius) {
        super("Circle");
        this.radius = radius;
    }
    
    calculatePerimeter() {
        return 2 * Math.PI * this.radius;
    }
}

class Square extends Shape {
    constructor(side) {
        super("Square");
        this.side = side;
    }
    
    calculatePerimeter() {
        return 4 * this.side;
    }
}

class Rectangle extends Shape {
    constructor(length, width) {
        super("Rectangle");
        this.length = length;
        this.width = width;
    }
    
    calculatePerimeter() {
        return 2 * (this.length + this.width);
    }
}

// Polymorphism in action
const shapes = [
    new Circle(5),
    new Square(4),
    new Rectangle(3, 6)
];

shapes.forEach(shape => {
    console.log(`${shape.describe()}: Perimeter = ${shape.calculatePerimeter()}`);
});
Key Differences & Important Notes
Hoisting Behavior
javascript
// Function Declaration - HOISTED
const person1 = new Person("John", 25); // Works
console.log(person1.age);

function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Class Declaration - NOT HOISTED
const person2 = new Person2("Jane", 30); // ReferenceError
console.log(person2.age);

class Person2 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

Encapsulation with Private Fields (ES2022)
javascript
class BankAccount {
    #balance = 0; // Private field
    
    constructor(initialBalance) {
        this.#balance = initialBalance;
    }
    
    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
        }
    }
    
    getBalance() {
        return this.#balance;
    }
}

const account = new BankAccount(100);
// account.#balance; // SyntaxError - private field
console.log(account.getBalance()); // 100
Best Practices
Use ES6 classes for new projects - cleaner syntax

Understand prototypes for debugging and advanced scenarios

Follow naming conventions: PascalCase for classes

Use private fields for true encapsulation

Leverage polymorphism for flexible, maintainable code

Remember hoisting differences between functions and classes

Quick Reference
Prototypal Inheritance
javascript
function Parent() {}
function Child() {}
Child.prototype = Object.create(Parent.prototype);
Child.prototype.constructor = Child;
Class Inheritance
javascript
class Parent {}
class Child extends Parent {}
Key Methods
Object.create(proto)

Object.getPrototypeOf(obj)

super() in constructors

instanceof for type checking

