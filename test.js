'use strict'

const { equal } = require('tapeless')
const { curb, lerp, dist, norm, cast, deg, rad } = require('./')

const t1 = cast(0, 0, 100, 0, 1)
const t2 = cast(1, 0, 100, 0, 1)
const t3 = cast(-1, 0, 100, 0, 1)

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

const t10 = rad(90)

equal(t10, 0.5 * Math.PI)

const t11 = deg(0.5 * Math.PI)

equal(t11, 90)

const t12 = lerp(0.5, 0, 2)

equal(t12, 1)

const t13 = dist(0, 0, 0, 1)
const t14 = dist(0, 1, 0, 1)

equal(t13, 1)
equal(t14, 0)
