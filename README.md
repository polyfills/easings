# Easings

[rework-ease](https://github.com/reworkcss/rework-plugin-ease),
except without the rework dependency and it is intended to be used as CSS variables.
For more information on easings, go to http://easings.net.

## API

```js
var easings = require('easings')
```

### css = easings(css)

Replace all the `var(<ease>)` variable references with the actual easing function.
Note that this is a really simple regexp-replace.

```js
easings('transition: var(ease-in-back);')
// => 'transition: cubic-bezier(0.600, -0.280, 0.735, 0.045);'
```

### easings.css

Since this library uses the CSS Variables specifications,
`easings.css` is simply the `:root` object you would use to define all these easings.
Thus, you'll eventually be able to do just append `easings.css` to your build and do `var(ease-in-cubic)`.
This is also available as `/index.css`.

```css
@import 'https://nlz.io/github/reworkcss/easings/1/index.css';

body {
  transition: all var(ease-in-back);
}
```
