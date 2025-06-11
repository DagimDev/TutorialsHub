// Common Set Methods
// 1. add(value)
// Adds a new element to the Set.

const letters = new Set()
letters.add('a')
letters.add('b')
letters.add('a') // double values will be ignored
console.log(letters)