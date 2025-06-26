// 1. Hello World
console.log("Hello, World!");

// 2. Add two numbers
const add = (a, b) => a + b;

// 3. Simple for loop
for (let i = 0; i < 5; i++) console.log(i);

// 4. Double array values using map
console.log([1, 2, 3].map(n => n * 2));

// 5. Create an object
const user = { name: "Alice", age: 25 };

// 6. Check if number is even
const isEven = n => n % 2 === 0;

// 7. Filter positive numbers
console.log([1, -2, 3, -4].filter(n => n > 0));

// 8. Arrow function square
const square = x => x * x;

// 9. Template literal
const greet = name => `Hello, ${name}!`;

// 10. Ternary condition
const status = age => age >= 18 ? "Adult" : "Minor";

// 11. Destructuring
const { name, age } = user;

// 12. Spread operator
const numbers = [1, 2, 3], more = [...numbers, 4];

// 13. Default parameter
const sayHi = (name = "Guest") => `Hi, ${name}`;

// 14. Optional chaining
const city = user?.address?.city;

// 15. Nullish coalescing
const username = null ?? "Anonymous";

// Multiple two numbers
const multiple = (a, b) => a * b;

// Divide two numbers
const divide = (a, b) => a / b;