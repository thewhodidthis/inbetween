## about

Essential math utils to help with animating.

## setup

Find the [latest version](https://npm.im/arithmetics) on the _npm_ registry:

```sh
# Add to 'package.json'
npm install @thewhodidthis/arithmetics
```

## usage

Expect named exports for each function and a constant for `TAU` as for example,

```js
import * as math from '@thewhodidthis/arithmetics'

const degrees = math.deg(math.TAU)
console.assert(degrees, 360)

const radians = math.rad(180)
console.assert(radians, Math.PI)

const stretch = math.mag(3, 4)
console.assert(stretch, 5)

const percent = math.map(0.5, 0, 1, 0, 100)
console.assert(percent, 50)
```

## see also

- [p5.Math.js](https://github.com/trembl/p5.Math.js)
