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