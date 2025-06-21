// 3. Function Constructor
// Definition:
// Creates a new Function object that executes the code passed as strings.

// Detailed Explanation:

// javascript
const sum = new Function('a', 'b', 'return a + b');
sum(2, 3);  // 5
// Prototype Chain: func → Function.prototype → Object.prototype → null

// Properties:

// name - Function name

// length - Number of formal parameters

// prototype - Used when function is constructor

// Security Implications:

// Similar to eval() - can execute arbitrary code

// Creates functions in global scope

// Use Cases:

// Extremely rare in modern code

// Sometimes used in code generators or templating engines

// Dynamic function creation from server responses (dangerous)