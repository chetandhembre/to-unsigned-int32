var tap = require('tap')
var toUInt32 = require('../')

tap.test('should return error when number can not fit in 32 bit', function (t) {
  toUInt32(0xfff, function (err, buff) {
    t.type(err, Error)
    t.equal(err.message, 'Number can not represent in 32 bit', 'handling error for number can not fit in 32 bit')
    t.notOk(buff, 'buff should be null')
    t.end()
  })
})

tap.test('should return corrent buffer for value number', function (t) {
  toUInt32(0xC, function (err, buffr) {
    t.notOk(err, 'err should not present')
    t.type(buffr, Buffer)
    t.equal(buffr.length, 4)
    t.equal(buffr.readUInt32BE(0), 0xC)
    t.end()
  })
})
