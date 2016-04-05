var test = require('tape')

var Bear = require('./index.js')

test('should growl', function(assert) {
  var bear = new Bear()
  var result = bear.growl()
  assert.equal(result, 'The any bear says grrrr')
  assert.end()
})
