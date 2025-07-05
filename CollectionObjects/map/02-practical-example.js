// Initialize new Map instance

const userPreferences = new Map();

// Add basic key-value pairs to Map

userPreferences.set('theme', 'dark');
userPreferences.set('language', 'en');

// Implement Map value retrieval

function getUserTheme(preferences) {
  return preferences.get('theme') || 'light';
}