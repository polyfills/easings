
var easings = replace.map = require('./easings.json')

var re = new RegExp('\\bvar\\(\\s*(' + Object.keys(easings).join('|') + ')\\s*\\)', 'g')

module.exports = replace

function replace(string) {
  return string.replace(re, function (match, name) {
    return easings[name]
  })
}

// optional string to append
replace.css = ':root {\n'
  + Object.keys(easings).map(function (name) {
    return '  --' + name + ': ' + easings[name] + ';'
  }).join('\n')
  + '\n}\n'
