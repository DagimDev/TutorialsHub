// Blob and File
// Definition:
// Represent raw data (Blob) and files (File extends Blob).

// Detailed Explanation:

// javascript
// // Blob from text
// const blob = new Blob(['Hello, world!'], { type: 'text/plain' });

// // File from Blob (usually comes from file input)
// const file = new File(['file content'], 'filename.txt', 
//   { type: 'text/plain', lastModified: Date.now() });
// Properties:

// size - Size in bytes

// type - MIME type

// name - File name (File only)

// lastModified - Timestamp (File only)

// Related APIs:

// FileReader - Reads blob/file contents

// URL.createObjectURL() - Creates URL for blob

// Use Cases:

// File uploads/downloads

// Working with binary data

// Generating files client-side