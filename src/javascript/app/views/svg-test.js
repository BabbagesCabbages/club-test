var BaseView = require('./BaseView');
var template = require('templates/svg-test.hbs');
var slide_number = 4;

module.exports = BaseView.extend({

    className: 'container-fluid',

    template: template,

    ui: {},

    events: {
      "click .correct": "handleClick"
    },

    initialize: function() {
      var screen2View = new BaseView();
      app.rootView.contentMain.show(screen2View);
      $('#slide-number').html(slide_number);
    },
    handleClick: function() {
      $('path.circle').fadeIn('fast');
    },
    onBeforeRender: function() {},

    onRender: function() {},

    onBeforeShow: function() {},

    onShow: function() {},

    onBeforeDestroy: function() {},

    onDestroy: function() {}

});
