push()
// ➤ What it does:
// Adds one or more elements to the end of an array.

// ➤ Syntax:

// array.push(element1, element2, ...);
// ➤ Returns:
// The new length of the array.

// ➤ Mutates original array? ✅ Yes
// ➤ Example:

let colors = ['red', 'green'];
colors.push('blue');

console.log(colors); // ['red', 'green', 'blue']

pop()
// ➤ What it does:
// Removes the last element from an array.

// ➤ Syntax:

array.pop();
// ➤ Returns:
// The removed element.

// ➤ Mutates original array? ✅ Yes
// ➤ Example:

let colorsPop = ['red', 'green', 'blue'];
let last = colors.pop();

console.log(last);   // 'blue'
console.log(colorsPop); // ['red', 'green']