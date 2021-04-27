'use strict'

function set (obj, path, value) {
  if (obj == null) {
    throw new TypeError('obj is null or undefined')
  }
  const len = path.length
  let i = 0, l = 0, prop = ''
  while (i < len) {
    if (path[i] === '.') {
      prop = path.slice(l, i)
      switch (prop.length) {
        case 9:
          if (prop === '__proto__' || prop === 'prototype') {
            return
          }
          break
        case 11:
          if (prop === 'constructor') {
            return
          }
          break
      }
      switch (typeof obj[prop]) {
        case 'object':
          obj = obj[prop]
          break
        case 'undefined':
          obj = obj[prop] = {}
          break
        default:
          return
      }
      l = ++i
      continue
    }
    i++
  }
  obj[path.slice(l, i)] = value
}

module.exports = set
