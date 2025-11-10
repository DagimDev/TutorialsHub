1. What is Flexbox?

Flexbox (Flexible Box Layout) is a CSS layout module that makes it easier to design flexible responsive layout structures without using floats or positioning. It is ideal for one-dimensional layouts — a single row or column.

2. Terminology

Flex container — the parent element where display: flex (or inline-flex) is applied.

Flex items — the direct children of the flex container.

Main axis — the primary axis along which flex items are laid out (row or column).

Cross axis — axis perpendicular to the main axis.

3. Setting up a Flex Container
.container {
display: flex; /* or inline-flex */
flex-direction: row; /* row | row-reverse | column | column-reverse */
flex-wrap: nowrap; /* nowrap | wrap | wrap-reverse */
gap: 16px; /* spacing between items (modern, simpler than margins) */
}