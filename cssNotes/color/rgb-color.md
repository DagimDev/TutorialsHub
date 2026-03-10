# RGB Colors
RGB means:

- Red
- Green
- Blue

Each value ranges from:

- 0 → 255

Structure:

- rgb(red, green, blue)

Example:

- color: rgb(255, 0, 0);

That equals red.

Examples:

- rgb(255,0,0) → red
- rgb(0,255,0) → green
- rgb(0,0,255) → blue

Example:
```css
body {
  background-color: rgb(240, 240, 240);
}
```

# RGBA (Adds Transparency)

- RGBA adds alpha (opacity).

Structure:

- rgba(red, green, blue, alpha)

Alpha range:

- 0 → completely transparent
- 1 → fully visible

Example:

- background-color: rgba(0,0,0,0.5);

This creates semi-transparent black.

Example use (very common in UI):
```css
.modal {
  background-color: rgba(0,0,0,0.7);
}
```
Used for dark overlays.