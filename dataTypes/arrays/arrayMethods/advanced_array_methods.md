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
