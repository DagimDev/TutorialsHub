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

# The & Nesting Selector

The & symbol represents the parent selector and is useful for creating more complex relationships:

Pseudo-classes and Pseudo-elements

```css
.button {
  background: blue;

  &:hover {
    background: darkblue;
  }

  &::before {
    content: "→ ";
  }
}
```

# Element Combinations

```css
.card {
  border: 1px solid gray;

  /* Target elements with both classes */
  &.featured {
    border-color: gold;
  }

  /* Target elements with the class AND a specific element type */
  h2 & {
    font-size: 2em;
  }
}
```

# Chaining Selectors

```css
.nav {
  background: black;

  &-item {
    color: white; /* Creates .nav-item */
  }

  &-link {
    text-decoration: none; /* Creates .nav-link */
  }
}
```

# Media Queries

```css
.container {
  width: 100%;
  background-color: red;
  height: 100px;

  @media (min-width: 768px) {
    width: 750px;

    @media (min-width: 1024px) {
      width: 1000px;
    }
  }
}
```
# Multiple Levels
``` css
.article {
  padding: 1rem;
  
  .title {
    font-size: 2rem;
    
    a {
      color: blue;
      
      &:hover {
        color: darkblue;
      }
    }
  }
  
  .meta {
    color: gray;
    font-size: 0.9rem;
  }
}
```

# Combinators
```css
.list {
  > .item {
    border-bottom: 1px solid gray;
  }
  
  + .next {
    margin-top: 1rem;
  }
  
  ~ .siblings {
    display: none;
  }
}
```