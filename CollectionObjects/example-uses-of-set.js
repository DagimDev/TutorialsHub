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