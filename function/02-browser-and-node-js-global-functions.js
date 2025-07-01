// Encoding/Decoding
// encodeURI() / decodeURI()
// Encodes/decodes a full URI (preserves :/?&=+).

encodeURI("https://example.com/hello world") // "https://example.com/hello%20world"
encodeURIComponent() / decodeURIComponent()
// Encodes/decodes URI components (replaces more characters).

encodeURIComponent("Hello & Goodbye!") // "Hello%20%26%20Goodbye%21"