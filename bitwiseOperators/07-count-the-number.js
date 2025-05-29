// Write a function to count the number of 1 bits in a number.

javascript
function countSetBits(n) {
  let count = 0;
  while (n) {
    count += n & 1;
    n >>= 1;
  }
  return count;
}
console.log(countSetBits(5)); // 2 (0101)