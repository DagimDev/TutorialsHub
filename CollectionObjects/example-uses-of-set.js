// Example Uses of Set
// Removing duplicates from an array:

const numbers = [1, 2, 2, 3, 4, 4, 5];
const uniqueNumbers = [...new Set(numbers)];
// [1, 2, 3, 4, 5]
console.log(numbers)
console.log(uniqueNumbers)

// Counting unique elements:

const words = ['apple', 'banana', 'apple', 'orange'];
const uniqueCount = new Set(words).size;
// console.log(uniqueCount.size)
console.log(uniqueCount)
// 3

// Tracking visited items:
const visited = new Set();
// Mark as visited
visited.add('page1');
// Check if visited
if (!visited.has('page2')) {
    // Do something
    console.log(true)
} else {
    console.log(false)
}


// 1. 🔗 Union

const a = new Set([1, 2]);
const b = new Set([2, 3]);
const union = new Set([...a, ...b]);
console.log(union); // Set { 1, 2, 3 }