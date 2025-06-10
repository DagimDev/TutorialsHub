//1.
 new Date() //– Creating a Date Object
// Explanation: Creates a new Date object representing the current date and time.
// Example:

const now = new Date();
console.log(now); // Output: Current date & time (e.g., "2023-10-05T12:34:56.789Z")

Date.parse() //– Parsing a Date String
// Explanation: Parses a date string and returns the number of milliseconds since January 1, 1970.
// Example:

const ms = Date.parse("2023-10-05");
console.log(ms); // Output: 1696464000000

getFullYear() //– Get the Year
// Explanation: Returns the year (4 digits) of a date.
// Example:

const date = new Date();
console.log(date.getFullYear()); // Output: 2023 (or current year)