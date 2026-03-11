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