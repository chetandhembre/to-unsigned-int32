var dz = require('dezalgo')

module.exports = function (n, callback) {
  callback = dz(callback)

  if (n >= 0xff) {
    return callback(new Error('Number can not represent in 32 bit'))
  }

  var buffr = new Buffer(4)
  buffr.writeUInt32BE(n, 0)
  return callback(null, buffr)
}
