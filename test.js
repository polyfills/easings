
var assert = require('assert')
var parse = require('css-parse')

var easings = require('./')

describe('easings()', function () {
  it('should replace easings', function () {
    assert.equal(easings('transition: all var(ease-in-quad);'),
      'transition: all cubic-bezier(0.550, 0.085, 0.680, 0.530);')
  })
})

describe('easings.css', function () {
  it('should parse', function () {
    parse(easings.css)
  })
})
