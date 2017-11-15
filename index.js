var asc = require('ascjs')
var Transform = require('stream').Transform

var containsModules = /\bimport\b|\bexport\b/

module.exports = function ascify (file, opts) {
  var src = ''
  return Transform({
    write: function (chunk, enc, cb) {
      src += chunk
      cb()
    },
    flush: function (cb) {
      if (containsModules.test(src)) {
        this.push(asc(src))
      } else {
        this.push(src)
      }
      cb()
    }
  })
}
