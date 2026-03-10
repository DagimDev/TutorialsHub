# CSS Gradient
* A gradient is a smooth transition between two or more colors.

Instead of one color: Blue

You get a blend of colors: Blue → Purple → Pink

In CSS, gradients are treated as images, so they are usually used with:

- background
- background-image

Example:
```css
div {
  background: linear-gradient(red, blue);
}
```
# Types of Gradients in CSS

There are 3 main gradient types:

1️⃣ Linear Gradient
2️⃣ Radial Gradient
3️⃣ Conic Gradient

# Linear Gradient
A linear gradient blends colors in a straight line.

Example:
```css
background: linear-gradient(red, blue);
```
Result:

red
 ↓
blue
# Changing Gradient Direction

By default, gradients go top → bottom.

But you can change direction.

Left → Right
- background: linear-gradient(to right, red, blue);
Right → Left
- background: linear-gradient(to left, red, blue);
Top → Bottom
- background: linear-gradient(to bottom, red, blue);
Diagonal
- background: linear-gradient(to bottom right, red, blue);

# Using Angles
Instead of directions, you can use degrees.

Example:
- background: linear-gradient(45deg, red, blue);

Angle system:

- 0deg   → up
- 90deg  → right
- 180deg → down
- 270deg → left

Example:

- background: linear-gradient(90deg, red, blue);
Multiple Colors

Gradients can include more than two colors.

Example:

- background: linear-gradient(red, yellow, blue);

Result:
red → yellow → blue
Example:

- background: linear-gradient(to right, blue, purple, pink);

This is common in modern UI designs.

# Controlling Color Stops

You can control where colors appear.

Example:

- background: linear-gradient(red 20%, blue 80%);

Meaning:

- red until 20%
- blue until 80%

Example:

- background: linear-gradient(red 0%, yellow 50%, blue 100%);

# Radial Gradient
A radial gradient spreads colors from a center point outward.

Example:
- background: radial-gradient(red, blue);

Result:

- center = red
- edges = blue

Example:
- background: radial-gradient(circle, yellow, orange, red);

Common use:

- spotlight effects
- glowing backgrounds
- cards