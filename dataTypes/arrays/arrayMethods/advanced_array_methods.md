## groupBy (ES2024)

- Groups array elements by a key derived from each element.

```js
const people = [
  { name: "John", age: 20 },
  { name: "Jane", age: 20 },
  { name: "Bob", age: 30 },
];

const grouped = Object.groupBy(people, (person) => person.age);
// Result: { 20: [{name:"John",age:20}, {name:"Jane",age:20}], 30: [{name:"Bob",age:30}] }
```

# with (ES2023)

- Returns a new array with one element replaced (non-mutating).

```js
const arr = [1, 2, 3, 4];
const newArr = arr.with(2, 99); // Replace index 2 with 99
console.log(newArr); // [1, 2, 99, 4]
console.log(arr); // [1, 2, 3, 4] (original unchanged)
```
