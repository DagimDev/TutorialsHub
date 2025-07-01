// break Statement
// Immediately terminates the entire loop
// Execution continues with the code after the loop
// Useful when you've found what you're looking for and don't need to continue iterating

for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break; // Exits the loop completely when i is 5
  }
  console.log(i); // Will log 0, 1, 2, 3, 4
}