# Media Queries in CSS (Responsive Design)
![medai query](Media-Queries.webp)

Media Queries allow CSS to apply different styles depending on the device or screen size.
They are the core technology behind responsive websites.

Example problem:
A layout looks good on a laptop, but on a phone everything becomes too small.
Media queries solve this by saying:

- “If the screen width is small, use different CSS.”

1. Basic Media Query Syntax

The general structure is:
```css
@media (condition) {
  CSS rules here
}

/* Example: */

@media (max-width: 768px) {
  body {
    background: lightblue;
  }
}
```
Meaning:

- If screen width ≤ 768px
- apply this CSS

2. The Most Common Condition: Width

Developers usually check the screen width.
- max-width
Applies styles below a size.
```css
@media (max-width: 600px) {
  body {
    background: yellow;
  }
}
```
Meaning:
- 0px → 600px

Phones usually fall in this range.
- min-width

Applies styles above a size.
```css
@media (min-width: 600px) {
  body {
    background: green;
  }
}
```
Meaning:
- 600px and larger