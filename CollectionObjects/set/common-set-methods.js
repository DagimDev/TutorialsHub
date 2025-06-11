// Common Set Methods
// 1. add(value)
// Adds a new element to the Set.

const letters = new Set()
letters.add('a')
letters.add('b')
letters.add('a') // double values will be ignored
console.log(letters)

// 2. has(value)
// Checks if a value exists in the Set (returns true or false).

const vowels = new Set(['a', 'e', 'i', 'o', 'u'])
console.log(typeof vowels)
console.log(vowels.has('a'))
console.log(vowels.has('x'))
console.log(vowels)

// 3. delete(value)
// Removes a value from the Set.

const numbers = new Set([1, 4, 5, 3, 2]);
numbers.delete(5);
console.log(numbers); 

// clear()
// Removes all elements from the Set.

const colors = new Set(['red', 'green', 'blue']);
colors.clear();
console.log(colors); // Set {}


// size
// Property that returns the number of elements in the Set.

const fruits = new Set(['apple', 'banana', 'orange']);
console.log(fruits.size); // 3