// BroadcastChannel
// Definition:
// Enables communication between browsing contexts (tabs, windows, iframes).

const channel = new BroadcastChannel('app_channel');

// Send message
channel.postMessage({ type: 'notification', data: 'Hello' });

// Receive message
channel.onmessage = (event) => {
  console.log(event.data);
};

// Close when done
channel.close();
// Features:

// Same-origin only

// Simple pub/sub model

// No message persistence

// Use Cases:

// Synchronizing state across tabs

// Notifying other tabs of changes

// Shared resource coordination