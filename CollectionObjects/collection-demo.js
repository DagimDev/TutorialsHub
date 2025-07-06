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

// 11: "Add ArrayBuffer for binary data"
const buffer = new ArrayBuffer(16);
const view = new Int32Array(buffer);
view[0] = 42;

// 12: "Create DataView for mixed-type buffers"
const dv = new DataView(buffer);
dv.setFloat32(4, Math.PI);

// 13: "Implement custom collection class"
class RecentItems {
  constructor(maxSize) {
    this.items = new Set();
    this.maxSize = maxSize;
  }
  add(item) {
    if (this.items.size >= this.maxSize) {
      const oldest = this.items.values().next().value;
      this.items.delete(oldest);
    }
    this.items.add(item);
  }
}

// 14: "Add collection utilities"
function mergeMaps(map1, map2) {
  return new Map([...map1, ...map2]);
}

// 15: "Implement LRU cache with Map"
class LRUCache {
  constructor(capacity) {
    this.cache = new Map();
    this.capacity = capacity;
  }
  get(key) {
    if (!this.cache.has(key)) return null;
    const value = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, value);
    return value;
  }
}

// 16: "Add collection validation"
function validateStringSet(set) {
  return [...set].every(item => typeof item === 'string');
}

// 17: "Implement observable Set"
class ObservableSet extends Set {
  constructor(changeCallback) {
    super();
    this.changeCallback = changeCallback;
  }
  add(value) {
    super.add(value);
    this.changeCallback('add', value);
    return this;
  }
}
