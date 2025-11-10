1. What is Flexbox?

Flexbox (Flexible Box Layout) is a CSS layout module that makes it easier to design flexible responsive layout structures without using floats or positioning. It is ideal for one-dimensional layouts — a single row or column.

2. Terminology

Flex container — the parent element where display: flex (or inline-flex) is applied.

Flex items — the direct children of the flex container.

Main axis — the primary axis along which flex items are laid out (row or column).

Cross axis — axis perpendicular to the main axis.

3. Setting up a Flex Container
   .container {
   display: flex; /_ or inline-flex _/
   flex-direction: row; /_ row | row-reverse | column | column-reverse _/
   flex-wrap: nowrap; /_ nowrap | wrap | wrap-reverse _/
   gap: 16px; /_ spacing between items (modern, simpler than margins) _/
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

6. Common Patterns & Recipes
   Center content horizontally & vertically

.container {
display: flex;
justify-content: center; /_ horizontal _/
align-items: center; /_ vertical _/
}

Responsive horizontal menu with wrapping

.nav { display: flex; flex-wrap: wrap; gap: 12px; }
.nav-item { flex: 0 1 auto; }

Sticky footer (flex column layout)
html, body { height: 100%; }
.app { display: flex; flex-direction: column; min-height: 100vh; }
.main { flex: 1 0 auto; }
.footer { flex-shrink: 0; }

Two-column layout with flexible right column

.row { display: flex; gap: 20px; }
.sidebar { flex: 0 0 240px; }
.content { flex: 1 1 auto; }

7. Accessibility & Best Practices

Keep keyboard focus order in mind: order changes visual order but not DOM focus order — avoid confusing keyboard users.

Prefer gap instead of margin hacks for consistent spacing.

Use min-width/min-height to prevent content from shrinking too small.

Test on small screens and with zoom to ensure items wrap/readability.

Debugging Tips

Use browser devtools: toggle display:flex on an element to inspect axes and alignment helpers.

If alignment seems off, check for height/align-items/align-self conflicts.

Collapsing items? Check flex-basis, flex-shrink, and min-width/min-height.

9. Short Example (complete)
<div class="toolbar">
<div class="logo">Logo</div>
<nav class="menu">...</nav>
<div class="actions">Buttons</div>
</div>
.toolbar { display:flex; align-items:center; justify-content:space-between; gap:12px; padding:8px; }
.logo { flex: 0 0 auto; }
.menu { flex: 1 1 auto; }
.actions { display:flex; gap:8px; }
