'use strict'

const assert = require('assert')
const { lerp } = require('./')

// Adapted from
// http://mrl.nyu.edu/~perlin/noise/
const data = [
  151, 160, 137, 91, 90, 15, 131, 13, 201, 95, 96, 53, 194, 233, 7, 225,
  140, 36, 103, 30, 69, 142, 8, 99, 37, 240, 21, 10, 23, 190, 6, 148,
  247, 120, 234, 75, 0, 26, 197, 62, 94, 252, 219, 203, 117, 35, 11, 32,
  57, 177, 33, 88, 237, 149, 56, 87, 174, 20, 125, 136, 171, 168, 68, 175,
  74, 165, 71, 134, 139, 48, 27, 166, 77, 146, 158, 231, 83, 111, 229, 122,
  60, 211, 133, 230, 220, 105, 92, 41, 55, 46, 245, 40, 244, 102, 143, 54,
  65, 25, 63, 161, 1, 216, 80, 73, 209, 76, 132, 187, 208, 89, 18, 169,
  200, 196, 135, 130, 116, 188, 159, 86, 164, 100, 109, 198, 173, 186, 3, 64,
  52, 217, 226, 250, 124, 123, 5, 202, 38, 147, 118, 126, 255, 82, 85, 212,
  207, 206, 59, 227, 47, 16, 58, 17, 182, 189, 28, 42, 223, 183, 170, 213,
  119, 248, 152, 2, 44, 154, 163, 70, 221, 153, 101, 155, 167, 43, 172, 9,
  129, 22, 39, 253, 19, 98, 108, 110, 79, 113, 224, 232, 178, 185, 112, 104,
  218, 246, 97, 228, 251, 34, 242, 193, 238, 210, 144, 12, 191, 179, 162, 241,
  81, 51, 145, 235, 249, 14, 239, 107, 49, 192, 214, 31, 181, 199, 106, 157,
  184, 84, 204, 176, 115, 121, 50, 45, 127, 4, 150, 254, 138, 236, 205, 93,
  222, 114, 67, 29, 24, 72, 243, 141, 128, 195, 78, 66, 215, 61, 156, 180
]

const feed = [...data, ...data]

// Cubic smooth step
// https://www.google.com/search?q=t+*+t+*+t+*+((t+*+((t+*+6)+-+15))+%2B+10)
const fade = (t = 0) => t * t * t * ((t * ((t * 6) - 15)) + 10)

// Convert low 4 bits of hash code into 12 gradient directions
const grad = (hash, x, y, z) => {
  const h = hash & 15

  const u = h < 8 ? x : y
  const v = h < 4 ? y : h === 12 || h === 14 ? x : z

  return ((h & 1) === 0 ? u : -u) + ((h & 2) === 0 ? v : -v)
}

// Be improved
const noiz = (d1, d2, d3) => {
  const x = Math.floor(d1)
  const y = Math.floor(d2)
  const z = Math.floor(d3)

  // Find relative x, y, z of point in cube
  const dx = d1 - x
  const dy = d2 - y
  const dz = d3 - z

  // Compute fade curves for each of dx, dy, dz
  const u = fade(dx)
  const v = fade(dy)
  const w = fade(dz)

  // Find unit cube that contains point
  const cube = { x: x & 255, y: y & 255, z: z & 255 }

  // Hash co-ordinates of the 8 cube corners
  // and add blended results from 8 corners of cube
  const a = feed[cube.x] + cube.y
  const b = feed[cube.x + 1] + cube.y

  const aa = feed[a] + cube.z
  const ab = feed[a + 1] + cube.z
  const ba = feed[b] + cube.z
  const bb = feed[b + 1] + cube.z

  /* eslint indent: 0 */
  return lerp(w, lerp(v, lerp(u, grad(feed[aa], dx, dy, dz),
                                 grad(feed[ba], dx - 1, dy, dz)),
                         lerp(u, grad(feed[ab], dx, dy - 1, dz),
                                 grad(feed[bb], dx - 1, dy - 1, dz))),
                 lerp(v, lerp(u, grad(feed[aa + 1], dx, dy, dz - 1),
                                 grad(feed[ba + 1], dx - 1, dy, dz - 1)),
                         lerp(u, grad(feed[ab + 1], dx, dy - 1, dz - 1),
                                 grad(feed[bb + 1], dx - 1, dy - 1, dz - 1))))
}

assert.equal(noiz(3.14, 42, 7), 0.13691995878400012)
