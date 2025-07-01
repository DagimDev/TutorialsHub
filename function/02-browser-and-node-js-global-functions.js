// Encoding/Decoding
// encodeURI() / decodeURI()
// Encodes/decodes a full URI (preserves :/?&=+).

encodeURI("https://example.com/hello world") // "https://example.com/hello%20world"
encodeURIComponent() / decodeURIComponent()
// Encodes/decodes URI components (replaces more characters).

encodeURIComponent("Hello & Goodbye!") // "Hello%20%26%20Goodbye%21"

// 2. Evaluation & Execution
// eval() (Avoid! Dangerous)
// Executes a string as JS code.

eval("2 + 2"); // 4
Function() // (Safer than eval but still risky)
// Creates a function from a string.

const sum = new Function("a", "b", "return a + b");
sum(2, 3); // 5

// 3. Numeric Checks
isNaN() // (Checks if a value is NaN)

isNaN("Hello"); // true
isFinite() // (Checks if a value is a finite number)

isFinite(Infinity); // false

// 4. JSON Handling
JSON.parse()
// Converts a JSON string to an object.

JSON.parse('{"name": "Alice"}'); // { name: "Alice" }
JSON.stringify()
// Converts an object to a JSON string.

JSON.stringify({ name: "Alice" }); // '{"name":"Alice"}'