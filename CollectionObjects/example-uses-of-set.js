// Example Uses of Set
// Removing duplicates from an array:

const numbers = [1, 2, 2, 3, 4, 4, 5];
const uniqueNumbers = [...new Set(numbers)];
// [1, 2, 3, 4, 5]
console.log(numbers)
console.log(uniqueNumbers)