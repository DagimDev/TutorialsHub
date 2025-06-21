// 4. Date Constructor
// Definition:
// Creates JavaScript Date instances representing a single moment in time.

// Detailed Explanation:

// const now = new Date();
const specific = new Date(2023, 0, 1); // Jan 1, 2023 (months are 0-indexed)
const fromString = new Date('2023-01-01T00:00:00Z');
// Components:

// Year, month (0-11), day (1-31)

// Hours (0-23), minutes (0-59), seconds (0-59), milliseconds (0-999)

// Important Methods:

// getFullYear(), getMonth(), getDate()

// getHours(), getMinutes(), getSeconds()

// getTime() - Milliseconds since epoch

// toISOString() - ISO 8601 format string

// Timezones:

// All Date objects are stored as UTC

// Methods exist in local and UTC variants (getUTCHours())

// Use Cases:
// Any application dealing with dates/times

// Scheduling functionality

// Date arithmetic and comparisons