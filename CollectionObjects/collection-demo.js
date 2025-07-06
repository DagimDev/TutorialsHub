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
