const assert = require('assert');
const stringFirstLine = require('.')

const str = `This
contains
multiple
lines.`

const firstLine = str.firstLine
const expect = 'This'

assert.equal(firstLine, expect)


