Object Destructuring: The object destructuring is a useful JavaScript feature to extract
    properties from objects and bind them to variables. In short, you use object destructuring
    to extract some properties of an object
▪ Syntax of object Destructuring:
     const { identifier , identifier2} = expression;

        ▪ Identifier: It is the name of the property to access
        ● Expression: It represents the object. 
            
            Note: After the destructuring, the variable identifier contains the property value.

▪ Extracting of object properties before ES6: Looking at the example below,
    such a way to access properties and assign them to variables requires boilerplate
    code. By writing var studentName = students.name, you have to mention the
    name binding 2 times, and the same for studentAge. That's where the object
    destructuring syntax is useful: you can read a property and assign its value to a
    variable without duplicating the property name.

             const students = {
                name: "Haile",
                age: 22,
             };

         var studentName = students.name;
         var studentAge = students.age;
         console.log(studentName); // prints Haile
         console.log(studentAge); // prints 22

▪ Extracting of object properties using destructuring (after ES6): In the below
    example, the let { theName, theAge } = students is an object destructuring
    assignment. This statement defines the variables theName and theAge, then
    assigns to them the values of properties students.theName and students.theAge
    correspondingly. It visible that the object destructuring is handier than the literal
    object way because neither the property names nor the object variable is
    duplicated. Look at the example below:

            let students = {
                theName: "Haile",
                theAge: 22,
            };
            let { theName, theAge } = students;
            console.log(theName); // prints Haile
            console.log(theAge); // prints 22
                Note: If the destructured object doesn't have the property specified in the
                      destructuring assignment, then the variable is assigned with undefined.

        ● Example:
                 let students = {
                    theName: "Haile",
                    theAge: 22,
                 };
                 let { theName, theGrade } = students;
                 console.log(theName); // prints Haile
                 console.log(theGrade); // prints undefined

▪ Using object destructuring to rename property identifiers: Using the above
    example, let us assume you want to create the “theName” property name to
    studentName. To do so, look at the example below.
        ▪ Example:

                 let students = {
                    theName: "Haile",
                    theAge: 22,
                 };

                 let { theName: studentName, theAge } = students;
                 console.log(studentName); // prints Haile
                 console.log(theAge); // prints 22
                 console.log(theName); // prints theName is not defined

Destructuring for nested objects: Often objects can be nested in other objects.
    In other words, some properties of an object can contain objects.
     Syntax:
        const { nestedObjectProp: { identifier } } = expression;
            let students = {
                theName: "Haile",
                theAge: 22,
                theGenderAndHeight: {
                    theGender: "Male",
                    theHeight: 133,
                },
            };

        let {theName,theAge,theGenderAndHeight: { theGender, theHeight }} = students;
            console.log(theName); // prints Haile
            console.log(theAge); // prints 22
            console.log(theGender); // prints male

