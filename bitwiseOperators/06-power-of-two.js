// 3. Check if a Number is a Power of 2
// javascript
function isPowerOfTwo(n) {
  return n > 0 && (n & (n - 1)) === 0;
}
console.log(isPowerOfTwo(8)); // true
console.log(isPowerOfTwo(6)); // false