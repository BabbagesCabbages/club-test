var BaseView = require('../BaseView');
var template = require('templates/patient3/patient3view2.hbs');

module.exports = BaseView.extend({

    className: 'container-fluid',

    template: template,
    ui: {},
    events: {
        'click .continue': 'scrollTop',
        "click .correct": "handleClick",
    },

    initialize: function() {

    },
    onBeforeRender: function() {},

    onRender: function() {
    },

    onBeforeShow: function() {},

    onShow: function() {},

    onBeforeDestroy: function() {},

    handleClick: function() {
      $('path.circle').fadeIn('fast');
    },
    scrollTop: function(){
    	$('body').animate({ scrollTop: '0' }, 400);  $('body,html').scrollTop(0);
    },
    nextPage: function() {

    },

    onDestroy: function() {
      $('#myModal').modal('hide');
      $('body').removeClass('modal-open');
      $('.modal-backdrop').remove();
    }

});
