'use strict'

const tap = require('tap')
const set = require('./index')

tap.test('should set deeply nested props', (t) => {
  t.plan(2)
  const obj = {}
  set(obj, 'a.b.c.d.e.f.g', 1)
  set(obj, 'a.b.x', 2)
  t.ok(obj.a.b.c.d.e.f.g === 1)
  t.ok(obj.a.b.x === 2)
})

tap.test('shouldn\'t try to overwrite non-object values', (t) => {
  t.plan(1)
  const withNonObj = {
    a: {
      b: 2
    }
  }
  set(withNonObj, 'a.b.c', 2)
  t.ok(withNonObj.a.b === 2)
})
