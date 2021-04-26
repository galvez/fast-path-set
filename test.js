'use strict'

const tap = require('tap')
const set = require('./index')

tap.test('should set deeply nested props', (t) => {
  t.plan(3)
  let obj
  obj = {}
  set(obj, 'a.b.c.d.e.f.g', 1)
  set(obj, 'a.b.x', 2)
  t.ok(obj.a.b.c.d.e.f.g === 1)
  t.ok(obj.a.b.x === 2)
  obj = {}
  set(obj, 'foobar.foobar', 1)
  set(obj, 'a', 1)
  set(obj, 'something.x.co', 1)
  set(obj, 'something.xo.x', 1)
  t.strictSame(obj, {
    foobar: { foobar: 1 },
    a: 1,
    something: { x: { co: 1 }, xo: { x: 1 } }
  })
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
