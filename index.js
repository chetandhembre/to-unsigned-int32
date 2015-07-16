module.exports = toUInt32
module.exports.toUInt32Sync = toUInt32Sync

var dz = require('dezalgo')

function toUInt32 (n, callback) {
  callback = dz(callback)
  var buffr = new Buffer(4)
  buffr.writeUInt32BE(n, 0)
  return callback(null, buffr)
}

function toUInt32Sync (n) {
  var buffr = new Buffer(4)
  buffr.writeUInt32BE(n, 0)
  return buffr
}
