/* eslint-disable no-console */

const { performance } = require('perf_hooks')

if (process.argv.includes('lodash.set')) {
  const set = require('lodash.set')
  const s = performance.now()
  for (let i = 0; i < 30 ** 4; i++) {
    const obj = {}
    set(obj, 'aaaa.bbbbb.ccccc.ddddd', 1)
    set(obj, 'ddddd.ccccc', 2)
  }
  const e = performance.now()
  console.log('lodash.set         ', e - s)
}

if (process.argv.includes('dset')) {
  const { dset: set } = require('dset')
  const s = performance.now()
  for (let i = 0; i < 30 ** 4; i++) {
    const obj = {}
    set(obj, 'aaaa.bbbbb.ccccc.ddddd', 1)
    set(obj, 'ddddd.ccccc', 2)
  }
  const e = performance.now()
  console.log('dset               ', e - s)
}

if (process.argv.includes('fast-path-set')) {
  const set = require('./index')
  const s = performance.now()
  for (let i = 0; i < 30 ** 4; i++) {
    const obj = {}
    set(obj, 'aaaa.bbbbb.ccccc.ddddd', 1)
    set(obj, 'ddddd.ccccc', 2)
  }
  const e = performance.now()
  console.log('fast-path-set      ', e - s)
}
