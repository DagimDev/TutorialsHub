// CompressionStream/DecompressionStream
// Definition:
// Compresses or decompresses streams of data.

// Deep Dive:

const compressedStream = new Blob([data]).stream()
  .pipeThrough(new CompressionStream('gzip'));

const decompressedStream = compressedStream
  .pipeThrough(new DecompressionStream('gzip'));
// Supported Formats:

// gzip

// deflate

// deflate-raw

// Use Cases:

// Client-side compression before upload

// Decompressing server responses

// Optimizing storage