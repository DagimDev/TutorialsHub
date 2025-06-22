// ArrayBuffer and SharedArrayBuffer
// Definition:
// Represent fixed-length raw binary data buffers.

// Regular ArrayBuffer (not shared between threads)
const buffer = new ArrayBuffer(16); // 16 bytes

// SharedArrayBuffer (can be shared with Web Workers)
const sharedBuffer = new SharedArrayBuffer(1024);

// Using with TypedArray
const int32View = new Int32Array(sharedBuffer);
// Key Differences:

// SharedArrayBuffer can be transferred between threads

// Requires specific HTTP headers for security

// Used with Atomics for thread-safe operations

// Use Cases:

// WebAssembly memory

// High-performance computing

// Shared memory multithreading