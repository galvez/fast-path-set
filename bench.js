/* eslint-disable no-console */

const { performance } = require('perf_hooks')

if (process.argv.includes('lodash.set')) {
  const set = require('lodash.set')
  const s = performance.now()
  for (let i = 0; i < 100**4; i++) {
    const obj = {}
    set(obj, 'a.b.c.d', 1)
    set(obj, 'd.c', 2)
  }
  const e = performance.now()
  console.log(e - s)
}

if (process.argv.includes('dset')) {
  const { dset: set } = require('dset')
  const s = performance.now()
  for (let i = 0; i < 100**4; i++) {
    const obj = {}
    set(obj, 'a.b.c.d', 1)
    set(obj, 'd.c', 2)
  }
  const e = performance.now()
  console.log(e - s)
}

if (process.argv.includes('fast-path-set')) {
  const set = require('./index')
  const s = performance.now()
  for (let i = 0; i < 100**4; i++) {
    const obj = {}
    set(obj, 'a.b.c.d', 1)
    set(obj, 'd.c', 2)
  }
  const e = performance.now()
  console.log(e - s)
}
