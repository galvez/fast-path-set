'use strict'

function set (obj, path, value) {
  const len = path.length
  let i = 0, prop = '', parent
  while (i < len) {
    if (path[i] === '.') {
      if (prop in obj) {
        obj = obj[prop]
        prop = ''
      } else {
        parent = obj
        obj = obj[prop] = {}
        prop = ''
      }
    } else {
      prop += path[i]
    }
    i++
  }
  obj[prop] = value
}

module.exports = set
