// How Set Handles Objects
// ✅ Key Rule:
// In JavaScript, objects are compared by reference, not by value.

// This means two objects with the same content are not considered equal in a Set.

// 🔸 Example: Adding Objects to a Set

const set = new Set();

const obj1 = { id: 1 };
const obj2 = { id: 1 }; // same structure as obj1

set.add(obj1);
set.add(obj2); // different reference!

console.log(set.size); // 2
// Even though obj1 and obj2 look the same, they're stored as two different entries because they are different object references.

