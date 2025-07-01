// continue Statement
// Skips the current iteration only
// The loop continues with the next iteration
// Useful when you want to skip specific cases but keep processing others

for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    continue; // Skips even numbers
  }
  console.log(i); // Will log 1, 3, 5, 7, 9
}