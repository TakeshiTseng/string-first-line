String.prototype.__defineGetter__('firstLine', function () {
  return this.split('\n')[0]
})

