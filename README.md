# Easings

[![NPM version][npm-image]][npm-url]
[![Build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Dependency Status][david-image]][david-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]
[![Gittip][gittip-image]][gittip-url]

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

### easings.map

Map of `<name>: <value>` for all the easings.

[npm-image]: https://img.shields.io/npm/v/easings.svg?style=flat-square
[npm-url]: https://npmjs.org/package/easings
[github-tag]: http://img.shields.io/github/tag/polyfills/easings.svg?style=flat-square
[github-url]: https://github.com/polyfills/easings/tags
[travis-image]: https://img.shields.io/travis/polyfills/easings.svg?style=flat-square
[travis-url]: https://travis-ci.org/polyfills/easings
[coveralls-image]: https://img.shields.io/coveralls/polyfills/easings.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/polyfills/easings?branch=master
[david-image]: http://img.shields.io/david/polyfills/easings.svg?style=flat-square
[david-url]: https://david-dm.org/polyfills/easings
[license-image]: http://img.shields.io/npm/l/easings.svg?style=flat-square
[license-url]: LICENSE
[downloads-image]: http://img.shields.io/npm/dm/easings.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/easings
[gittip-image]: https://img.shields.io/gittip/jonathanong.svg?style=flat-square
[gittip-url]: https://www.gittip.com/jonathanong/
