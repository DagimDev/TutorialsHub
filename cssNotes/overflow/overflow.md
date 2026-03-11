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