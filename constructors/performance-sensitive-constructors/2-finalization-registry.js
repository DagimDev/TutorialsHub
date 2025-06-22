// FinalizationRegistry
// Definition:
// Lets you request a callback when an object is garbage collected.


const registry = new FinalizationRegistry((heldValue) => {
  console.log(`Cleaned up: ${heldValue}`);
});

const obj = {};
registry.register(obj, "some value");

// // Later, when obj is GC'd: "Cleaned up: some value"
// Important Notes:

// Callback timing is unpredictable

// Should not be used for critical cleanup

// Mainly for diagnostics and monitoring

// Use Cases:

// Resource leak detection

// Debugging memory issues

// Monitoring object lifecycle