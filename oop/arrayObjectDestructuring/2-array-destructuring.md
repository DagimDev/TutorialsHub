Array Destructuring:
▪ Assigning array items before ES6: Please look how repetitive it is to assign
each item of the array.
● Example:
         const students = ["Sisay", "Hunde", "Sara"];
         const firstStudent = students[0];
         const secondStudent = students[1];
         const thirdStudent = students[2];
         console.log(firstStudent); // prints Sisay
         console.log(secondStudent); // prints Hunde
         console.log(thirdStudent); // prints Sara
▪ Assigning array items with destructuring (after ES6): You use an array literal
    on the left-hand side of the assignment. Destructuring will take each variable on
    the array literal on the left-hand side and maps it to the same element at the same
    index in the array. Note: When destructuring arrays, the order that variables are
    declared is important. Look how the above array assigning is longer and the
    assigning with destructuring below has shorter and clearer code
● Example:
     const students = ["Sisay", "Hunde", "Sara"];
     const [firstStudent, secondStudent, thirdStudent] = students;
         console.log(firstStudent); // prints Sisay
         console.log(secondStudent); // prints Hunde
         console.log(thirdStudent); // prints Sara
         Note 1: If the number of variables passed to the destructuring array
literals are more than the elements in the array, then the variables which
aren’t mapped to any element in the array return undefined.
● Example:
     const students = ["Sisay", "Hunde"];
     const [firstStudent, secondStudent, thirdStudent] =
students;
     console.log(firstStudent); // prints Sisay
     console.log(secondStudent); // prints Hunde
     console.log(thirdStudent); // prints undefined
● Note 2: If the number of variables passed to the destructuring array
literals are lesser than the elements in the array, the elements without
variables to be mapped to are just left and no errors here.
● Example:
     const students = ["Sisay", "Hunde", "Sara"];
     const [firstStudent, secondStudent] = students;
     console.log(firstStudent); // prints Sisay
     console.log(secondStudent); // prints Hunde
     Note 3: When destructuring arrays, if you want only few of the array
elements, you cans simply leave out the one you want to leave but keep a
comma as a placeholder for that element.
● Example:
             const students = ["Sisay", "Hunde", "Sara"];
             const [firstStudent, , thirdStudent] = students;
             console.log(firstStudent); // prints Sisay
             console.log(thirdStudent); // prints Sara
             Destructuring an array retrurned from a function: Destructuring comes in
    handy when a function returns an array. Prior to ES6, there was no direct way to
    assign the elements of the returned array to multiple variables such as
    firstStudent, secondStudent and thirdStudent. Fortunately, starting from ES6, you
    can use the destructing assignment as follows:
     Example:
        function calculate(a, b) {
        const ad = a + b;
        const subt = a - b;
        const mult = a * b;
        const div = a / b;
        return [ad, subt, mult, div];
        }
● const [ad, subt, mult, div] = calculate(24, 8);
● console.log(calculate(24, 8)) // prints [32, 16, 192, 3]
● Example (rest syntax for array assignment using destructuring):
    Below the variables ad receives values of the first element of the returned
    array. And the args variable receives all the remaining arguments, which
    are the last three elements of the returned array.
    function calculate(a, b) {
        const ad = a + b;
        const subt = a - b;
        const mult = a * b;
        const div = a / b;
        return [ad, subt, mult, div];
        }
        const [ad, ...args] = calculate();
    console.log(calculate(24, 8)); // prints [32, 16, 192, 3]

Nested array destructuring: In the example below, because the third element of
     the returned array is another array, you need to use the nested array destructuring
     syntax to destructure it. The same for the array containing "Yellow", "Gray" elements. 
     Example:
     function getProfile() {
          return ["John", "Doe", ["Red", "Green", "Blue",
          ["Yellow","Gray"]]];
          }
          let [pro1, pro2, [pro3, pro4, pro5, [pro6, pro7]]] =
          getProfile();
          console.log(pro3); // prints red
     console.log(pro7); // prints Gray

Swapping values of variables using destructuring: The array destructuring
makes it easy to swap values of variables without using a temporary variable.
Example:
● Swapping variables using temporary variable: Swapping variables
     using a temporary variable is classic. As the name suggests, this
     approach requires an additional temporary variable.
           let alem = 10,
           balcha = 20;
           console.log(alem); // 10
           console.log(balcha); // 20
           let tempVar = alem;
           alem = balcha;
           balcha = tempVar;
           console.log(alem); // 20
           console.log(balcha); // 10
● Swapping variables values using destrcuturing: Knowing how to
     destructure an array, it's easy to use it for swapping variables. This
     approach let us write cleaner and shorter code.
          let alem = 10,
          balcha = 20;
          console.log(alem); // 10
          console.log(balcha); // 20
          [alem, balcha] = [balcha, alem];
          console.log(alem); // 20
          console.log(balcha); // 10
▪ Swapping values of an array with array destructuring:
● Swapping values of an array with temporary variable: Introduce a
     new variable and let it hold one of the two array values which are willing
     to swap. The array value which we let the temporary variable hold is
     reassigned by the second array value. Finally, (second variable) is given
     the value of temp which is a.
      Example:
      let array = [0, "first", 2, "third", 4];
          console.log(array[1]); // prints first
          console.log(array[2]); // prints 2
      // temporary variable to swap array elements
          let tempVar = array[1];
          array[1] = array[2];
          array[2] = tempVar;
          console.log(array[1]); // prints 2
          console.log(array[2]); // prints first
      Swapping values of an array with array destructuring:
          let array = [0, "first", 2, "third", 4];
          console.log(array[1]); // prints first
          console.log(array[2]); // prints 2
// destructure to swap 2nd indexed element with 3rd
     [array[1], array[2]] = [array[2], array[1]];
     console.log(array[1]); // prints 2
     console.log(array[2]); // prints first