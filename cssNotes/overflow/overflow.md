# overflow
- What it does: Controls what happens when content is too big for its container.

```css
.container {
  width: 200px;
  height: 100px;
  border: 1px solid black;
}
```

- overflow: visible;
- overflow: hidden;
- overflow: scroll;
- overflow: auto;
- overflow: clip;

# overflow-wrap
- What it does: Decides if long words can break in the middle to prevent overflow.

```css
.container {
  width: 150px;
  border: 1px solid black;
}
```
Scenario: A long word like "supercalifragilisticexpialidocious"

normal (default)

```css
overflow-wrap: normal;
```
Word won't break. It will overflow the container or cause horizontal scroll.

- break-word

```css
overflow-wrap: break-word;
```
Word will break at any point if needed. Long word wraps to next line.

- anywhere (newer)

```css
overflow-wrap: anywhere;
```
Similar to break-word but with different soft-wrap opportunities.

Real-world use: Preventing long URLs from breaking layout:

```css
.card-text {
  overflow-wrap: break-word;
}
```

# word-break
What it does: More aggressive control over line breaking than overflow-wrap.

```css
.container {
  width: 150px;
}
```
normal (default)

```css
word-break: normal;
```
Follows language-specific rules. English words typically don't break.

break-all

```css
word-break: break-all;
```
Any character can be a break point. Very aggressive:

text
Before: "HelloWorld"
After:  "HelloW" (break)
        "orld"
keep-all

```css
word-break: keep-all;
```
No breaks allowed. Primarily for Chinese/Japanese/Korean text.

break-word (deprecated)
Similar to overflow-wrap: break-word.

Comparison example:

/* Text: "Pneumonoultramicroscopicsilicovolcanoconiosis" */
```css
.aggressive {
  word-break: break-all;  /* Breaks anywhere, looks messy */
}

.gentle {
  overflow-wrap: break-word;  /* Breaks only at word boundaries if needed */
}
```

# white-space
- What it does: Controls how whitespace (spaces, tabs, newlines) is handled.
normal (default)
```css
white-space: normal;
```
Multiple spaces collapse to one
Text wraps normally
Line breaks are treated as spaces
nowrap
```css
white-space: nowrap;
```
No wrapping! All text on one line
Great for navigation bars or preventing text from wrapping
pre
```css
white-space: pre;
```
Preserves all whitespace (like <pre> tag)
No wrapping unless explicit <br> or newline
Text can overflow horizontally
pre-wrap
```css
white-space: pre-wrap;
```
Preserves whitespace
But wraps text when needed (best of both worlds)
pre-line
```css
white-space: pre-line;
```
Collapses spaces (like normal)
But preserves line breaks (like pre)
break-spaces (newer)
```css
white-space: break-spaces;
```
Like pre-wrap but more consistent wrapping
Preserves spaces at line ends

Visual example:
HTML: "Hello    World   \n   This is text"

normal:    "Hello World This is text"
nowrap:    "Hello    World   \n   This is text" (no wrap, maybe overflow)
pre:       "Hello    World   \n   This is text" (no wrap)
pre-wrap:  "Hello    World   \n   This is text" (wrapped if needed)

# text-overflow
- What it does: Shows a visual cue when text overflows. Requires:
overflow: hidden
white-space: nowrap
```css
.text {
  width: 100px;
  overflow: hidden;
  white-space: nowrap;
}
```
clip (default)

```css
text-overflow: clip;
```
Just cuts off text abruptly: "This is a long..."
ellipsis
```css
text-overflow: ellipsis;
```
Shows "...": "This is a lo..."
Custom string (limited support)
```css
text-overflow: "[...]";
```
Shows custom indicator (not widely supported)

Common pattern:
```css
.truncate {
  width: 200px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
```

# -webkit-line-clamp
- What it does: Limits text to specific number of lines (multi-line truncation). Requires a specific combination:

```css
.multiline-truncate {
  display: -webkit-box;           /* Required */
  -webkit-line-clamp: 3;          /* Show only 3 lines */
  -webkit-box-orient: vertical;   /* Required */
  overflow: hidden;
}
```
Why it's special:
It's the only native way to do multi-line text truncation
Originally WebKit-only (-webkit- prefix)
Now works in all major browsers (but keeps the prefix)