// Initialize new Map instance

const userPreferences = new Map();

// Add basic key-value pairs to Map

userPreferences.set('theme', 'dark');
userPreferences.set('language', 'en');

// Implement Map value retrieval

function getUserTheme(preferences) {
  return preferences.get('theme') || 'light';
}

// Add Map size checking

if (userPreferences.size > 5) {
  console.log('Many preferences saved');
}

// Implement Map existence check

if (!userPreferences.has('notifications')) {
  userPreferences.set('notifications', 'enabled');
}

// Add Map entry deletion

userPreferences.delete('oldPreference');

// Implement Map clearing

function resetPreferences() {
  userPreferences.clear();
}

// Add Map iteration with forEach

userPreferences.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});

// Implement Map iteration with for...of

for (let [key, value] of userPreferences) {
  console.log(key, value);
}

// Add Map keys iteration

for (let key of userPreferences.keys()) {
  console.log('Key:', key);
}

// Implement Map values iteration

const allValues = [...userPreferences.values()];

// Add Map to array conversion

const preferencesArray = Array.from(userPreferences);

// Implement array to Map conversion

const settingsArray = [['theme', 'dark'], ['language', 'en']];
const settingsMap = new Map(settingsArray);