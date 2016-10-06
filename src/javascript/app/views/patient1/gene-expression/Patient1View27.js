var BaseView = require('../../BaseView');
var template = require('templates/patient1/patient1View27.hbs');

module.exports = BaseView.extend({

    className: 'container-fluid',

    template: template,
    ui: {},
    events: {
        'click .continue': 'scrollTop'
    },

    initialize: function() {

    },
    onBeforeRender: function() {},

    onRender: function() {
    },

    onBeforeShow: function() {},

    onShow: function() {},

    onBeforeDestroy: function() {},

    scrollTop: function(){
    	$('body').animate({ scrollTop: '0' }, 400);  $('body,html').scrollTop(0);
    },

    onDestroy: function() {
      $('#myModal').modal('hide');
      $('body').removeClass('modal-open');
      $('.modal-backdrop').remove();
    }

});
