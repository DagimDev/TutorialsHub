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


4. Key Container Properties

flex-direction — direction of the main axis.

flex-wrap — controls wrapping of items when space is limited.

justify-content — alignment along the main axis (start, center, end, space-between, space-around, space-evenly).

align-items — alignment along the cross axis for all items (stretch, start, center, end, baseline).

align-content — alignment of lines along the cross axis (works when there are multiple lines due to wrapping).

gap — row and column gaps between items.

5. Key Item Properties

order — numeric value to change the visual order of items (default 0).

flex-grow — how much the item will grow relative to others when extra space exists.

flex-shrink — how much the item will shrink relative to others when space is lacking.

flex-basis — initial main size of the item (before growing/shrinking).

flex — shorthand: flex: [grow] [shrink] [basis] (e.g., flex: 1 1 0% or flex: 1).

align-self — override container's align-items for a single item.