(function(app, $) {
  function initFooBehavior() {
    $('.foo').live('click', function() {
      $('.bar').text('baz')
    })
  }

  function initBehavior() {
    initFooBehavior()
  }

  app.module1 = {
    initBehavior: initBehavior
  }
}(jQuery.application, jQuery))

$(document).ready(function() {
  $.application.module1.initBehavior()
})
