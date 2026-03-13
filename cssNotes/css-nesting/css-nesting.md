# CSS Nesting 
CSS nesting is a feature that allows you to write more organized and readable styles by nesting related CSS rules inside one another. It's similar to how nesting works in Sass/SCSS, but now it's native to CSS!

Basic Syntax
```css
.parent {
  color: blue;
  
  .child {
    color: red;
  }
}
/* This compiles to: */

.parent {
  color: blue;
}

.parent .child {
  color: red;
}
```