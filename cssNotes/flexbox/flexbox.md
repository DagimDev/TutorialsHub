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