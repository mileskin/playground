function c() {
  console.log('c')
}

var d = (function() {
  function e() {
    return {foo: 'bar'}
  }
  return {e: e}
}())
