export const TAU = 2 * Math.PI

const RAD = 360 / TAU
const DEG = TAU / 360

// Convert radians to degrees
export const deg = x => x * RAD

// Convert degrees to radians
export const rad = x => x * DEG

// Translate values from one coordinate space to another
export const map = (v, x1, x2, y1, y2) => y1 + ((y2 - y1) * (v - x1) / (x2 - x1))

// Self multiply
export const sq = (x = 0) => x * x

// Calculate hypotenuse
export const mag = (x = 0, y = 0) => Math.sqrt(sq(x) + sq(y))

// Calculate distance between two points
export const dist = (x1, y1, x2, y2) => mag(x2 - x1, y2 - y1)

// Linear interpolate
export const lerp = (v, x1 = 0, x2 = 1) => x1 + ((x2 - x1) * v)

// Normalize values between 0 and 1
export const norm = (v, x1 = 0, x2 = 1) => (v - x1) / (x2 - x1)

// Constrain values within range
export const curb = (x, lo = 0, hi = 0) => (x < lo ? lo : (x > hi ? hi : x))

// Get random integer within bounds, hi exclusive, lo inclusive
export const rand = (hi = 0, lo = 0) => Math.floor((Math.random() * (hi - lo))) + lo
