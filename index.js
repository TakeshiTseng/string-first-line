require('string-lines')
String.prototype.__defineGetter__('firstLine', function () {
  return this.lines[0]
})

