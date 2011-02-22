describe('module1', function() {
  beforeEach(function() {
    $.application.module1.initBehavior()
    setFixtures('<div><div class="foo"></div><div class="bar"></div></div>')
  })

  describe('when clicking foo', function() {
    beforeEach(function() {
      $('.foo').click()
    })

    it('updates bar', function() {
      expect($('.bar')).toHaveText('baz')
    })
  })
})
