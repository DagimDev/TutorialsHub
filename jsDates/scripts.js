//1.
new Date(); //– Creating a Date Object
// Explanation: Creates a new Date object representing the current date and time.
// Example:

const now = new Date();
console.log(now); // Output: Current date & time (e.g., "2023-10-05T12:34:56.789Z")

Date.parse(); //– Parsing a Date String
// Explanation: Parses a date string and returns the number of milliseconds since January 1, 1970.
// Example:

const ms = Date.parse("2023-10-05");
console.log(ms); // Output: 1696464000000

getFullYear(); //– Get the Year
// Explanation: Returns the year (4 digits) of a date.
// Example:

const date = new Date();
console.log(date.getFullYear()); // Output: 2023 (or current year)

getMonth(); //– Get the Month (0-11)
// Explanation: Returns the month (0 = January, 11 = December).
// Example:

console.log(new Date().getMonth()); // Output: 9 (for October)

getDate(); // – Get the Day of the Month (1-31)
// Explanation: Returns the day of the month.
// Example:

console.log(new Date().getDate()); // Output: 5 (or current day)


getDay(); //– Get the Day of the Week (0-6)
// Explanation: Returns the day of the week (0 = Sunday, 6 = Saturday).
// Example:

console.log(new Date().getDay()); // Output: 4 (for Thursday)


getHours() // – Get the Hour (0-23)
// Explanation: Returns the hour of the day.
// Example:

console.log(new Date().getHours()); // Output: Current hour (e.g., 14)


getMinutes()// – Get the Minutes (0-59)
// Explanation: Returns the minutes.
// Example:

console.log(new Date().getMinutes()); // Output: Current minutes (e.g., 30)

getSeconds() //– Get the Seconds (0-59)
// Explanation: Returns the seconds.
// Example:

console.log(new Date().getSeconds()); // Output: Current seconds (e.g., 45)


getMilliseconds() // – Get Milliseconds (0-999)
// Explanation: Returns the milliseconds.
// Example:

console.log(new Date().getMilliseconds()); // Output: Current ms (e.g., 123)