// 6. Error Constructors
// Definition:
// Creates an error object representing an error condition.

// Detailed Explanation:

// javascript
throw new Error('Something went wrong');
throw new TypeError('Expected a number');
// Built-in Types:

// Error - Generic error

// SyntaxError - Parsing errors

// TypeError - Wrong type

// ReferenceError - Undefined variable

// RangeError - Out of range value

// Properties:

// name - Error type

// message - Human-readable description

// stack - Call stack trace (non-standard but widely supported)

// Custom Errors:

class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ValidationError';
  }
}
// Use Cases:

// Exception handling

// Input validation

// API error responses

// Debugging