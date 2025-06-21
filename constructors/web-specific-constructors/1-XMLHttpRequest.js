// XMLHttpRequest (XHR)
// Definition:
// The legacy way to make HTTP requests in JavaScript.

// Detailed Explanation:

// javascript
const xhr = new XMLHttpRequest();
xhr.open('GET', '/api/data');
xhr.onload = function() {
  if (xhr.status === 200) {
    console.log(xhr.response);
  }
};
xhr.send();
// Events:

// load - Request completed

// error - Request failed

// progress - Data transfer in progress

// Properties:

// responseType - Set expected response type

// status - HTTP status code

// response - Response body

// Modern Alternative:

// Fetch API is preferred in modern code

// Use Cases:

// Legacy browser support

// Progress tracking for file uploads

// When fetch isn't available