'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var TAU = 2 * Math.PI;

var RAD = 360 / TAU;
var DEG = TAU / 360;

// Convert radians to degrees
var deg = function (x) { return x * RAD; };

// Convert degrees to radians
var rad = function (x) { return x * DEG; };

// Linear interpolator
var lerp = function (v, x1, x2) {
	if ( x1 === void 0 ) x1 = 0;
	if ( x2 === void 0 ) x2 = 1;

	return x1 + ((x2 - x1) * v);
};

// Normalize values between 0 and 1
var norm = function (v, x1, x2) {
	if ( x1 === void 0 ) x1 = 0;
	if ( x2 === void 0 ) x2 = 1;

	return (v - x1) / (x2 - x1);
};

// Translate values from one coordinate space to another
var cast = function (v, x1, x2, y1, y2) { return lerp(norm(v, x1, x2), y1, y2); };

// Constrain values within range
var curb = function (x, lo, hi) {
	if ( lo === void 0 ) lo = 0;
	if ( hi === void 0 ) hi = 0;

	return (x < lo ? lo : (x > hi ? hi : x));
};

// Get random integer in range, hi exclusive, lo inclusive
var rand = function (hi, lo) {
	if ( hi === void 0 ) hi = 0;
	if ( lo === void 0 ) lo = 0;

	return Math.floor((Math.random() * (hi - lo))) + lo;
};

// Calculate distance between two points
var dist = function (x1, y1, x2, y2) { return Math.hypot(x2 - x1, y2 - y1); };

exports.TAU = TAU;
exports.deg = deg;
exports.rad = rad;
exports.lerp = lerp;
exports.norm = norm;
exports.cast = cast;
exports.curb = curb;
exports.rand = rand;
exports.dist = dist;

