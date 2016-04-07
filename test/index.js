/**
 * Imports
 */

var stringIsBoolean = require('..')
var test = require('tape')

/**
 * Tests
 */

test('should return true for boolean looking strings or booleans', function (t) {
  t.ok(stringIsBoolean('true'))
  t.ok(stringIsBoolean('false'))
  t.ok(stringIsBoolean(true))
  t.end()
})

test('should return false for non boolean strings', function (t) {
  t.notOk(stringIsBoolean(''))
  t.notOk(stringIsBoolean(0))
  t.end()
})
