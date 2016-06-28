# ez-pixel
[![npm][npm-image]][npm-url]
[![downloads][downloads-image]][downloads-url]
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

[npm-image]: https://img.shields.io/npm/v/ez-pixel.svg
[npm-url]: https://npmjs.org/package/ez-pixel
[downloads-image]: https://img.shields.io/npm/dm/ez-pixel.svg
[downloads-url]: https://npmjs.org/package/ez-pixel

#### Takes in an image resizes it and spits it out pixel by pixel
A utility function for sending pixel data to an rgb led matrix with an optional console preview.

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

## Usage

[![NPM](https://nodei.co/npm/ez-pixel.png)](https://www.npmjs.com/package/ez-pixel)

### `ezPixel([width, height])`
constructor with optional display `width` and `height` defaults to 64 x 64

### `ezPixel.map(imagePath, cb, log)`
* imports the image at `imagePath`
* resizes it to width and height given in the constructor
* runs the callback function passing it the pixel position and color `cb(x, y, rgba)`
* if `log` is true it will print the image to the console


## Example
```
var ezPixel = require('../index')(32)

ezPixel.map('demo/hat.png', (x, y, rgba) => {
  // do stuff with the pixel data
}, true)
```

## License

MIT, see [LICENSE.md](http://github.com/ezekeal/ez-pixel/blob/master/LICENSE.md) for details.
