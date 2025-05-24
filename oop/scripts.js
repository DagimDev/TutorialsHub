console.log("Object oriented programming in JavaScript");

// Object oriented programming in JavaScript

// Example to describe a Car using the object-oriented data model
    // ▪ Object: Let’sa assume we have a “car” object
    // ▪ Properties of the object: model, make, color, doors
    // ▪ Methods/Actions: Car Starts (startCar), Car Accelerates (accelerate), Car
// Decelerates (decelerate)
    // ▪ Events: enter a> startCar, up arrow > accelerate, down arrow > decelerate
    // • Note: At this point, the computer would have some understanding of what
// a car is. It still doesn't know everything about a car. For example, it doesn't
// know it has windows or tire 

// Object literal syntax: var object-name = {key1: value1, key2: value2};
// o Example:
let person = {
firstName: 'Abebe',
lastName: 'Kebede',
someFunction: function () {
return this.firstName;
}
};
// o FirstName, lastName and someFunction are the properties of
// person object
// o Abebe, Kebede and function () {return this.firstName;} are
// property values


// Accessing object properties: Here the property_name is just a string or
// symbol. So, it can be any string, including '1foo', '!bar!', or even ' ' (a space)
// o The dot (.) notation
// ▪ Syntax: objectName.propertyName
// ▪ Example:
let person1 = {
firstName: 'Abebe',
lastName: 'Kebede',
someFunction: function () {
return this.firstName;
}
};
console.log(person.firstName);
// o Bracket notation (array-like notation) ([ ]):
// ▪ Syntax: objectName['propertyName'];
// ▪ Example: console.log(person['firstName']); //prints
// Abebe in the console

// Accessing object methods ()
// ▪ Syntax: objectName.methodName()
// ▪ Example: console.log (person. SomeFunction())
// ▪ Note: If you access a method without the () parentheses,
// it will return the function definition.
// • console.log (person. SomeFunction) will print the
// SomeFunction function, not the Abebe value

// Accessing Nested Objects: An object can be a property of another
// object. It is called a nested object.
var person2 = {
firstName: "James",
lastName: "Bond",
address: {
city: "London",
country:"UK"
}
};
person.address.city; // returns "London"