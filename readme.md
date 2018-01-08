> Essential math utils, based on [p5.Math.js](https://github.com/trembl/p5.Math.js)

### Setup
```sh
# Fetch latest from github
npm i thewhodidthis/arithmetics
```

### Usage
```js
import * as math from '@thewhodidthis/arithmetics'

const degrees = math.deg(Math.PI)
console.assert(degrees, 180)

const radians = math.rad(180)
console.assert(radians, Math.PI)

const stretch = math.mag(3, 4)
console.assert(stretch, 5)

const percent = math.map(0.5, 0, 1, 0, 100)
console.assert(percent, 50)
```
