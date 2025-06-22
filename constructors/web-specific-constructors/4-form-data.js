// FormData
// Definition:
// Provides a way to construct key/value pairs representing form fields.

// Detailed Explanation:

// javascript
const formData = new FormData();
formData.append('username', 'alice');
formData.append('avatar', fileInput.files[0]);

// // Or from existing form
// const formData = new FormData(document.querySelector('form'));
// Methods:

// append() - Adds new value

// delete() - Removes value

// get()/getAll() - Gets value(s)

// has() - Checks if key exists

// set() - Sets value (replaces existing)

// Special Features:

// Can handle file uploads

// Properly encodes multipart form data

// Use Cases:

// File uploads

// Programmatic form submission
// When working with FormData-compatible APIs