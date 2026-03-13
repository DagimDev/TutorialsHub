# CSS Pseudo-elements
Pseudo-elements are keywords that allow you to style specific parts of an element. They're called "pseudo" because they target parts of the document that don't exist in the HTML tree.

# What's the Difference?
- Pseudo-classes (:hover, :first-child) target an element's state
- Pseudo-elements (::before, ::first-line) target specific parts of an element

Syntax
```css
/* Modern syntax (double colon) - RECOMMENDED */
selector::pseudo-element {
  property: value;
}

/* Old syntax (single colon) - still works for backward compatibility */
selector:pseudo-element {
  property: value;
}
```

# Common Pseudo-elements
# 1. ::before and ::after
Create virtual elements inside an element, before or after its content.

```css
.element::before {
  content: "★ ";
  color: gold;
}

.element::after {
  content: " ✓";
  color: green;
}
```

# 2. ::first-line
Styles the first line of a block-level element.

```css
p::first-line {
  font-weight: bold;
  font-size: 1.2em;
  color: navy;
}
```

# 3. ::first-letter
Styles the first letter of a block-level element.

```css
p::first-letter {
  font-size: 3em;
  font-weight: bold;
  color: crimson;
  float: left;
  margin-right: 5px;
  line-height: 1;
}
```
# 4. ::selection
Styles the portion of text selected by the user.
```css
::selection {
  background: hotpink;
  color: white;
}

/* Specific element selection */
.card p::selection {
  background: gold;
  color: black;
}
```

# 5. ::placeholder
Styles placeholder text in form inputs.

```css
input::placeholder {
  color: #999;
  font-style: italic;
  opacity: 1; /* Firefox reduces opacity by default */
}

/* Different browsers need different prefixes */
input::-webkit-input-placeholder { /* Chrome/Opera/Safari */
  color: #999;
}

input::-moz-placeholder { /* Firefox 19+ */
  color: #999;
  opacity: 1;
}
```

# 6. ::marker
Styles the marker of list items.

```css
li::marker {
  color: blue;
  font-weight: bold;
  font-size: 1.2em;
}

/* Custom bullet points */
ul li::marker {
  content: "▶ ";
  color: orange;
}
```

# 7. ::backdrop
Styles the backdrop area of fullscreen or dialog elements.

```css
dialog::backdrop {
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(3px);
}

video::backdrop {
  background: black;
}
```