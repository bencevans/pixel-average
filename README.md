# pixel-average

> Average red, green, blue, alpha & brightness of an image

* Javascript only (no worries about bindings)
* Accepts PNG, JPG or BMP from Buffer, Path or URL

## Install

    $ npm install --save pixel-average

## Usage

```js
const pixelAverage = require('pixel-average')
const source = './img.jpg'

// source accepts any format Jimp reads (BMP, JPG, PNG):
//   String: URL or Path to image
//   Buffer
pixelAverage(source, function (err, averages) {
  console.log(`
    red: ${averages.red}
    green: ${averages.green}
    blue: ${averages.blue}
    alpha: ${averages.alpha}
    brightness: ${averages.brightness}
  `)
})
```

## API

### pixelAverage(source: buffer(png/jpg/bmp)/string(url)/string(path), callback: function)

## Related

* [Jimp](https://github.com/oliver-moran/jimp) - image processing library for Node written entirely in JavaScript

## Licence

MIT &copy; [Ben Evans](https://bencevans.io)
