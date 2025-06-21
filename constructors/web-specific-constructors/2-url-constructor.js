// URL Constructor
// Definition:
// Provides utilities for URL manipulation and parsing.

// Detailed Explanation:

// javascript
const url = new URL('https://example.com:8080/path?query=1#hash');
console.log(url.hostname); // 'example.com'
console.log(url.pathname); // '/path'
console.log(url.search);   // '?query=1'
// Components:

// protocol, hostname, port, pathname, search, hash

// URLSearchParams:

// Accessible via url.searchParams

// Provides methods to work with query string

// Methods:

// toString() - Returns full URL string

// toJSON() - Same as toString()

// Use Cases:

// Parsing URLs from strings

// Constructing URLs safely

// Working with query parameters