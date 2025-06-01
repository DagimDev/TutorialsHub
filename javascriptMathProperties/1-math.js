// JavaScript Math Properties and Methods 
// Math Properties (Constants)
javascript
Math.PI         // 3.14159... - Circle calculations, animations
Math.E          // 2.718... - Exponential growth, natural logarithms
Math.LN2        // 0.693... - Logarithmic calculations
Math.LN10       // 2.302... - Logarithmic calculations
Math.LOG2E      // 1.442... - Logarithm base conversions
Math.LOG10E     // 0.434... - Logarithm base conversions
Math.SQRT2      // 1.414... - Diagonal calculations
Math.SQRT1_2    // 0.707... - Normalization factors

// Essential Math Methods
// Basic Operations
javascript
Math.abs(x)     // Absolute value (distance calculations, input validation)
Math.sign(x)    // Returns sign as 1, -1 or 0 (direction detection)

// Rounding
Math.round(x)   // Standard rounding (financial calculations)
Math.floor(x)   // Round down (pagination, array partitioning)
Math.ceil(x)    // Round up (pagination, resource allocation)
Math.trunc(x)   // Remove decimals (ES6, faster than floor for positives)


Min/Max
Math.max(a, b, c)//...)  // Find highest value (data analysis, comparisons)
Math.min(a, b, c)//...)  // Find lowest value (data analysis, comparisons)

// Powers and Roots
Math.pow(x, y)  // x to power y (compound interest, growth calculations)
Math.sqrt(x)    // Square root (distance calculations, physics)
Math.cbrt(x)    // Cube root (volume calculations) - ES6
Math.exp(x)     // e^x (exponential growth)
Math.expm1(x)   // e^x - 1 (more accurate for small x) - ES6

// Logarithms
Math.log(x)     // Natural logarithm (data scaling)
Math.log10(x)   // Base 10 logarithm (decibel calculations) - ES6
Math.log2(x)    // Base 2 logarithm (information theory) - ES6
Math.log1p(x)   // ln(1 + x) (more accurate for small x) - ES6

Trigonometry
Math.sin(x)     // Sine (oscillations, waves, circular motion)
Math.cos(x)     // Cosine (oscillations, waves, circular motion)
Math.tan(x)     // Tangent (slopes, angles)
Math.asin(x)    // Arcsine (angle from ratio)
Math.acos(x)    // Arccosine (angle from ratio)
Math.atan(x)    // Arctangent (angle from slope)
Math.atan2(y,x) // Arctangent of y/x (proper angle in all quadrants)

// Random Numbers
Math.random()   // Random float 0-1 (games, simulations, sampling)
// Practical example for random integers:
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


// To pick a random value from an array in JavaScript, you can use this one-liner:


const arr = [10, 20, 30, 40, 50];
const randomValue = arr[Math.floor(Math.random() * arr.length)];
console.log(randomValue);
// 🔍 How it Works:
// Math.random() → returns a random number between 0 (inclusive) and 1 (exclusive), e.g., 0.567.

// Multiply by arr.length → scales the random number to the array's size.

// Math.floor() → converts the decimal into a whole number (index).

// Use that index to access the array.

// 🔁 Example Run:
 arr = ['apple', 'banana', 'cherry'], //it might randomly pick:

// Possible outputs:
'apple'   // or
'banana'  // or
'cherry'

// Hyperbolic Functions (less common but useful)

Math.sinh(x)    // Hyperbolic sine - ES6
Math.cosh(x)    // Hyperbolic cosine - ES6
Math.tanh(x)    // Hyperbolic tangent - ES6


// Practical Applications
// Financial Calculations: round(), pow() for compound interest

// Games/Animations: random(), trigonometric functions for movement

// Data Visualization: max(), min() for scaling data

// Geometry: PI, sqrt() for distances and areas

// Machine Learning: exp(), log() for activation functions

// Security: random() for generating tokens (combined with crypto APIs)

// UI Development: floor(), ceil() for responsive layouts

// Remaining Math Properties (Constants)
// Math.LN2
// Natural logarithm of 2 (~0.693).
// Used in logarithmic scaling or advanced mathematical computations.

// Math.LN10
// Natural logarithm of 10 (~2.302).
// Useful in log-based calculations (e.g., decibels, pH scales).

// Math.LOG2E
// Base-2 logarithm of Euler's number (~1.442).
// Used in binary logarithm conversions.

// Math.LOG10E
// Base-10 logarithm of Euler's number (~0.434).
// Helpful for log10 transformations.

// Math.SQRT1_2
// Square root of ½ (~0.707).
// Used in normalization (e.g., signal processing).

Math.clz32(x) (ES6)
// Counts leading zero bits in a 32-bit integer.
// Useful in low-level bit manipulation (e.g., hashing algorithms).

Math.clz32(1); // 31 (binary: 000...0001 → 31 leading zeros)

Math.fround(x) (ES6)
// Rounds to the nearest 32-bit float.
// Used in precision-critical applications (e.g., WebGL, WASM).

Math.hypot(/*[x[, y[, ...]]]*/) (ES6)
// Returns the square root of the sum of squares (Euclidean distance).
// Handles overflow/underflow better than manual sqrt(x² + y²).
Math.hypot(3, 4); // 5 (3² + 4² = 25 → √25 = 5)

Math.imul(x, y) (ES6)
// Performs C-like 32-bit integer multiplication.
// Critical for fast integer math (e.g., emulators, cryptography).
Math.imul(0xffffffff, 5); // -5 (overflow behavior)