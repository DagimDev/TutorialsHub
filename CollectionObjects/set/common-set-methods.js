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