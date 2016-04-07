/**
 * Module
 */

var isBoolean = require('@f/is-boolean')

/**
 * Expose stringIsBoolean
 */

module.exports = stringIsBoolean

/**
 * stringIsBoolean
 */

function stringIsBoolean (v) {
  if (isBoolean(v)) return true
  return v === 'true' || v === 'false'
}
