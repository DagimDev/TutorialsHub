// Notification
// Definition:
// Creates desktop notifications.

// Deep Dive:

// Request permission first
Notification.requestPermission().then(permission => {
  if (permission === 'granted') {
    new Notification('New Message', {
      body: 'You have 3 new emails',
      icon: '/path/to/icon.png',
      vibrate: [200, 100, 200]
    });
  }
});
// Options:

// body - Notification content

// icon - Display icon

// badge - Small representative image

// vibrate - Vibration pattern

// data - Arbitrary data to associate

// Use Cases:

// Chat applications

// Email clients

// Calendar reminders