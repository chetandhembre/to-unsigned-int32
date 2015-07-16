var dz = require('dezalgo')

module.exports = function (n, callback) {
  callback = dz(callback)

  var buffr = new Buffer(4)
  try {
    buffr.writeUInt32BE(n, 0)
  } catch(e) {
    return callback(e)
  }

  return callback(null, buffr)
}
