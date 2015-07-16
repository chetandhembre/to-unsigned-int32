var tap = require('tap')
var toUInt32 = require('../')

tap.test('should return corrent buffer for value number', function (t) {
  toUInt32(0xC, function (err, buffr) {
    t.notOk(err, 'err should not present')
    t.type(buffr, Buffer)
    t.equal(buffr.length, 4)
    t.equal(buffr.readUInt32BE(0), 0xC)
    t.end()
  })
})

tap.test('toUInt32Sync: should return correct buffer for value number', function (t) {
  var buffr = toUInt32.toUInt32Sync(0xC)
  t.equal(buffr.readUInt32BE(0), 0xC)
  t.end()
})
