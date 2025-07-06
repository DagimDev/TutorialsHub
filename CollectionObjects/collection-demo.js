// collections-demo.js
// 1: "Initialize project with basic Array implementation"
const usersArray = ['Alice', 'Bob', 'Charlie'];

// 2: "Add array push/pop operations"
usersArray.push('Diana');
const lastUser = usersArray.pop();

// 3: "Implement array filtering"
const filteredUsers = usersArray.filter(user => user.startsWith('A'));

// 4: "Convert array to Set for uniqueness"
const uniqueUsers = new Set(usersArray);
uniqueUsers.add('Alice'); // Won't duplicate

// 5: "Add Set operations (union, intersection)"
const premiumUsers = new Set(['Alice', 'Eve']);
const commonUsers = new Set([...uniqueUsers].filter(x => premiumUsers.has(x)));

// 6: "Implement Map for user metadata"
const userMetadata = new Map();
userMetadata.set('Alice', { lastLogin: new Date(), tier: 'premium' });

// 7: "Add Map iteration methods"
for (const [name, data] of userMetadata) {
  console.log(`${name}: ${data.tier}`);
}

// 8: "Create WeakMap for private data"
const _privateData = new WeakMap();
class User {
  constructor(name) {
    _privateData.set(this, { name });
  }
  getName() {
    return _privateData.get(this).name;
  }
}

// 9: "Add WeakSet for object tracking"
const deletedUsers = new WeakSet();
function deleteUser(user) {
  deletedUsers.add(user);
}

// 10: "Implement typed arrays for analytics"
const hourlyVisits = new Uint32Array(24);
hourlyVisits[12] = 150; // Noon visits
