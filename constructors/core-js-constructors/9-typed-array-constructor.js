// TypedArray Constructors
// Definition:
// Array-like views of binary data buffers.

// Types:
new Int8Array(length);         // 8-bit signed integers
new Uint8Array(length);        // 8-bit unsigned integers
new Uint8ClampedArray(length); // 8-bit unsigned (clamped)
new Int16Array(length);        // 16-bit signed
new Uint16Array(length);       // 16-bit unsigned
new Int32Array(length);        // 32-bit signed
new Uint32Array(length);       // 32-bit unsigned
new Float32Array(length);      // 32-bit float
new Float64Array(length);      // 64-bit float


const buffer = new ArrayBuffer(16); // 16-byte buffer
const int32View = new Int32Array(buffer); // 4 elements (4 bytes each)

// Manipulating binary data
// int32View[0] = 42;
// Key Features:

// Fixed-length

// Deal with raw binary data

// Used with WebGL, Canvas, WebAssembly

// Use Cases:

// Processing binary file formats

// WebGL buffers

// High-performance numerical computations