const test = require('tape')
const path = require('path')
const pxAvg = require('./')

test('imgBrightness - path', function (t) {
  t.plan(18)

  pxAvg(path.resolve(__dirname, 'imgs/black.jpg'), function (err, avgs) {
    t.ifError(err)
    t.equal(avgs.red, 0)
    t.equal(avgs.green, 0)
    t.equal(avgs.blue, 0)
    t.equal(avgs.alpha, 255)
    t.equal(avgs.brightness, 0)
  })

  pxAvg(path.resolve(__dirname, 'imgs/white.jpg'), function (err, avgs) {
    t.ifError(err)
    t.equal(avgs.red, 255)
    t.equal(avgs.green, 255)
    t.equal(avgs.blue, 255)
    t.equal(avgs.alpha, 255)
    t.equal(avgs.brightness, 255)
  })

  pxAvg(path.resolve(__dirname, 'imgs/purple.jpg'), function (err, avgs) {
    t.ifError(err)
    t.equal(avgs.red, 131)
    t.equal(avgs.green, 43)
    t.equal(avgs.blue, 195)
    t.equal(avgs.alpha, 255)
    t.equal(avgs.brightness, 123)
  })
})
