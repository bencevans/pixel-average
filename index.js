const jimp = require('jimp')

function pixelAverage (src, cb) {
  jimp.read(src, function (err, img) {
    if (err) {
      return cb(err)
    }
    var avgR = 0
    var avgG = 0
    var avgB = 0
    var avgA = 0
    img.scan(0, 0, img.bitmap.width, img.bitmap.height, function (x, y, idx) {
      avgR += this.bitmap.data[ idx + 0 ]
      avgG += this.bitmap.data[ idx + 1 ]
      avgB += this.bitmap.data[ idx + 2 ]
      avgA += this.bitmap.data[ idx + 3 ]
    })
    var pixels = img.bitmap.width * img.bitmap.height
    avgR = avgR / pixels
    avgG = avgG / pixels
    avgB = avgB / pixels
    avgA = avgA / pixels

    var brightness = Math.floor((avgR + avgG + avgB) / 3)
    var results = {
      red: avgR,
      green: avgG,
      blue: avgB,
      alpha: avgA,
      brightness: brightness
    }
    cb(null, results)
  })
}

module.exports = pixelAverage
