'use strict'

function set (obj, path, value) {
  const len = path.length
  let i = 0, prop = ''
  while (i < len) {
    const p = path[i]
    if (p == '.') {
      if ((prop.length == 9 || prop.length == 11) && (prop == '__proto__' || prop == 'constructor' || prop == 'prototype')) {
        break
      }
      const t = typeof obj[prop] 
      if (t.length == 6 && t == 'object') {
        obj = obj[prop]
      } else if (t.length == 9 && t == 'undefined') {
        obj = obj[prop] = {}
      } else {
        return
      }
      prop = ''
    } else {
      prop += p
    }
    i++
  }
  obj[prop] = value
}

module.exports = set
