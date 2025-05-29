// 2. Swap Two Numbers Without a Temporary Variable
// javascript
let a = 5, b = 10;
a = a ^ b;
b = a ^ b;
a = a ^ b;
console.log(a, b); // 10, 5