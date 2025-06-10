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


getTime() //– Get Timestamp (Milliseconds since 1970)
// Explanation: Returns the number of milliseconds since January 1, 1970.
// Example:

console.log(new Date().getTime()); // Output: 1696500000000 (example)


setFullYear() // – Set the Year
// Explanation: Sets the year of a date object.
// Example:

const date2 = new Date();
date2.setFullYear(2025);
console.log(date2.getFullYear()); // Output: 2025


setMonth() // – Set the Month (0-11)
// Explanation: Sets the month (0-11).
// Example:

const date12 = new Date();
date12.setMonth(11); // December
console.log(date12.getMonth()); // Output: 11


setDate() // – Set the Day of the Month
// Explanation: Sets the day of the month (1-31).
// Example:

const date14 = new Date();
date14.setDate(15);
console.log(date14.getDate()); // Output: 15


setHours() //– Set the Hour
// Explanation: Sets the hour (0-23).
// Example:

const date13 = new Date();
date13.setHours(12);
console.log(date13.getHours()); // Output: 12


setMinutes() // – Set the Minutes
// Explanation: Sets the minutes (0-59).
// Example:

const date16 = new Date();
date16.setMinutes(45);
console.log(date16.getMinutes()); // Output: 45


setSeconds() // – Set the Seconds
// Explanation: Sets the seconds (0-59).
// Example:

const dates = new Date();
dates.setSeconds(30);
console.log(dates.getSeconds()); // Output: 30

setMilliseconds() // – Set Milliseconds
// Explanation: Sets milliseconds (0-999).
// Example:

const date27 = new Date();
date27.setMilliseconds(500);
console.log(date27.getMilliseconds()); // Output: 500

toDateString() // – Date as Readable String
// Explanation: Converts the date portion to a human-readable string.
// Example:

console.log(new Date().toDateString()); // Output: "Thu Oct 05 2023"