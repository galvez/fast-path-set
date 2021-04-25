'use strict'

function set (obj, path, value) {
  const len = path.length
  let i = 0, prop = ''
  while (i < len) {
    if (path[i] === '.') {
      if (prop === '__proto__' || prop === 'constructor' || prop === 'prototype') {
        break
      }
      if (prop in obj) {
        obj = obj[prop]
      } else {
        obj = obj[prop] = {}
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
