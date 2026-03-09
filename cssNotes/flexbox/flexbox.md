# 1. What is Flexbox in CSS?

* Flexbox (Flexible Box Layout) is a CSS layout system designed to arrange elements in one direction — either row or column.

It helps you:

- Align items
- Distribute space
- Control layout easily
- Build responsive designs

Before Flexbox, developers used:

float
inline-block
complicated positioning

Flexbox made layout much easier and more powerful.

# 2. Two Important Parts of Flexbox
Flexbox always has two things:

1️⃣ Flex Container
The parent element.
```css
.container {
  display: flex;
}
```
2️⃣ Flex Items

The children inside the container.
```html
<div class="container">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```
When you add:
```css
display: flex;
```
The children automatically become flex items.

# Main Axis vs Cross Axis

Flexbox works using two directions.

- Main Axis   → primary direction
- Cross Axis  → perpendicular direction
Default direction
- Main axis:  left → right
- Cross axis: top → bottom

Example:

- [1] [2] [3]

If direction changes:

- [1]
- [2]
- [3]

Now the main axis becomes vertical.

# 3. Turning an Element into Flex
```css
.container {
  display: flex;
}
```
Immediately:

- children become flex items
- layout becomes flex layout
- items appear in a row

Example:
```html
<div class="container">
  <div>A</div>
  <div>B</div>
  <div>C</div>
</div>
```
Without flex:

A
B
C

With flex:

A B C


# Flex Container Properties

These control how items are arranged.

# flex-direction

Controls the main axis direction.
```css
.container {
  flex-direction: row;
}
```
Options:

row             → left to right (default)
row-reverse     → right to left
column          → top to bottom
column-reverse  → bottom to top

Example:
```css
.container {
  display: flex;
  flex-direction: column;
}
```
Result:

A
B
C


# justify-content

Controls alignment along the main axis.
```css
.container {
  justify-content: center;
}
```
Options:

- flex-start
- flex-end
- center
- space-between
- space-around
- space-evenly

Example:

space-between

[A       B       C]

Example:

center

    [A B C]


# align-items

Controls alignment on the cross axis.
```css
.container {
  align-items: center;
}
```
Example:

+-------------------+
|                   |
|     A B C         |
|                   |
+-------------------+

Options:

- stretch (default)
- flex-start
- flex-end
- center
- baseline

# flex-wrap

By default flex tries to fit items in one line.

[A B C D E F]

If items overflow you can wrap them.
```css
.container {
  flex-wrap: wrap;
}
```
Result:

[A B C]
[D E F]

Options:

nowrap (default)
wrap
wrap-reverse

# gap (Modern way)

Adds space between items.
```css
.container {
  gap: 20px;
}
```
Instead of:

- margin-right
- margin-left


# Flex Item Properties

These control individual items.

# flex-grow

Controls how much an item grows.
```css
.item {
  flex-grow: 1;
}
```
Example:

Item1  Item2  Item3
 1      1      1

They grow equally.

Example:
```css
.item1 { flex-grow: 1 }
.item2 { flex-grow: 2 }
```
Result:

Item2 becomes twice bigger than Item1

# flex-shrink

Controls how items shrink when space is small.
```css
.item {
  flex-shrink: 1;
}
```
If:

- container width = 300px
- items total = 500px

Flexbox shrinks them.

# flex-basis

Defines initial size of an item.
```css
.item {
  flex-basis: 200px;
}
```
Meaning:

start size = 200px

Then grow/shrink can apply.