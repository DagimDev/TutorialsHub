// 5. RegExp Constructor
// Definition:
// Creates a regular expression object for matching text with a pattern.

// Detailed Explanation:

// javascript
// const regex1 = new RegExp('ab+c', 'i');  // With flags
// const regex2 = new RegExp(/ab+c/, 'i'); // From another regex
// Flags:

// i - Case insensitive

// g - Global match

// m - Multiline

// u - Unicode

// y - Sticky

// Methods:

// test() - Returns true/false for match

// exec() - Returns array of matches

// Properties:

// source - Pattern text

// flags - Active flags

// lastIndex - Position for next match

// Use Cases:

// Input validation

// String parsing and extraction

// Search functionality

// Text replacement