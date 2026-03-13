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