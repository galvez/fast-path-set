'use strict'

function set (obj, path, value) {
  const len = path.length
  let i = 0, prop = ''
  while (i < len) {
    if (path[i] === '.') {
      if (prop === '__proto__' || prop === 'constructor' || prop === 'prototype') {
        break
      }
      if (typeof obj[prop] === 'object') {
        obj = obj[prop]
      } else if (typeof obj[prop] === 'undefined') {
        obj = obj[prop] = {}
      } else {
        return
      }
      prop = ''
    } else {
      prop += path[i]
    }
    i++
  }
  obj[prop] = value
}

module.exports = set
