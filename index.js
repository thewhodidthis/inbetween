'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const TAU = 2 * Math.PI;

const RAD = 360 / TAU;
const DEG = TAU / 360;

// Convert radians to degrees
const deg = x => x * RAD;

// Convert degrees to radians
const rad = x => x * DEG;

// Translate values from one coordinate space to another
const map = (v, x1, x2, y1, y2) => y1 + ((y2 - y1) * (v - x1) / (x2 - x1));

// Self multiply
const sq = (x = 0) => x * x;

// Calculate hypotenuse
const mag = (x = 0, y = 0) => Math.sqrt(sq(x) + sq(y));

// Calculate distance between two points
const dist = (x1, y1, x2, y2) => mag(x2 - x1, y2 - y1);

// Linear interpolate
const lerp = (v, x1 = 0, x2 = 1) => x1 + ((x2 - x1) * v);

// Normalize values between 0 and 1
const norm = (v, x1 = 0, x2 = 1) => (v - x1) / (x2 - x1);

// Constrain values within range
const curb = (x, lo = 0, hi = 0) => (x < lo ? lo : (x > hi ? hi : x));

exports.TAU = TAU;
exports.deg = deg;
exports.rad = rad;
exports.map = map;
exports.sq = sq;
exports.mag = mag;
exports.dist = dist;
exports.lerp = lerp;
exports.norm = norm;
exports.curb = curb;
