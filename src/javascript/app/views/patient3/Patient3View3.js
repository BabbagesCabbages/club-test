var BaseView = require('../BaseView');
var template = require('templates/patient3/patient3view3.hbs');

module.exports = BaseView.extend({

    className: 'container-fluid',

    template: template,
    ui: {},
    events: {
        'click .continue': 'scrollTop',
        'click .size-1': 'handleClick4',
        'click .size-2': 'handleClick3',
        'click .size-3': 'handleClick2',
        'click .size-4': 'handleClick1'
    },

    initialize: function() {
    },
    onBeforeRender: function() {},

    onRender: function() {
    },

    onBeforeShow: function() {},

    onShow: function() {},

    onBeforeDestroy: function() {},

    handleClick1: function() {
      $('.size-1-active').fadeIn('fast');
      $('.size-2-active').fadeOut('fast');
      $('.size-3-active').fadeOut('fast');
      $('.size-4-active').fadeOut('fast');
    },

    handleClick2: function() {
      $('.size-2-active').fadeIn('fast');
      $('.size-1-active').fadeOut('fast');
      $('.size-3-active').fadeOut('fast');
      $('.size-4-active').fadeOut('fast');
    },
    handleClick3: function() {
      $('.size-3-active').fadeIn('fast');
      $('.size-1-active').fadeOut('fast');
      $('.size-2-active').fadeOut('fast');
      $('.size-4-active').fadeOut('fast');
    },
    handleClick4: function() {
      $('.size-4-active').fadeIn('fast');
      $('.size-1-active').fadeOut('fast');
      $('.size-2-active').fadeOut('fast');
      $('.size-3-active').fadeOut('fast');
    },

    scrollTop: function(){
    	$('body').animate({ scrollTop: '0' }, 400);
    },

    onDestroy: function() {
      $('#myModal').modal('hide');
      $('body').removeClass('modal-open');
      $('.modal-backdrop').remove();
    }

});
