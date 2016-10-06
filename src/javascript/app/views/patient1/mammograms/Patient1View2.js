var BaseView = require('../../BaseView');
var template = require('templates/patient1/patient1View2.hbs');

module.exports = BaseView.extend({

    className: 'container-fluid',

    template: template,
    ui: {},
    events: {
        'click .continue': 'scrollTop'
    },

    initialize: function() {
      $('.second-step').addClass('active');
      $('.second-step .dot').addClass('active');
    },
    onBeforeRender: function() {},

    onRender: function() {
    },

    onBeforeShow: function() {},

    onShow: function() {},

    onBeforeDestroy: function() {},

    scrollTop: function(){
    	$('body').animate({ scrollTop: '0' }, 400);  $('body,html').animate({ scrollTop: '0' }, 400); 
    },

    onDestroy: function() {
      $('.second-step').addClass('completed');
    }

});
