function isEven(n) {
  return (n & 1) === 0;
}
console.log(isEven(4)); // true
console.log(isEven(5)); // false