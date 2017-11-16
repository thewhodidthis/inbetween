'use strict'

const { equal } = require('tapeless')
const { curb, map, lerp, dist, mag, deg, rad, norm, sq } = require('./')

const t1 = map(0, 0, 100, 0, 1)
const t2 = map(1, 0, 100, 0, 1)
const t3 = map(-1, 0, 100, 0, 1)

equal(t1, 0)
equal(t2, 0.01)
equal(t3, -1 * t2)

const t4 = norm(50, 0, 100)

equal(t4, 0.5)

const t5 = curb(-1, -1, 1)
const t6 = curb(2, 0, 1)
const t7 = curb(0.5, 0, 1)
const t8 = curb(-1)
const t9 = curb(0)

equal(t5, -1)
equal(t6, 1)
equal(t7, 0.5)
equal(t8, 0)
equal(t9, 0)

const t10 = sq(2)

equal(t10, Math.pow(2, 2))

const t11 = rad(90)

equal(t11, 0.5 * Math.PI)

const t12 = deg(0.5 * Math.PI)

equal(t12, 90)

const t13 = lerp(0.5, 0, 2)

equal(t13, 1)

const t14 = mag(3, 4)

equal(t14, 5)

const t15 = dist(0, 0, 0, 1)
const t16 = dist(0, 1, 0, 1)

equal(t15, 1)
equal(t16, 0)
