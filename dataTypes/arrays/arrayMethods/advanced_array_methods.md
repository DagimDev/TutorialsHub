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
# fill
- Changes all elements in an array to a static value.

```js
const arr = [1, 2, 3, 4];
arr.fill(0, 1, 3);  // Fill with 0 from index 1 to 3 (exclusive)
console.log(arr); // [1, 0, 0, 4]
```

# toReversed (ES2023)
- Returns a new array with elements reversed (non-mutating).

```js
const arr = [1, 2, 3];
const reversed = arr.toReversed();
console.log(reversed); // [3, 2, 1]
console.log(arr);      // [1, 2, 3] (original unchanged)
```