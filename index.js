var Jimp = require('jimp')
var x256 = require('x256')
var charm = require('charm')(process.stdout)

module.exports = ezPixel

function ezPixel (width, height) {
  width = width || 64
  height = height || width

  function map (imagePath, mapFunc, log) {
    Jimp.read(imagePath).then(img => {
      img.scaleToFit(width, height)
      img.scan(0, 0, img.bitmap.width, img.bitmap.height, (x, y, idx) => {
        var rgba = img.bitmap.data.slice(idx, idx + 4)
        if (log === true) {
          var ix = x256(rgba[0], rgba[1], rgba[2])
          charm.foreground(ix).write('8')
          if (x === width - 1) {
            charm.write('\n')
          }
        }
        mapFunc(x, y, rgba)
      })
    }).catch(console.error)
  }

  return { width, height, map }
}
