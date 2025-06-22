// WebSocket Constructor
// Definition:
// Creates a WebSocket connection to a server.

const socket = new WebSocket('wss://echo.websocket.org');

socket.onopen = () => {
  socket.send('Hello!');
};

socket.onmessage = (event) => {
  console.log('Received: ' + event.data);
};

socket.onclose = () => {
  console.log('Connection closed');
};
// Events:

// open - Connection established

// message - Data received

// error - Connection error

// close - Connection closed

// Methods:

// send() - Transmits data

// close() - Closes connection

// Protocols:

// Can specify subprotocols in constructor

// Use Cases:

// Real-time applications

// Chat systems

// Live data feeds

// Multiplayer games